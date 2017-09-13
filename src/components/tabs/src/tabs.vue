<template>
  <div class="at-tabs"
    :class="{
      'at-tabs--small': this.size === 'small',
      'at-tabs--card': this.type === 'card'
    }">
    <div class="at-tabs__header">
      <div class="at-tabs__extra" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
      <div class="at-tabs__nav">
        <span class="at-tabs__prev at-tabs__prev--disabled"
          @click="scrollHandle">
          <i class="icon icon-chevron-left"></i>
        </span>
        <span class="at-tabs__next"
          @click="scrollHandle">
          <i class="icon icon-chevron-right"></i>
        </span>
        <div class="at-tabs__nav-wrap">
          <div class="at-tabs__nav-scroll">
            <div class="at-tabs-nav">
              <div class="at-tabs-nav__item"
                :class="{
                  'at-tabs-nav__item--active': index === activeIndex,
                  'at-tabs-nav__item--disabled': item.disabled
                }"
                v-for="(item, index) in navList" :key="index"
                @click="setNavByIndex(index)">
                <i
                  v-if="item.icon"
                  class="at-tabs-nav__icon icon"
                  :class="{
                    [item.icon]: item.icon
                  }">
                </i>{{ item.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="at-tabs__body" :style="tabsBodyTranslateStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtTabs',

  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'line', // card
      validator: val => ['line', 'card'].indexOf(val) > -1
    },
    size: {
      type: String,
      default: 'default',
      validator: val => ['default', 'small'].indexOf(val) > -1
    },
    closable: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      navList: [],
      activeKey: this.value
    }
  },

  computed: {
    activeIndex () {
      const navList = this.navList
      for (var i = 0, len = navList.length; i < len; i++) {
        const item = navList[i]
        if (item.name === this.activeKey) {
          return i
        }
      }

      return 0
    },
    tabsBodyTranslateStyle () {
      const activeIndex = this.activeIndex
      const translateValue = this.animated
        ? `${-activeIndex * 100}%`
        : 0

      return {
        transform: `translate3d(${translateValue}, 0, 0)`
      }
    }
  },

  methods: {
    scrollHandle () {

    },

    getTabs () {
      return this.$children.filter(item => {
        return item.$options.name === 'AtTabPane'
      })
    },

    updateNav () {
      this.navList = []

      this.getTabs().forEach((item, index) => {
        this.navList.push({
          label: item.label,
          name: item.currentName || index,
          disabled: item.disabled,
          icon: item.icon
        })

        if (!item.currentName)
          item.currentName = index

        if (index === 0) {
          if (!this.activeKey) {
            this.activeKey = item.currentName || index
          }
        }

        if (!this.animated) {
          this.switchTabsWithNoAnimated()
        }
      })
    },

    setNavByIndex (index) {
      const currentName = this.navList[index]

      if (!currentName.disabled) {
        this.activeKey = currentName.name

        if (!this.animated) {
          this.switchTabsWithNoAnimated()
        }
      }
    },

    switchTabsWithNoAnimated () {
      const tabs = this.getTabs()

      tabs.forEach(item => {
        item.show = (item.currentName === this.activeKey)
      })
    }
  },
  mounted () {
    this.updateNav()
  },

  watch: {
    activeKey () {
      this.$emit('on-change', {
        index: this.activeIndex,
        key: this.activeKey
      })
    }
  }

}
</script>
