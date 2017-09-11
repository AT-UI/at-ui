<template>
  <div class="at-collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AtCollapse',

  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Array, String, Number]
    }
  },

  data () {
    return {
      currentValue: this.inputValueCheck(this.value)
    }
  },

  methods: {
    setActive () {
      const activeKey = this.getActiveKey()
      const accordion = window.accordion

      this.$children.forEach((item, index) => {
        const name = item.name || index.toString()
        let isActive = false

        isActive = accordion
          ? activeKey === name
          : activeKey.indexOf(name) >= 0

        item.isActive = isActive
        item.index = index
      })
    },

    getActiveKey () {
      let activeKey = this.currentValue || []
      const accordion = this.accordion

      if (!Array.isArray(activeKey))
        activeKey = [activeKey]

      if (accordion && activeKey.length > 1) {
        activeKey = [activeKey[0].toString()]
      } else {
        let i = activeKey.length
        while (i--) {
          activeKey[i] = activeKey[i].toString()
        }
      }

      return activeKey
    },

    toggle (itemData) {
      const name = itemData.name.toString()
      let newActiveKey = []

      if (this.accordion) {
        if (!itemData.isActive) {
          newActiveKey.push(name)
        }
      } else {
        let activeKey = this.getActiveKey()
        const nameIndex = activeKey.indexOf(name)

        if (itemData.isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1)
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name)
          }
        }

        newActiveKey = activeKey
      }

      this.currentValue = newActiveKey
      this.$emit('on-change', this.currentValue)
    },
    inputValueCheck (val) {
      return typeof val === 'number'
        ? (val + '')
        : val
    }
  },

  mounted () {
    this.setActive()
  },

  watch: {
    value (val) {
      this.currentValue = this.inputValueCheck(val)
    },
    currentValue () {
      this.setActive()
    }
  }
}
</script>
