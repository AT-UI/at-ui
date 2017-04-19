<template>
  <label class="at-checkbox">
    <span class="at-checkbox__input">
      <span class="at-checkbox__inner"
        :class="{
          'at-checkbox--focus': focus,
          'at-checkbox--checked': isChecked,
          'at-checkbox--disabled': disabled
        }"
      ></span>
      <input type="checkbox"
        class="at-checkbox__original"
        v-model="model"
        :name="name"
        :value="label"
        :disabled="disabled"
        @focus="focus = true"
        @blur="focus = false"
      >
    </span>
    <span class="at-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import Emitter from 'src/mixins/emitter'

export default {
  name: 'AtCheckbox',
  componentName: 'AtCheckbox',
  mixins: [Emitter],
  props: {
    value: {},
    label: {},
    name: String,
    checked: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      focus: false
    }
  },
  computed: {
    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.componentName !== 'AtCheckboxGroup') {
          parent = parent.$parent
        } else {
          this.checkboxGroup = parent
          return true
        }
      }
      return false
    },
    store () {
      return this.checkboxGroup.value
    },
    isChecked () {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      }

      return false
    },
    model: {
      get () {
        return this.isGroup ? this.store : this.value
      },
      set (value) {
        if (this.isGroup) {
          this.dispatch('AtCheckboxGroup', 'input', [value])
        } else {
          this.$emit('input', value)
        }
      }
    }
  },
  methods: {
    addToStore () {
      if (Array.isArray(this.model)) {
        this.model.indexOf(this.label) === -1 && this.model.push(this.label)
      }
    }
  },
  created () {
    this.checked && this.addToStore()
  }
}
</script>
