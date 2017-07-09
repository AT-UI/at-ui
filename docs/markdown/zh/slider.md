
# Slider 滑动输入条

----

滑动输入条，用于控制用户在规定的数值区间内进行选择

## 基础用法

基本滑动条，通过 `v-model` 绑定数据，默认取值范围为 `0~100`

:::demo
```html
<at-slider v-model="value"></at-slider>
```
:::

## 不可用状态

设置属性 `disabled` 禁用滑动条

:::demo
```html
<at-slider v-model="value2" disabled></at-slider>
```
:::

## 自定义取值范围

通过属性 `min`， `max` 分别设置最小和最大可取值

:::demo
```html
<at-slider v-model="value3" :min="20" :max="80"></at-slider>
```
:::

## 离散值

可通过属性 `step` 控制每次滑动的间隔，默认间隔为 `1`

:::demo
```html
<at-slider v-model="value4" :step="10"></at-slider>
```
:::

## Slider 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 当前的值，可通过 `v-model` 绑定 | Number | - | - |
| step | 步长 | Number | - | 1 |
| min | 最小值 | Number | - | 0 |
| max | 最大值 | Number | - | 100 |
| disabled | 是否禁用 | Boolean | - | false |

## Slider 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 绑定的值有变化时触发 | 改变后的值 |

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
