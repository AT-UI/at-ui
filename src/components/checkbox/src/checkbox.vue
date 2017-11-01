<template>
  <label
    class="at-checkbox"
    :class="{
      'at-checkbox--focus': focus,
      'at-checkbox--checked': currentValue,
      'at-checkbox--disabled': disabled
    }">
    <span class="at-checkbox__input">
      <span class="at-checkbox__inner"></span>
      <input
        v-if="isGroup"
        type="checkbox"
        class="at-checkbox__original"
        v-model="model"
        :name="name"
        :value="label"
        :disabled="disabled"
        @change="change"
        @focus="focus = true"
        @blur="focus = false">
      <input
        v-else
        type="checkbox"
        class="at-checkbox__original"
        :name="name"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="at-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import { findComponentUpward } from 'src/utils/util'
import Emitter from 'src/mixins/emitter'

export default {
  name: 'AtCheckbox',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      default: false
    },
    label: [String, Number, Boolean],
    name: String,
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      model: [],
      focus: false,
      isGroup: false,
      currentValue: this.value
    }
  },
  watch: {
    value (value) {
      this.updateModel()
    }
  },
  methods: {
    updateModel () {
      this.currentValue = this.value
    },
    change (evt) {
      if (this.disabled) return false

      const checked = evt.target.checked
      this.currentValue = checked

      const value = checked
      this.$emit('input', value)

      if (this.isGroup) {
        this.parent.change(this.model)
      } else {
        this.$emit('on-change', value)
      }
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'AtCheckboxGroup')
    if (this.parent) {
      this.isGroup = true
      this.parent.updateModel()
    } else {
      this.updateModel()
    }

    if (this.checked) {
      this.currentValue = this.checked
    }
  }
}
</script>
