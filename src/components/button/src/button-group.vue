<template>
  <div class="at-btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AtButtonGroup',
  props: {
    gap: {
      type: Number,
      default: -1
    }
  }
}
</script>
