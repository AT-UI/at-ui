
# Modal 模态框

----

模态对话框，当需要询问用户处理事务，又不希望跳转页面时，可以使用模态框 `Modal` 在当前页面打开一个浮层并承载相应的操作。

当需要弹出一个简洁的确认框时，也可以使用默认的精简版模态框。`AT-UI` 在 `Vue.prototype` 中添加了全局对象 `$Modal`，可以直接通过 `this.$Modal` 对象操作实例方法

## Modal 实例方法

通过调用 `this.$Modal` 的方法来使用：
- `this.$Modal.alert(config)`
- `this.$Modal.confirm(config)`
- `this.$Modal.prompt(config)`
- `this.$Modal.info(config)`
- `this.$Modal.success(config)`
- `this.$Modal.warning(config)`
- `this.$Modal.error(config)`

## 消息提醒

弹出会中断用户的对话框，直到用户知晓该信息之后才可以关闭，属于交互比较重的操作。（类似于 `window.alert`）

可以用 `Promise` 的方式捕获操作反馈，也可以用传入 `callback` 参数的方式

:::demo
```html
<p class="demo-desc">this.$Modal.alert()</p>
<at-button @click="modalAlert">Alert</at-button>

<script>
  export default {
    methods: {
      modalAlert () {
        this.$Modal.alert({
          title: '这里是标题名称',
          content: '这里是文本内容',
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

## 确认消息

对用户操作的一个反馈，用于确定是否需要继续操作。（类似于 `window.confirm`）

:::demo
```html
<p class="demo-desc">this.$Modal.confirm()</p>
<at-button @click="modalConfirm">Confirm</at-button>

<script>
  export default {
    methods: {
      modalConfirm () {
        this.$Modal.confirm({
          title: '提示',
          content: '此操作需要非常谨慎，您确定要这么做吗？'
        }).then(() => {
          this.$Message('点击了「确认」按钮')
        }).catch(() => {
          this.$Message('点击了「取消」按钮')
        })
      }
    }
  }
</script>
```
:::

## 提交信息

弹出输入对话框，提醒用户输入相应内容。（类似于 `window.prompt`）

:::demo
```html
<p class="demo-desc">this.$Modal.prompt({ title: '提示', content: '请输入邮件地址：' })</p>
<at-button @click="modalPrompt">Prompt</at-button>

<script>
  export default {
    methods: {
      modalPrompt () {
        this.$Modal.prompt({
          title: '提示',
          content: '请输入邮件地址：'
        }).then((data) => {
          this.$Message(`点击了「确认」按钮，输入框的值为 ${data.value}`)
        }).catch(() => {
          this.$Message('点击了「取消」按钮')
        })
      }
    }
  }
</script>
```
:::

## 消息类的对话框

除了上述的类 `window` 对话框，`AT-UI` 还提供了四种消息类的对话框，主要用来展示一些重要信息。该类的对话框仅允许点击「确定」按钮关闭，不支持其他关闭方式

:::demo
```html
<p class="demo-desc">this.$Modal.success()</p>
<at-button @click="handleClick('success')">成功</at-button>
<at-button @click="handleClick('error')">错误</at-button>
<at-button @click="handleClick('warning')">警告</at-button>
<at-button @click="handleClick('info')">消息</at-button>

<script>
  export default {
    methods: {
      handleClick (type) {
        if (type === 'info') {
          this.$Modal.info({
            content: '这里是提示的消息'
          })
        } else if (type === 'success') {
          this.$Modal.success({
            content: '这里是成功的消息'
          })
        } else if (type === 'warning') {
          this.$Modal.warning({
            content: '这里是警告的消息'
          })
        } else if (type === 'error') {
          this.$Modal.error({
            content: '这里是错误的消息'
          })
        }
      }
    }
  }
</script>
```
:::

## 组件化方式调用

前面提到的是通过 `this.$Modal` 的方法来使用，如果要自定义对话框，可使用组件化的方式

:::demo
```html
<at-button @click="modal1=true">显示自定义模态框</at-button>
<at-modal v-model="modal1" title="这里是标题" @on-confirm="handleConfirm" @on-cancel="handleCancel">
  <p>这里是模态框的文本内容!</p>
  <p>这里是模态框的文本内容!</p>
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

## 自定义样式

`Modal` 组件提供了自定义页头、页脚的 `slot`，可灵活的控制对话框的样式结构。通过与其他组件的交互，可实现复杂的功能需求。

:::demo
```html
<at-button @click="modal2=true">自定义页头和页脚</at-button>
<at-button @click="modal3=true">不带标题</at-button>
<at-modal v-model="modal2">
  <div slot="header" style="text-align:center;">
    <span>这里是标题</span>
  </div>
  <div style="text-align:center;">
    <p>能看到这里的内容吗？</p>
  </div>
  <div slot="footer">
    <at-button style="width:100%;" type="error" @click="closeModal2">这里是按钮</at-button>
  </div>
</at-modal>
<at-modal v-model="modal3">
  <p>这里是模态框的文本内容!</p>
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

## 禁用关闭

- 设置属性 `show-close` 为 `false` 可取消右上角的关闭按钮以及键盘的 `ESC` 键；
- 设置属性 `mask-closable` 为 `false` 可取消遮罩层的点击关闭事件；

:::demo
```html
<at-button @click="modal4=true">禁用右上角关闭按钮（含 ESC）</at-button>
<at-button @click="modal5=true">取消遮罩层关闭</at-button>
<at-modal v-model="modal4" title="标题" :show-close="false">这里是文本</at-modal>
<at-modal v-model="modal5" title="标题" :show-close="false" :mask-closable="false">这里是文本</at-modal>
```
:::

## 自定义窗口位置

通过属性 `styles` 传入 `CSS Style Object`，可更改弹框的样式

:::demo
```html
<at-button @click="modal6=true">仅改变距离顶部的位置</at-button>
<at-modal v-model="modal6" title="标题" :styles="{top: '20px'}">这里是文本内容</at-modal>
```
:::

## Modal 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 是否显示模态框，可通过 `v-model` 绑定 | Boolean | - | false |
| title | 模态框的标题 | String | - | - |
| content | 模态框的内容 | String | - | - |
| cancelText | 取消按钮的文本 | String | - | 取消 |
| okText | 确定按钮的文本 | String | - | 确定 |
| maskClosable | 点击遮罩层是否可以关闭模态框 | Boolean | - | true |
| showHead | 是否显示标题 | Boolean | - | true |
| showClose | 是否显示关闭按钮 | Boolean | - | true |
| showFooter | 是否显示底部按钮 | Boolean | - | true |
| showInput | 是否显示输入框 | Boolean | - | false |
| width | 模态框的宽度 | Number / String | - | `520` |
| closeOnPressEsc | 点击 `ESC` 是否可以关闭模态框 | Boolean | - | true |
| styles | 模态框的自定义样式 | Object | - | - |

## Modal 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| on-cancel | 点击取消的回调事件 | - |
| on-confirm | 点击确定的回调事件 | - |

## Modal Slots

| 名称     | 说明          |
|-------- |------------------- |
| header | 自定义模态框的头部 |
| footer | 自定义模态框的底部，即底部按钮部分 |
| - | 自定义模态框的主体内容 |

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
            content: '这里是提示的消息'
          })
        } else if (type === 'success') {
          this.$Modal.success({
            content: '这里是成功的消息'
          })
        } else if (type === 'warning') {
          this.$Modal.warning({
            content: '这里是警告的消息'
          })
        } else if (type === 'error') {
          this.$Modal.error({
            content: '这里是错误的消息'
          })
        }
      },
      modalAlert () {
        this.$Modal.alert({
          title: '这里是标题名称',
          content: '这里是文本内容',
          callback: action => {
            this.$Message(action)
          }
        })
      },
      modalConfirm () {
        this.$Modal.confirm({
          title: '提示',
          content: '此操作需要非常谨慎，您确定要这么做吗？'
        }).then(() => {
          this.$Message('点击了「确认」按钮')
        }).catch(() => {
          this.$Message('点击了「取消」按钮')
        })
      },
      modalPrompt () {
        this.$Modal.prompt({
          title: '提示',
          content: '请输入邮件地址：'
        }).then((data) => {
          this.$Message(`点击了「确认」按钮，输入框的值为 ${data.value}`)
        }).catch(() => {
          this.$Message('点击了「取消」按钮')
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
