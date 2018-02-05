<template>
  <li
    class="at-dropdown-menu__item"
    :class="{
      'at-dropdown-menu__item--disabled': disabled,
      'at-dropdown-menu__item--divided': divided
    }"
    @click.stop="handleClick">
    <slot></slot>
  </li>
</template>

<script>
  import Emitter from 'at-ui/src/mixins/emitter'

  export default {
    name: 'AtDropdownItem',
    mixins: [Emitter],
    props: {
      name: {
        type: [String, Number]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      divided: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick (evt) {
        if (this.disabled) return
        this.dispatch('AtDropdown', 'menu-item-click', this.name)
      }
    }
  }
</script>
