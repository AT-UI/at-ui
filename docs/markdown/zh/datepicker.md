# DatePicker 日期选择框

---

## 基础用法

:::demo
```html
<at-date-picker
  v-model="value"
  :disabled-date="disabledDate"
  :shortcuts="shortcuts"
  :disabled="false"
  :show-today="true"
  @on-open-change="openChangeHandle"
  @on-change="changeHandle">
</at-date-picker>
```
:::

<!-- ## 快捷方式

:::demo
```html
<at-date-picker :shortcuts="shortcuts">
</at-date-picker>
```
::: -->

<!-- ## 其他日期单位——月

:::demo
```html
<at-date-picker
  type="date"
  :disabled-date="disabledDate"
  format="YYYY-MM-DD"
  :open="false"
  :shortcuts="shortcuts"
  size="large"
  :disabled="true">
</at-date-picker>
<at-date-picker
  type="date"
  :disabled-date="disabledDate"
  format="YYYY-MM-DD"
  :open="false"
  :shortcuts="shortcuts">
</at-date-picker>
<at-date-picker
  type="date"
  :disabled-date="disabledDate"
  format="YYYY-MM-DD"
  :open="false"
  :shortcuts="shortcuts"
  size="small">
</at-date-picker>
```
::: -->

<!-- ## 其他日期单位——年

:::demo
```html
<at-date-picker type="year">
</at-date-picker>
```
::: -->

<!-- ## 选择日期范围

:::demo
```html
<at-date-picker type="daterange" class="range" :shortcuts="shortcusOfRange" :disabled-date="disabledDate">
</at-date-picker>
```
::: -->

<script>
  export default {
    data () {
      return {
        value: '2016-12-12',
        shortcusOfRange: [{
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
            return new Date()
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
    }
  }
</script>
<style lang="scss">
  .at-date-picker {
    &__input {
      width: 300px;
    }
  }

  .range {
    width: 350px;
  }
</style>
