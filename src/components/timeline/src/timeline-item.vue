<template>
  <div class="at-timeline__item"
    :class="{
      'at-timeline__item--last': isLastItem,
      'at-timeline__item--pending': isPendingItem,
      'at-timeline__item--custom': isCustomHead,
      [`at-timeline__item--${colorName}`]: true
    }">
    <div class="at-timeline__tail"></div>
    <div class="at-timeline__head">
      <slot name="dot"></slot>
    </div>
    <div class="at-timeline__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtTimelineItem',
  props: {
    color: {
      type: String,
      default: 'blue'
    }
  },

  data () {
    return {
      colors: {
        blue: 'default',
        red: 'error',
        green: 'success',
        yellow: 'warning'
      },
      defaultColor: 'blue',
      isLastItem: false,
      isPendingItem: false,
      isCustomHead: false
    }
  },

  methods: {
    checkForLast () {
      const children = this.$parent.$children
      const childCount = children.length
      const pending = this.$parent.pending
      const index = children.indexOf(this)
      const lastItemIndex = pending
        ? (childCount - 2)
        : (childCount - 1)


      this.isLastItem = index === lastItemIndex
        ? true
        : false

      if (pending) {
        this.isPendingItem = index === lastItemIndex + 1
          ? true
          : false
      }
    }
  },

  mounted () {
    this.checkForLast()
    this.isCustomHead = !!this.$slots.dot
  },

  computed: {
    colorName () {
      const colors = this.colors
      const colorkey = this.color
      const color = colors[colorkey] || colors[this.defaultColor]

      return color
    }
  },
  watch: {
    '$parent.pending' () {
      this.checkForLast()
    }
  }
}
</script>

