# DatePicker

---

## Basic

:::demo
```html
<div class="row at-row">
  <at-date-picker
    v-model="value"
    :weeks-name="weeksNameEN"
    :option-month-name="optionMonthName"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="month"
    placeholder="Select month"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="year"
    format="YYYY"
    placeholder="Select year"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    :value="['2017-12-31', '2018-01-01']"
    :placeholder="['Start date', 'End date']"
    range-separator="-"

    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
```
:::


## Three Sizes

:::demo
```html
<div class="row at-row">
  <at-date-picker
    v-model="value"
    size="large"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    v-model="value"
    size="normal"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    v-model="value"
    size="small"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    size="large"
    :placeholder="['Start date', 'End date']"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    size="normal"
    :placeholder="['Start date', 'End date']"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    size="small"
    :placeholder="['Start date', 'End date']"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
```
:::


## Disabled

:::demo
```html
<div class="row at-row">
  <at-date-picker :disabled="true"></at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    size="normal"
    :placeholder="['Start date', 'End date']"
    :disabled="true"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
```
:::


## Disabled Date

:::demo
```html
<div class="row at-row">
  <at-date-picker
    :disabled-date="disabledDate"></at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="month"
    :disabled-date="disabledMonth"></at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="year"
    :disabled-date="disabledYear"></at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    :disabled-date="disabledDate">

  </at-date-picker>
</div>
```
:::

## Quick Options

:::demo
```html
<div class="row at-row">
  <at-date-picker
    :value="tomorrow"
    :shortcuts="shortcuts"
    :disabled-date="disabledToDay"
    @on-change="changeHandle">
  </at-date-picler>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    :shortcuts="shortcutsOfRange">
</div>
```
:::

## Extra Footer

:::demo
```html
<div class="row at-row">
  <at-date-picker>
    <p>Extra Footer</p>
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker type="daterange">
    <p>Extra Footer</p>
  </at-date-picker>
</div>
```
:::


## DatePicker Props

| Property    | Description    | Type      | Accepted Values          | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| type | type of the picker | String | `date`, `year`, `month`, `daterange` | `'date'` |
| value | any value can be parsed by moment.js
 | String / Number / Array | - | - |
| format | set the date format, refer to moment.js | String | - | `'YYYY-MM-DD'` |
| size | determine the size of the input box | String | `large`, `normal`, `small` | `'normal'` |
| open | open state of picker | Boolean | - | false |
| placeholder | placeholder of input |  String in non-range mode, Array in range mode  | - | `['Start Date', 'End Date']` in range mode，`'Select Date'` in non-range mode |
| allowClear | Whether to show clear button | Boolean | - | true |
| clearText | clear tooltip of icon | String | - | `'clear'` |
| autoClose | Whether to close the panel after the selection | Boolean | - | true |
| showToday | Whether to display the "today" sign | Boolean | - | true |
| readonly | whether DatePicker is read only | Boolean | - | false |
| disabled | whether DatePicker is disabled | Boolean | - | false |
| shortcuts | a { text, onClick } object array to set shortcut options | object[] | - | [] |
| disabledDate | a function determining if a date is disabled with that date as its parameter. Should return a Boolean | Function | - | - |
| rangeSeparator | range separator | String | - | `'-'` |


## DatePicker Events

| Event Name     | Description   | Return Value  |
|---------- |-------------- |---------- |
| on-change | a callback function, can be executed when the selected date is changing | moment object and formatted date string like `'2018-01-01'`  |
| on-open-change | a callback function which will be called while panel opening/closing | true / false |

## DatePicker Slots

| Name     | Description          |
|-------- |------------------- |
| - | called from datepicker panel to render some addon to its bottom |

<script>
  export default {
    data () {
      return {
        size: 'normal', // large small
        value: '2016-12-12',
        tomorrow: '',
        weeksNameEN: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        optionMonthName: ['Jan', 'Feb', 'Mar', 'Ari', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        shortcutsOfRange: [{
          text: 'Last week',
          value () {
            const start = new Date()
            const end = new Date()

            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6)
            return [start, end]
          },
          onClick () {
            console.log('Quick option——Last week')
          }
        }, {
          text: 'Last month',
          value () {
            const start = new Date()
            const end = new Date()

            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
          onClick () {
            console.log('Quick option——Last month')
          }
        }],
        shortcuts: [{
          text: 'Today',
          value () {
            let date = new Date()
            date.setHours(0, 0, 0, 0)
            return date
          },
          onClick () {
            console.log('Quick option——Today')
          }
        }, {
          text: 'Yesterday',
          value () {
            var date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
          onClick () {
            console.log('Quick option——Yesterday')
          }
        }, {
          text: 'Last week',
          value () {
            var date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          }
        }]
      }
    },
    methods: {
      disabledToDay (current) {
        let date = new Date()
        date.setHours(0, 0, 0, 0)
        // console.log(current.valueOf(), date.valueOf(), date, current.format('YYYY-MM-DD'), current.valueOf() === date.valueOf())
        return current && current.valueOf() === date.valueOf()
      },
      disabledDate (current) {
        let date = new Date()
        date.setHours(0, 0, 0, 0)
        return current && current.valueOf() < date
      },
      disabledMonth (current) {
        let date = new Date()
        date = date.setDate(1)
        date = new Date(date).setHours(0, 0, 0, 0)
        return current && current.valueOf() < date
      },
      disabledYear (current) {
        let date = new Date()
        date = date.setMonth(0, 1)
        date = new Date(date).setHours(0, 0, 0, 0)
        return current && current.valueOf() < date
      },
      openChangeHandle (val) {
        console.log('open change:', val)
      },
      changeHandle (val, valStr) {
        console.log('value change:', val, valStr)
      }
    },
    created () {
      let date = new Date()
      date.setTime(date.getTime() + 3600 * 1000 * 24)
      this.tomorrow = date
    }
  }
</script>
<style lang="scss">
  .at-row {
    margin-bottom: 12px;
  }
  .at-date-picker {
    &__input {
      width: 300px;
    }
  }

  .range {
    width: 350px;
  }
</style>
