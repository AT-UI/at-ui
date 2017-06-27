<template>
  <div
    class="at-btn-group"
    :class="[
      size ? `at-btn-group--${size}` : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AtButtonGroup',
  props: {
    size: String,
    gap: {
      type: Number,
      default: -1
    }
  }
}
</script>
