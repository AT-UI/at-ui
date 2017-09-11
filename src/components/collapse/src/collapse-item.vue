<template>
  <div :class="{
      'at-collapse__item': true,
      'at-collapse__item--active': isActive,
      'at-collapse__item--disabled': disabled
    }">
    <div class="at-collapse__header" @click="toggle">
      <i class="at-collapse__icon icon icon-chevron-right"></i>
      <slot name="title" v-if="$slots.title"></slot>
      <div v-if="title">{{ title }}</div>
    </div>
    <collapse-transition>
      <div class="at-collapse__body" v-show="isActive">
        <div class="at-collapse__content">
          <slot></slot>
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script>
import CollapseTransition from '../../../utils/collapse-transition'

export default {
  name: 'AtCollapseItem',

  components: {
    CollapseTransition
  },

  props: {
    title: {
      type: String
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isActive: false,
      index: 0
    }
  },

  methods: {
    toggle () {
      if (this.disabled) return false

      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      })
    }
  }
}
</script>

