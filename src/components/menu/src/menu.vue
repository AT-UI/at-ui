<template>
  <ul
    class="at-menu"
    :class="[
      theme ? `at-menu--${theme}` : '',
      mode ? `at-menu--${mode}` : ''
    ]"
    :style="ulStyle"><slot></slot></ul>
</template>

<script>
  import Emitter from 'src/mixins/emitter'
  import { findComponentsDownward } from 'src/utils/util'

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
      activeName: [String, Number],
      inlineCollapsed: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '240px'
      },
      router: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentActiveName: this.activeName
      }
    },
    computed: {
      ulStyle () {
        const style = {}

        if (this.mode === 'inline' || this.mode === 'vertical') {
          style.width = this.width
        }

        return style
      }
    },
    watch: {
      activeName (val) {
        this.currentActiveName = val
      },
      currentActiveName () {
        this.updateActiveName()
      }
    },
    methods: {
      updateActiveName () {
        if (typeof this.currentActiveName === 'undefined') {
          this.currentActiveName = -1
        }

        const submenus = findComponentsDownward(this, 'AtSubmenu')

        if (submenus && submenus.length) {
          submenus.forEach(submenu => {
            submenu.$emit('on-update-active', false)
          })
        }
        this.broadcast('AtMenuItem', 'on-update-active', this.currentActiveName)
      },
      routeToMenuItem (item) {
        const route = item.to || {}
        item.replace ? this.$router.replace(route) : this.$router.push(route)
      }
    },
    mounted () {
      this.updateActiveName()
      this.$on('on-menu-item-select', item => {
        this.currentActiveName = item.name
        this.$emit('on-select', item.name)

        if (this.router) {
          this.routeToMenuItem(item)
        }
      })
    }
  }
</script>
