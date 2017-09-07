<template>
  <div class="at-rate">
    <ul class="at-rate__list"
      :class="{'at-rate--disabled': disabled}"
      @mouseover="overRateHandle"
      @mouseleave="leaveRateHandle">
      <li class="at-rate__item"
        v-for="index in count"
        :key="index"
        :class="clacClass(index)">
        <i :class="['at-rate__icon', 'icon', icon]"
          @mousemove="moveStarHandle(index, $event)"
          @click="confirmValue(index)">
          <span :class="[icon, 'icon', 'at-rate__left']" type="half"></span>
        </i>
      </li>
    </ul>
    <div class="at-rate__text" v-if="showText">
      <slot>
        {{ currentValue }}
      </slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AtRate',
  props: {
    count: {
      type: Number,
      default: 5,
      validator: val => val >= 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    value: {
      type: Number,
      default: 0,
      validator: val => val >= 0
    },
    icon: {
      type: String,
      default: 'icon-star'
    }
  },

  data () {
    return {
      currentValue: this.value,
      hoverIndex: -1,
      lastHoverIndex: -1,
      isHoverRate: false,
      isHalf: this.allowHalf
    }
  },

  methods: {
    overRateHandle () {
      if (this.disabled) return

      this.isHoverRate = true
    },

    leaveRateHandle () {
      if (this.disabled) return

      this.isHoverRate = false
      this.hoverIndex = -1
      this.lastHoverIndex = -1
      this.checkIsHalf(this.currentValue)
    },

    moveStarHandle (index, event) {
      if (this.disabled) return

      this.hoverIndex = index

      if (this.allowHalf && event.target.getAttribute('type') === 'half')
        this.isHalf = true
      else
        this.isHalf = false

      // emit hover-change event
      const exactlyHoverIndex = this.isHalf ? index - .5 : index
      if (exactlyHoverIndex !== this.lastHoverIndex)
        this.$emit('on-hover-change', exactlyHoverIndex)

      this.lastHoverIndex = exactlyHoverIndex
    },

    confirmValue (index) {
      if (this.disabled) return

      this.currentValue = this.isHalf ? index - .5 : index
      this.$emit('on-change', this.currentValue)
      this.$emit('input', this.currentValue)
    },

    clacClass (index, event) {
      const classes = {
        [this.icon]: true
      }
      const STAR_ON_CLASS_NAME = 'at-rate__icon--on'
      const STAR_OFF_CLASS_NAME = 'at-rate__icon--off'
      const STAR_HALF_CLASS_NAME = 'at-rate__icon--half'

      const isHalf = this.isHalf
      const isHoverStar = this.hoverIndex !== -1
      const currentIndex = isHoverStar ? this.hoverIndex : this.currentValue
      const lastItemIndex = Math.ceil(currentIndex)

      // 根据变量设置最后的类名
      return {
        [STAR_ON_CLASS_NAME]: isHalf ? index < lastItemIndex : index <= lastItemIndex,
        [STAR_HALF_CLASS_NAME]: (index === lastItemIndex) && isHalf,
        [STAR_OFF_CLASS_NAME]: index > lastItemIndex
      }
    },

    checkIsHalf (val) {
      this.isHalf = this.allowHalf && val.toString().indexOf('.') >= 0
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
      this.$emit('on-change', val)
    },
    currentValue (val) {
      this.checkIsHalf (val)
    }
  }
}
</script>

