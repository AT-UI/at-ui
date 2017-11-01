
# Checkbox 多选框

----

## 基本多选框

独立使用时，需要单独绑定 `model`

:::demo
```html
<at-checkbox v-model="checkboxValue1" label="深圳">深圳</at-checkbox>
<p class="demo-desc">{{ checkboxValue1 }}</p>
```
:::

## 不可用的多选框

添加 `disabled` 属性禁用多选框

:::demo
```html
<at-checkbox v-model="checkboxValue2" label="深圳" disabled>深圳</at-checkbox>
<at-checkbox v-model="checkboxValue3" label="凹凸实验室" disabled checked>凹凸实验室</at-checkbox>
```
:::

## 多选框组

适用于多个多选框绑定同一个 `model` 的情景

:::demo
```html
<at-checkbox-group v-model="checkboxValue4">
  <at-checkbox label="深圳">深圳</at-checkbox>
  <at-checkbox label="北京">北京</at-checkbox>
  <at-checkbox label="上海">上海</at-checkbox>
  <at-checkbox label="广州" disabled>广州</at-checkbox>
  <at-checkbox label="凹凸实验室" disabled>凹凸实验室</at-checkbox>
</at-checkbox-group>
<p class="demo-desc">{{ checkboxValue4 }}</p>
```
:::

## Checkbox 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选中状态的值 | String | - | - |
| disabled | 是否禁用按钮 | Boolean | - | false |
| checked | 是否已勾选 | Boolean | - | false |

## Checkbox 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 绑定的值变化时触发 | 选中的按钮的 label 值 |

## Checkbox Group 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 绑定的值变化时触发 | 选中的按钮的 label 值 |

<script>
export default {
  data() {
    return {
      checkboxValue1: true,
      checkboxValue2: false,
      checkboxValue3: false,
      checkboxValue4: ['深圳', '凹凸实验室']
    }
  }
}
</script>
