<template>
  <div class="at-input-number"
    :class="[
      size ? 'at-input-number--' + size : '',
      {
        'at-input-number--disabled': disabled
      }
    ]"
  >
    <!-- S input -->
    <div class="at-input-number__input">
      <input type="number" class="at-input-number__original"
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
        @keydown.down.stop.prevent="decreaseNum"
      >
    </div>
    <!-- E input -->

    <!-- S handle button -->
    <div class="at-input-number__handler">
      <span class="at-input-number__up"
        :class="{
          'at-input-number__up--disabled': upDisabled
        }"
        @click="increaseNum"
      ><i class="icon icon-down-arrow"></i></span>
      <span class="at-input-number__down"
        :class="{
          'at-input-number__down--disabled': downDisabled
        }"
        @click="decreaseNum"
      ><i class="icon icon-down-arrow"></i></span>
    </div>
    <!-- E handle button -->
  </div>
</template>

<script>
export default {
  name: 'AtInputNumber',
  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: String,
    step: {
      type: [Number, String],
      default: 1
    },
    readonly: Boolean,
    autofocus: Boolean,
    size: String,
    max: Number,
    min: Number
  },
  data () {
    return {
      currentValue: this.value,
      upDisabled: false,
      downDisabled: false
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
      return this.currentValue + this.step >= this.max
    },
    downDisabled () {
      return this.currentValue - this.step <= this.min
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
      this.calcStep('up')
    },
    decreaseNum () {
      const value = this.currentValue || 0
      if (value <= this.min || this.disabled) return
      this.calcStep('down')
    },
    calcStep (type) {
      if (this.disabled) return

      let value = Number(this.currentValue)
      const stepNum = Number(this.step)

      if (type === 'up') {
        value = this._calcNum(value, stepNum, '+')
      } else if (type === 'down') {
        value = this._calcNum(value, stepNum, '-')
      }

      if (value > this.max || value < this.min) return

      this.currentValue = value
      this.$emit('change', value)
    },
    _calcNum (num1, num2, symb) {
      let sq1, sq2

      try {
        sq1 = num1.toString().split('.')[1].length
      } catch (e) {
        sq1 = 0
      }

      try {
        sq2 = num2.toString().split('.')[1].length
      } catch (e) {
        sq2 = 0
      }

      const mp = Math.pow(10, Math.max(sq1, sq2))

      if (symb === '+') {
        return ((num1 * mp) + (num2 * mp)) / mp
      } else if (symb === '-') {
        return ((num1 * mp) - (num2 * mp)) / mp
      }
    }
  }
}
</script>
