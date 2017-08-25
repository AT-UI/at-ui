<template>
  <label
  class="at-checkbox"
  :class="{
    'at-checkbox--focus': focus,
    'at-checkbox--checked': isChecked,
    'at-checkbox--disabled': disabled
  }">
    <span class="at-checkbox__input">
      <span class="at-checkbox__inner"></span>
      <input
        type="checkbox"
        class="at-checkbox__original"
        v-model="store"
        :name="name"
        :value="label"
        :disabled="disabled"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="at-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script>
import Emitter from 'src/mixins/emitter'

export default {
  name: 'AtCheckbox',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean, Array],
      default: false
    },
    label: [String, Number],
    name: String,
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      focus: false,
      isGroup: false,
      store: this.value
    }
  },
  computed: {
    isChecked () {
      if ({}.toString.call(this.store) === '[object Boolean]') {
        return this.store
      } else if (Array.isArray(this.store)) {
        return this.store.indexOf(this.label) > -1
      }
      return false
    },
  },
  watch: {
    value (value) {
      this.store = value
    },
    store (value) {
      this.$emit('input', value)
      this.$emit('on-change', value)

      if (this.isGroup) {
        this.dispatch('AtCheckboxGroup', 'on-change', [value])
      }
    },
  },
  methods: {
    addToStore () {
      if (Array.isArray(this.store)) {
        this.store.indexOf(this.label) === -1 && this.store.push(this.label)
      }
    }
  },
  mounted () {
    this.checked && this.addToStore()
    this.$on('init-data', data => {
      this.store = data
      this.isGroup = true
    })
  }
}
</script>
