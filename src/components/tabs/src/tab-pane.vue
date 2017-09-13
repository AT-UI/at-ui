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
    closable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      currentName: this.name,
      show: true
    }
  },

  computed: {

  },

  methods: {

  },

  watch: {
    name () {
      this.currentName = this.name
    }
  }
}
</script>

