
# InputNumber 数字输入框

----

### 基础用法

支持传入 `step` 精度，以及指定取值范围 `max` , `min`

:::demo

```html
<at-input-number v-model="num"></at-input-number><br>
<at-input-number :min="0" :max="5"></at-input-number>
```

:::

### 不可用状态

:::demo

```html
<at-input-number disabled></at-input-number>
```

:::

### 小数输入

传入 `step` 精度可以是小数

:::demo

```html
<at-input-number v-model="num" :step="0.3" :min="1"></at-input-number><br>
```

:::

### 格式化展示

### 不同尺寸

:::demo

```html
<at-input-number></at-input-number>
<at-input-number size="small"></at-input-number>
<at-input-number size="smaller"></at-input-number>
```

:::

### InputNumber 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 输入框尺寸 | string | normal, small, smaller | normal |
| step | 每次改变的数目 | Number | - | 1 |
| min | 最小值 | Number | - | Infinity |
| max | 最大值 | Number | - | Infinity |
| disabled | 是否禁用 | Boolean | - | false |

### InputNumber 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 绑定的值有变化时触发 | 输入框的值 |

<script>
export default {
  data() {
    return {
      num: 2
    }
  }
}
</script>
