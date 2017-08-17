<template>
  <div
    class="at-input-number"
    :class="[
      size ? `at-input-number--${size}` : '',
      {
        'at-input-number--disabled': disabled
      }
    ]">
    <!-- S input -->
    <div class="at-input-number__input">
      <input
        type="number"
        class="at-input-number__original"
        :value="currentValue"
        :name="name"
        :disabled="disabled"
        :readonly="readonly"
        :max="max"
        :min="min"
        :autofocus="autofocus"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.up.stop.prevent="increaseNum"
        @keydown.down.stop.prevent="decreaseNum">
    </div>
    <!-- E input -->

    <!-- S handle button -->
    <div class="at-input-number__handler">
      <span
        class="at-input-number__up"
        :class="{
          'at-input-number__up--disabled': upDisabled
        }"
        @click="increaseNum">
        <i class="icon icon-chevron-up"></i>
      </span>
      <span
        class="at-input-number__down"
        :class="{
          'at-input-number__down--disabled': downDisabled
        }"
        @click="decreaseNum">
        <i class="icon icon-chevron-down"></i>
      </span>
    </div>
    <!-- E handle button -->
  </div>
</template>

<script>
import Emitter from 'src/mixins/emitter'

export default {
  name: 'AtInputNumber',
  mixins: [Emitter],
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'normal'
    },
    step: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    readonly: Boolean,
    autofocus: Boolean,
    max: Number,
    min: Number
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (value) {
      value = Number(value)
      if (!this.upDisabled && !this.downDisabled) {
        this.$emit('change', value)
        this.$emit('input', value)
      }
    }
  },
  computed: {
    upDisabled () {
      return this.currentValue + this.step > this.max
    },
    downDisabled () {
      return this.currentValue - this.step < this.min
    }
  },
  methods: {
    handleFocus (evt) {
      this.$emit('focus', evt)
    },
    handleBlur (evt) {
      this.$emit('blur', evt)
    },
    increaseNum () {
      const value = this.currentValue || 0
      if (value >= this.max || this.disabled) return
      this.calculateStep('up')
    },
    decreaseNum () {
      const value = this.currentValue || 0
      if (value <= this.min || this.disabled) return
      this.calculateStep('down')
    },
    calculateStep (type) {
      if (this.disabled) return

      let value = Number(this.currentValue)
      const stepNum = Number(this.step)

      if (type === 'up') {
        value = this.calculateNumber(value, stepNum, '+')
      } else if (type === 'down') {
        value = this.calculateNumber(value, stepNum, '-')
      }

      if (value > this.max || value < this.min) return

      this.currentValue = value
      this.$emit('change', value)
      this.dispatch('AtFormItem', 'on-form-item-change', value)
    },
    calculateNumber (num, stepNum, symbol) {
      let decimal1, decimal2

      try {
        decimal1 = num.toString().split('.')[1].length
      } catch (e) {
        decimal1 = 0
      }

      try {
        decimal2 = stepNum.toString().split('.')[1].length
      } catch (e) {
        decimal2 = 0
      }

      const quantity = Math.pow(10, Math.max(decimal1, decimal2))

      if (symbol === '+') {
        return ((num * quantity) + (stepNum * quantity)) / quantity
      } else if (symbol === '-') {
        return ((num * quantity) - (stepNum * quantity)) / quantity
      }
    }
  }
}
</script>
