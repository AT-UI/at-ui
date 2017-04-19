<template>
  <label class="at-radio-button"
    :class="[
      size ? 'at-radio-button--' + size : '',
      { 'at-radio--checked': store === label }
    ]">
    <input type="radio"
      class="at-radio-button__original"
      v-model="store"
      :value="label"
      :name="name"
      :disabled="disabled">
    <span class="at-radio-button__inner"
      :style="store === label ? activeStyle : null">
      <slot></slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'AtRadioButton',
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    name: String,
    disabled: Boolean
  },
  data () {
    return {
      size: this.$parent.size
    }
  },
  computed: {
    store: {
      get () {
        return this.$parent.value
      },
      set (newValue) {
        this.$parent.$emit('input', newValue)
      }
    },
    activeStyle () {
      return {
        backgroundColor: this.$parent.fill,
        borderColor: this.$parent.fill,
        color: this.$parent.textColor
      }
    }
  }
}
</script>
