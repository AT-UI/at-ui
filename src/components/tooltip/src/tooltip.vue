<template>
  <div class="at-tooltip">
    <span class="at-tooltip__trigger" ref="trigger">
      <slot></slot>
    </span>

    <transition :name="transition" @after-leave="doDestory">
      <div
        class="at-tooltip__popper"
        :class="[
          placement ? 'at-tooltip--' + placement : 'at-tooltip--top'
        ]"
        v-if="show"
        ref="popover">
        <div class="at-tooltip__arrow"></div>
        <div class="at-tooltip__content">
          <slot name="content"><div v-text="content"></div></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import PopoverMixin from 'src/mixins/popover'

export default {
  name: 'AtTooltip',
  mixins: [PopoverMixin],
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    transition: {
      type: String,
      default: 'fade'
    }
  }
}
</script>
