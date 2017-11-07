<template>
  <div class="at-tab__pane" v-show="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AtTabPane',

  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    unclosable: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      currentName: this.name,
      show: true
    }
  },

  computed: {
    isClosable () {
      return this.unclosable
        ? false
        : this.$parent.closable
    }
  },

  watch: {
    name () {
      this.currentName = this.name
    }
  },

  mounted () {
    this.$parent.updateNav()
  }
}
</script>
