<template>
  <div class="at-collapse"
    :class="{
      'at-collapse--simple': simple
    }">
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
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.inputValueCheck(this.value)
    }
  },
  watch: {
    value (val) {
      this.currentValue = this.inputValueCheck(val)
    },
    currentValue () {
      this.setActive()
    }
  },
  methods: {
    setActive () {
      const activeKey = this.getActiveKey()
      const accordion = this.accordion

      this.$children.forEach((item, index) => {
        const name = item.name || index.toString()

        if (accordion) {
          item.isActive = activeKey[0] === name
        } else {
          item.isActive = activeKey.indexOf(name) >= 0
        }

        item.index = index
      })
    },
    getActiveKey () {
      let activeKey = this.currentValue || []

      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey]
      }

      if (this.accordion && activeKey.length > 1) {
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

      if (this.accordion && !itemData.isActive) {
        newActiveKey.push(name)
      } else {
        const activeKey = this.getActiveKey()
        const nameIndex = activeKey.indexOf(name)

        if (itemData.isActive && nameIndex >= 0) {
          activeKey.splice(nameIndex, 1)
        } else if (nameIndex < 0) {
          activeKey.push(name)
        }
        newActiveKey = activeKey
      }

      this.currentValue = newActiveKey
      this.$emit('on-change', this.currentValue)
    },
    inputValueCheck (val) {
      return typeof val === 'number' ? `${val}` : val
    }
  },
  mounted () {
    this.setActive()
  }
}
</script>
