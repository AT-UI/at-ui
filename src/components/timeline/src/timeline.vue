<template>
  <div class="at-timeline"
    :class="{
      'at-timeline--pending': pending
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AtTimeline',
  props: {
    pending: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    pending () {
      this.$children.forEach(child => {
        child.checkForLast()
      })
    }
  }
}
</script>
