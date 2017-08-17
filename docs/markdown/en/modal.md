
# Modal

----

Use `Modal` when you need to ask the user to process transactions, and do not want to jump the page.

You can also use the default lite modal box when you need to popup a concise confirmation box. `AT-UI` adds the global object `$Modal` to `Vue.prototype`. You can use the `$Modal` instance directly.

## Modal Methods

Usage methods below:
- `this.$Modal.alert(config)`
- `this.$Modal.confirm(config)`
- `this.$Modal.prompt(config)`
- `this.$Modal.info(config)`
- `this.$Modal.success(config)`
- `this.$Modal.warning(config)`
- `this.$Modal.error(config)`

## Alert

The Alert dialog will interrupt the user until user knows the information and closes it. It is a relatively interactive operation. (similar to `window.alert`)

You can capture operational feedback in `Promise`, or you can pass the `callback` parameter.

:::demo
```html
<p class="demo-desc">this.$Modal.alert()</p>
<at-button @click="modalAlert">Alert</at-button>

<script>
  export default {
    methods: {
      modalAlert () {
        this.$Modal.alert({
          title: 'Here is Title',
          content: 'Here is Content',
          callback: function (action) {
            this.$Message(action)
          }
        })
      }
    }
  }
</script>
```
:::

## Confirm

Confirm the user whether to continue the operation. (similar to `window.confirm`)

:::demo
```html
<p class="demo-desc">this.$Modal.confirm()</p>
<at-button @click="modalConfirm">Confirm</at-button>

<script>
  export default {
    methods: {
      modalConfirm () {
        this.$Modal.confirm({
          title: 'Tips',
          content: 'This operation needs to be very careful. Are you sure you want to do this?'
        }).then(() => {
          this.$Message('Click \'Confirm\' Button')
        }).catch(() => {
          this.$Message('Click \'Cancel\' Button')
        })
      }
    }
  }
</script>
```
:::

## Prompt

Pop up the input dialog to remind user to enter appropriate content. (similar to `window.prompt`)

:::demo
```html
<p class="demo-desc">this.$Modal.prompt({ title: 'Tips', content: 'Please input your email:' })</p>
<at-button @click="modalPrompt">Prompt</at-button>

<script>
  export default {
    methods: {
      this.$Modal.prompt({
        title: 'Tips',
        content: 'Please input your email:'
      }).then((data) => {
        this.$Message(`Click 'Confirm' Button, input value is ${data.value}`)
      }).catch(() => {
        this.$Message('Click \'Cancel\' Button')
      })
    }
  }
</script>
```
:::

## Message Type

In addition to the `window` dialog above, `AT-UI` also provides four message types of Modal that are used to display important information. These message modal only allows click the OK button to close.

:::demo
```html
<p class="demo-desc">this.$Modal.success()</p>
<at-button @click="handleClick('success')">Success</at-button>
<at-button @click="handleClick('error')">Error</at-button>
<at-button @click="handleClick('warning')">Warning</at-button>
<at-button @click="handleClick('info')">Info</at-button>

<script>
  export default {
    methods: {
      handleClick (type) {
        if (type === 'info') {
          this.$Modal.info({
            content: 'Here is the message of Info'
          })
        } else if (type === 'success') {
          this.$Modal.success({
            content: 'Here is the message of Success'
          })
        } else if (type === 'warning') {
          this.$Modal.warning({
            content: 'Here is the message of Warning'
          })
        } else if (type === 'error') {
          this.$Modal.error({
            content: 'Here is the message of Error'
          })
        }
      }
    }
  }
</script>
```
:::

## Component Mode

As mentioned earlier, you use the `this.$Modal` methods. If you want to customize the Modal, you can use a component-based approach.

:::demo
```html
<at-button @click="modal1=true">Show Customize Modal</at-button>
<at-modal v-model="modal1" title="Here is title" @on-confirm="handleConfirm" @on-cancel="handleCancel">
  <p>Here is the content!</p>
  <p>Here is the content!</p>
</at-modal>

<script>
  export default {
    methods: {
      handleConfirm () {
        this.$Message('Confirm')
      },
      handleCancel () {
        this.$Message('Cancel')
      }
    }
  }
</script>
```
:::

## Customize Style

Customize the header and footer of `Modal` by `slot` property.

:::demo
```html
<at-button @click="modal2=true">Customize header and footer</at-button>
<at-button @click="modal3=true">Without Header</at-button>
<at-modal v-model="modal2">
  <div slot="header" style="text-align:center;">
    <span>Here is Title</span>
  </div>
  <div style="text-align:center;">
    <p>Can you see the contents here?</p>
  </div>
  <div slot="footer">
    <at-button style="width:100%;" type="error" @click="closeModal2">Here is Button</at-button>
  </div>
</at-modal>
<at-modal v-model="modal3">
  <p>Here is Content!</p>
</at-modal>

<script>
  export default {
    methods: {
      closeModal2 () {
        this.modal2 = false
      }
    }
  }
</script>
```
:::

## Disable Closable

- set property `show-close` to `false` can disable the close button and `ESC` key;
- set property `mask-closable` to `false` can disable the close event of mask;

:::demo
```html
<at-button @click="modal4=true">Disabled Close Button and ESC</at-button>
<at-button @click="modal5=true">Disabled Mask Close</at-button>
<at-modal v-model="modal4" title="Title" :show-close="false">Here is content</at-modal>
<at-modal v-model="modal5" title="Title" :show-close="false" :mask-closable="false">Here is content</at-modal>
```
:::

## Customize Position

To customize the style of Modal, add `styles` property.

:::demo
```html
<at-button @click="modal6=true">Only change the position</at-button>
<at-modal v-model="modal6" title="Title" :styles="{top: '20px'}">Here is Content</at-modal>
```
:::

## Modal Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | whether to show Modal, use `v-model` to enable a two-way binding | Boolean | - | false |
| title | title of modal | String | - | - |
| content | content of modal | String | - | - |
| cancelText | content of cancel button | String | - | Cancel |
| okText | content of ok button | String | - | Confirm |
| maskClosable | enable the mask to close the modal | Boolean | - | true |
| showHead | whether to show Head | Boolean | - | true |
| showClose | whether to show Close Button | Boolean | - | true |
| showFooter | whether to show Footer | Boolean | - | true |
| showInput | whether to show Input | Boolean | - | false |
| width | the width of Modal | Number / String | - | `520` |
| closeOnPressEsc | enable the `ESC` key to close Modal | Boolean | - | true |
| styles | customize styles of Modal | Object | - | - |

## Modal Events

| Event Name | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-cancel | Emitted when cancel button clicked | - |
| on-confirm | Emitted when confirm button clicked | - |

## Modal Slots

| Name     | Description          |
|-------- |------------------- |
| header | customize the header of modal |
| footer | customize the footer of modal |
| - | customize the main content of modal |

<script>
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false
      }
    },
    methods: {
      handleClick (type) {
        if (type === 'info') {
          this.$Modal.info({
            content: 'Here is the message of Info'
          })
        } else if (type === 'success') {
          this.$Modal.success({
            content: 'Here is the message of Success'
          })
        } else if (type === 'warning') {
          this.$Modal.warning({
            content: 'Here is the message of Warning'
          })
        } else if (type === 'error') {
          this.$Modal.error({
            content: 'Here is the message of Error'
          })
        }
      },
      modalAlert () {
        this.$Modal.alert({
          title: 'Here is Title',
          content: 'Here is Content',
          callback: action => {
            this.$Message(action)
          }
        })
      },
      modalConfirm () {
        this.$Modal.confirm({
          title: 'Tips',
          content: 'This operation needs to be very careful. Are you sure you want to do this?'
        }).then(() => {
          this.$Message('Click \'Confirm\' Button')
        }).catch(() => {
          this.$Message('Click \'Cancel\' Button')
        })
      },
      modalPrompt () {
        this.$Modal.prompt({
          title: 'Tips',
          content: 'Please input your email:'
        }).then((data) => {
          this.$Message(`Click 'Confirm' Button, input value is ${data.value}`)
        }).catch(() => {
          this.$Message('Click \'Cancel\' Button')
        })
      },
      handleConfirm () {
        this.$Message('Confirm')
      },
      handleCancel () {
        this.$Message('Cancel')
      },
      closeModal2 () {
        this.modal2 = false
      }
    }
  }
</script>
