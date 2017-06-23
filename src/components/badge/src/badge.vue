<template>
  <span
    class="at-badge"
    :class="[
      status ? `at-badge--${status}` : '',
      { 'at-badge--alone': !$slots.default }
    ]">
    <slot></slot>
    <sup
      class="at-badge__content"
      :class="{
        'at-badge--corner': $slots.default,
        'at-badge--dot': dot
      }"
      v-show="show"
      v-text="content"></sup>
  </span>
</template>

<script>
export default {
  name: 'AtBadge',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    maxNum: {
      type: Number,
      default: 99
    },
    dot: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: true
    },
    status: {
      type: String,
      default: 'error'
    }
  },
  computed: {
    content () {
      if (this.dot) return

      const value = this.value
      const maxNum = this.maxNum

      if (typeof value === 'number' && typeof maxNum === 'number') {
        return value > maxNum ? `${maxNum}+` : value
      }

      return value
    }
  }
}
</script>
