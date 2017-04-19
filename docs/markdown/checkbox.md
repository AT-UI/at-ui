
# Checkbox 多选框

----

### 基本多选框

独立使用时，需要独自绑定到 `model`

:::demo

```html
<at-checkbox v-model="checkboxValue" label="深圳">深圳</at-checkbox>
<at-checkbox v-model="checkboxValue" label="北京">北京</at-checkbox>
<at-checkbox v-model="checkboxValue" label="广州">广州</at-checkbox>
<at-checkbox v-model="checkboxValue" label="上海" disabled>上海</at-checkbox>
<at-checkbox v-model="checkboxValue" label="凹凸实验室" disabled checked>凹凸实验室</at-checkbox>
```

:::

### 禁用的多选框

添加 `disabled` 属性

:::demo

```html
<at-checkbox v-model="checkboxValue2" label="上海" disabled>上海</at-checkbox>
<at-checkbox v-model="checkboxValue2" label="凹凸实验室" disabled checked>凹凸实验室</at-checkbox>
```

:::

### 多选框组

适用于多个多选框绑定到同一个 `model` 的情景

:::demo

```html

<at-checkbox-group v-model="checkboxValue3">
  <at-checkbox label="深圳">深圳</at-checkbox>
  <at-checkbox label="北京">北京</at-checkbox>
  <at-checkbox label="上海">上海</at-checkbox>
  <at-checkbox label="广州" disabled>广州</at-checkbox>
  <at-checkbox label="凹凸实验室" disabled>凹凸实验室</at-checkbox>
</at-checkbox-group>

```

:::

### 全选

### Checkbox 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 选中状态的值 | string | - | - |
| name | 原生的 name 属性 | string | - | - |
| disabled | 按钮禁用 | boolean | - | false |
| checked | 是否已勾选 | boolean | - | false |

### Checkbox-Group 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 绑定的值有变化时触发 | 选择的按钮的 label 值 |

<script>
export default {
  data() {
    return {
      checkboxValue: ['深圳'],
      checkboxValue2: ['深圳'],
      checkboxValue3: ['深圳', '凹凸实验室']
    }
  }
}
</script>
