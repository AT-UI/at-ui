<template>
  <div class="at-slider">
    <!-- S InputNumber -->
    <at-input-number
      class="at-slider__input"
      v-model="inputValue"
      v-show="false"
      :step="step"
      :disabled="disabled"
      :min="min"
      :max="max"
      @keyup.native="onInputChange"
    ></at-input-number>
    <!-- E InputNumber -->

    <!-- S slider track -->
    <div
      class="at-slider__track"
      :class="{
        'at-slider--disabled': disabled
      }"
      @click="onSliderClick"
      ref="slider">
      <div class="at-slider__bar" :style="{ 'width': currentPosition }"></div>

      <!-- S tooltip and dot -->
      <div
        class="at-slider__dot-wrapper"
        :class="{
          'at-slider__dot-wrapper--hover': isHover,
          'at-slider__dot-wrapper--drag': isDrag
        }"
        :style="{ 'left': currentPosition }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        @mousedown="handleMouseDown">
        <at-tooltip placement="top" trigger="click" content="Top value" ref="tooltip">
          <div
            class="at-slider__dot"
            :class="{
              'at-slider__dot--hover': isHover,
              'at-slider__dot--drag': isDrag
            }"></div>
          <span slot="content">{{ value }}</span>
        </at-tooltip>
      </div>
      <!-- E tooltip and dot -->
    </div>
    <!-- E slider track -->
  </div>
</template>

<script>
import AtTooltip from 'components/tooltip'
import AtInputNumber from 'components/input-number'
import { getStyle } from 'src/utils/util'

export default {
  name: 'AtSlider',
  components: {
    AtInputNumber,
    AtTooltip
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      inputValue: null,
      isHover: false,
      isDrag: false,
      startX: 0,
      currentX: 0,
      oldValue: this.value,
      startPos: 0,
      newPos: null,
      currentPosition: `${(this.value - this.min) * 100 / (this.max - this.min)}%`
    }
  },
  watch: {
    inputValue (val) {
      this.$emit('input', Number(val))
    },
    value (val) {
      if (typeof val !== 'number' || isNaN(val) || val < this.min) {
        this.$emit('input', this.min)
        return
      }

      if (val > this.max) {
        this.$emit('input', this.max)
        return
      }

      this.inputValue = val
      this.setPosition((val - this.min) * 100 / (this.max - this.min))
    }
  },
  computed: {
    sliderWidth () {
      return parseInt(getStyle(this.$refs.slider, 'width'))
    }
  },
  methods: {
    handleMouseEnter () {
      clearTimeout(this._timer)
      this.isHover = true
      this.$refs.tooltip.showPopover()
    },
    handleMouseLeave () {
      if (this.isDrag) return
      this.isHover = false
      this._timer = setTimeout(() => {
        this.$refs.tooltip.show = false
      }, 200)
    },
    handleMouseDown (evt) {
      if (this.disabled) return
      this.onDragStart(evt)

      window.addEventListener('mousemove', this.onDragging)
      window.addEventListener('mouseup', this.onDragEnd)
    },
    onDragStart (evt) {
      this.isDrag = true
      this.startX = evt.clientX
      this.startPos = parseInt(this.currentPosition)
    },
    onDragging (evt) {
      if (this.isDrag) {
        let diff = 0

        this.$refs.tooltip.showPopover()
        this.currentX = evt.clientX
        diff = (this.currentX - this.startX) * 100 / this.sliderWidth
        this.newPos = this.startPos + diff
        this.setPosition(this.newPos)
      }
    },
    onDragEnd () {
      if (this.isDrag) {
        this.$refs.tooltip.show = false
        this.isDrag = false
        this.setPosition(this.newPos)

        window.removeEventListener('mousemove', this.onDragging)
        window.removeEventListener('mouseup', this.onDragEnd)
      }
    },
    setPosition (pos) {
      if (pos < 0) {
        pos = 0
      } else if (pos > 100) {
        pos = 100
      }

      const lengthPerStep = 100 / ((this.max - this.min) / this.step)
      const steps = Math.round(pos / lengthPerStep)
      let value = (steps * lengthPerStep * (this.max - this.min) * 0.01) + this.min

      value = parseFloat(value.toFixed(0))

      this.$emit('input', value)
      this.currentPosition = `${(this.value - this.min) * 100 / (this.max - this.min)}%`

      if (!this.isDrag && this.value !== this.oldValue) {
        this.$emit('change', this.value)
        this.oldValue = this.value
      }
    },
    onSliderClick (evt) {
      if (this.disabled || this.isDrag) return
      const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left
      this.setPosition((evt.clientX - sliderOffsetLeft) / this.sliderWidth * 100)
    },
    onInputChange () {
      if (this.value === '') return
      if (!isNaN(this.value)) {
        this.setPosition((this.value - this.min) * 100 / (this.max - this.min))
      }
    }
  },
  created () {
    if (typeof this.value !== 'number' || isNaN(this.value) || this.value < this.min) {
      this.$emit('input', this.min)
    } else if (this.value > this.max) {
      this.$emit('input', this.max)
    }

    this.inputValue = this.inputValue || this.value
  }
}
</script>
