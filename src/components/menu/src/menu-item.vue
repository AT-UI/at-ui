<template>
  <li
    class="at-menu__item"
    :class="[
      this.active ? 'at-menu__item--active' : '',
      this.disabled ? 'at-menu__item-disabled' : ''
    ]"
    @click.stop="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  import Emitter from 'src/mixins/emitter'
  import { findComponentUpward } from 'src/utils/util'

  export default {
    name: 'AtMenuItem',
    mixins: [Emitter],
    props: {
      name: {
        type: [String, Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        active: false
      }
    },
    methods: {
      handleClick () {
        if (this.disabled) return
        const parent = findComponentUpward(this, 'AtSubmenu')

        if (parent) {
          this.dispatch('AtSubmenu', 'on-menu-item-select', this.name)
        } else {
          this.dispatch('AtMenu', 'on-menu-item-select', this.name)
        }
      }
    },
    mounted () {
      this.$on('on-update-active', name => {
        if (this.name === name) {
          this.active = true
          this.dispatch('AtSubmenu', 'on-update-active', true)
        } else {
          this.active = false
        }
      })
    }
  }
</script>

