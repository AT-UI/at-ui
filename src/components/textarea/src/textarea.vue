<template>
  <div
    class="at-textarea"
    :class="{
      'at-textarea--disabled': disabled,
    }">
    <textarea
      class="at-textarea__original"
      v-model="store"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :style="calculateStyle"
      :readonly="readonly"
      :rows="rows"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :minlength="minlength"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      ref="textarea"
    ></textarea>
  </div>
</template>

<script>
import Emitter from 'src/mixins/emitter'
import { calcTextareaHeight } from './utils'

export default {
  name: 'AtTextarea',
  mixins: [Emitter],
  props: {
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 2
    },
    minlength: Number,
    maxlength: Number,
    autofocus: Boolean,
    autosize: {
      type: Boolean,
      default: false
    },
    minRows: [Number, String],
    maxRows: [Number, String]
  },
  data () {
    return {
      store: this.value,
      calculateStyle: {}
    }
  },
  watch: {
    value (value) {
      this.store = value
    },
    store (value) {
      this.$nextTick(() => {
        this.resizeTextarea()
      })
      this.$emit('input', value)
      this.$emit('change', value)
    }
  },
  methods: {
    handleFocus (evt) {
      this.$emit('focus', evt)
    },
    handleBlur (evt) {
      this.$emit('blur', evt)
    },
    handleInput (evt) {
      this.store = evt.target.value
    },
    resizeTextarea () {
      if (!this.autosize && !this.minRows && !this.maxRows) return

      this.calculateStyle = calcTextareaHeight(this.$refs.textarea, this.minRows, this.maxRows)
    }
  },
  mounted () {
    this.resizeTextarea()
  }
}
</script>
