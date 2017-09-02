<template>
  <div :class="[
    'at-select',
    {
      'at-select--visible': this.visible,
      'at-select--disabled': this.disabled,
      'at-select--multiple': this.multiple,
      'at-select--single': !this.multiple,
      'at-select--show-clear': this.showCloseIcon,
      [`at-select--${this.size}`]: !!this.size
    }
    ]"
    v-clickoutside="handleClose">
    <!-- S Selection -->
    <div
      class="at-select__selection"
      ref="trigger"
      @click="toggleMenu">
      <span class="at-tag" v-for="(item, index) in selectedMultiple" :key="item">
        <span class="at-tag__text">{{ item.label }}</span>
        <i class="icon icon-x at-tag__close" @click.stop="removeTag(index)"></i>
      </span>
      <span class="at-select__placeholder" v-show="showPlaceholder && !filterable">{{ localePlaceholder }}</span>
      <span class="at-select__selected" v-show="!showPlaceholder && !multiple && !filterable">{{ selectedSingle }}</span>
      <input
        type="text"
        class="at-select__input"
        :placeholder="showPlaceholder ? localePlaceholder : ''"
        v-if="filterable"
        v-model="query"
        @blur="handleBlur"
        @keydown.delete="handleInputDelete"
        ref="input">
      <i class="icon icon-chevron-down at-select__arrow"></i>
      <i class="icon icon-x at-select__clear" v-show="showCloseIcon" @click.stop="clearSingleSelect"></i>
    </div>
    <!-- E Selection -->

    <!-- S Dropdown -->
    <transition name="slide-up" @after-leave="doDestory">
      <div
        class="at-select__dropdown"
        :class="[
          placement ? `at-select__dropdown--${placement}` : 'at-select__dropdown--bottom'
        ]"
        v-show="visible"
        ref="popover">
        <ul v-show="notFound" class="at-select__not-found">
          <li>{{ localeNotFoundText }}</li>
        </ul>
        <ul v-show="!notFound" class="at-select__list" ref="options">
          <slot></slot>
        </ul>
      </div>
    </transition>
    <!-- E Dropdown -->
  </div>
</template>

<script>
import Clickoutside from 'src/directives/clickoutside'
import Emitter from 'src/mixins/emitter'
import PopoverMixin from 'src/mixins/popover'
import Locale from 'src/mixins/locale'
import { findComponentsDownward } from 'src/utils/util'

export default {
  name: 'AtSelect',
  mixins: [Emitter, PopoverMixin, Locale],
  directives: { Clickoutside },
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    trigger: {
      type: String,
      default: 'click'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal',
      validator: val => ['normal', 'small', 'large'].indexOf(val) > -1
    },
    valueWithLabel: {
      type: Boolean,
      default: false
    },
    notFoundText: {
      type: String
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      visible: false,
      options: [],
      optionInstances: [],
      selectedSingle: '',
      selectedMultiple: [],
      focusIndex: 0,
      query: '',
      notFound: false,
      model: this.value
    }
  },
  computed: {
    showPlaceholder () {
      let status = false

      if (this.model === '') {
        status = true
      } else if (Array.isArray(this.model) && !this.model.length) {
        status = true
      }

      return status
    },
    showCloseIcon () {
      return !this.multiple && this.clearable && !this.showPlaceholder
    },
    localePlaceholder () {
      return (typeof this.placeholder === 'undefined') ? this.t('at.select.placeholder') : this.placeholder
    },
    localeNotFoundText () {
      return (typeof this.notFoundText === 'undefined') ? this.t('at.select.notFoundText') : this.notFoundText
    }
  },
  watch: {
    value (val) {
      this.model = val
      if (val === '') {
        this.query = ''
      }
    },
    model () {
      this.$emit('input', this.model)
      this.modelToQuery()

      if (this.multiple) {
        this.updateMultipleSelected()
      } else {
        this.updateSingleSelected()
      }
    },
    visible (val) {
      if (val) {
        if (this.multiple && this.filterable) {
          this.$refs.input.focus()
        } else if (this.filterable) {
          this.$refs.input.select()
        }
      } else {
        if (this.filterable) {
          this.$refs.input.blur()

          setTimeout(() => {
            this.broadcastQuery('')
          }, 300)
        }
        this.broadcast('Dropdown', 'on-destroy-popper')
      }
    },
    query (val) {
      this.broadcast('AtOption', 'on-query-change', val)

      let isHidden = true

      this.$nextTick(() => {
        const options = findComponentsDownward(this, 'AtOption')
        options.forEach(option => {
          if (!option.hidden) {
            isHidden = false
          }
        })
        this.notFound = isHidden
      })

      this.broadcast('Dropdown', 'on-update-popper')
    }
  },
  methods: {
    toggleMenu () {
      if (this.disabled) return
      this.visible = !this.visible
    },
    hideMenu () {
      this.visible = false
      this.focusIndex = 0
      this.broadcast('AtOption', 'on-select-close')
    },
    handleClose () {
      this.hideMenu()
    },
    handleKeydown (evt) {
      if (this.visible) {
        const keyCode = evt.keyCode

        if (keyCode === 27) { // escape
          evt.preventDefault()
          this.hideMenu()
        } else if (keyCode === 40) { // down arrow
          evt.preventDefault()
          this.navigateOptions('next')
        } else if (keyCode === 38) { // up arrow
          evt.preventDefault()
          this.navigateOptions('prev')
        } else if (keyCode === 13) { // enter
          evt.preventDefault()

          let hasFocus = false

          const options = findComponentsDownward(this, 'AtOption')
          options.forEach(option => {
            if (option.isFocus) {
              hasFocus = true
              option.select()
            }
          })

          if (!hasFocus) {
            this.selectFirstOption()
          }
        }
      }
    },
    selectFirstOption () {
      let firstOption

      const options = findComponentsDownward(this, 'AtOption')
      options.forEach(option => {
        if (!firstOption && !option.hidden) {
          firstOption = option
          option.select()
        }
      })
    },
    updateOptions () {
      const options = []
      let index = 1

      const optionsEle = findComponentsDownward(this, 'AtOption')
      optionsEle.forEach(option => {
        options.push({
          value: option.value,
          label: (typeof option.label === 'undefined') ? option.$el.innerHTML : option.label
        })
        option.index = index++

        this.optionInstances.push(option)
      })

      this.options = options

      this.updateSingleSelected(true)
      this.updateMultipleSelected(true)
    },
    updateSingleSelected (init = false) {
      const type = typeof this.model

      if (type === 'string' || type === 'number') {
        for (let i = 0; i < this.options.length; i++) {
          if (this.model === this.options[i].value) {
            this.selectedSingle = this.options[i].label
            break
          }
        }
      }

      this.toggleSingleSelected(this.model, init)
    },
    updateMultipleSelected (init = false) {
      if (this.multiple && Array.isArray(this.model)) {
        const selected = []

        for (let i = 0; i < this.model.length; i++) {
          const model = this.model[i]

          for (let j = 0; j < this.options.length; j++) {
            const option = this.options[j]

            if (model === option.value) {
              selected.push({
                value: option.value,
                label: option.label
              })
            }
          }
        }

        this.selectedMultiple = selected
      }

      this.toggleMultipleSelected(this.model, init)
    },
    clearSingleSelect () {
      if (this.showCloseIcon) {
        const options = findComponentsDownward(this, 'AtOption')
        options.forEach(option => {
          option.selected = false
        })

        this.model = ''

        if (this.filterable) {
          this.query = ''
        }
      }
    },
    removeTag (index) {
      if (this.disabled) return false
      this.model.splice(index, 1)

      if (this.filterable && this.visible) {
        this.$refs.input.focus()
      }

      this.broadcast('Dropdown', 'on-update-popper')
    },
    toggleSingleSelected (value, init = false) {
      if (this.multiple) return

      let label = ''

      const options = findComponentsDownward(this, 'AtOption')
      options.forEach(option => {
        if (option.value === value) {
          option.selected = true
          label = (typeof option.label === 'undefined') ? option.$el.innerHTML : option.label
        } else {
          option.selected = false
        }
      })

      this.hideMenu()

      if (!init) {
        if (this.valueWithLabel) {
          this.$emit('on-change', {
            value,
            label
          })
        } else {
          this.$emit('on-change', value)
        }
      }
    },
    toggleMultipleSelected (values, init = false) {
      if (!this.multiple) return

      const valueLabelArr = []

      for (let i = 0; i < values.length; i++) {
        valueLabelArr.push({
          value: values[i]
        })
      }

      const options = findComponentsDownward(this, 'AtOption')

      options.forEach(option => {
        const index = values.indexOf(option.value)

        if (index > -1) {
          option.selected = true
          valueLabelArr[index].label = (typeof option.label === 'undefined') ? option.$el.innerHTML : option.label
        } else {
          option.selected = false
        }
      })

      if (!init) {
        if (this.valueWithLabel) {
          this.$emit('on-change', valueLabelArr)
        } else {
          this.$emit('on-change', values)
        }
      }
    },
    navigateOptions (direction) {
      if (direction === 'next') {
        const next = this.focusIndex + 1
        this.focusIndex = (this.focusIndex === this.options.length) ? 1 : next
      } else if (direction === 'prev') {
        const prev = this.focusIndex - 1
        this.focusIndex = (this.focusIndex <= 1) ? this.options.length : prev
      }

      let isValid = false
      let hasValidOption = false // avoid infinite loops

      const options = findComponentsDownward(this, 'AtOption')

      options.forEach(option => {
        if (option.index === this.focusIndex) {
          isValid = !option.disabled && !option.hidden

          if (isValid) {
            option.isFocus = true
          }
        } else {
          option.isFocus = false
        }

        if (!option.hidden && !option.disabled) {
          hasValidOption = true
        }
      })

      if (!isValid && hasValidOption) {
        this.navigateOptions(direction)
      }

      this.resetScrollTop()
    },
    resetScrollTop () {
      const index = this.focusIndex - 1
      const bottomOverflowDistance = this.optionInstances[index].$el.getBoundingClientRect().bottom - this.$refs.popover.getBoundingClientRect().bottom

      if (bottomOverflowDistance) {
        this.$refs.popover.scrollTop += bottomOverflowDistance
      }
    },
    handleFocus () {
      this.$refs.input.select()
    },
    handleBlur () {
      setTimeout(() => {
        if (!this.multiple && this.model !== '') {
          const options = findComponentsDownward(this, 'AtOption')
          options.forEach(option => {
            if (option.value === this.model) {
              this.query = (typeof option.label === 'undefined') ? option.searchLabel : option.label
            }
          })
        } else {
          this.query = ''
        }
      }, 300)
    },
    handleInputDelete () {
      if (this.multiple && this.model.length && this.query === '') {
        this.removeTag(this.model.length - 1)
      }
    },
    modelToQuery () {
      if (!this.multiple && this.filterable && typeof this.model !== 'undefined') {
        const options = findComponentsDownward(this, 'AtOption')
        options.forEach(option => {
          if (this.model === option.value) {
            this.query = option.label || option.searchLabel || option.value
          }
        })
      }
    },
    broadcastQuery (val) {
      this.broadcast('AtOption', 'on-query-change', val)
    }
  },
  mounted () {
    this.modelToQuery()
    this.updateOptions()

    document.addEventListener('keydown', this.handleKeydown)

    this.$on('on-select-selected', value => {
      if (this.model === value) {
        this.hideMenu()
      } else if (this.multiple) {
        const index = this.model.indexOf(value)

        if (index > -1) {
          this.removeTag(index)
        } else {
          this.model.push(value)
          this.broadcast('Dropdown', 'on-update-popper')
        }

        if (this.filterable) {
          this.query = ''
          this.$refs.input.focus()
        }
      } else {
        this.model = value

        if (this.filterable) {
          const options = findComponentsDownward(this, 'AtOption')
          options.forEach(option => {
            if (option.value === value) {
              this.query = (typeof option.label === 'undefined') ? option.searchLabel : option.label
            }
          })
        }
      }
    })
  },
  beforeDestory () {
    document.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>
