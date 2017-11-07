
# Timeline 时间轴

---

## 基础用法

基本的时间轴。

:::demo
```html
  <at-timeline>
    <at-timeline-item
      v-for="(item, index) in list" :key="index">
      <p>{{ item.content }}</p>
    </at-timeline-item>
  </at-timeline>
```
:::

## 圆圈颜色

圆圈颜色，绿色用于已完成、成功状态，红色表示错误状态，黄色表示警告状态，蓝色可表示正在进行或其他默认状态。

:::demo
```html
  <at-timeline>
    <at-timeline-item
      v-for="(item, index) in list" :key="index"
      :color="item.color">
      <p>{{ item.content }}</p>
    </at-timeline-item>
  </at-timeline>
```
:::

## 标记最后一个为幽灵节点

在最后位置添加一个幽灵节点，表示时间轴未完成，还在记录过程中。

:::demo
```html
  <at-timeline :pending="pending">
    <at-timeline-item
      v-for="(item, index) in list" :key="index">
      <p>{{ item.content }}</p>
    </at-timeline-item>
  </at-timeline>
```
:::

## 自定义时间轴点

接受一个 `slot` 来自定义轴点的内容，比如一个图标。

:::demo
```html
  <at-timeline>
    <at-timeline-item
      v-for="(item, index) in list" :key="index"
      :color="item.color">
      <i slot="dot" class="icon" :class="item.icon"></i>
      <p>{{ item.content }}</p>
    </at-timeline-item>
  </at-timeline>
```
:::

## Timeline 参数

| 参数    | 说明         | 类型      | 可选值              | 默认值   |
|-------- |------------ |---------- |-----------------  |-------- |
| pending | 指定最后一个节点是否为幽灵节点 | Boolean | - | false |

## TimelineItem 参数

| 参数    | 说明         | 类型      | 可选值              | 默认值   |
|-------- |------------ |---------- |-----------------  |-------- |
| color | 圆圈颜色 | String | `blue`、`red`、`green`、`yellow` | `blue` |

## TimelineItem slot

| 名称      | 说明 |
|----------|-------- |
| dot | 替换圈圈 |
| 无 | 主要内容 |


<script>
export default {
  data () {
    return {
      list: [
        { content: '刷牙洗脸', color: 'blue', icon: 'icon-github' },
        { content: '吃早餐', color: 'green', icon: 'icon-zap' },
        { content: '上班', color: 'red', icon: 'icon-award' },
        { content: '睡觉', color: 'yellow', icon: 'icon-watch' }
      ],
      pending: true
    }
  }
}
</script>
