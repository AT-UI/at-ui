<template>
  <div class="at-message__wrapper" :style="{ top: top ? `${top}px` : 'auto' }">
    <transition name="move-up">
      <div
        class="at-message"
        :class="[
          type ? `at-message--${type}` : ''
        ]"
        v-show="visible">
        <i class="at-message__icon icon" :class="iconClass"></i>
        <span class="at-message__content">{{ message }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: {
      message: String,
      duration: {
        type: Number,
        default: 3000
      },
      type: {
        type: String,
        default: 'info',
        validator: val => ['info', 'success', 'warning', 'error'].indexOf(val) > -1
      },
      icon: String
    },
    data () {
      return {
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
          'success': 'icon-success',
          'error': 'icon-error',
          'warning': 'icon-warning',
          'info': 'icon-info',
          'loading': 'icon-info'
        }
        return classArr[this.icon] || this.icon || classArr[this.type]
      }
    },
    watch: {
      closed (val) {
        if (val) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
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
            if (!this.closed) {
              this.close()
            }
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
