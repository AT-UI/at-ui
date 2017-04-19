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
    value: {}
  },
  watch: {
    value (value) {
      this.$emit('change', value)
    }
  }
}
</script>
