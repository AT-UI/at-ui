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
      openNames: {
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
      openNames () {
        this.$emit('on-open-change', this.openNames)
      },
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
        this.broadcast('AtSubmenu', 'on-update-active', false)
        this.broadcast('AtMenuItem', 'on-update-active', this.currentActiveName)
      },
      updateOpenNames (name) {
        const idx = this.openNames.indexOf(name)

        if (name > -1) {
          this.openNames.splice(idx, 1)
        } else {
          this.openNames.push(name)
          if (this.inlineCollapsed) {
            this.openNames.splice(0, this.openNames.length)
            this.openNames.push(name)
          }
        }
      },
      updateOpened () {
        const items = findComponentsDownward(this, 'AtSubmenu')

        if (items.length) {
          items.forEach(item => {
            if (this.openNames.indexOf(item.name) > -1) {
              item.opened = true
            }
          })
        }
      }
    },
    mounted () {
      this.updateActiveName()
      this.updateOpened()
      this.$on('on-menu-item-select', name => {
        this.currentActiveName = name
        this.$emit('on-select', name)
      })
    }
  }
</script>
