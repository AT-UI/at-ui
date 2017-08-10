<template>
  <li
    class="at-menu__submenu"
    :class="[
      this.active ? 'at-menu__submenu--active' : '',
      this.isOpen ? 'at-menu__submenu--opened' : '',
      this.disabled ? 'at-menu__submenu--disabled' : ''
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="trigger">
    <div class="at-menu__submenu-title" ref="reference" @click.stop="handleClick">
      <slot name="title"></slot>
      <i class="icon icon-chevron-down at-menu__submenu-icon"></i>
    </div>
    <collapse-transition v-if="mode === 'inline'">
      <ul class="at-menu" v-show="isOpen"><slot></slot></ul>
    </collapse-transition>
    <transition name="slide-up" v-else>
      <div
        class="at-dropdown__popover"
        placement="placementValue"
        :style="dropStyle"
        ref="popover"
        v-show="isOpen">
        <ul class="at-dropdown-menu">
          <slot></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
  import CollapseTransition from 'src/utils/collapse-transition'
  import { getStyle, findComponentUpward } from 'src/utils/util'
  import Emitter from 'src/mixins/emitter'
  import PopoverMixin from 'src/mixins/popover'

  export default {
    name: 'AtSubmenu',
    components: {
      CollapseTransition
    },
    mixins: [Emitter, PopoverMixin],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      opened: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: false,
        isOpen: this.opened,
        dropWidth: getStyle(this.$el, 'width'),
        parentMenu: findComponentUpward(this, 'AtMenu')
      }
    },
    computed: {
      mode () {
        return this.parentMenu.mode
      },
      inlineCollapsed () {
        return this.parentMenu.inlineCollapsed
      },
      dropStyle () {
        return {
          'min-width': this.dropWidth
        }
      },
      placementValue () {
        return this.mode === 'vertical' ? 'right-top' : 'bottom'
      }
    },
    watch: {
      mode (val) {
        if (val !== 'inline') {
          this.isOpen = false
          // this.handleMouseLeave()
        }
      },
      isOpen (val) {
        if (this.mode === 'inline') return
        if (val) {
          this.dropWidth = getStyle(this.$el, 'width')
          this.resetDropdownPosition()
        }
      }
    },
    methods: {
      resetDropdownPosition () {
        const popover = this.$refs.popover
        const trigger = this.$refs.trigger
        const parent = this.$parent
        const name = parent.$options.name

        if (this.mode === 'vertical') {
          popover.style.left = 'initial'
          popover.style.right = `-${trigger.offsetWidth + 4}px`
          popover.style.top = '0'
        } else if (parent && name !== 'AtSubmenu') {
          popover.style.left = '0'
          popover.style.right = 'initial'
          popover.style.top = `${trigger.offsetHeight + 2}px`
        } else {
          popover.style.left = 'initial'
          popover.style.right = `-${trigger.offsetWidth + 4}px`
          popover.style.top = '0'
        }
      },
      handleClick () {
        if (this.disabled || this.mode !== 'inline') return

        const opened = this.isOpen
        if (this.inlineCollapsed) {
          this.parentMenu.$children.forEach(item => {
            if (item.$options.name === 'AtSubmenu') {
              item.isOpen = false
            }
          })
        }
        this.isOpen = !opened
      },
      handleMouseEnter () {
        if (this.disabled || this.mode === 'inline') return

        // handle mousemove event
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isOpen = true
        }, 200)
      },
      handleMouseLeave () {
        if (this.disabled || this.mode === 'inline') return

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isOpen = false
        }, 200)
      }
    },
    mounted () {
      this.$on('on-menu-item-select', name => {
        if (this.mode !== 'inline') {
          this.isOpen = false
        }
        this.dispatch('AtMenu', 'on-menu-item-select', name)
      })
      this.$on('on-update-active', status => {
        this.active = status
      })
    }
  }
</script>
