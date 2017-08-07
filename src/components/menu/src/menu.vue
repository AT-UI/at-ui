<template>
  <ul
    class="at-menu"
    :class="[
      theme ? `at-menu--${theme}` : '',
      mode ? `at-menu--${mode}` : ''
    ]"
    :style="{
      width: width
    }"><slot></slot></ul>
</template>

<script>
  import Emitter from 'src/mixins/emitter'

  export default {
    name: 'AtMenu',
    mixins: [Emitter],
    props: {
      mode: {
        type: String,
        default: 'inline',
        validator: val => ['inline', 'horizontal', 'vertical'].indexOf(val) > -1
      },
      theme: {
        type: String,
        default: 'light',
        validator: val => ['light', 'dark'].indexOf(val) > -1
      },
      activeKey: [String, Number],
      openKeys: {
        type: Array,
        default () {
          return []
        }
      },
      inlineCollapsed: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '240px'
      }
    },
    data () {
      return {
        currentActiveKey: this.activeKey
      }
    },
    watch: {
      openKeys () {
        this.$emit('on-open-change', this.openKeys)
      },
      activeKey (val) {
        this.currentActiveKey = val
      },
      currentActiveKey () {
        this.updateActiveKey()
      }
    },
    methods: {
      updateActiveKey () {
        if (typeof currentActiveKey === 'undefined') {
          this.currentActiveKey = -1
        }
        this.broadcast('Submenu', 'on-update-active', false)
        this.broadcast('MenuItem', 'on-update-active', this.currentActiveKey)
      },
      updateOpenKeys (key) {
        const idx = this.openKeys.indexOf(key)

        if (key > -1) {
          this.openKeys.splice(idx, 1)
        } else {
          this.openKeys.push(key)
          if (this.inlineCollapsed) {
            this.openKeys.splice(0, this.openKeys.length)
            this.openKeys.push(key)
          }
        }
      },
      updateOpened () {
        const items = this.findChildren('Submenu')

        if (items.length) {
          items.forEach(item => {
            if (this.openKeys.indexOf(item.name) > -1) {
              item.opened = true
            }
          })
        }
      },
      findChildren (componentName) {
        let names = []
        let parent = this.$parent
        let name = this.$parent.$options.name

        if (typeof componentName === 'string') {
          names = [componentName]
        } else {
          names = componentName
        }

        while (parent && (!name || names.indexOf(name) < 0)) {
          parent = parent.$parent
          if (parent) {
            name = parent.$options.name
          }
        }

        return parent
      }
    },
    mounted () {
      this.updateActiveKey()
      this.updateOpened()
      this.$on('on-menu-item-select', key => {
        this.currentActiveKey = key
        this.$emit('on-select', key)
      })
    }
  }
</script>
