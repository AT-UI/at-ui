
# Badge

----

## Independent Use

Do not wrap any elements, similar to the `Tag` component.

:::demo
```html
<at-badge :value="3"></at-badge>
<at-badge :value="23"></at-badge>
<at-badge :value="199"></at-badge>
```
:::

## Content

Content can be either digital or text.

:::demo
```html
<at-badge value="new"></at-badge>
<at-badge value="hot"></at-badge>
```
:::

## Status

To specify different status of badge, add `status` property to the Badge.<br>
There are four status of Badge: `primary`, `success`, `warning`, `info`.

:::demo
```html
Primary <at-badge value="123"></at-badge><br>
Success <at-badge value="123" status="success"></at-badge><br>
Warning <at-badge value="123" status="warning"></at-badge><br>
Info <at-badge value="123" status="info"></at-badge>
```
:::

## Maximum

Use `max-num` property to customize the maximum of Badge, exceed the maximum value will display as `+`.

:::demo
```html
<at-badge :value="123" :max-num="99"></at-badge>
```
:::

## Combination Usage

Combine with other components to display the amount of messages.

:::demo
```html
<at-badge value="3">
  <at-button>Reply</at-button>
</at-badge>
<at-badge :value="111" :max-num="99">
  <at-button>Reply</at-button>
</at-badge>
<at-badge value="new">
  <at-button>Reply</at-button>
</at-badge>
```
:::

## Red Badge

This will simply display a red badge without a specific count.

:::demo
```html
<at-badge :value="12" dot></at-badge>
<at-badge :value="12" dot>
  <at-button>Reply</at-button>
</at-badge>
<at-badge :value="12" dot>
  <i class="icon icon-inbox"></i>
</at-badge>
<at-badge :value="12" dot>
  <span>Message</span>
</at-badge>
```
:::

## Dynamic

The count will be animated as it changes.

:::demo
```html
<at-badge :value="num" :max-num="12">
  <span class="badge-example"></span>
</at-badge>
<at-badge :value="num" :show="show" dot>
  <span class="badge-example"></span>
</at-badge>
<br>
<at-button-group size="small">
  <at-button @click="num -= 1">-</at-button>
  <at-button @click="num += 1">+</at-button>
</at-button-group>
<at-button size="small" @click="toggleDot">{{show ? 'Hide' : 'Show'}} Badge</at-button>
```
:::

## Badge Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | the content of Badge | String / Number | - | - |
| maxNum | maximum value, exceed the maximum will display as `+` | Number | - | 99 |
| dot | whether show red badge | Boolean | - | false |
| status | type of Badge | String | `success`, `warning`, `info` | - |
| show | whether show Badge | Boolean | - | true |

<script>
export default {
  data() {
    return {
      num: 3,
      show: true
    }
  },
  methods: {
    toggleDot() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  .badge-example {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: #EEE;
    cursor: pointer;
  }
  .at-badge + .at-badge {
    margin-left: 24px;
  }
</style>

