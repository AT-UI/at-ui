<template>
  <label class="at-radio">
    <span class="at-radio__input">
      <span class="at-radio__inner"
        :class="{
          'at-radio--focus': focus,
          'at-radio--checked': store === label,
          'at-radio--disabled': disabled
        }"
      ></span>
      <input type="radio"
        class="at-radio__original"
        v-model="store"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :value="label"
        :disabled="disabled">
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
  componentName: 'AtRadio',
  props: {
    value: [String, Number],
    label: {
      type: [String, Number],
      required: true
    },
    name: String,
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
      if (this.isGroup) {
        this.dispatch('AtRadioGroup', 'input', store)
      } else {
        this.$emit('input', store)
      }
    },
    value (val) {
      this.store = val
    }
  },
  created () {
    this.$on('initData', data => {
      this.store = data
      this.isGroup = true
    })
  }
}
</script>
