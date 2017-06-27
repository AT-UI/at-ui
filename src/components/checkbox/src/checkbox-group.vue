<template>
  <div class="at-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from 'src/mixins/emitter'

export default {
  name: 'AtCheckboxGroup',
  componentName: 'AtCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  watch: {
    value (value) {
      this.$emit('checkbox-group-change', value)
      this.broadcast('AtCheckbox', 'init-data', [value])
    }
  },
  mounted () {
    this.broadcast('AtCheckbox', 'init-data', [this.value])
  }
}
</script>
