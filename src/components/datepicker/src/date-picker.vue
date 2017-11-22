<template>
  <div class="at-date-picker">
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
    <div class="at-date-picker__dropdown">
      <div class="at-date-picker__aside" v-if="isShowAside">
        <button type="button" class="at-date-picker__shortcut"
          v-for="(item, index) in pickerOptions.shortcuts" :key="index"
          @click="clickShortcutsHandle(item)">
          {{ item.text }}
        </button>
      </div>
      <template v-if="type === 'date'">
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
            <table v-if="whichPanel === 'date'" class="at-date-picker__date-panel"
              ref="date-table">
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
      <template v-else-if="type === 'daterange'">

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
      optionValue: this.getInitCurVal() || moment(),
      whichPanel: 'date', // 'year month date'
      optionYearListLength: 10,
      optionMonthList: this.formatOptionMonthList(),
      isShowClearBtn: false,
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
      type: String,
      default: '请选择日期'
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
    }
  },

  computed: {
    isShowAside () {
      if (this.pickerOptions && this.pickerOptions.shortcuts && this.pickerOptions.shortcuts.length > 0) {
        return true
      } else {
        return false
      }
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
    curYear () {
      return this.curValue.year()
    },
    curMonth () {
      // 0 ~ 1
      return this.curValue.month()
    },
    curDate () {
      // 1 ~ 31
      return this.curValue.date()
    },
    optionYear () {
      return moment.isMoment(this.optionValue)
        ? this.optionValue.year()
        : moment().year()
    },
    optionMonth () {
      return moment.isMoment(this.optionValue)
        ? this.optionValue.month()
        : moment().month()
    },
    optionDate () {
      return moment.isMoment(this.optionValue)
        ? this.optionValue.date()
        : moment().date()
    },
    dayCells () {
      // 上一个月的最后一天
      var lastDayOfLastMonth = moment(this.optionValue).subtract(1, 'month').endOf('month').date()
      // 当月的第一天
      var firstDayOfMonth = moment(this.optionValue).startOf('month')
      // 当月的最后一天
      var endDayOfMonth = moment(this.optionValue).endOf('month').date()
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

          if (i === 0 && j < weekOfFirstDay) {
            dayCells[i].push({
              isPrevMonth: true,
              date: lastDayOfLastMonth - weekOfFirstDay + j + 1
            })
          } else {
            if (dayOfCurMonth <= endDayOfMonth) {
              dayCells[i].push({
                isCurMotnh: true,
                date: dayOfCurMonth++
              })
            } else {
              dayCells[i].push({
                isNextMonth: true,
                date: dayOfNextMonth++
              })
            }
          }
        }
      }

      return dayCells
    }
  },

  watch: {
    curValue (val) {
      if (moment(val).isValid()) {
        this.optionValue = moment(val)
      } else {
        this.optionValue = moment()
      }
    }
  },

  methods: {
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
      console.log('clearValueHandle')
      this.isShowClearBtn = false
      if (this.type === 'daterange') {
        this.curValue = ['', '']
      } else {
        this.curValue = null
      }
    },
    checkIsCurrentYear (year) {
      if (this.curValue.year() === year) {
        return true
      }
    },
    checkIsCurrentMonth (month) {
      if (this.curValue.month() === month) {
        return true
      }
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
      if (opts.isCurMotnh && opts.date === new Date().getDate()) {
        return moment().isSame(moment({
          year: this.optionYear,
          month: this.optionMonth,
          day: opts.date
        }), 'day')
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
      for (var i = 0; i < months.length / 4; i++) {
        result[i] = []
        for (var j = 0; j < 4; j++) {
          result[i][j] = months[i * 4 + j] + '月'
        }
      }
      return result
    },
    confirmYearHandle (year) {
      this.optionValue = moment(this.optionValue.year(year))
      if (['date', 'month'].indexOf(this.type) > -1) {
        this.whichPanel = 'month'
      } else {
        this.curValue = moment(this.optionValue)
      }
    },
    confirmMonthHandle (month) {

      this.optionValue = moment(this.optionValue.month(month))

      if (this.type === 'date') {
        this.whichPanel = 'date'
      }
      if (this.type === 'month') {
        this.curValue = moment(this.optionValue)
      }
    },
    confirmDateHandle (opts, row, event) {
      let date = opts.date
      let isPrevMonth = opts.isPrevMonth
      let isNextMonth = opts.isNextMonth

      if (this.type === 'date') {
        if (isPrevMonth) {
          this.optionValue.subtract(1, 'months')
        } else if (isNextMonth) {
          this.optionValue.add(1, 'months')
        }
        this.optionValue = moment(this.optionValue.date(date))
        this.curValue = moment(this.optionValue)
      }
    },
    getInitCurVal () {
      if (this.type === 'daterange') {
        return [moment(this.value[0], moment(this.value[1]))]
      } else {
        const date = moment(this.value, this.format)
        return date.isValid()
          ? date
          : null
      }
    },
    prevYearHandle () {
      if (this.whichPanel === 'year') {
        this.optionValue = moment(this.optionValue.subtract(10, 'years'))
      } else {
        this.optionValue = moment(this.optionValue.subtract(1, 'years'))
      }
    },
    prevMonthHandle () {
      this.optionValue = moment(this.optionValue.subtract(1, 'months'))
    },
    nextMonthHandle () {
      this.optionValue = moment(this.optionValue.add(1, 'months'))
    },
    nextYearHandle () {
      if (this.whichPanel === 'year') {
        this.optionValue = moment(this.optionValue.add(10, 'years'))
      } else {
        this.optionValue = moment(this.optionValue.add(1, 'years'))
      }
    },
  },

  created () {
    if (this.type === 'month') {
      this.whichPanel = 'month'
    } else if (this.type === 'year') {
      this.whichPanel = 'year'
    }
  },

  mounted () {

  }
}
</script>

