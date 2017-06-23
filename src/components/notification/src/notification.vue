<template>
  <transition name="notification-fade">
    <div
      class="at-notification"
      :class="[
        type ? `at-notification--${type}` : '',
        message ? 'at-notification--with-message' : '',
        !showClose ? 'at-notification--hover' : ''
      ]"
      :style="{ top: top ? top + 'px' : 'auto' }"
      v-show="isShow"
      @click="!showClose && handleClose()"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <i class="icon at-notification__icon" :class="iconClass" v-if="showIcon"></i>
      <div class="at-notification__content">
        <p class="at-notification__title" v-if="title" v-text="title"></p>
        <p class="at-notification__message" v-if="message" v-text="message"></p>
      </div>
      <i class="icon icon-x at-notification__close" v-show="showClose" @click="handleClose"></i>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: String,
    message: String,
    isShow: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 4000
    },
    icon: String,
    showIcon: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    onClose: Function,
  },
  data () {
    return {
      top: null,
      timer: null,
      closed: false
    }
  },
  watch: {
    closed (val) {
      if (val) {
        this.isShow = false
        this.$el.addEventListener('animationend', this.destoryElement)
      }
    }
  },
  computed: {
    iconClass () {
      const classArr = {
        'success': 'icon-check-circle',
        'error': 'icon-x-circle',
        'warning': 'icon-alert-circle',
        'info': 'icon-info'
      }
      return classArr[this.type] || this.icon
    }
  },
  methods: {
    destoryElement () {
      this.$el.removeEventListener('animationend', this.destoryElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    handleClose () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.handleClose()
          }
        }, this.duration)
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    }
  },
  mounted () {
    this.startTimer()
  }
}
</script>
