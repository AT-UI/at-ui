<template>
  <div class="at-input" :class="[
    size ? 'at-input--' + size : '',
    status ? 'at-input--' + status : '',
    {
      'at-input-group': $slots.prepend || $slots.append,
      'at-input--disabled': disabled,
      'at-input--prepend': $slots.prepend,
      'at-input--append': $slots.append,
      'at-input--icon': icon
    }
  ]">
    <!-- S prepend element -->
    <div class="at-input-group__prepend" :class="{'at-input-group--button': button}" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <!-- E prepend element -->

    <!-- S input -->
    <input class="at-input__original"
      :type="type"
      :name="name"
      :style="style"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :value="currentValue"
      :max="max"
      :min="min"
      :autofocus="autofocus"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    >
    <!-- E input -->

    <!-- S icon -->
    <i class="at-input__icon icon" :class="iconClass" v-if="icon"></i>
    <!-- E icon -->

    <!-- S append element -->
    <div class="at-input-group__append" :class="{'at-input-group--button': button}" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
    <!-- E append element -->
  </div>
</template>

<script>
  import Emitter from 'src/mixins/emitter'

  export default {
    name: 'AtInput',
    componentName: 'AtInput',
    mixins: [Emitter],
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: [String, Number],
      name: String,
      placeholder: String,
      size: String,
      status: String,
      button: Boolean,
      readonly: Boolean,
      icon: String,
      disabled: Boolean,
      maxlength: Number,
      minlength: Number,
      max: Number,
      min: Number,
      autofocus: Boolean,
      validateEvent: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      iconClass () {
        const name = this.icon || this.status
        return name ? `icon-${name}` : ''
      }
    },
    data () {
      return {
        style: {},
        currentValue: this.value
      }
    },
    watch: {
      value (val) {
        this.setCurrentValue(val)
      }
    },
    methods: {
      handleFocus (evt) {
        this.$emit('on-focus', evt)
      },
      handleBlur (evt) {
        this.$emit('on-blur', evt)
        if (this.validateEvent) {
          this.dispatch('AtFormItem', 'on-form-item-blur', this.currentValue)
        }
      },
      handleInput (evt) {
        const value = evt.target.value
        this.$emit('input', value)
        this.$emit('change', value)
      },
      setCurrentValue (val) {
        if (val === this.currentValue) return
        this.currentValue = val
        if (this.validateEvent) {
          this.dispatch('AtForm', 'on-form-item-change', val)
        }
      }
    }
  }
</script>
