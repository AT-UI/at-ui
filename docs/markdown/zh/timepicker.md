# TimePicker 时间选择框

----

## 基础用法

点击 TimePicker，然后可以在下拉框中选择或者输入某一时间。

:::demo
```html
<at-time-picker @on-change="changeHandle">
</at-time-picker>
```
:::



## 受控组件

`value` 和 `on-change` 需要配合使用。

:::demo
```html
<at-time-picker
  :value="inputValue"
  @on-change="changeHandle"
  @on-open="toggleOpenHandle">
</at-time-picker>
```
:::


## 禁用

禁用时间选择。

:::demo
```html
<at-time-picker :disabled="true">
</at-time-picker>
```
:::


## 禁止选项

可以使用 `disabled-hours` `disabled-minutes` `disabled-seconds` 组合禁止用户选择某个时间，配合 `hide-disabled-options` 可以直接把不可选择的项隐藏。

:::demo
```html
<at-time-picker
  :disabled-hours="[0, 1, 2, 3]"
  placeholder="请选择时间哦"
  @on-change="changeHandle"
  @on-open="toggleOpenHandle">
</at-time-picker>
```
:::


## 时间间隔

通过 `steps` 属性可以设置时间间隔。数组的三项分别对应小时、分钟、秒。

:::demo
```html
<at-time-picker :steps="[1, 5, 15]" value="12:03:04">
</at-time-picker>
```
:::



## 选择时分

TimePicker 浮层中的列会随着 `format` 变化，当略去 `format` 中的某部分时，浮层中对应的列也会消失。

:::demo
```html
<at-time-picker format="HH:mm">
</at-time-picker>
```
:::



## 三种大小

三种大小的输入框，默认为 `normal`。

:::demo
```html

<div class="size-group">
  <at-time-picker format="HH:mm" size="small"></at-time-picker>
  <at-time-picker format="HH:mm" size="normal"></at-time-picker>
  <at-time-picker format="HH:mm" size="large"></at-time-picker>
</div>

```
:::


## 附加内容

在 TimePicker 选择框底部显示自定义的内容。

:::demo
```html
<at-time-picker
  :value="inputValue"
  :open="open"
  @on-change="changeHandle"
  @on-open-change="toggleOpenHandle">
  <div style="text-align: center">
    <at-button size="small" @click="inputValue=''">清空</at-button>
    <at-button type="primary" size="small" @click="confirmHandle">确定</at-button>
  </div>
</at-time-picker>
```
:::


## TimePicker 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| value | 指定当前组件的 value 值，可通过 `v-model` 绑定 | String | - | - |
| format | 时间格式 | String | - | 'HH:mm:ss' |
| size | 设置时间选择框的尺寸 | String | `large`, `normal`, `small` | 'normal' |
| open | 下拉框是否打开 | Boolean | - | false |
| placeholder | 时间选择框的占位文案 | String | - | '请选择时间' |
| allowClear | 是否展示清除按钮 | Boolean | - | true |
| clearText | 清除按钮的文案 | String | - | 'clear' |
| steps | 下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。 | Array | - | [1, 1, 1] |
| disabled | 禁用全部操作 | Boolean | - | false |
| disabledHours | 禁止选择部分小时选项 | Array | - | [] |
| disabledMintues | 禁止选择部分分钟选项 | Array | - | [] |
| disabledSeconds | 禁止选择部分秒选项 | Array | - | [] |
| hideDisabledOptions | 隐藏禁止选择的选项 | Boolean | - | false |



## TimePicker 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 时间发生变化的回调 | `moment对象` 和格式化后的时间，如 12:00:00  |
| on-open-change | 下拉框打开/关闭时的回调 | true / false |

## TimePicker Slots

| 名称     | 说明          |
|-------- |------------------- |
| - | 下拉框底部显示自定义的内容 |

<script>

export default {
  data() {
    return {
      inputValue: '12:03:04',
      open: true,
      format: 'HH:mm:ss'
    }
  },
  methods: {
    changeHandle (val, valOfString) {
      console.log('newValue', val, valOfString)
      this.inputValue = valOfString
    },
    toggleOpenHandle (val) {
      console.log('isOpen', val)
      this.open = val
    },
    confirmHandle () {
      console.log('confirm')
      console.log('this.open', this.open )
      this.open = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .at-time-picker {
    width: 200px;
  }
  .size-group {
    .at-time-picker {
      width: 165px;
      display: inline-block;
    }
  }
</style>
