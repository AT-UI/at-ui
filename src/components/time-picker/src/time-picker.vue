<template>
  <div class="at-time-picker"
    :class="rootClass"
    v-clickoutside="handleClose">
    <div class="at-time-picker__input"
      @mouseover="showClearBtnHandle"
      @mouseout="hideClearBtnHandle">
      <input type="text" class="at-time-picker__original"
        :placeholder="placeholderFinal"
        :disabled="disabled"
        :value="curValueString"
        @keyup.enter="inputByTypingHandle"
        @focus="foucsHandle" />
      <i class="at-time-picker__icon icon icon-clock"
        v-if="!isShowClearBtn"></i>
      <i class="at-time-picker__icon icon icon-x at-time-picker__clear"
        v-else
        :title="clearText"
        @click="clearValueHandle"></i>
    </div>
    <transition name="slide-up">
      <div class="at-time-picker__dropdown at-time-picker__dropdown--bottom"
        v-if="isOpen"
        :class="{
          'at-time-picker__dropdown--open': isOpen
        }">
        <div class="at-time-picker__elements">
          <div class="at-time-picker__element at-time-picker__hours"
            ref="hourContainer"
            v-if="elements.hour">
            <ul class="at-time-picker__select">
              <li v-for="item in hours" :key="item"
                v-if="!(hideDisabledOptions && disabledHours.indexOf(item) > -1)"
                :class="{
                  'at-time-picker__option': true,
                  'at-time-picker__option--selected': item === curHour,
                  'at-time-picker__option--disabled': disabledHours.indexOf(item) > -1
                }"
                @click="changeElementOfTime($event, 'hour', item)">
                {{ leadingZero(item) }}
              </li>
            </ul>
          </div>
          <div class="at-time-picker__element at-time-picker__minutes"
            ref="minuteContainer"
            v-if="elements.minute">
            <ul class="at-time-picker__select">
              <li v-for="item in minutes" :key="item"
                v-if="!(hideDisabledOptions && disabledMinutes.indexOf(item) > -1)"
                :class="{
                  'at-time-picker__option': true,
                  'at-time-picker__option--selected': item === curMinute,
                  'at-time-picker__option--disabled': disabledMinutes.indexOf(item) > -1
                }"
                @click="changeElementOfTime($event, 'minute', item)">
                {{ leadingZero(item) }}
              </li>
            </ul>
          </div>
          <div class="at-time-picker__element at-time-picker__seconds"
            ref="secondContainer"
            v-if="elements.second">
            <ul class="at-time-picker__select">
              <li v-for="item in seconds" :key="item"
                v-if="!(hideDisabledOptions && disabledSeconds.indexOf(item) > -1)"
                :class="{
                  'at-time-picker__option': true,
                  'at-time-picker__option--selected': item === curSecond,
                  'at-time-picker__option--disabled': disabledSeconds.indexOf(item) > -1
                }"
                @click="changeElementOfTime($event, 'second', item)">
                {{ leadingZero(item) }}
              </li>
            </ul>
          </div>
        </div>
        <div class="at-time-picker__addon"
          v-if="$slots.default && $slots.default.length">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from 'moment'
import Clickoutside from 'src/directives/clickoutside'
import { scrollTop, capitalizeFirstLetter, getStyle } from 'src/utils/util'
import Locale from 'src/mixins/locale'

export default {
  name: 'AtTimePicker',
  mixins: [Locale],
  directives: { Clickoutside },
  data () {
    return {
      optionHeight: 0,
      hours: this.range('hour', 0, 24, this.steps[0] || 1),
      minutes: this.range('minute', 0, 60, this.steps[1] || 1),
      seconds: this.range('second', 0, 60, this.steps[2] || 1),
      curValue: this.getInitCurVal(),
      isOpen: this.open,
      isShowClearBtn: false,
      defaultPlaceholder: this.t('at.timepicker.placeholder')
    }
  },
  props: {
    value: {
      type: String
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    },
    open: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String
    },
    clearText: {
      type: String,
      default: 'clear'
    },
    disabledHours: {
      type: Array,
      default () {
        return []
      }
    },
    disabledMinutes: {
      type: Array,
      default () {
        return []
      }
    },
    disabledSeconds: {
      type: Array,
      default () {
        return []
      }
    },
    hideDisabledOptions: {
      type: Boolean,
      default: false
    },
    steps: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    placeholderFinal () {
      return this.placeholder || this.defaultPlaceholder
    },
    rootClass () {
      const className = {
        'at-time-picker--small': false,
        'at-time-picker--normal': false,
        'at-time-picker--large': false,
        'at-time-picker--disabled': this.disabled,
        'at-time-picker--open': this.open
      }
      switch (this.size) {
        case 'small':
          className['at-time-picker--small'] = true
          break
        case 'large':
          className['at-time-picker--large'] = true
          break
        default:
          className['at-time-picker--normal'] = true
      }
      return className
    },
    elements () {
      const exampleTime = moment('23:59:59', this.format)
      return {
        hour: exampleTime.hour() !== 0,
        minute: exampleTime.minute() !== 0,
        second: exampleTime.second() !== 0
      }
    },
    curValueString () {
      return moment.isMoment(this.curValue)
        ? this.curValue.format(this.format)
        : ''
    },
    curHour () {
      return moment.isMoment(this.curValue)
        ? this.curValue.hour()
        : this.hours[this.findMiniNotDisabledIndex('hour')]
    },
    curMinute () {
      return moment.isMoment(this.curValue)
        ? this.curValue.minute()
        : this.minutes[this.findMiniNotDisabledIndex('minute')]
    },
    curSecond () {
      return moment.isMoment(this.curValue)
        ? this.curValue.second()
        : this.seconds[this.findMiniNotDisabledIndex('second')]
    },
    formatByTrim () {
      return this.format.trim()
    }
  },
  methods: {
    range (element, start, end, step) {
      const disabledKey = `disabled${capitalizeFirstLetter(element)}s`
      const result = []

      for (let i = start; i < end; i += step) {
        if (!(this.hideDisabledOptions && this[disabledKey].indexOf(i) > -1)) {
          result.push(i)
        }
      }
      return result
    },
    setOptionHeight () {
      if (this.$el) {
        const optionEl = this.$el.querySelector('.at-time-picker__option')
        if (optionEl) {
          this.optionHeight = parseFloat(getStyle(optionEl, 'height'))
        }
      }
    },
    getValIndex (item, val) {
      const optionsKey = `${item}s`
      return this[optionsKey].indexOf(val)
    },
    getInitCurVal () {
      const time = moment(this.value, this.format)
      return time.isValid()
        ? time
        : null
    },
    showClearBtnHandle () {
      if (!this.allowClear || this.disabled) return
      this.isShowClearBtn = this.curValueString !== ''
    },
    hideClearBtnHandle () {
      if (!this.allowClear || this.disabled) return

      this.isShowClearBtn = false
    },
    clearValueHandle () {
      if (!this.allowClear || this.disabled) return

      this.isShowClearBtn = false
      this.curValue = null
      if (this.isOpen) {
        this.allScrollTo(true)
      }
    },
    foucsHandle () {
      if (this.disabled) return

      this.isOpen = true
    },
    handleClose () {
      this.isOpen = false
    },
    leadingZero (number) {
      return `0${number}`.slice(-2)
    },
    findMiniNotDisabledIndex (element) {
      const disabledKey = `disabled${capitalizeFirstLetter(element)}s`
      const optionsKey = `${element}s`

      for (let i = 0; i < this[optionsKey].length; i++) {
        const item = this[optionsKey][i]
        if (this[disabledKey].indexOf(item) === -1) {
          return i
        }
      }
      return 0
    },
    gotoValidatedVal () {
      const validatedTime = {}
      // let isAmend = false
      for (const key in this.elements) {
        if (this.elements[key]) {
          const firstLetterKey = capitalizeFirstLetter(key)
          const curKey = `cur${firstLetterKey}`
          const disabledKey = `disabled${firstLetterKey}s`
          const optionsKey = `${key}s`

          if (this[disabledKey].indexOf(this[curKey]) > -1
            || this[optionsKey].indexOf(this[curKey]) === -1) {
            // isAmend = true
            const ableIndex = this.findMiniNotDisabledIndex(key)
            validatedTime[key] = this[optionsKey][ableIndex]
          }
        }
      }
      return validatedTime
    },
    changeElementOfTime (event, element, val) {
      const disabledKey = `disabled${capitalizeFirstLetter(element)}s`

      if (this.disabled || this[disabledKey].indexOf(val) > -1) return

      this.curValue = moment.isMoment(this.curValue)
        ? moment(this.curValue[element](val), this.format)
        : this.curValue = moment({ [element]: val })

      const amendTime = this.gotoValidatedVal()
      for (const key in amendTime) {
        const amendVal = amendTime[key]
        this.curValue = moment(this.curValue[key](amendVal), this.format)
      }
      // this.scrollTo(element, this.getValIndex(element, val))
      this.allScrollTo(true)
      // 下面这一句为什么不生效，因为 this.curValue 是 moment 对象，而 this.curValueString 是 computed 属性，通过 hour\mintue\second 修改 moment 并不会引起 curValue 的更新监听，进而不会触发 curValOfString 的更新。
      // this.$emit('on-change', this.curValue, this.curValueString)
      this.$emit('on-change', this.curValue, this.curValue.format(this.format))
    },
    inputByTypingHandle (event) {
      if (this.disabled) return

      const val = event.target.value
      const time = moment(val, this.format)
      const isValidTime = time.isValid()

      this.curValue = isValidTime ? time : moment()

      const amendTime = this.gotoValidatedVal()

      for (const key in amendTime) {
        const amendVal = amendTime[key]
        this.curValue = moment(this.curValue[key](amendVal), this.format)
      }
      this.allScrollTo(true)
      this.$emit('on-change', this.curValue, this.curValueString)
    },
    scrollTo (element, index, animation) {
      const containerKey = `${element}Container`
      const from = this.$refs[containerKey].scrollTop
      const to = index * this.optionHeight

      animation
        ? scrollTop(this.$refs[containerKey], from, to)
        : this.$refs[containerKey].scrollTop = to
    },
    allScrollTo (animation) {
      for (const key in this.elements) {
        if (this.elements[key]) {
          const curKey = `cur${capitalizeFirstLetter(key)}`
          this.scrollTo(key, this.getValIndex(key, this[curKey]), animation)
        }
      }
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  },
  watch: {
    value (val) {
      this.curValue = this.getInitCurVal()
      if (this.isOpen) {
        this.allScrollTo(true)
      }
    },
    isOpen (val) {
      if (val) {
        this.$nextTick(() => {
          if (this.optionHeight === 0) {
            this.setOptionHeight()
          }
          this.allScrollTo()
        })
      }
      this.$emit('on-open-change', val)
    },
    open (val) {
      console.log('watch open val:', val)
      this.isOpen = val
    },
    disabled () {
      if (this.disabled) {
        this.isOpen = false
      }
    },
    size () {
      this.setOptionHeight()
    }
  },
  created () {
    if (this.disabled) {
      this.isOpen = false
    }
  },
  mounted () {
    if (!this.disabled && this.isOpen) {
      this.$nextTick(() => {
        if (this.optionHeight === 0) {
          this.setOptionHeight()
        }
        this.allScrollTo()
      })
    }
  }
}
</script>
