<template>
  <label class="at-radio">
    <span class="at-radio__input">
      <span
        class="at-radio__inner"
        :class="{
          'at-radio--focus': focus,
          'at-radio--checked': store === label,
          'at-radio--disabled': disabled
        }"></span>
      <input
        type="radio"
        class="at-radio__original"
        v-model="store"
        :name="name"
        :value="label"
        :disabled="disabled"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="at-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import Emitter from 'src/mixins/emitter'

export default {
  name: 'AtRadio',
  props: {
    value: [String, Number],
    name: String,
    label: {
      type: [String, Number],
      required: true
    },
    disabled: Boolean
  },
  mixins: [Emitter],
  data () {
    return {
      store: this.value,
      focus: false,
      isGroup: false
    }
  },
  watch: {
    store (store) {
      this.$emit('input', store)

      if (this.isGroup) {
        this.dispatch('AtRadioGroup', 'input', store)
      }
    },
    value (val) {
      this.store = val
    }
  },
  mounted () {
    this.$on('init-data', data => {
      this.store = data
      this.isGroup = true
    })
  }
}
</script>
