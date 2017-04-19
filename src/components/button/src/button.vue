<template>
<button
  class="at-btn"
  :class="[
    type ? 'at-btn--' + type : '',
    size ? 'at-btn--' + size : '',
    hollow ? 'at-btn--' + type + '--hollow' : ''
  ]"
  :style="styleList"
  :disabled="disabled"
  :type="type"
  @click="handleClick"
>
  <i class="at-icon-loading" v-if="loading"></i>
  <i :class="iconClass" v-if="iconClass"></i>
  <slot></slot>
</button>
</template>

<script>
export default {
  name: 'AtButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    style: {
      type: Object
    },
    iconClass: String,
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    hollow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styleList () {
      let userStyle = {}

      if (this.style) {
        userStyle = this.style
      }

      return Object.assign(userStyle, {
        'marginRight': `${this.$parent.gap}px`
      })
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
