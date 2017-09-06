
# Steps

---

评分组件

## 基础用法

默认不区分颜色。

:::demo
```html
<at-rate>
</at-rate>
```
:::

## 文案展现

给评分组件加上文案展示。

:::demo
```html
<at-rate :show-text="true">
</at-rate>
```
:::

## 其他字符

可以将星星替换为其他字符，比如字母、数字、字体图标甚至中文。

:::demo
```html
<at-rate icon="icon-heart">
</at-rate>
```
:::

<!--## 半星

支持选中半星

:::demo
```html
<div >
  <at-rate :allow-half="true" :value="value1" v-on:change="changeHandle">
  </at-rate>
</div>
```
:::-->


<script>
export default {
  data () {
    return {
      value1: 2,
      value2: null
    }
  },
  methods: {
    changeHandle (val) {
      console.log('trigger change event: ', val)
    }
  },
  mounted () {

  }
}
</script>
