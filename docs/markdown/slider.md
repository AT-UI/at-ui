
# Slider 滑动输入条

----

### 基础用法

滑动型的输入条，用来展示当前值和可选范围，可以为连续或离散的值

:::demo

```html
<at-slider v-model="value"></at-slider>
```

:::

### 不可用状态

### 初始化起始值

:::demo

```html
<at-slider v-model="value2"></at-slider>
```

:::

### 自定义取值范围

:::demo

```html
<at-slider v-model="value3" :min="20" :max="80"></at-slider>
```

:::

### Slider 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| step | 步长 | Number | - | 1 |
| min | 最小值 | Number | - | Infinity |
| max | 最大值 | Number | - | Infinity |
| disabled | 是否禁用 | Boolean | - | false |

### Slider 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 绑定的值有变化时触发 | 改变后的值 |

<script>
export default {
  data() {
    return {
      value: 0,
      value2: 20,
      value3: 30
    }
  }
}
</script>
