
# Slider

----

Slider is used to control the value within specified numerical range.

## Basic

Basic slider, use `v-model` to binding value, the range is `0~100` default.

:::demo
```html
<at-slider v-model="value"></at-slider>
```
:::

## Disabled

To make a slider as disabled, add `disabled` property to the Slider.

:::demo
```html
<at-slider v-model="value2" disabled></at-slider>
```
:::

## Customize Range

The minimum and maximum values are set by `min` and `max` properties.

:::demo
```html
<at-slider v-model="value3" :min="20" :max="80"></at-slider>
```
:::

## Discrete Value

Control the interval of slider through the `step` property, the value of interval is `1` by default.

:::demo
```html
<at-slider v-model="value4" :step="10"></at-slider>
```
:::

## Slider Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | the value of slider, use `v-model` to enable a two-way binding | Number | - | - |
| step | the granularity that slider can step through values | Number | - | 1 |
| min | minimum | Number | - | 0 |
| max | maximum | Number | - | 100 |
| disabled | whether slider is disabled | Boolean | - | false |

## Slider Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| change | Emitted when the value of slider changed | value |

<script>
export default {
  data() {
    return {
      value: 0,
      value2: 20,
      value3: 30,
      value4: 50
    }
  }
}
</script>
