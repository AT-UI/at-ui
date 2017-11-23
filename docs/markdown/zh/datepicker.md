# DatePicker 日期选择框

---

<!-- ## 基础用法

:::demo
```html
<at-date-picker>
</at-date-picker>
```
::: -->

<!-- ## 快捷方式

:::demo
```html
<at-date-picker :picker-options="pickerOptions">
</at-date-picker>
```
::: -->

<!-- ## 其他日期单位——月

:::demo
```html
<at-date-picker type="month">
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

## 选择日期范围

:::demo
```html
<at-date-picker type="daterange" class="range">
</at-date-picker>
```
:::

<script>
  export default {
    data () {
      return {
        pickerOptions: {
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
