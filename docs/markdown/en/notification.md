
# Notification

----

The notification will display in the upper right corner of the page, similar to `Message` component. Often used in the following scenes:

- More complex notification
- Interactive notification
- Systematic push

`AT-UI` adds the global object `$Notify` to `Vue.prototype`. You can use the `$Notify` instance directly.

- `this.$Notify(config)`
- `this.$Notify.success(config)`
- `this.$Notify.error(config)`
- `this.$Notify.warning(config)`
- `this.$Notify.info(config)`

The `$Notify` instance receives the following parameters:

- type - the status of Notification
- title - the title of Notification
- message - the content of Notification
- duration - time before auto-dismiss
- showClose - whether to show close button
- icon - customize the icon of Notification
- onClose - specify a function that will be called after the notification closed


## Basic

Only display the title, or title and content, will be closed after `4s`.

:::demo
```html
<p class="demo-desc">this.$Notify({ title: 'Here is Title' })</p>
<at-button @click="open">Open Notification (Title)</at-button>
<p class="demo-desc">this.$Notify({ title: 'Here is Title', message: 'Here is Content~~~' })</p>
<at-button @click="open2">Open Notification (Title and Content)</at-button>

<script>
  export default {
    methods: {
      open () {
        this.$Notify({
          title: 'Here is Title'
        })
      },
      open2 () {
        this.$Notify({
          title: 'Here is Title',
          message: 'Here is Content~~~'
        })
      }
    }
  }
</script>
```
:::


## Customize Duration

Customize message display duration by `duration` property default `4000`. You can close the notification manually by setting `duration` to `0`.

:::demo
```html
<p class="demo-desc">this.$Notify({ title: 'Here is Title', message: 'Here is Content~~~', duration: 2000 })</p>
<at-button @click="open3">Dismiss After 2s</at-button>
<p class="demo-desc">this.$Notify({ title: 'Here is Title', message: 'Here is Content~~~', duration: 0 })</p>
<at-button @click="open4">Dismiss Manually</at-button>

<script>
  export default {
    methods: {
      open3 () {
        this.$Notify({
          title: 'Here is Title',
          message: 'Here is Content~~~',
          duration: 2000
        })
      },
      open4 () {
        this.$Notify({
          title: 'Here is Title',
          message: 'Here is Content~~~',
          duration: 0
        })
      }
    }
  }
</script>
```
:::


## Type of Notification

There are four type of Notification: `success`，`Error`，`Warning`，`Info`

:::demo
```html
<at-button @click="open5('success')">Success</at-button>
<at-button @click="open5('error')">Error</at-button>
<at-button @click="open5('warning')">Warning</at-button>
<at-button @click="open5('info')">Info</at-button>

<script>
  export default {
    methods: {
      open5 (type) {
        this.$Notify({
          title: 'Here is Title',
          message: 'Here is Content~~~',
          type: type
        })
      }
    }
  }
</script>
```
:::


## Use `this.$Notify.success`

:::demo
```html
<p class="demo-desc">this.$Notify.success({ title: 'Here is Title', message: 'Here is Content~~~' })</p>
<at-button @click="open6">Success</at-button>

<script>
  export default {
    methods: {
      open6 () {
        this.$Notify.success({
          title: 'Here is Title',
          message: 'Here is Content~~~'
        })
      }
    }
  }
</script>
```
:::


## Global Click to Close

By default, click the close button to dismiss the notification, or you can use global click mode. The method is to pass `showClose: false`.

:::demo
```html
<at-button @click="open7">Global Click to Close</at-button>

<script>
  export default {
    methods: {
      open7 () {
        this.$Notify({
          title: 'Here is Title',
          message: 'Here is Content~~~',
          showClose: false
        })
      }
    }
  }
</script>
```
:::

## Notification Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | the type of Notification | String | `success`, `error`, `warning`, `info` | `info` |
| title | required, the title of Notification | String | - | - |
| message | the content of Notification | String | - | - |
| duration | time before auto-dismiss, in seconds, default `4000` | Number | - | 4000 |
| showClose | whether to show close button | Boolean | - | true |
| icon | customize the icon of Notification | String | - | - |
| onClose | specify a function that will be called after the notification closed | Function | - | - |

<script>
export default {
  methods: {
    open () {
      this.$Notify({
        title: 'Here is Title'
      })
    },
    open2 () {
      this.$Notify({
        title: 'Here is Title',
        message: 'Here is Content~~~'
      })
    },
    open3 () {
      this.$Notify({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 2000
      })
    },
    open4 () {
      this.$Notify({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        duration: 0
      })
    },
    open5 (type) {
      this.$Notify({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        type: type
      })
    },
    open6 (type) {
      this.$Notify.success({
        title: 'Here is Title',
        message: 'Here is Content~~~'
      })
    },
    open7 () {
      this.$Notify({
        title: 'Here is Title',
        message: 'Here is Content~~~',
        showClose: false
      })
    }
  }
}
</script>
