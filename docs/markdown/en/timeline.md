
# Timeline

---

## Basic

Basic timeline.

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

## Circle Colors

Set the color of circles. green means completed or success status, red means error, yellow means warning, and blue means ongoing or other default status.

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

## Last Item

When the timeline is incomplete and ongoing, put a ghost item at last.

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

## Custom Timeline Items

Accepts a `slot` to customize the timeline item's content, such as the icon.

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

## Timeline Props

| Property    | Description         | Type      | Accepted Values | Default  |
|-------- |------------ |---------- |-----------------  |-------- |
| pending | to specify whether the last node is a ghost node | Boolean | - | false |

## TimelineItem Props

| Property    | Description         | Type      | Accepted Values | Default  |
|-------- |------------ |---------- |-----------------  |-------- |
| color | circle color | String | `blue`、`red`、`green`、`yellow` | `blue` |

## TimelineItem slot

| Name      | Description |
|----------|-------- |
| dot | custom defined timeline item content |
| None | main content |


<script>
export default {
  data () {
    return {
      list: [
        { content: 'brush teeth and wash face', color: 'blue', icon: 'icon-github' },
        { content: 'have breakfast', color: 'green', icon: 'icon-zap' },
        { content: 'work', color: 'red', icon: 'icon-award' },
        { content: 'sleep', color: 'yellow', icon: 'icon-watch' }
      ],
      pending: true
    }
  }
}
</script>
