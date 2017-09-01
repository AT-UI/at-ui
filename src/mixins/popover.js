/**
 * popover mixins
 * https://github.com/yuche/vue-strap/blob/master/src/utils/popoverMixins.js
 */
let $
if (typeof window !== 'undefined') {
  $ = require('../utils/NodeList.js').default
}

export default {
  props: {
    trigger: String,
    title: String,
    content: {
      type: String,
      default: ''
    },
    header: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'top'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: this.value,
      position: {
        top: 0,
        left: 0
      }
    }
  },
  methods: {
    toggle (evt) {
      this.show = !this.show
      this.$emit('toggle', this.show)
      if (!this.show) return

      this.setPopoverPosition()
    },
    showPopover () {
      this.show = true
      this.setPopoverPosition()
    },
    hidePopover () {
      this.show = false
    },
    handleMouseEnter () {
      this.showPopover()
      clearTimeout(this._timer)
    },
    handleMouseLeave () {
      this._timer = setTimeout(() => {
        this.hidePopover()
      }, 200)
    },
    setPopoverPosition () {
      this.$nextTick(() => {
        const popover = this.$refs.popover
        const trigger = this.$refs.trigger

        switch (this.placement) {
          case 'top' :
            this.position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
            this.position.top = trigger.offsetTop - popover.offsetHeight
            break
          case 'top-left':
            this.position.left = trigger.offsetLeft
            this.position.top = trigger.offsetTop - popover.offsetHeight
            break
          case 'top-right':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
            this.position.top = trigger.offsetTop - popover.offsetHeight
            break
          case 'left':
            this.position.left = trigger.offsetLeft - popover.offsetWidth
            this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
            break
          case 'left-top':
            this.position.left = trigger.offsetLeft - popover.offsetWidth
            this.position.top = trigger.offsetTop
            break
          case 'left-bottom':
            this.position.left = trigger.offsetLeft - popover.offsetWidth
            this.position.top = trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
            break
          case 'right':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth
            this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
            break
          case 'right-top':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth
            this.position.top = trigger.offsetTop
            break
          case 'right-bottom':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth
            this.position.top = trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
            break
          case 'bottom':
            this.position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
            this.position.top = trigger.offsetTop + trigger.offsetHeight
            break
          case 'bottom-left':
            this.position.left = trigger.offsetLeft
            this.position.top = trigger.offsetTop + trigger.offsetHeight
            break
          case 'bottom-right':
            this.position.left = trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
            this.position.top = trigger.offsetTop + trigger.offsetHeight
            break
          default:
            // if user set wrong placement, then use default 'top'
            this.position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
            this.position.top = trigger.offsetTop - popover.offsetHeight
            break
        }

        popover.style.top = `${this.position.top}px`
        popover.style.left = `${this.position.left}px`
      })
    },
    doDestory () {
      if (this._trigger) {
        $(this._trigger).off()
      }
    }
  },
  mounted () {
    const trigger = this.$refs.trigger
    // const parent = this.$refs.parent
    // const events = {
    //   hover: 'mouseenter mouseleave',
    //   focus: 'focus blur'
    // }
    // let showEvent = events[this.trigger] || 'click'

    if (!trigger) {
      return console.error('Could not find trigger ref in your component that uses popovermixin')
    }

    this._trigger = trigger

    if (this.trigger === 'click') {
      $(trigger).on('click', this.toggle)
    } else if (this.trigger === 'hover') {
      $(trigger).on('mouseenter', this.handleMouseEnter)
      $(trigger).on('mouseleave', this.handleMouseLeave)
    } else if (this.trigger === 'focus') {
      $(trigger).on('focus', this.showPopover)
      $(trigger).on('blur', this.hidePopover)
    }
  }
}
