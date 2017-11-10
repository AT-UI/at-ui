
# Rate

---

Rate component

## Basic

The simplest usage.

:::demo
```html
<at-rate></at-rate>
```
:::

## Show copywriting

Add copywriting in rate component.

:::demo
```html
<at-rate :show-text="true" v-model="value2">
  <span>{{ value2 }} stars</span>
</at-rate>
```
:::

## Other icon

Replace the default star to other icon.

:::demo
```html
<at-rate icon="icon-heart-on"></at-rate>
```
:::

## Half star

Support select half star.

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

## Read only

Read only，can't use mouse to interact.

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


## Rate Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| count | star count | Number | - | 5 |
| value | current value | String | - | 0 |
| allow-half | whether to allow semi selection | Boolean | - | `false` |
| disabled | read only, unable to interact | Boolean | - | `false` |
| icon | to specify the icon | String | - | `icon-star` |
| show-text | whether to display a copywriting | Boolean | - | `false` |

## Rate Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-change | callback when select value | value |
| on-hover-change | callback when hover item | value |

## Rate slot

| Name      | Description |
|----------|-------- |
| - | customize the contents of the copywriting |

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
