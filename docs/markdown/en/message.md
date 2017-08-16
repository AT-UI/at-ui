
# Message

----

Compared to `Notification`, `Message` is lighter,, centered at the top of the page, and used to display global messages, such as the feedback of operations.

- Provide four type of Message: `success`, `Error`, `Warning`, `Info`
- Showing and disappearing at the center of the top is a lightweight cue that does not interrupt user operations.

`AT-UI` adds the global object `$Message` to `Vue.prototype`. You can use the `$Message` instance directly.

- `this.$Message(config)`
- `this.$Message.info(config)`
- `this.$Message.success(config)`
- `this.$Message.warning(config)`
- `this.$Message.error(config)`
- `this.$Message.loading(config)`

## Basic

There are four type of Message: `success`, `error`, `warning`, `info`.

:::demo
```html
<at-button @click="handleClick('info')">Info</at-button>
<at-button @click="handleClick('success')">Success</at-button>
<at-button @click="handleClick('warning')">Warning</at-button>
<at-button @click="handleClick('error')">Error</at-button>

<script>
  export default {
    methods: {
      handleClick (type) {
        if (type === 'info') {
          this.$Message.info('This is a info message!')
        } else if (type === 'success') {
          this.$Message.success('This is a success message!')
        } else if (type === 'warning') {
          this.$Message.warning('This is a warning message!')
        } else if (type === 'error') {
          this.$Message.error('This is a error message!')
        }
      }
    }
  }
</script>
```
:::

## Customize Duration

Customize message display duration by `duration` property default `3s`.

:::demo
```html
<at-button @click="changeDuration">Customize Duration</at-button>

<script>
  export default {
    methods: {
      changeDuration () {
        this.$Message.info({
          message: 'This is a tooltip that will be closed after 10s automatically.',
          duration: 10000
        })
      }
    }
  }
</script>
```
:::

## Message of Loading

`this.$Message.loading` return the method of close, which can be used to close manually.

:::demo
```html
<at-button @click="showLoading">Loading...</at-button>

<script>
  export default {
    methods: {
      showLoading () {
        const loading = this.$Message.loading({
          message: 'Loading...',
          duration: 0
        })
        setTimeout(loading, 3000)
      }
    }
  }
</script>
```
:::

## Message Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | the type of Message | String | `success`, `error`, `warning`, `info` | `info` |
| message | the content of Message | String | - | - |
| duration | time before auto-dismiss, in seconds, default `3000` | Number | - | 3000 |
| icon | customize the icon of Message | String | - | `info` |
| onClose | specify a function that will be called after the message closed | Function | - | - |

<script>
  export default {
    methods: {
      handleClick (type) {
        if (type === 'info') {
          this.$Message.info('This is a info message!')
        } else if (type === 'success') {
          this.$Message.success('This is a success message!')
        } else if (type === 'warning') {
          this.$Message.warning('This is a warning message!')
        } else if (type === 'error') {
          this.$Message.error('This is a error message!')
        }
      },
      changeDuration () {
        this.$Message.info({
          message: 'This is a tooltip that will be closed after 10s automatically.',
          duration: 10000
        })
      },
      showLoading () {
        const loading = this.$Message.loading({
          message: 'Loading...',
          duration: 0
        })
        setTimeout(loading, 3000)
      }
    }
  }
</script>


