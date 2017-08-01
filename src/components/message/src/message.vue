<template>
  <div
    class="at-message__wrapper"
    :style="{
      top: top ? `${top}px` : 'auto'
    }">
    <transition name="move-up" @after-leave="doDestory">
      <div
        class="at-message"
        :class="{
          [`at-message--${type}`]: type
        }"
        v-show="visible">
        <i class="icon at-message__icon" :class="iconClass"></i>
        <span class="at-message__content">{{ message }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '',
        duration: 3000,
        type: 'info',
        icon: '',
        visible: false,
        timer: null,
        closed: false,
        onClose: null,
        top: null
      }
    },
    computed: {
      iconClass () {
        const classArr = {
          'success': 'icon-check-circle',
          'error': 'icon-x-circle',
          'warning': 'icon-alert-circle',
          'info': 'icon-info',
          'loading': 'icon-loader'
        }

        return this.icon || classArr[this.type]
      }
    },
    watch: {
      closed (val) {
        if (val) {
          this.visible = false
        }
      }
    },
    methods: {
      doDestory () {
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },
      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },
      startTimer () {
        if (this.duration) {
          this.timer = setTimeout(() => {
            !this.closed && this.close()
          }, this.duration)
        }
      },
      clearTimer () {
        this.timer && clearTimeout(this.timer)
      }
    },
    mounted () {
      this.startTimer()
    }
  }
</script>
