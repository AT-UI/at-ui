# Tag

----

## Basic Tag

To make a tag get close button, add `closable` property to `Tag`. Trigger `on-close` event when the button clicked.

:::demo
```html
<at-tag>Tag One</at-tag>
<at-tag>Tag Two</at-tag>
<at-tag>Tag Three</at-tag>
<at-tag name="Tag Four" closable v-if="show" @on-close="handleClose">Tag Four</at-tag>
```
:::

## With Color Tendency

Tag with color tendency gives different types. Set property `color`. It also provide Hex value, such as `color="#6190E8"`.

:::demo
```html
<at-tag color="default">Tag One</at-tag>
<at-tag color="primary">Tag Two</at-tag>
<at-tag color="success">Tag Three</at-tag>
<at-tag color="error">Tag Four</at-tag>
<at-tag color="warning">Tag Five</at-tag>
<at-tag color="info">Tag Six</at-tag>
<at-tag color="#ecefce">#ecefce</at-tag>
```
:::

## Tag Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the name of tag used for close event | Boolean | — | false |
| color | type | String / Hex | Hex value or `default`, `primary`, `success`, `error`, `warning`, `info` | default |
| closable | can be closed | Boolean | — | false |

## Tag Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-close | Emitted when closed | event |

<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {
      handleClose (evt, name) {
        this.$Message.info(`Close Tag - ${name}`)
        this.show = false
      }
    }
  }
</script>
