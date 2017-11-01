<template>
  <button
    class="at-btn"
    :class="[
      type ? `at-btn--${type}` : '',
      size ? `at-btn--${size}` : '',
      $parent && $parent.size ? `at-btn--${$parent.size}` : '',
      hollow ? `at-btn--${type}--hollow` : '',
      circle && !$slots.default ? 'at-btn--circle' : ''
    ]"
    :style="styleList"
    :disabled="disabled"
    :type="nativeType"
    @click="handleClick"
  >
    <i class="at-btn__loading icon icon-loader" v-if="loading"></i>
    <i class="at-btn__icon icon" :class="icon" v-if="icon"></i>
    <span class="at-btn__text" v-if="$slots.default"><slot></slot></span>
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
    nativeType: {
      type: String,
      default: 'button'
    },
    size: String,
    icon: String,
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
    },
    circle: {
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
