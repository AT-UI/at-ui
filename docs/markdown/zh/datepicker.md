# DatePicker 日期选择框

---

## 基础用法

:::demo
```html
<div class="row at-row">
  <at-date-picker
    v-model="value"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="month"
    format="YYYY年MM月"
    placeholder="请选择年月"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="year"
    format="YYYY年"
    placeholder="请选择年份"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    :value="['2017-12-31', '2018-01-01']"
    :placeholder="['开始日期', '结束日期']"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
```
:::


## 三种大小

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
    :placeholder="['开始日期', '结束日期']"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    size="normal"
    :placeholder="['开始日期', '结束日期']"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    size="small"
    :placeholder="['开始日期', '结束日期']"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
```
:::


## 禁用

:::demo
```html
<div class="row at-row">
  <at-date-picker :disabled="true"></at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker
    type="daterange"
    size="normal"
    :placeholder="['开始日期', '结束日期']"
    :disabled="true"
    @on-open-change="openChangeHandle"
    @on-change="changeHandle">
  </at-date-picker>
</div>
```
:::


## 不可选择日期

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

## 预设范围

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

## 额外的页脚

:::demo
```html
<div class="row at-row">
  <at-date-picker>
    <p>额外的页脚</p>
  </at-date-picker>
</div>
<div class="row at-row">
  <at-date-picker type="daterange">
    <p>额外的页脚</p>
  </at-date-picker>
</div>
```
:::


## DatePicker 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| type | 指定日期类型 | String | `date`, `year`, `month`, `daterange` | `'date'` |
| value | 指定当前组件的 value 值，选择范围时，可通过 `v-model` 绑定 | String / Number / Array 等任意能被 moment 解析的值 | - | - |
| format | 解析和展示的日期格式 | String | - | `'YYYY-MM-DD'` |
| size | 设置日期选择框的尺寸 | String | `large`, `normal`, `small` | `'normal'` |
| open | 下拉框是否打开 | Boolean | - | false |
| placeholder | 时间选择框的占位文案 | 选择范围时为 Array，其余为 String  | - | 日期范围为 `['开始日期', '结束日期']`，其余为 `'请选择日期'` |
| allowClear | 是否展示清除按钮 | Boolean | - | true |
| clearText | 清除按钮的文案 | String | - | `'clear'` |
| autoClose | 选择后是否自动收起下拉框 | Boolean | - | true |
| showToday | 是否显示当天标识 | Boolean | - | true |
| readonly | 是否为可读状态 | Boolean | - | false |
| disabled | 是否为禁用状态 | Boolean | - | false |
| shortcuts | 指定预定义的快捷选项 | Array | - | [] |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | Function | - | - |
| rangeSeparator | 选择范围时的分隔符 | String | - | `'至'` |


## DatePicker 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 时间发生变化的回调 | `moment对象` 和格式化后的日期，如 `'2018-01-01'`  |
| on-open-change | 下拉框打开/关闭时的回调 | true / false |

## DatePicker Slots

| 名称     | 说明          |
|-------- |------------------- |
| - | 下拉框底部显示自定义的内容 |

<script>
  export default {
    data () {
      return {
        size: 'normal', // large small
        value: '2016-12-12',
        tomorrow: '',
        shortcutsOfRange: [{
          text: '最近一周',
          value () {
            const start = new Date()
            const end = new Date()

            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6)
            return [start, end]
          },
          onClick () {
            console.log('快捷方式——最近一周')
          }
        }, {
          text: '最近30天',
          value () {
            const start = new Date()
            const end = new Date()

            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          },
          onClick () {
            console.log('快捷方式——最近一个月')
          }
        }],
        shortcuts: [{
          text: '今天',
          value () {
            let date = new Date()
            date.setHours(0, 0, 0, 0)
            return date
          },
          onClick () {
            console.log('快捷方式——今天')
          }
        }, {
          text: '昨天',
          value () {
            var date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          },
          onClick () {
            console.log('快捷方式——昨天')
          }
        }, {
          text: '一周前',
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
