<template>
  <transition name="at-notification-fade">
    <div class="at-notification"
      :class="[
        type ? 'at-notification--' + type : '',
        message ? 'at-notification--with-message' : '',
        !showClose ? 'at-notification--hover' : ''
      ]"
      v-show="isShow"
      :style="{ top: top ? top + 'px' : 'auto' }"
      @click="!showClose && close()"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <i class="icon at-notification__icon" :class="iconClass" v-if="showIcon"></i>
      <div class="at-notification__content">
        <p class="at-notification__title" v-if="title" v-text="title"></p>
        <p class="at-notification__message" v-if="message" v-text="message"></p>
      </div>
      <i class="icon icon-cancel at-notification__close" v-show="showClose" @click="close"></i>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      type: 'info',
      title: '',
      message: '',
      isShow: false,
      top: null,
      duration: 4000,
      icon: 'info',
      showIcon: false,
      showClose: true,
      onClose: null,
      timer: null,
      closed: false
    }
  },
  watch: {
    closed (val) {
      if (val) {
        this.isShow = false
        this.$el.addEventListener('transitionend', this.destoryElement)
      }
    }
  },
  computed: {
    iconClass () {
      const classArr = {
        'success': 'icon-success',
        'error': 'icon-error',
        'warning': 'icon-warning',
        'info': 'icon-info'
      }
      return classArr[this.icon] || this.icon
    }
  },
  methods: {
    destoryElement () {
      this.$el.removeEventListener('transitionend', this.destoryElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
    },
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
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
