<template>
  <div class="at-tabs__pane" v-show="show">
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
    closable: {
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
      return this.closable ? this.$parent.closable : false
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
