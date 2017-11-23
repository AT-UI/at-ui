<template>
  <div class="at-date-picker"
    :class="{
      'at-date-picker-range': type === 'daterange'
    }">
    <template v-if="isNotRange">
      <div class="at-date-picker__input"
        @mouseover="showClearBtnHandle"
        @mouseout="hideClearBtnHandle">
        <input type="text" class="at-date-picker__original"
          :value="curValueString"
          :disabled="disabled"
          :placeholder="placeholder">
        <i v-if="!isShowClearBtn" class="at-date-picker__icon icon icon-calendar"></i>
        <i class="at-date-picker__icon icon icon-x at-date-picker__clear"
          v-else
          :title="clearText"
          @click="clearValueHandle"></i>
      </div>
    </template>
    <template v-else>
      <div class="at-date-picker__range-input"
        @mouseover="showClearBtnHandle"
        @mouseout="hideClearBtnHandle">
        <input type="text" class="at-date-picker__original-range"
          :value="curValueString[0]"
          :disabled="disabled"
          :placeholder="placeholder[0]">
        <span class="at-date-picker__range-separator">{{ rangeSeparator }}</span>
        <input type="text" class="at-date-picker__original-range"
          :value="curValueString[1]"
          :disabled="disabled"
          :placeholder="placeholder[1]">
        <i v-if="!isShowClearBtn" class="at-date-picker__icon icon icon-calendar"></i>
        <i class="at-date-picker__icon icon icon-x at-date-picker__clear"
          v-else
          :title="clearText"
          @click="clearValueHandle"></i>
      </div>
    </template>
    <div class="at-date-picker__dropdown">
      <div class="at-date-picker__aside" v-if="isShowAside">
        <button type="button" class="at-date-picker__shortcut"
          v-for="(item, index) in pickerOptions.shortcuts" :key="index"
          @click="clickShortcutsHandle(item)">
          {{ item.text }}
        </button>
      </div>
      <template v-if="isNotRange">
        <div class="at-date-picker__body">
          <div class="at-date-picker__header">
            <button class="at-date-picker__prev-year icon icon-chevrons-left" @click="prevYearHandle"></button>
            <button v-show="whichPanel === 'date'" class="at-date-picker__prev-month icon icon-chevron-left" @click="prevMonthHandle"></button>
            <button class="at-date-picker__next-year icon icon-chevrons-right" @click="nextYearHandle"></button>
            <button v-show="whichPanel === 'date'" class="at-date-picker__next-month icon icon-chevron-right" @click="nextMonthHandle"></button>
            <span class="at-date-picker__year-btn"
              @click="showYearPanel">
              {{ whichPanel === 'year'
                ? `${optionYearList[0][0]} - ${optionYearList[optionYearList.length - 1][1]}`
                : optionYear }} 年</span>
            <span class="at-date-picker__month-btn"
              v-show="whichPanel === 'date'"
              @click="showMonthPanel">
              {{ optionMonth + 1 }} 月
            </span>
          </div>
          <div class="at-date-picker__content">
            <table v-if="whichPanel === 'date'" class="at-date-picker__date-panel">
              <thead>
                <tr>
                  <th v-for="(item, index) in weeksName" :key="index">{{ item }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, rowIndex) in dayCells" :key="rowIndex">
                  <td v-for="(col, colIndex) in row" :key="colIndex"
                    :class="{
                      'at-date-picker__date-cell': true,
                      'at-date-picker__date-cell--prev-month': col.isPrevMonth,
                      'at-date-picker__date-cell--next-month': col.isNextMonth,
                      'at-date-picker__date-cell--current': checkIsCurrentDate(col),
                      'at-date-picker__date-cell--today': checkIsToday(col),
                    }"
                    @click="confirmDateHandle(col, row, $event)">
                    <span>
                      {{ col.date }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <table v-else-if="whichPanel === 'year'" class="at-date-picker__year-panel">
              <tbody>
                <tr v-for="(row, rowIndex) in optionYearList" :key="rowIndex">
                  <td v-for="(col, colIndex) in row" :key="colIndex"
                    @click="confirmYearHandle(col)"
                    :class="{
                      'at-date-picker__year-cell': true,
                      'at-date-picker__year-cell--current': checkIsCurrentYear(col)
                    }">
                    {{ col }}
                  </td>
                </tr>
              </tbody>
            </table>
            <table v-else class="at-date-picker__month-panel">
              <tbody>
                <tr v-for="(row, rowIndex) in optionMonthList" :key="rowIndex">
                  <td v-for="(col, colIndex) in row" :key="colIndex"
                    @click="confirmMonthHandle(rowIndex * 4 + colIndex)"
                    :class="{
                      'at-date-picker__month-cell': true,
                      'at-date-picker__month-cell--current': checkIsCurrentMonth(rowIndex * 4 + colIndex)
                    }">
                    {{ col }}
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
                {{ optionYear[0] }} 年</span>
              <span class="at-date-picker__month-btn">
                {{ optionMonth[0] + 1 }} 月
              </span>
            </div>
            <div class="at-date-picker__content">
              <table class="at-date-picker__date-panel">
                <thead>
                  <tr>
                    <th v-for="(item, index) in weeksName" :key="index">{{ item }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rowIndex) in dayCells[0]" :key="rowIndex">
                    <td v-for="(col, colIndex) in row" :key="colIndex"
                      :title="col.fullDate"
                      :class="{
                        'at-date-picker__date-cell': true,
                        'at-date-picker__date-cell--prev-month': col.isPrevMonth,
                        'at-date-picker__date-cell--next-month': col.isNextMonth,
                        'at-date-picker__date-cell--current': checkIsCurrentDate(col),
                        'at-date-picker__date-cell--today': checkIsToday(col),
                        'at-date-picker__date-cell--range-start': checkIsRangeStart(col),
                        'at-date-picker__date-cell--range-end': checkIsRangeEnd(col),
                        'at-date-picker__date-cell--in-range': checkIsInRange(col)
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
                {{ optionYear[1] }} 年</span>
              <span class="at-date-picker__month-btn">
                {{ optionMonth[1] + 1 }} 月
              </span>
            </div>
            <div class="at-date-picker__content">
              <table class="at-date-picker__date-panel">
                <thead>
                  <tr>
                    <th v-for="(item, index) in weeksName" :key="index">{{ item }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rowIndex) in dayCells[1]" :key="rowIndex">
                    <td v-for="(col, colIndex) in row" :key="colIndex"
                      :title="col.fullDate"
                      :class="{
                        'at-date-picker__date-cell': true,
                        'at-date-picker__date-cell--prev-month': col.isPrevMonth,
                        'at-date-picker__date-cell--next-month': col.isNextMonth,
                        'at-date-picker__date-cell--current': checkIsCurrentDate(col),
                        'at-date-picker__date-cell--today': checkIsToday(col),
                        'at-date-picker__date-cell--range-start': checkIsRangeStart(col),
                        'at-date-picker__date-cell--range-end': checkIsRangeEnd(col),
                        'at-date-picker__date-cell--in-range': checkIsInRange(col)
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
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { hasClass, addClass, removeClass } from '../../../utils/util.js'
export default {
  name: 'AtDatePicker',
  data () {
    return {
      curValue: this.getInitCurVal(),
      weeksName: ['日', '一', '二', '三', '四', '五', '六'],
      optionValue: this.getInitOptionVal(),
      whichPanel: 'date', // 'year month date'
      optionYearListLength: 10,
      optionMonthList: this.formatOptionMonthList(),
      isShowClearBtn: false,
      isSetStartOfRange: false,
      tempRangeValue: [],
      selectRangeStart: null
    }
  },

  props: {
    value: {
      type: String
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    type: {
      type: String,
      default: 'date' // date month year daterange
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
      default () {
        return this.isNotRange
          ? '请选择日期'
          : ['开始日期', '结束日期']
      }
    },
    clearText: {
      type: String,
      default: 'clear'
    },
    size: {
      type: String,
      default: 'normal'
    },
    pickerOptions: {
      type: Object,
      default () {
        return {
          shortcuts: []
        }
      }
    },
    rangeSeparator: {
      type: String,
      default: '至'
    },
  },

  computed: {
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
    isNotRange () {
      return ['date', 'year', 'month'].indexOf(this.type) > -1
    },
    isShowAside () {
      return this.pickerOptions
        && this.pickerOptions.shortcuts
        && this.pickerOptions.shortcuts.length > 0
    },
    curValueString () {
      if (this.type === 'date') {
        return moment.isMoment(this.curValue)
          ? this.curValue.format(this.format)
          : ''
      } else if (this.type === 'month') {
        return moment.isMoment(this.curValue)
          ? this.curValue.format('YYYY-MM')
          : ''
      } else if (this.type === 'year') {
        return moment.isMoment(this.curValue)
          ? this.curValue.year()
          : ''
      } else if (this.type === 'daterange') {
        // console.log('this.curValue', this.curValue)
        const startValue = this.curValue[0]
        const endValue = this.curValue[1]

        if (startValue === null || endValue === null) {
          return ['', '']
        } else {
          return [startValue.format(this.format), endValue.format(this.format)]
        }
      }
    },
    optionYearList () {
      var firstYear = this.optionYear - this.optionYear % this.optionYearListLength
      // var lastYear = firstYear + 10 - 1
      var result = []
      var row = Math.floor(this.optionYearListLength / 4) + 1

      for (let i = 0; i < row; i++) {
        result[i] = []
        for (let j = 0; j < 4; j++) {
          var offset = i * 4 + j

          if (offset < this.optionYearListLength) {
            result[i][j] = firstYear + offset
          } else {
            break
          }
        }
      }
      return result
    },
    optionYear () {
      if (this.type !== 'daterange') {
        return moment.isMoment(this.optionValue)
          ? this.optionValue.year()
          : moment().year()
      } else {
        return [this.optionValue[0].year(), this.optionValue[1].year()]
      }

    },
    optionMonth () {
      if (this.type !== 'daterange') {
        return moment.isMoment(this.optionValue)
          ? this.optionValue.month()
          : moment().month()
      } else {
        return [this.optionValue[0].month(), this.optionValue[1].month()]
      }
    },
    optionDate () {
      if (this.type !== 'daterange') {
        return moment.isMoment(this.optionValue)
          ? this.optionValue.date()
          : moment().date()
      } else {
        return [this.optionValue[0].date(), this.optionValue[1].date()]
      }

    },
    dayCells () {
      var result = []

      this.optionValue.forEach((item, index) => {
        var dayCells = []
        // 上一个月的最后一天
        var lastDayOfLastMonth = moment(item).subtract(1, 'month').endOf('month').date()
        // 当月的第一天
        var firstDayOfMonth = moment(item).startOf('month')
        // 当月的最后一天
        var endDayOfMonth = moment(item).endOf('month').date()
        // 当月的第一天是周几
        var weekOfFirstDay = moment(firstDayOfMonth).day() // 0 ~ 6
        var dayCells = []


        if (weekOfFirstDay === 0) {
          weekOfFirstDay = 7
        }

        var dayOfCurMonth = 1
        var dayOfNextMonth = 1

        for (let i = 0; i < 6; i++) {
          dayCells[i] = []
          for (let j = 0; j < this.weeksName.length; j++) {
            var year = item.year()
            var month = item.month() + 1

            if (i === 0 && j < weekOfFirstDay) {
              const date = lastDayOfLastMonth - weekOfFirstDay + j + 1
              if (month === 1) {
                year--
                month = 12
              } else {
                month--
              }
              dayCells[i].push({
                isPrevMonth: true,
                date: date,
                fullDate: `${year}-${month}-${date}`
              })
            } else {
              if (dayOfCurMonth <= endDayOfMonth) {
                const date = dayOfCurMonth
                dayCells[i].push({
                  isCurMotnh: true,
                  date: date,
                  fullDate: `${year}-${month}-${date}`
                })
                dayOfCurMonth++
              } else {
                const date = dayOfNextMonth
                if (month === 12) {
                  year++
                  month = 1
                } else {
                  month++
                }
                dayCells[i].push({
                  isNextMonth: true,
                  date: date,
                  fullDate: `${year}-${month}-${date}`
                })
                dayOfNextMonth++
              }
            }
          }
        }
        result.push(dayCells)
      })

      return result
    }
  },

  watch: {
    curValue (val) {
      if (this.isNotRange) {
        this.optionValue = moment(val).isValid()
          ? moment(val)
          : moment()

      } else {
        const startValue = this.curValue[0]
        const endValue = this.curValue[1]

        if (startValue === null || endValue === null) {
          return [null, null]
        }

        if (startValue.isSame(endValue, 'month')) {
          this.optionValue.splice(0, 1, moment(startValue))
          this.optionValue.splice(1, 1, moment(endValue).add(1, 'months'))
        } else {
          this.optionValue = this.curValue.concat()
          this.tempRangeValue = this.curValue.concat()
        }
      }
    }
  },

  methods: {

    checkIsInRange (opts) {
      if (this.isNotRange) return

      const tempRangeValue = this.tempRangeValue
      const startValue = tempRangeValue[0]
      const endValue = tempRangeValue[1]

      if (opts.isCurMotnh
        && tempRangeValue.length === 2
        && moment(opts.fullDate).isBetween(startValue, endValue)) {
        return true
      }
    },
    checkIsRangeStart (opts) {
      if (this.isNotRange) return

      const tempRangeValue = this.tempRangeValue
      const startValue = tempRangeValue[0]

      if (opts.isCurMotnh
        && moment.isMoment(startValue)
        && startValue.isSame(opts.fullDate, 'day')) {
        return true
      }
    },
    checkIsRangeEnd (opts) {
      if (this.isNotRange) return

      const tempRangeValue = this.tempRangeValue
      const endValue = tempRangeValue[1]

      if (opts.isCurMotnh
        && moment.isMoment(endValue)
        && endValue.isSame(opts.fullDate, 'day')) {
        return true
      }
    },
    showClearBtnHandle () {
      if (!this.allowClear || this.disabled) return

      this.isShowClearBtn = this.isNotRange
        ? (this.curValueString !== '')
        : (this.curValueString[0] !== '' || this.curValueString[1] !== '')
    },
    hideClearBtnHandle () {
      if (!this.allowClear || this.disabled) return

      this.isShowClearBtn = false
    },
    clearValueHandle () {
      if (!this.allowClear || this.disabled) return

      this.isShowClearBtn = false
      if (this.isNotRange) {
        this.curValue = null
      } else {
        this.curValue = [null, null]
        this.tempRangeValue = [null, null]
      }
    },
    checkIsCurrentYear (year) {
      return this.curValue.year() === year
    },
    checkIsCurrentMonth (month) {
      return this.curValue.month() === month
    },
    clickShortcutsHandle (opts) {
      if (opts.value) {
        this.curValue = moment(opts.value())
      }
      opts.onClick && opts.onClick()
    },
    checkIsCurrentDate (opts) {
      if (opts.isCurMotnh && moment.isMoment(this.curValue)) {
        return this.curValue.isSame(this.optionValue, 'day') && opts.date === this.curValue.date()
      }
    },
    checkIsToday (opts) {
      if (moment().isSame(moment(opts.fullDate, this.format), 'day')) {
        return true
      }
    },
    showYearPanel () {
      this.whichPanel = 'year'
    },
    showMonthPanel () {
      this.whichPanel = 'month'
    },
    formatOptionMonthList () {
      var months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
      var result = []
      for (let i = 0, len = months.length / 4; i < len; i++) {
        result[i] = []
        for (let j = 0; j < 4; j++) {
          result[i][j] = months[i * 4 + j] + '月'
        }
      }
      return result
    },
    confirmYearHandle (year) {
      if (!this.isNotRange) return

      this.optionValue = moment(this.optionValue.year(year))
      if (['date', 'month'].indexOf(this.type) > -1) {
        this.whichPanel = 'month'
      } else {
        this.curValue = moment(this.optionValue)
      }
    },
    confirmMonthHandle (month) {
      if (!this.isNotRange) return

      this.optionValue = moment(this.optionValue.month(month))

      if (this.type === 'date') {
        this.whichPanel = 'date'
      } else if (this.type === 'month') {
        this.curValue = moment(this.optionValue)
      }
    },
    selectDateHandle (opts, row, event) {
      if (this.isNotRange) return

      if (this.isSetStartOfRange && this.selectRangeStart) {
        this.tempRangeValue = moment(opts.fullDate).isBefore(this.selectRangeStart)
          ? [moment(opts.fullDate), this.selectRangeStart]
          : [this.selectRangeStart, moment(opts.fullDate)]

        // if (this.tempRangeValue[0].isAfter(opts.fullDate)) {
        //   this.tempRangeValue.splice(1, 1, moment(this.tempRangeValue[0]))
        //   this.tempRangeValue.splice(0, 1, moment(opts.fullDate))
        // } else if (this.tempRangeValue[0].isBefore(opts.fullDate)) {
        //   this.tempRangeValue.splice(1, 1, moment(opts.fullDate))
        // }
      }

    },
    confirmDateHandle (opts, row, event) {
      const date = opts.date
      const isPrevMonth = opts.isPrevMonth
      const isNextMonth = opts.isNextMonth

      if (this.isNotRange) {
        isPrevMonth
          ? this.optionValue.subtract(1, 'months')
          : this.optionValue.add(1, 'months')

        this.optionValue = moment(this.optionValue.date(date))
        this.curValue = moment(this.optionValue)
      } else {
        if (!this.isSetStartOfRange) {
          // this.optionValue.splice(0, 1, moment(this.optionValue[0].date(opts.date)))
          // this.curValue.splice(0, 1, moment(opts.fullDate))
          this.tempRangeValue = []
          this.tempRangeValue.splice(0, 1, moment(opts.fullDate))
          this.isSetStartOfRange = true
          this.selectRangeStart = moment(opts.fullDate)
        } else {
          // this.optionValue.splice(1, 1, moment(this.optionValue[1].date(opts.date)))
          this.tempRangeValue = moment(opts.fullDate).isBefore(this.selectRangeStart)
            ? [moment(opts.fullDate), this.selectRangeStart]
            : [this.selectRangeStart, moment(opts.fullDate)]

          this.isSetStartOfRange = false
          this.selectRangeStart = null
        }
        if (this.tempRangeValue.length === 2) {
          this.curValue = this.tempRangeValue.concat()
        }
        // console.log(this.optionValue[0].format(this.format))
      }
    },
    getInitCurVal () {
      if (!this.isNotRange) {
        let start
        let end

        if (Array.isArray(this.value)) {
          start = moment(this.value[0])
          end = moment(this.value[1])

          start.isValid() && (start = moment())
          end.isValid()   && (end = moment(moment().add(1, 'months')))

        } else {
          start = null
          end = null
        }

        return [start, end]
      } else {
        const date = moment(this.value, this.format)

        return date.isValid()
          ? date
          : null
      }
    },
    getInitOptionVal () {
      if (this.isNotRange) return

      if (typeof this.curValue === 'undefined') {
        return [moment(), moment().add(1, 'months')]
      } else if (Array.isArray(this.curValue) && this.curValue.length >= 2) {
        const startVal = moment(this.curValue[0])
        const endVal = moment(this.curValue[1])

        if (startVal.isValid() && endVal.isValid()) {
          return startVal.isBefore(endVal)
            ? [startVal, endVal]
            : [endVal, startVal]
        } else {
          return [moment(), moment().add(1, 'months')]
        }
      }
    },
    prevYearHandle (label) {
      if (this.isNotRange) {
        const offset = (this.whichPanel === 'year' ? 10 : 1)
        this.optionValue = moment(this.optionValue).subtract(offset, 'years')
      } else {
        if (label === 'left') {
          this.optionValue.splice(0, 1, moment(this.optionValue[0]).subtract(1, 'years'))
        } else {
          if (this.ableToDo.prevYear) {
            this.optionValue.splice(1, 1, moment(this.optionValue[1]).subtract(1, 'years'))
          }
        }
      }
    },
    prevMonthHandle (label) {
      if (this.isNotRange) {
        this.optionValue = moment(this.optionValue).subtract(1, 'months')
      } else {
        if (label === 'left') {
          this.optionValue.splice(0, 1, moment(this.optionValue[0]).subtract(1, 'months'))
        } else {
          if (this.ableToDo.prevMonth) {
            this.optionValue.splice(1, 1, moment(this.optionValue[1]).subtract(1, 'months'))
          }
        }
      }
    },
    nextMonthHandle (label) {
      if (this.isNotRange) {
        this.optionValue = moment(this.optionValue.add(1, 'months'))
      } else {
        if (label === 'left') {
          if (this.ableToDo.nextMonth) {
            this.optionValue.splice(0, 1, moment(this.optionValue[0]).add(1, 'months'))
          }
        } else {
          this.optionValue.splice(1, 1, moment(this.optionValue[1]).add(1, 'months'))
        }
      }
    },
    nextYearHandle (label) {
      if (this.isNotRange) {
        const offset = (this.whichPanel === 'year' ? 10 : 1)
        this.optionValue = moment(this.optionValue.add(offset, 'years'))
      } else {
        if (label === 'left') {
          if (this.ableToDo.nextYear) {
            this.optionValue.splice(0, 1, moment(this.optionValue[0].add(1, 'years')))
          }
        } else {
          this.optionValue.splice(1, 1, moment(this.optionValue[1].add(1, 'years')))
        }
      }
    },
  },

  created () {
    if (this.isNotRange) {
      if (this.type === 'month') {
        this.whichPanel = 'month'
      } else if (this.type === 'year') {
        this.whichPanel = 'year'
      }
    } else {

    }
  },

  mounted () {

  }
}
</script>

