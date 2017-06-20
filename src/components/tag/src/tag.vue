<template>
  <transition name="fade">
    <span
      class="at-tag"
      :class="[
        colorClass
      ]"
      :style="colorStyle"
    >
      <span class="at-tag__text"><slot></slot></span>
      <i class="icon icon-x at-tag__close" v-if="closable" @click="closeAction"></i>
    </span>
  </transition>
</template>

<script>
const colorArr = ['default', 'primary', 'success', 'error', 'warning', 'info']

export default {
  name: 'AtTag',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorClass () {
      return colorArr.indexOf(this.color) > -1 ? `at-tag--${this.color}` : ''
    },
    colorStyle () {
      if (colorArr.indexOf(this.color) > -1) return ''
      return {
        borderColor: this.color,
        backgroundColor: this.color
      }
    }
  },
  methods: {
    closeAction (evt) {
      this.$emit('on-close', evt)
    }
  }
}
</script>
