<template>
  <div class="at-dropdown" ref="trigger">
    <div class="at-dropdown__trigger"><slot></slot></div>
    <transition name="slide-up" @after-leave="doDestory">
      <div class="at-dropdown__popover" ref="popover" v-show="show">
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import PopoverMixin from 'src/mixins/popover'

  export default {
    name: 'AtDropdown',
    componentName: 'AtDropdown',
    mixins: [PopoverMixin],
    props: {
      trigger: {
        type: String,
        default: 'hover',
        validator: val => ['click', 'hover', 'focus'].indexOf(val) > -1
      },
      placement: {
        type: String,
        default: 'bottom',
        validator: val => ['top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right']
      }
    },
    data () {
      return {
        visible: false
      }
    },
    watch: {
      visible (val) {
        this.show = val
      }
    },
    mounted () {
      this.$on('menu-item-click', this.handleMenuItemClick)
    },
    methods: {
      handleMenuItemClick (name) {
        this.show = false
        this.$emit('command', name)
      }
    }
  }
</script>
