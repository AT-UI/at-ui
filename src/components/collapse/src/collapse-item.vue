<template>
  <div class="at-collapse__item"
    :class="{
      'at-collapse__item--active': isActive,
      'at-collapse__item--disabled': disabled
    }">
    <div class="at-collapse__header" @click="toggle">
      <i class="icon at-collapse__icon icon-chevron-right"></i>
      <slot name="title" v-if="$slots.title"></slot>
      <div v-else>{{ title }}</div>
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
import CollapseTransition from 'at-ui/src/utils/collapse-transition'

export default {
  name: 'AtCollapseItem',
  components: {
    CollapseTransition
  },
  props: {
    title: {
      type: String,
      default: ''
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
      index: 0,
      isActive: false
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

