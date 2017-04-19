<template>
  <div class="at-select__dropdown" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import PopoverMixin from 'src/mixins/popover'

export default {
  name: 'Dropdown',
  props: {
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  mixins: [PopoverMixin],
  data () {
    return {
      popper: null,
      width: ''
    }
  },
  computed: {
    styles () {
      const style = {}
      if (this.width) {
        style.width = `${this.width}px`
      }
      return style
    }
  },
  methods: {
    update () {
      if (this.$parent.$options.name === 'AtSelect') {
        this.width = this.$parent.$el.style.width | 0
      }
    }
  },
  created () {
    this.$on('on-update-popper', this.update)
  }
}
</script>
