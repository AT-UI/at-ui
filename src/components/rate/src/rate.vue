<template>
  <div class="at-rate">
    <ul class="at-rate__list" @mouseleave="leaveRateHandle">
      <li class="at-rate__item"
        :class="{ 'at-rate__item--disabled': disabled }"
        v-for="index in max" :key="index">
        <i class="at-rate__icon icon"
          :class="clacClass(index)"
          @mousemove="moveStarHandle(index, $event)"
          @mouseleave="leaveStarHandle"
          @click="confirmValue(index)">
          <span :class="[icon, 'icon', 'at-rate__half']" type="half"></span>
        </i>
      </li>
    </ul>
    <span v-if="showText" class="at-rate__text">
      {{ currentValue }}
    </span>
  </div>

</template>

<script>
export default {
  name: 'AtRate',
  props: {
    max: {
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
    lowThreshold: {
      type: Number,
      default: 2,
      validator: val => val >= 0
    },
    highThreshold: {
      type: Number,
      default: 4,
      validator: val => val > 0
    },
    colors: {
      type: Array,
      default () {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
      },
      validator: val => val.length === 3
    },
    voidColor: {
      type: String,
      default: '#C6D1DE',
      validator: val => val.trim().length > 0
    },
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7',
      validator: val => val.trim().length > 0
    },
    iconClasses: {
      type: Array,
      default () {
        return ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']
      },
      validator: val => val.length === 3
    },
    voidIconClass: {
      type: String,
      default: 'el-icon-star-off',
      validator: val => val.trim().length > 0
    },
    disabledVoidIconClass: {
      type: String,
      default: 'el-icon-star-on',
      validator: val => val.trim().length > 0
    },
    showText: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '#1F2D3D',
      validator: val => val.trim().length > 0
    },
    texts: {
      type: Array,
      default () {
        return ['极差', '失望', '一般', '满意', '惊喜']
      },
      validator: val => val.length > 0
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
      isHover: false
    }
  },

  computed: {

  },

  methods: {
    moveStarHandle (index, event) {
      if (this.disabled) return

      this.isHover = true
      this.hoverIndex = index

      if (event.target.type === 'half') {

      }
    },

    confirmValue (index) {
      if (this.disabled) return

      this.currentValue = index
      this.$emit('change', index)
    },

    leaveStarHandle () {
      this.isHover = false
    },

    leaveRateHandle () {
      this.hoverIndex = -1
    },

    clacClass (index, event) {
      const classes = {
        [this.icon]: true
      }
      const STAR_ON_CLASS_NAME = 'at-rate__icon--on'
      const STAR_HALF_CLASS_NAME = 'at-rate__icon--half'

      if (index <= this.hoverIndex) {
        classes[STAR_ON_CLASS_NAME] = true
      } else {
        if (this.hoverIndex === -1) {
          if (index <= this.currentValue) {
            classes[STAR_ON_CLASS_NAME] = true
          }
        }
      }

      return classes
    }
  },

  watch: {
    value (val) {
      this.currentValue = val
      this.$emit('change', val)
    }
  }


}
</script>

