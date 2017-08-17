<template>
  <div :class="[
    'at-form-item',
    {
      ['at-form-item--required']: this.required || this.isRequired,
      ['at-form-item--error']: this.validateState === 'error',
      ['at-form-item--validating']: this.validateState === 'validating'
    }
  ]">
    <label class="at-form-item__label" :style="labelStyles" v-if="label">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="at-form-item__content" :style="contentStyles">
      <slot></slot>
      <transition name="fade">
        <div class="at-form-item__error-tip"
          v-if="validateState === 'error' && showMessage && form.showMessage">
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import AsyncValidator from 'async-validator'
  import Emitter from 'src/mixins/emitter'

  function getPropByPath (obj, path) {
    let tmpObj = obj
    path = path.replace(/\[(\w+)\]/g, '.$1')
    path = path.replace(/^\./, '')

    const keyArr = path.split('.')
    let i = 0

    for (let len = keyArr.length; i < len - 1; i++) {
      const key = keyArr[i]
      if (key in tmpObj) {
        tmpObj = tmpObj[key]
      } else {
        throw new Error('Please transfer a valid prop path to form item')
      }
    }

    return {
      o: tmpObj,
      k: keyArr[i],
      v: tmpObj[keyArr[i]]
    }
  }

  export default {
    name: 'AtFormItem',
    mixins: [Emitter],
    props: {
      label: {
        type: String,
        default: ''
      },
      labelWidth: Number,
      prop: String,
      required: {
        type: Boolean,
        default: false
      },
      rules: {
        type: [Object, Array]
      },
      error: String,
      validateStatus: Boolean,
      showMessage: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        isRequired: false,
        validateState: '',
        validateMessage: '',
        validateDisabled: false,
        validator: {}
      }
    },
    watch: {
      error (val) {
        this.validateMessage = val
        this.validateState = 'error'
      },
      validateStatus (val) {
        this.validateState = val
      }
    },
    computed: {
      form () {
        let parent = this.$parent
        while (parent.$options.name !== 'AtForm') {
          parent = parent.$parent
        }
        return parent
      },
      fieldValue: {
        cache: false,
        get () {
          const model = this.form.model
          if (!model || !this.prop) return

          let path = this.prop
          if (path.indexOf(':') !== -1) {
            path = path.replace(/:/, '.')
          }

          return getPropByPath(model, path).v
        }
      },
      labelStyles () {
        const style = {}
        const labelWidth = this.labelWidth || this.form.labelWidth

        if (labelWidth) {
          style.width = `${labelWidth}px`
        }
        return style
      },
      contentStyles () {
        const style = {}
        const labelWidth = this.labelWidth || this.form.labelWidth

        if (labelWidth) {
          style.marginLeft = `${labelWidth}px`
        }

        return style
      }
    },
    methods: {
      getRules () {
        let formRules = this.form.rules
        const selfRules = this.rules

        formRules = formRules ? formRules[this.prop] : []

        return [].concat(selfRules || formRules || [])
      },
      getFilteredRule (trigger) {
        const rules = this.getRules()
        return rules.filter(rule => !rule.trigger || (rule.trigger.indexOf(trigger) !== -1))
      },
      validate (trigger, callback = function () {}) {
        const rules = this.getFilteredRule(trigger)

        if (!rules || rules.length === 0) {
          callback()
          return true
        }

        this.validateState = 'validating'

        const descriptor = {}
        descriptor[this.prop] = rules

        const validator = new AsyncValidator(descriptor)
        const model = {}

        model[this.prop] = this.fieldValue

        validator.validate(model, { firstFields: true }, errors => {
          this.validateState = errors ? 'error' : 'success'
          this.validateMessage = errors ? errors[0].message : ''
          callback(this.validateMessage)
        })
      },
      resetField () {
        this.validateState = ''
        this.validateMessage = ''

        const model = this.form.model
        const value = this.fieldValue
        let path = this.prop
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.')
        }

        const prop = getPropByPath(model, path)

        if (Array.isArray(value) && value.length > 0) {
          this.validateDisabled = true
          prop.o[prop.k] = []
        } else if (value !== this.initialValue) {
          this.validateDisabled = true
          prop.o[prop.k] = this.initialValue
        }
      },
      onFieldBlur () {
        this.validate('blur')
      },
      onFieldChange () {
        if (this.validateDisabled) {
          this.validateDisabled = false
          return
        }

        this.validate('change')
      }
    },
    mounted () {
      if (this.prop) {
        this.dispatch('AtForm', 'on-form-item-add', this)

        Object.defineProperty(this, 'initialValue', {
          value: this.fieldValue
        })

        const rules = this.getRules()

        if (rules.length) {
          rules.every(rule => {
            if (rule.required) {
              this.isRequired = true
              return false
            }
            return true
          })
          this.$on('on-form-item-blur', this.onFieldBlur)
          this.$on('on-form-item-change', this.onFieldChange)
        }
      }
    },
    beforeDestroy () {
      this.dispatch('AtForm', 'on-form-item-remove', this)
    }
  }
</script>
