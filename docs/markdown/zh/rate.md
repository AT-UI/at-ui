
# Rate 评分

---

评分组件

## 基础用法

最简单的用法。

:::demo
```html
<at-rate></at-rate>
```
:::

## 文案展现

给评分组件加上文案展示。

:::demo
```html
<at-rate :show-text="true" v-model="value2">
  <span>{{ value2 }} 星</span>
</at-rate>
```
:::

## 其他图标

可以将星星替换为其他图标。

:::demo
```html
<at-rate icon="icon-heart-on"></at-rate>
```
:::

## 半星

支持选中半星。

:::demo
```html
<div >
  <at-rate
    :allow-half="true"
    :show-text="true"
    :value="value1"
    @on-change="changeHandle">
  </at-rate>
</div>
```
:::

## 只读

只读，无法进行鼠标交互。

:::demo
```html
<div >
  <at-rate
    :allow-half="true"
    :show-text="true"
    :value="value1"
    :disabled="true">
  </at-rate>
</div>
```
:::


## Rate 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| count | star 总数 | Number | - | 5 |
| value | 当前值 | String | - | 0 |
| allow-half | 是否允许选择半颗星 | Boolean | - | `false` |
| disabled | 只读，无法进行交互 | Boolean | - | `false` |
| icon | 指定图标 | String | - | `icon-star` |
| show-text | 实现显示辅助文案 | Boolean | - | `false` |

## Rate 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | star 数目改变时触发 | 改变后的值 |
| on-hover-change | 鼠标在 star 上移动导致数值变化时触发 | 改变后的值 |


## Rate slot

| 名称      | 说明 |
|----------|-------- |
| - | 自定义展示文案的内容 |


<script>
export default {
  data () {
    return {
      value1: 2.5,
      value2: 2
    }
  },
  methods: {
    changeHandle (val) {
      this.$Message.info(`trigger change event: ${val}`)
    }
  }
}
</script>
