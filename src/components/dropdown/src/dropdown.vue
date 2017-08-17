<template>
  <div class="at-dropdown" v-clickoutside="handleClose" ref="trigger">
    <div class="at-dropdown__trigger"><slot></slot></div>

    <transition name="slide-up" @after-leave="doDestory">
      <div class="at-dropdown__popover" ref="popover" v-show="show">
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  import Clickoutside from 'src/directives/clickoutside'
  import PopoverMixin from 'src/mixins/popover'

  export default {
    name: 'AtDropdown',
    directives: { Clickoutside },
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
        validator: val => ['top', 'top-left', 'top-right', 'left', 'left-top', 'left-bottom', 'right', 'right-top', 'right-bottom', 'bottom', 'bottom-left', 'bottom-right'].indexOf(val) > -1
      }
    },
    mounted () {
      this.$on('menu-item-click', this.handleMenuItemClick)
    },
    methods: {
      handleClose () {
        this.show = false
      },
      handleMenuItemClick (name) {
        this.show = false
        this.$emit('on-dropdown-command', name)
      }
    }
  }
</script>
