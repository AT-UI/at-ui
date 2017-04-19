<template>
<span
  class="at-tag"
  :class="[
    type ? 'at-tag--' + type : ''
  ]"
  :style="style"
>
  <slot></slot>
  <i class="icon icon-cancel at-tag__close" v-if="closable" @click="closeAction"></i>
</span>
</template>

<script>
export default {
  name: 'AtTag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: false
    },
    style: {
      type: String,
      default: ''
    }
  },
  methods: {
    closeAction (evt) {
      this.$emit('close', evt)
    }
  }
}
</script>
