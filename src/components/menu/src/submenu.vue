<template>
  <li
    class="at-menu__submenu"
    :class="[
      this.active ? 'at-menu__submenu--active' : '',
      this.opened ? 'at-menu__submenu--opened' : '',
      this.disabled ? 'at-menu__submenu--disabled' : ''
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <div class="at-menu__submenu-title" ref="reference" @click="handleClick">
      <slot name="title"></slot>
      <i class="icon icon-chevron-down at-menu__submenu-icon"></i>
    </div>
    <collapse-transition v-if="mode === 'inline'">
      <ul class="at-menu" v-show="opened"><slot></slot></ul>
    </collapse-transition>
    <transition name="slide-up" v-else>
      <Dropdown
        v-show="opened"
        placement="bottom"
        ref="dropdown"
        style="{
          min-width: `${dropWidth}px`
        }"
        >
        <ul class="at-menu__dropdown"><slot></slot></ul>
      </Dropdown>
    </transition>
  </li>
</template>

<script>
  import CollapseTransition from 'src/utils/collapse-transition'
  import { getStyle, findComponentUpward } from 'src/utils/util'
  import Emitter from 'src/mixins/emitter'

  export default {
    name: 'AtSubmenu',
    components: {
      CollapseTransition
    },
    mixins: [Emitter],
    props: {
      name: {
        type: [String, Number],
        require: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: false,
        opened: false,
        dropWidth: getStyle(this.$el, 'width') | 0,
        parentMenu: findComponentUpward(this, 'AtMenu')
      }
    },
    computed: {
      mode () {
        return this.parentMenu.mode
      },
      inlineCollapsed () {
        return this.parentMenu.inlineCollapsed
      }
    },
    watch: {
      mode (val) {
        if (val === 'horizontal') {
          this.$refs.dropdown.update()
        }
      },
      opened (val) {
        if (this.mode === 'inline') return
        if (val) {
          this.dropWidth = getStyle(this.$el, 'width') | 0
          this.$refs.dropdown.update()
        } else {
          this.$refs.dropdown.destroy()
        }
      }
    },
    methods: {
      handleClick () {
        if (this.disabled || this.mode !== 'inline' ) return

        const opened = this.opened
        if (this.inlineCollapsed) {
          this.parentMenu.$children.forEach(item => {
            if (item.$options.name === 'AtSubmenu') {
              item.opened = false
            }
          })
        }
        this.opened = !opened
        this.parentMenu.updateOpenKeys(this.name)
      },
      handleMouseEnter () {
        if (this.disabled || this.mode === 'inline') return
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.parentMenu.updateOpenKeys(this.name)
          this.opened = true
        }, 300)
      },
      handleMouseLeave () {
        if (this.disabled || this.mode === 'inline') return
        clearTimeout(this.timeout)
        this.timeout = setTimeout(function () {
          this.parentMenu.updateOpenKeys(this.name)
          this.opened = false
        }, 300)
      }
    },
    mounted () {
      this.$on('on-menu-item-select', name => {
        if (this.mode !== 'inline') {
          this.opened = false
        }
        this.dispatch('AtMenu', 'on-menu-item-select', name)
      })
      this.$on('on-update-active', status => {
        this.active = status
      })
    }
  }
</script>
