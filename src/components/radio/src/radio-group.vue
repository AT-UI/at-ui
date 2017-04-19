<template>
  <div class="at-radio-group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from 'src/mixins/emitter'

export default {
  name: 'AtRadioGroup',
  componentName: 'AtRadioGroup',
  props: {
    value: [String, Number],
    size: String,
    fill: {
      type: String,
      default: '#20a0ff'
    },
    textColor: {
      type: String,
      default: '#fff'
    }
  },
  mixins: [Emitter],
  watch: {
    value (value) {
      this.$emit('change', value)
      this.broadcast('AtRadio', 'initData', value)
    }
  },
  mounted () {
    this.broadcast('AtRadio', 'initData', this.value)
  }
}
</script>
