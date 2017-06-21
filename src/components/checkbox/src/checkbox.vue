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
  componentName: 'AtCheckbox',
  mixins: [Emitter],
  props: {
    value: {},
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
      groupStore: this.value
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
    store: {
      get () {
        return this.isGroup ? this.groupStore : this.value
      },
      set (value) {
        if (this.isGroup) {
          this.dispatch('AtCheckboxGroup', 'input', [value])
        } else {
          this.$emit('input', value)
        }
      }
    }
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
      this.groupStore = data
      this.isGroup = true
    })
  }
}
</script>
