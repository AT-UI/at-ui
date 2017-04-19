<template>
  <span class="at-badge"
    :class="[
      status ? 'at-badge--' + status : '',
      { 'at-badge--alone': !$slots.default }
    ]"
  >
    <slot></slot>
    <sup class="at-badge__content"
      v-show="show"
      v-text="content"
      :class="{
        'at-badge--corner': $slots.default,
        'at-badge--dot': dot
      }"
    >
    </sup>
  </span>
</template>

<script>
export default {
  name: 'AtBadge',
  props: {
    value: '',
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
    status: String
  },
  computed: {
    content () {
      if (this.dot) return

      const value = this.value
      const maxNum = this.maxNum

      if (typeof value === 'number' && typeof maxNum === 'number') {
        return maxNum < value ? `${maxNum}+` : value
      }

      return value
    }
  }
}
</script>
