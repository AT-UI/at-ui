
# Popover

----

## Basic

Display in the middle and activated in `click` event by default, similar to `Tooltip` component.

:::demo
```html
<at-popover placement="top" title="Title" content="Top Placement">
  <at-button size="small">Click</at-button>
</at-popover>
<at-popover content="Top Placement" title="Title">
  Please click on me!
</at-popover>
```
:::

## Two Ways to Trigger

Use `trigger` property to change the way of trigger. Default is `click`.

:::demo
```html
<at-popover trigger="click" content="Top Placement">
  <at-button size="small">Click</at-button>
</at-popover>
<at-popover trigger="hover" title="Title" content="Top Placement">
  <at-button size="small">Hover</at-button>
</at-popover>
```
:::

## Placement

Specify the position of Popover by `placement` property. Default is `top`.

:::demo
```html
<at-popover trigger="hover" content="Top Placement">
  <at-button size="small">Top</at-button>
</at-popover>
<at-popover trigger="hover" content="Top Placement" placement="bottom">
  <at-button size="small">Bottom</at-button>
</at-popover>
<at-popover trigger="hover" content="Top Placement" placement="left">
  <at-button size="small">Left</at-button>
</at-popover>
<at-popover trigger="hover" content="Top Placement" placement="right">
  <at-button size="small">Right</at-button>
</at-popover>
```
:::

## Nested Content

In addition to using the properties `title` and `content`, you can also use `slot="title"` and `slot="content"` to set the nested content of popover.

:::demo
```html
<at-popover placement="top" v-model="show" @toggle="toggleShow">
  <at-button size="small">Delete</at-button>
  <template slot="content">
    <p>This is part of the content, sure to delete it?</p>
    <div style="text-align: right; margin-top: 8px;">
      <at-button size="smaller" @click="show = false">Cancel</at-button>
      <at-button type="primary" size="smaller" @click="show = false">Sure</at-button>
    </div>
  </template>
</at-popover>
```
:::

## Popover Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | the title of popover | String | - | - |
| content | the content of popover | String | - | - |
| trigger | the way to trigger | String | `hover`, `focus`, `click` | `click` |
| placement | the position of popover | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

<style lang="scss" scoped>
.at-popover + .at-popover {
  margin-left: 16px;
}
</style>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleShow(status) {
      this.show = status
    }
  }
}
</script>
