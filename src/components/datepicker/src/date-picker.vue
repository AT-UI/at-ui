<template>
  <div class="at-date-picker"
    :class="{
      'at-date-picker-range': !this.isNotRange,
      'at-date-picker-single': this.isNotRange,
      'at-date-picker--disabled': disabled,
      [`at-date-picker--${size}`]: true
    }"
    v-clickoutside="handleClose">
    <template v-if="isNotRange">
      <div class="at-date-picker__input"
        @mouseover="showClearBtnHandle"
        @mouseout="hideClearBtnHandle">
        <input type="text"
          class="at-date-picker__original"
          :value="curValueString"
          :disabled="disabled"
          :placeholder="Array.isArray(placeholderFinal) ? placeholderFinal[0] : placeholderFinal"
          :readonly="readonly"
          @keyup.enter="inputByTypingHandle"
          @focus="focusHandle">
        <i v-if="!isShowClearBtn"
          class="at-date-picker__icon icon icon-calendar"></i>
        <i class="at-date-picker__icon icon icon-x at-date-picker__clear"
          v-else
          :title="clearText"
          @click="clearValueHandle"></i>
      </div>
    </template>
    <template v-else>
      <div class="at-date-picker__range-input"
        @mouseover="showClearBtnHandle"
        @mouseout="hideClearBtnHandle"
        @click="focusHandle">
        <input type="text"
          class="at-date-picker__original-range"
          :value="curValueString[0]"
          :disabled="disabled"
          :placeholder="placeholderFinal[0]"
          :readonly="readonly"
          @keyup.enter="inputByTypingHandle($event, 'start')">
        <span class="at-date-picker__range-separator">
          {{ rangeSeparatorFinal }}</span>
        <input type="text"
          class="at-date-picker__original-range"
          :value="curValueString[1]"
          :disabled="disabled"
          :placeholder="placeholderFinal[1]"
          :readonly="readonly"
          @keyup.enter="inputByTypingHandle($event, 'end')">
        <i v-if="!isShowClearBtn"
          class="at-date-picker__icon icon icon-calendar"></i>
        <i v-else
          class="at-date-picker__icon icon icon-x at-date-picker__clear"
          :title="clearText"
          @click.stop="clearValueHandle"></i>
      </div>
    </template>
    <transition name="slide-up">
      <div class="at-date-picker__dropdown"
        v-if="isOpen"
        :class="{
          'at-date-picker__dropdown--open': isOpen,
          [`at-date-picker__${whichPanel}-panel`]: true
        }">
        <div class="at-date-picker__aside"
          v-if="isShowAside">
          <button type="button" class="at-date-picker__shortcut"
            v-for="(item, index) in shortcuts"
            :key="index"
            :class="{
              'at-date-picker__shortcut--disabled': disabledDate && shortcutsDisabled[index]
            }"
            @click="clickShortcutsHandle(item, index)">
            {{ item.text }}
          </button>
        </div>
        <template v-if="isNotRange">
          <div class="at-date-picker__body">
            <div class="at-date-picker__header">
              <button class="at-date-picker__prev-year icon icon-chevrons-left"
                @click="prevYearHandle"></button>
              <button v-show="whichPanel === 'date'"
                class="at-date-picker__prev-month icon icon-chevron-left"
                @click="prevMonthHandle"></button>
              <button class="at-date-picker__next-year icon icon-chevrons-right"
                @click="nextYearHandle"></button>
              <button v-show="whichPanel === 'date'"
                class="at-date-picker__next-month icon icon-chevron-right"
                @click="nextMonthHandle"></button>
              <span class="at-date-picker__year-btn"
                @click="showYearPanel">
                {{ whichPanel === 'year'
                  ? `${optionYearList[0][0].year} - ${optionYearList[optionYearList.length - 1][optionYearListLength % 4 - 1].year}`
                  : optionYear }} {{ dateUnit[0] }}</span>
              <span class="at-date-picker__month-btn"
                v-show="whichPanel === 'date'"
                @click="showMonthPanel">
                {{ optionMonthNameOfHead[optionMonth] }}
              </span>
            </div>
            <div class="at-date-picker__content">
              <table v-if="whichPanel === 'date'"
                class="at-date-picker__date-panel">
                <thead>
                  <tr>
                    <th v-for="(item, index) in weeksName"
                      :key="index">{{ item }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rowIndex) in dayCells"
                    :key="rowIndex">
                    <td v-for="(col, colIndex) in row"
                      :key="colIndex"
                      :title="col.fullDate"
                      :class="{
                        'at-date-picker__date-cell': true,
                        'at-date-picker__date-cell--prev-month': col.isPrevMonth,
                        'at-date-picker__date-cell--next-month': col.isNextMonth,
                        'at-date-picker__date-cell--current': checkIsCurrentDate(col),
                        'at-date-picker__date-cell--today': checkIsToday(col),
                        'at-date-picker__date-cell--disabled': col.isDisabled
                      }"
                      @click="confirmDateHandle(col, row, $event)">
                      <span>
                        {{ col.date }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table v-else-if="whichPanel === 'year'"
                class="at-date-picker__year-panel">
                <tbody>
                  <tr v-for="(row, rowIndex) in optionYearList"
                    :key="rowIndex">
                    <td v-for="(col, colIndex) in row"
                      :key="colIndex"
                      @click="confirmYearHandle(col)"
                      :class="{
                        'at-date-picker__year-cell': true,
                        'at-date-picker__year-cell--current': checkIsCurrentYear(col),
                        'at-date-picker__year-cell--disabled': col.isDisabled
                      }">
                      {{ col.year }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table v-else
                class="at-date-picker__month-panel">
                <tbody>
                  <tr v-for="(row, rowIndex) in optionMonthList"
                    :key="rowIndex">
                    <td v-for="(col, colIndex) in row"
                      :key="colIndex"
                      @click="confirmMonthHandle(col, rowIndex * 4 + colIndex)"
                      :class="{
                        'at-date-picker__month-cell': true,
                        'at-date-picker__month-cell--current': checkIsCurrentMonth(col),
                        'at-date-picker__month-cell--disabled': col.isDisabled
                      }">
                      {{ col.month }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="at-date-picker__body">
            <div class="at-date-picker__range at-date-picker__range--left">
              <div class="at-date-picker__header">
                <button class="at-date-picker__prev-year icon icon-chevrons-left"
                  @click="prevYearHandle('left')"></button>
                <button class="at-date-picker__prev-month icon icon-chevron-left"
                  @click="prevMonthHandle('left')"></button>
                <button class="at-date-picker__next-year icon icon-chevrons-right"
                  :class="{
                    'at-date-picker__next-year--disabled': !ableToDo.nextYear
                  }"
                  @click="nextYearHandle('left')"></button>
                <button class="at-date-picker__next-month icon icon-chevron-right"
                  :class="{
                    'at-date-picker__next-month--disabled': !ableToDo.nextMonth
                  }"
                  @click="nextMonthHandle('left')"></button>
                <span class="at-date-picker__year-btn">
                  {{ optionYear[0] }} {{ dateUnit[0] }}</span>
                <span class="at-date-picker__month-btn">
                  {{ optionMonthNameOfHead[optionMonth[0]] }}
                </span>
              </div>
              <div class="at-date-picker__content">
                <table class="at-date-picker__date-panel">
                  <thead>
                    <tr>
                      <th v-for="(item, index) in weeksName"
                        :key="index">{{ item }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, rowIndex) in dayCells[0]"
                      :key="rowIndex">
                      <td v-for="(col, colIndex) in row"
                        :key="colIndex"
                        :title="col.fullDate"
                        :class="{
                          'at-date-picker__date-cell': true,
                          'at-date-picker__date-cell--prev-month': col.isPrevMonth,
                          'at-date-picker__date-cell--next-month': col.isNextMonth,
                          'at-date-picker__date-cell--current': checkIsCurrentDate(col),
                          'at-date-picker__date-cell--today': checkIsToday(col),
                          'at-date-picker__date-cell--range-start': checkIsRangeStart(col),
                          'at-date-picker__date-cell--range-end': checkIsRangeEnd(col),
                          'at-date-picker__date-cell--in-range': checkIsInRange(col),
                          'at-date-picker__date-cell--disabled': col.isDisabled
                        }"
                        @click="confirmDateHandle(col, row, $event)"
                        @mouseover="selectDateHandle(col, row, $event)">
                        <span>
                          {{ col.date }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="at-date-picker__range at-date-picker__range--right">
              <div class="at-date-picker__header">
                <button class="at-date-picker__prev-year icon icon-chevrons-left"
                  :class="{
                    'at-date-picker__prev-year--disabled': !ableToDo.prevYear
                  }"
                  @click="prevYearHandle('right')"></button>
                <button v-show="whichPanel === 'date'"
                  :class="{
                    'at-date-picker__prev-month--disabled': !ableToDo.prevMonth
                  }"
                  class="at-date-picker__prev-month icon icon-chevron-left"
                  @click="prevMonthHandle('right')"></button>
                <button class="at-date-picker__next-year icon icon-chevrons-right"
                  @click="nextYearHandle('right')"></button>
                <button v-show="whichPanel === 'date'"
                  class="at-date-picker__next-month icon icon-chevron-right"
                  @click="nextMonthHandle('right')"></button>
                <span class="at-date-picker__year-btn">
                  {{ optionYear[1] }} {{ dateUnit[0] }}</span>
                <span class="at-date-picker__month-btn">
                  {{ optionMonthNameOfHead[optionMonth[1]] }}
                </span>
              </div>
              <div class="at-date-picker__content">
                <table class="at-date-picker__date-panel">
                  <thead>
                    <tr>
                      <th v-for="(item, index) in weeksName"
                        :key="index">{{ item }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, rowIndex) in dayCells[1]"
                      :key="rowIndex">
                      <td v-for="(col, colIndex) in row"
                        :key="colIndex"
                        :title="col.fullDate"
                        :class="{
                          'at-date-picker__date-cell': true,
                          'at-date-picker__date-cell--prev-month': col.isPrevMonth,
                          'at-date-picker__date-cell--next-month': col.isNextMonth,
                          'at-date-picker__date-cell--current': checkIsCurrentDate(col),
                          'at-date-picker__date-cell--today': checkIsToday(col),
                          'at-date-picker__date-cell--range-start': checkIsRangeStart(col),
                          'at-date-picker__date-cell--range-end': checkIsRangeEnd(col),
                          'at-date-picker__date-cell--in-range': checkIsInRange(col),
                          'at-date-picker__date-cell--disabled': col.isDisabled
                        }"
                        @click="confirmDateHandle(col, row, $event)"
                        @mouseover="selectDateHandle(col, row, $event)">
                        <span>
                          {{ col.date }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </template>
        <div class="at-date-picker__extra"
          v-if="$slots.default">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import moment from 'moment'
import Clickoutside from 'src/directives/clickoutside'
import Locale from 'src/mixins/locale'

export default {
  name: 'AtDatePicker',
  mixins: [Locale],
  directives: { Clickoutside },
  data () {
    return {
      curValue: [],
      optionValue: [],
      whichPanel: 'date', // 'year month date'
      optionYearListLength: 10,
      isShowClearBtn: false,
      isSetStartOfRange: false,
      tempRangeValue: [],
      selectRangeStart: null,
      isOpen: this.open,
      weeksName: this.t('at.datepicker.weeksName'),
      dateUnit: this.t('at.datepicker.dateUnit'),
      optionMonthName: this.t('at.datepicker.optionMonthName'),
      optionMonthNameOfHead: this.t('at.datepicker.optionMonthNameOfHead'),
      defaultPlaceholder: this.t('at.datepicker.placeholder'),
      defaultPlaceholderOfRange: this.t('at.datepicker.placeholderOfRange'),
      defaultRangeSeparator: this.t('at.datepicker.rangeSeparator')
    }
  },
  props: {
    type: {
      type: String,
      default: 'date' // date month year daterange
    },
    value: {
      type: [String, Date, Array]
    },
    format: {
      type: String
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    showToday: {
      type: Boolean,
      default: true
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
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
      type: [String, Array],
    },
    clearText: {
      type: String,
      default: 'clear'
    },
    size: {
      type: String,
      default: 'normal' // normal large small
    },
    shortcuts: {
      type: Array,
      default () {
        return []
      }
    },
    rangeSeparator: {
      type: String,
      // default: this.defaultRangeSeparator
    },
    disabledDate: {
      type: Function
    }
  },

  computed: {
    isNotRange () {
      return ['date', 'year', 'month'].indexOf(this.type) > -1
    },
    placeholderFinal () {
      if (this.isNotRange) {
        return this.placeholder || this.defaultPlaceholder
      } else {
        return this.placeholder || this.defaultPlaceholderOfRange
      }
    },
    rangeSeparatorFinal () {
      return this.rangeSeparator || this.defaultRangeSeparator
    },
    formatByType () {
      if (this.format) return this.format

      if (this.type === 'year') return 'YYYY'
      else if (this.type === 'month') return 'YYYY-MM'
      else return 'YYYY-MM-DD'
    },
    ableToDo () {
      if (this.isNotRange) return false

      const start = this.optionValue[0]
      const end = this.optionValue[1]

      const startYear = start.year()
      const endYear = end.year()

      const startMonth = moment({
        year: startYear,
        month: start.month()
      })
      const endMonth = moment({
        year: endYear,
        month: end.month()
      })

      const diffYear = endYear - startYear
      const diffMonth = endMonth.diff(startMonth, 'months')

      const isBefore = start.isBefore(end)
      const isAfter = end.isAfter(start)

      return {
        prevMonth: isBefore && diffMonth >= 2,
        nextMonth: isAfter && diffMonth >= 2,
        prevYear: isBefore && end.diff(start, 'years', true) >= 13 / 12,
        nextYear: isAfter && end.diff(start, 'years', true) >= 13 / 12
      }
    },
    curValueString () {
      if (this.isNotRange) {
        return moment.isMoment(this.curValue)
          ? this.curValue.format(this.formatByType)
          : ''
      } else if (this.type === 'daterange') {
        const startValue = this.curValue[0]
        const endValue = this.curValue[1]

        if (startValue === null || endValue === null) {
          return ['', '']
        } else {
          return [startValue.format(this.formatByType),
            endValue.format(this.formatByType)]
        }
      }
    },
    optionYear () {
      if (this.isNotRange) {
        return moment.isMoment(this.optionValue)
          ? this.optionValue.year()
          : moment().year()
      } else {
        return [this.optionValue[0].year(),
          this.optionValue[1].year()]
      }
    },
    optionMonth () {
      if (this.isNotRange) {
        return moment.isMoment(this.optionValue)
          ? this.optionValue.month()
          : moment().month()
      } else {
        return [this.optionValue[0].month(),
          this.optionValue[1].month()]
      }
    },
    optionDate () {
      if (this.isNotRange) {
        return moment.isMoment(this.optionValue)
          ? this.optionValue.date()
          : moment().date()
      } else {
        return [this.optionValue[0].date(),
          this.optionValue[1].date()]
      }
    },
    isShowAside () {
      return Array.isArray(this.shortcuts)
        && this.shortcuts.length > 0
    },
    shortcutsDisabled () {
      const result = []

      if (!this.disabledDate) {
        this.shortcuts.forEach((item, index) => {
          result.push(false)
        })
      } else {
        if (this.isNotRange) {
          this.shortcuts.forEach((item, index) => {
            const date = this.getMoment(item.value())
            result.push(this.disabledDate(date))
          })
        } else {
          this.shortcuts.forEach((item, index) => {
            const range = item.value()
            const start = this.getMoment(range[0])
            const end = this.getMoment(range[1])
            const offset = Math.abs(end.diff(start, 'days'))
            let isDisabled = false

            let increment = 0
            for (let i = 0; i < offset; i++) {
              if (this.disabledDate(start.add(increment, 'days'))) {
                result.push(true)
                isDisabled = true
                break
              }
              increment = 1
            }
            !isDisabled && result.push(false)
          })
        }
      }
      return result
    },
    optionMonthList () {
      const months = this.optionMonthName
      const result = []
      const isNotMonthType = this.type === 'date'

      for (let i = 0, len = months.length / 4; i < len; i++) {
        result[i] = []
        for (let j = 0; j < 4; j++) {
          const colIndex = i * 4 + j
          const fullMonth = `${this.optionYear}-${colIndex + 1}-01`

          result[i][j] = {
            month: months[colIndex],
            fullMonth,
            isDisabled: !isNotMonthType && this.checkIsDisabledDate(fullMonth)
          }
        }
      }
      return result
    },
    optionYearList () {
      const firstYear = this.optionYear - (this.optionYear % this.optionYearListLength)
      const result = []
      const row = Math.floor(this.optionYearListLength / 4) + 1
      const isNotYearType = ['date', 'month'].indexOf(this.type) > -1

      for (let i = 0; i < row; i++) {
        result[i] = []
        for (let j = 0; j < 4; j++) {
          const offset = i * 4 + j

          if (offset < this.optionYearListLength) {
            const year = firstYear + offset
            result[i][j] = {
              year,
              isDisabled: !isNotYearType && this.checkIsDisabledDate(year)
            }
          } else {
            break
          }
        }
      }
      return result
    },
    dayCells () {
      const result = []
      let optionsValue = this.isNotRange
        ? [this.optionValue]
        : this.optionValue

      optionsValue.forEach((item, index) => {
        const dayCells = []
        // 上一个月的最后一天
        const lastDayOfLastMonth = this.getMoment(item).subtract(1, 'month').endOf('month').date()
        // 当月的第一天
        const firstDayOfMonth = this.getMoment(item).startOf('month')
        // 当月的最后一天
        const endDayOfMonth = this.getMoment(item).endOf('month').date()
        // 当月的第一天是周几
        let weekOfFirstDay = this.getMoment(firstDayOfMonth).day() // 0 ~ 6

        if (weekOfFirstDay === 0) {
          weekOfFirstDay = 7
        }

        let dayOfCurMonth = 1
        let dayOfNextMonth = 1

        for (let i = 0; i < 6; i++) {
          dayCells[i] = []
          for (let j = 0; j < this.weeksName.length; j++) {
            let year = item.year()
            let month = item.month() + 1

            if (i === 0 && j < weekOfFirstDay) {
              if (month === 1) {
                year--
                month = 12
              } else {
                month--
              }

              const date = lastDayOfLastMonth - weekOfFirstDay + j + 1
              const fullDate = `${year}-${month}-${date}`

              dayCells[i].push({
                isPrevMonth: true,
                date,
                fullDate,
                isDisabled: this.checkIsDisabledDate(fullDate)
              })
            } else {
              if (dayOfCurMonth <= endDayOfMonth) {
                const date = dayOfCurMonth
                const fullDate = `${year}-${month}-${date}`
                dayCells[i].push({
                  isCurMotnh: true,
                  date,
                  fullDate,
                  isDisabled: this.checkIsDisabledDate(fullDate)
                })
                dayOfCurMonth++
              } else {
                if (month === 12) {
                  year++
                  month = 1
                } else {
                  month++
                }

                const date = dayOfNextMonth
                const fullDate = `${year}-${month}-${date}`

                dayCells[i].push({
                  isNextMonth: true,
                  date,
                  fullDate,
                  isDisabled: this.checkIsDisabledDate(fullDate)
                })
                dayOfNextMonth++
              }
            }
          }
        }
        result.push(dayCells)
      })

      return this.isNotRange
        ? result[0]
        : result
    }
  },

  watch: {
    curValue (val, oldVal) {
      if (this.autoClose) {
        this.$nextTick(() => {
          this.isOpen = false
        })
      }

      if (moment.isMoment(val) && moment.isMoment(oldVal)) {
        if (val.isSame(oldVal, 'day')) return
      }
      if (this.isNotRange) {
        const curValue = this.getMoment(val)
        this.optionValue = curValue.isValid()
          ? curValue
          : moment()
        this.whichPanel = this.type
      } else {
        const startValue = this.curValue[0]
        const endValue = this.curValue[1]

        if (startValue === null || endValue === null) {
          return [null, null]
        }

        if (startValue.isSame(endValue, 'month')) {
          this.optionValue.splice(0, 1, this.getMoment(startValue))
          this.optionValue.splice(1, 1, this.getMoment(endValue).add(1, 'months'))
          this.tempRangeValue = this.curValue.concat()
        } else {
          this.optionValue = this.curValue.concat()
          this.tempRangeValue = this.curValue.concat()
        }
      }
      this.$emit('on-change', this.curValue, this.curValueString)
    },
    type (val, oldVal) {
      if (this.isNotRange) {
        if (val === 'year') {
          this.whichPanel = 'year'
        } else if (val === 'month') {
          this.whichPanel === 'date' && (this.whichPanel = 'month')
        }
      }
    },
    isOpen (val) {
      this.$emit('on-open-change', val)
    },
    open (val) {
      this.isOpen = val
    },
    disabled (val) {
      if (val) {
        this.isOpen = false
      }
    }
  },

  methods: {
    getMoment(date, format) {
      return moment(date || new Date(), format || this.formatByType)
    },
    setInitCurVal () {
      if (this.isNotRange) {
        const date = this.getMoment(this.value)

        this.curValue = date.isValid()
          ? date
          : null
      } else {
        let start
        let end

        if (Array.isArray(this.value) && this.value.length >= 2) {
          if (!this.value[0] || !this.value[1]) {
            start = this.getMoment()
            end = this.getMoment().add(1, 'months')
          } else {
            start = this.getMoment(this.value[0])
            end = this.getMoment(this.value[1])
          }
        } else {
          start = null
          end = null
        }
        this.curValue = [start, end]
      }
    },
    setInitOptionVal () {
      if (this.isNotRange) {
        this.optionValue = this.getMoment(this.value)
      } else {
        if (Array.isArray(this.value) && this.value.length >= 2) {
          const startVal = this.getMoment(this.value[0])
          const endVal = this.getMoment(this.value[1])

          if (startVal.isValid() && endVal.isValid()) {
            this.optionValue = startVal.isBefore(endVal)
              ? [startVal, endVal]
              : [endVal, startVal]
          } else {
            this.optionValue = [this.getMoment(), this.getMoment().add(1, 'months')]
          }
        } else {
          this.optionValue = [this.getMoment(), this.getMoment().add(1, 'months')]
        }
      }
    },
    inputByTypingHandle (event, identifier) {
      if (this.disabled) return

      if (this.isNotRange) {
        const val = event.target.value.trim()
        const date = this.getMoment(val)

        if (!date.isValid() || this.checkIsDisabledDate(date)) {
          return
        } else {
          this.curValue = date
        }
      } else {
        if (identifier === 'start') {
          const endValue = this.curValue[1]
          const end = endValue && this.getMoment(endValue)

          const startValue = event.target.value.trim()
          const start = this.getMoment(startValue)

          if (start.isValid() && !this.checkIsDisabledDate(start)) {
            if (end && !end.isBefore(start)) {
              this.curValue.splice(0, 1, start)
            }
            if (!end) {
              this.curValue.splice(0, 1, start)
              this.curValue.splice(1, 1, this.getMoment(start))
            }
          }
        } else {
          const startValue = this.curValue[0]
          const start = startValue && this.getMoment(startValue)

          const endValue = event.target.value.trim()
          const end = this.getMoment(endValue)
          if (end.isValid() && !this.checkIsDisabledDate(end)) {
            if (start && !start.isAfter(end)) {
              this.curValue.splice(1, 1, end)
            }
            if (!start) {
              this.curValue.splice(0, 1, this.getMoment(end))
              this.curValue.splice(1, 1, end)
            }
          }
        }
      }
    },
    focusHandle () {
      if (this.disabled) return

      this.isOpen = true
    },
    handleClose () {
      this.isOpen = false
    },
    checkIsDisabledDate (fullDate) {
      if (!this.disabledDate) return false

      return this.disabledDate(this.getMoment(fullDate))
    },
    checkIsCurrentYear (opts) {
      if (!moment.isMoment(this.curValue)) return

      const year = this.getMoment(opts.year)
      return this.curValue.isSame(year, 'year')
    },
    checkIsCurrentMonth (opts) {
      if (!moment.isMoment(this.curValue)) return

      const month = this.getMoment(opts.fullMonth).month()
      // return this.curValue.isSame(month, 'month')
      return month === this.curValue.month()
    },
    checkIsCurrentDate (opts) {
      if (opts.isCurMotnh && moment.isMoment(this.curValue)) {
        return this.curValue.isSame(this.getMoment(this.optionValue), 'day')
          && opts.date === this.curValue.date()
      }
    },
    checkIsToday (opts) {
      if (!this.showToday) return

      return moment().isSame(this.getMoment(opts.fullDate), 'day')
    },
    checkIsInRange (opts) {
      if (this.isNotRange) return false

      const tempRangeValue = this.tempRangeValue
      const startValue = this.getMoment(tempRangeValue[0])
      const endValue = this.getMoment(tempRangeValue[1])

      if (opts.isCurMotnh
        && tempRangeValue.length === 2
        && this.getMoment(opts.fullDate).isBetween(startValue, endValue)) {
        return true
      }
    },
    checkIsRangeStart (opts) {
      if (this.isNotRange) return false

      const tempRangeValue = this.tempRangeValue
      const startValue = tempRangeValue[0]

      if (opts.isCurMotnh
        && moment.isMoment(startValue)
        && startValue.isSame(this.getMoment(opts.fullDate), 'day')) {
        return true
      }
    },
    checkIsRangeEnd (opts) {
      if (this.isNotRange) return false

      const tempRangeValue = this.tempRangeValue
      const endValue = tempRangeValue[1]

      if (opts.isCurMotnh
        && moment.isMoment(endValue)
        && endValue.isSame(this.getMoment(opts.fullDate), 'day')) {
        return true
      }
    },
    showClearBtnHandle () {
      if (!this.allowClear || this.disabled) return false

      this.isShowClearBtn = this.isNotRange
        ? (this.curValueString !== '')
        : (this.curValueString[0] !== '' || this.curValueString[1] !== '')
    },
    hideClearBtnHandle () {
      if (!this.allowClear || this.disabled) return false

      this.isShowClearBtn = false
    },
    clearValueHandle () {
      if (!this.allowClear || this.disabled) return false

      this.isShowClearBtn = false
      if (this.isNotRange) {
        this.curValue = null
      } else {
        this.curValue = [null, null]
        this.tempRangeValue = [null, null]
      }
    },
    clickShortcutsHandle (opts, index) {
      if (this.disabled
        || (this.disabledDate && this.shortcutsDisabled[index])) {
        return
      }

      if (this.isNotRange) {
        if (opts.value) {
          this.curValue = this.getMoment(opts.value())
        }
      } else {
        if (opts.value) {
          const value = opts.value()
          const start = this.getMoment(value[0])
          const end = this.getMoment(value[1])

          this.curValue = [start, end]
        }
      }
      opts.onClick && opts.onClick()
    },
    showYearPanel () {
      this.whichPanel = 'year'
    },
    showMonthPanel () {
      this.whichPanel = 'month'
    },
    selectDateHandle (opts, row, event) {
      if (this.isNotRange || this.disabled || opts.isDisabled) return

      if (this.isSetStartOfRange && this.selectRangeStart) {
        const fullDate = this.getMoment(opts.fullDate)
        const selectRangeStart = this.getMoment(this.selectRangeStart)

        this.tempRangeValue = fullDate.isBefore(selectRangeStart)
          ? [fullDate, selectRangeStart]
          : [selectRangeStart, fullDate]
      }
    },
    confirmYearHandle (opts) {
      if (!this.isNotRange || (this.type === 'year' && opts.isDisabled)) return

      this.optionValue = this.getMoment(this.optionValue).year(opts.year)
      if (['date', 'month'].indexOf(this.type) > -1) {
        this.whichPanel = 'month'
      } else {
        this.curValue = this.getMoment(this.optionValue)
      }
    },
    confirmMonthHandle (opts, month) {
      if (!this.isNotRange || (this.type === 'month' && opts.isDisabled)) return

      this.optionValue = this.getMoment(this.optionValue).month(month)

      if (this.type === 'date') {
        this.whichPanel = 'date'
      } else if (this.type === 'month') {
        this.curValue = this.getMoment(this.optionValue)
      }
    },
    confirmDateHandle (opts, row, event) {
      if (this.disabled || opts.isDisabled) return

      const date = opts.date
      const isPrevMonth = opts.isPrevMonth
      const isNextMonth = opts.isNextMonth

      if (this.isNotRange) {
        this.curValue = this.getMoment(opts.fullDate)
      } else {
        if (!this.isSetStartOfRange) {
          this.tempRangeValue = []
          this.tempRangeValue.splice(0, 1, this.getMoment(opts.fullDate))
          this.selectRangeStart = this.getMoment(opts.fullDate)
          this.isSetStartOfRange = true
        } else {
          const fullDate = this.getMoment(opts.fullDate)
          const selectRangeStart = this.getMoment(this.selectRangeStart)
          this.tempRangeValue = fullDate.isBefore(selectRangeStart)
            ? [fullDate, selectRangeStart]
            : [selectRangeStart, fullDate]

          this.isSetStartOfRange = false
          this.selectRangeStart = null
        }
        if (this.tempRangeValue.length === 2) {
          this.curValue = this.tempRangeValue.concat()
        }
      }
    },
    prevYearHandle (label) {
      if (this.isNotRange) {
        const offset = (this.whichPanel === 'year' ? 10 : 1)
        this.optionValue = this.getMoment(this.optionValue).subtract(offset, 'years')
      } else {
        if (label === 'left') {
          this.optionValue.splice(0, 1, this.getMoment(this.optionValue[0]).subtract(1, 'years'))
        } else {
          if (this.ableToDo.prevYear) {
            this.optionValue.splice(1, 1, this.getMoment(this.optionValue[1]).subtract(1, 'years'))
          }
        }
      }
    },
    prevMonthHandle (label) {
      if (this.isNotRange) {
        this.optionValue = this.getMoment(this.optionValue).subtract(1, 'months')
      } else {
        if (label === 'left') {
          this.optionValue.splice(0, 1, this.getMoment(this.optionValue[0]).subtract(1, 'months'))
        } else {
          if (this.ableToDo.prevMonth) {
            this.optionValue.splice(1, 1, this.getMoment(this.optionValue[1]).subtract(1, 'months'))
          }
        }
      }
    },
    nextMonthHandle (label) {
      if (this.isNotRange) {
        this.optionValue = this.getMoment(this.optionValue).add(1, 'months')
      } else {
        if (label === 'left') {
          if (this.ableToDo.nextMonth) {
            this.optionValue.splice(0, 1, this.getMoment(this.optionValue[0]).add(1, 'months'))
          }
        } else {
          this.optionValue.splice(1, 1, this.getMoment(this.optionValue[1]).add(1, 'months'))
        }
      }
    },
    nextYearHandle (label) {
      if (this.isNotRange) {
        const offset = (this.whichPanel === 'year' ? 10 : 1)
        this.optionValue = this.getMoment(this.optionValue).add(offset, 'years')
      } else {
        if (label === 'left') {
          if (this.ableToDo.nextYear) {
            this.optionValue.splice(0, 1, this.getMoment(this.optionValue[0]).add(1, 'years'))
          }
        } else {
          this.optionValue.splice(1, 1, this.getMoment(this.optionValue[1]).add(1, 'years'))
        }
      }
    },
  },
  created () {
    if (this.disabled) {
      this.isOpen = false
    }

    if (this.isNotRange) {
      if (this.type === 'month') {
        this.whichPanel = 'month'
      } else if (this.type === 'year') {
        this.whichPanel = 'year'
      }
    }

    this.setInitCurVal()
    this.$nextTick(() => {
      this.setInitOptionVal()
    })
  }
}
</script>
