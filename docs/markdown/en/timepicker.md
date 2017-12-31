# TimePicker

----

## Basic

Click TimePicker, and then we could select or input a time in panel.

:::demo
```html
<at-time-picker @on-change="changeHandle">
</at-time-picker>
```
:::



## Under Control

`value` and `on-change` should be used together,

:::demo
```html
<at-time-picker
  :value="inputValue"
  @on-change="changeHandle"
  @on-open-change="toggleOpenHandle">
</at-time-picker>
```
:::


## Disabled

A disabled state of the TimePicker.

:::demo
```html
<at-time-picker :disabled="true">
</at-time-picker>
```
:::


## Disabled Time

Make part of time unselectable by `disabled-hours` `disabled-minutes` `disabled-seconds`, and we even can hide those unselectable options by `hide-disabled-options`.

:::demo
```html
<at-time-picker
  :disabled-hours="[0, 1, 2, 3]"
  placeholder="Select time"
  @on-change="changeHandle"
  @on-open-change="toggleOpenHandle">
</at-time-picker>
```
:::


## Steps

You can set the interval of hours, minutes, and seconds by `steps` property. The value corresponds to hours, minutes and seconds.

:::demo
```html
<at-time-picker :steps="[1, 5, 15]" value="12:03:04">
</at-time-picker>
```
:::



## Hour and minute

While part of `format` is omitted, the corresponding column in panel will disappear, too.

:::demo
```html
<at-time-picker format="HH:mm">
</at-time-picker>
```
:::



## Three Sizes

The input box comes in three sizes. large is used in the form, while the medium size is the default.

:::demo
```html

<div class="size-group">
  <at-time-picker format="HH:mm" size="small"></at-time-picker>
  <at-time-picker format="HH:mm" size="normal"></at-time-picker>
  <at-time-picker format="HH:mm" size="large"></at-time-picker>
</div>

```
:::


## Addon

Render addon contents to timepicker panel's bottom.

:::demo
```html
<at-time-picker
  :value="inputValue"
  :open="open"
  @on-change="changeHandle"
  @on-open-change="toggleOpenHandle">
  <div style="text-align: center">
    <at-button size="small" @click="inputValue=''">reset</at-button>
    <at-button type="primary" size="small" @click="open=false">confirm</at-button>
  </div>
</at-time-picker>
```
:::


## TimePicker Props

| Property      | Description   | Type      | Accepted Values         | Default  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| value | to set time | String | - | - |
| format | to set the time format | String | - | 'HH:mm:ss' |
| size | The size of TimePicker. Optional value | String | `large`, `normal`, `small` | 'normal' |
| open | whether to popup panel | Boolean | - | false |
| placeholder | display when there's no value | String | - | 'Select time' |
| allowClear | allow clearing text | Boolean | - | true |
| clearText | clear tooltip of icon | String | - | 'clear' |
| steps | Interval of hours, minutes, and seconds. For example, set [1, 15], the minutes will be displayed as 00, 15, 30, 45. | Array | - | [1, 1, 1] |
| disabled | determine whether the TimePicker is disabled | Boolean | - | false |
| disabledHours | to specify the hours that cannot be selected | Array | - | [] |
| disabledMintues | to specify the minutes that cannot be selected	 | Array | - | [] |
| disabledSeconds | to specify the seconds that cannot be selected | Array | - | [] |
| hideDisabledOptions | hide the options that can not be selected	 | Boolean | - | false |



## TimePicker Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-change | a callback function, can be executed when the selected time is changing | `moment object` and formatted time string like 12:00:00  |
| on-open-change | a callback function which will be called while panel opening/closing | true / false |

## TimePicker Slots

| Name     | Description          |
|-------- |------------------- |
| - | called from timepicker panel to render some addon to its bottom |

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
