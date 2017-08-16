
# InputNumber

----

## Basic

Supports specifies precision by property `step`, and specifies the range by `max` and `min`. The default `step` takes integer 1.

:::demo
```html
<p class="demo-desc">Basic InputNumber</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <at-input-number v-model="num"></at-input-number><br>
  </div>
</div>
<p class="demo-desc">With range，min=0, max=5</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <at-input-number :min="0" :max="5"></at-input-number>
  </div>
</div>
```
:::

## Disabled

To make a inputnumber box as disabled, add `disabled` property to the `InputNumber`

:::demo
```html
<div class="row no-gutter">
  <div class="col-md-4">
    <at-input-number disabled></at-input-number>
  </div>
</div>
```
:::

## Decimals

A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the `step` prop.

:::demo
```html
<p class="demo-desc">step=0.3, min=1</p>
<div class="row no-gutter">
  <div class="col-md-4">
    <at-input-number v-model="num2" :step="0.3" :min="1"></at-input-number>
  </div>
</div>
```
:::

## Size

There are three sizes of an InputNumber box: `large`，`normal`，`small`.

:::demo
```html
<div class="row">
  <div class="col-sm-12 col-md-4">
    <at-input-number size="small"></at-input-number>
  </div>
  <div class="col-sm-12 col-md-4">
    <at-input-number></at-input-number>
  </div>
  <div class="col-sm-12 col-md-4">
    <at-input-number size="large"></at-input-number>
  </div>
</div>
```
:::

## InputNumber Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | value of inputnumber，can binding with `v-model` | Number | - | - |
| size | size of inputnumber | String | `small`, `normal`, `large` | normal |
| step | The number to which the current value is increased or decreased. It can be an integer or decimal | Number | - | 1 |
| min | min value | Number | - | -Infinity |
| max | max value | Number | - | Infinity |
| disabled | whether inputnumber is disabled | Boolean | - | false |
| readonly | same as native input | Boolean | - | false |
| autofocus | same as native input | Boolean | - | false |

## InputNumber Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| focus | Emitted when focus | event |
| blur | Emitted when blur | event |
| change | Emitted when the value of input is changed | the value of input |

<script>
export default {
  data() {
    return {
      num: 2,
      num2: 1
    }
  }
}
</script>
