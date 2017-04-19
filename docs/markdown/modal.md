
# Modal 模态框

----

模态对话框，当需要询问用户处理事务，又不希望跳转页面时，可以使用模态框 `Modal` 在当前页面打开一个浮层并承载相应的操作。

当需要弹出一个简洁的确认框时，我们可以使用默认的精简版模态框。我们在 `Vue.prototype` 中添加了全局对象 `$Modal`，我们可以直接通过 `this.$Modal` 操作实例

### Modal 实例方法

通过调用 `this.$Modal` 的方法来使用：
- `this.$Modal.alert(config)`
- `this.$Modal.confirm(config)`
- `this.$Modal.prompt(config)`
- `this.$Modal.info(config)`
- `this.$Modal.success(config)`
- `this.$Modal.warning(config)`
- `this.$Modal.error(config)`

### 消息提醒

弹出会中断用户的对话框，直到用户知晓该信息之后才可以关闭，属于交互比较重的操作。（类似于 `window.alert`）

:::demo

```html
<at-button size="small" @click="handleClick('alert')">Alert</at-button>
```

:::

### 确认消息

对用户操作的一个反馈，用于确定使用是否需要继续操作。（类似于 `window.confirm`）

:::demo

```html
<at-button size="small" @click="handleClick('confirm')">Confirm</at-button>
```

:::

### 提交信息

弹出输入对话框，提醒用户输入相应内容。（类似于 `window.prompt`）

:::demo

```html
<at-button size="small" @click="handleClick('prompt')">Prompt</at-button>
```

:::

### 消息类的对话框

除了上述的类 `window` 对话框，`AT-UI` 还提供了四种消息类的对话框，主要用来展示一些重要信息。该类的对话框仅允许点击「确定」按钮关闭，不支持其他关闭方式

:::demo

```html
<at-button size="small" @click="handleClick('info')">消息</at-button>
<at-button size="small" @click="handleClick('success')">成功</at-button>
<at-button size="small" @click="handleClick('warning')">警告</at-button>
<at-button size="small" @click="handleClick('error')">错误</at-button>
```

:::

### 组件化方式调用

前面提到的是通过 `this.$Modal` 的方法来使用，如果要自定义对话框，可使用组件化的方式

:::demo

```html
<at-button size="small" @click="modal1=true">显示自定义模态框</at-button>
<at-modal v-model="modal1" title="这里是标题" @on-confirm="handleConfirm" @on-cancel="handleCancel">
  <p>这里是模态框的文本内容!</p>
  <p>这里是模态框的文本内容!</p>
</at-modal>
```

:::

### 自定义样式

`Modal` 组件提供了自定义页头、页脚的 `slot`，可灵活的控制对话框的样式结构。通过与其他组件的交互，可实现复杂的功能需求。

:::demo

```html
<at-button size="small" @click="modal2=true">自定义页头和页脚</at-button>
<at-button size="small" @click="modal3=true">不带标题</at-button>
<at-modal v-model="modal2">
  <div slot="header" style="text-align:center;">
    <span>这里是标题</span>
  </div>
  <div style="text-align:center;">
    <p>能看到这里的内容吗？</p>
  </div>
  <div slot="footer">
    <at-button size="small" style="width:100%;" type="error" @click="closeModal2">这里是按钮</at-button>
  </div>
</at-modal>
<at-modal v-model="modal3">
  <p>这里是模态框的文本内容!</p>
</at-modal>
```

:::

### 禁用关闭

:::demo

```html
<at-button size="small" @click="modal4=true">禁用右上角关闭按钮（含 ESC）</at-button>
<at-button size="small" @click="modal5=true">取消遮罩层关闭</at-button>
<at-modal v-model="modal4" title="标题" :show-close="false">这里是文本</at-modal>
<at-modal v-model="modal5" title="标题" :show-close="false" :mask-closable="false">这里是文本</at-modal>
```

:::

### 自定义窗口位置

:::demo

```html
<at-button size="small" @click="modal6=true">仅改变距离顶部的位置</at-button>
<at-button size="small" @click="modal7=true">垂直居中（添加自定义的 class）</at-button>
<at-modal v-model="modal6" title="标题" :styles="{top: '10px'}">这里是文本内容</at-modal>
<at-modal v-model="modal7" title="标题" class="modal-vertical">这里是文本内容</at-modal>
```

:::

<script>
  export default {
    data () {
      return {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false
      }
    },
    methods: {
      handleClick (type) {
        if (type === 'alert') {
          this.$Modal.alert({
            title: '这里是标题名称',
            content: '这里是文本内容'
          })
        } else if (type === 'confirm') {
          this.$Modal.confirm({
            title: '提示',
            content: '此操作需要非常谨慎，您确定要这么做吗？'
          }).then(() => {
            console.log('confirm')
          }).catch(() => {
            console.log('cancel')
          })

        } else if (type === 'prompt') {
          this.$Modal.prompt({
            title: '提示',
            content: '请输入邮件地址：'
          })
        } else if (type === 'info') {
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
      handleConfirm () {
        console.log('Confirm')
      },
      handleCancel () {
        console.log('Cancel')
      },
      closeModal2 () {
        this.modal2 = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal-vertical {
    .at-modal__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .at-modal {
      top: 0;
    }
  }
</style>
