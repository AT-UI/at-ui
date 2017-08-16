
# Notification 通知提醒

----

在页面的右上角全局显示通知提醒信息，跟 `Message` 有点类似。常用于以下场景：

- 较复杂的通知内容
- 有交互的通知
- 系统的推送

我们在 `Vue.prototype` 中添加了全局对象 `$Notify`，我们可以直接通过 `this.$Notify` 操作实例

- `this.$Notify(config)`
- `this.$Notify.success(config)`
- `this.$Notify.error(config)`
- `this.$Notify.warning(config)`
- `this.$Notify.info(config)`

实例接收如下参数：

- type - 通知提醒的状态
- title - 消息标题
- message - 消息内容
- duration - 自动关闭的延时
- showClose - 是否显示关闭按钮
- icon - 自定义消息提醒的图标
- onClose - 关闭的回调函数


## 基本用法

仅显示标题，或者标题和内容，默认 `4s` 后自动关闭。通知框默认显示关闭按钮

:::demo
```html
<p class="demo-desc">this.$Notify({ title: '这里是标题' })</p>
<at-button @click="open">打开通知（仅标题）</at-button>
<p class="demo-desc">this.$Notify({ title: '这里是标题', message: '这里是内容，文案~~~' })</p>
<at-button @click="open2">打开通知（标题和内容）</at-button>

<script>
  export default {
    methods: {
      open () {
        this.$Notify({
          title: '这里是标题'
        })
      },
      open2 () {
        this.$Notify({
          title: '这里是标题',
          message: '这里是内容，文案~~~'
        })
      }
    }
  }
</script>
```
:::


## 自定义自动关闭的延时

默认是 `4s` 自动关闭，如需手动关闭，则设置延时为 0

:::demo
```html
<p class="demo-desc">this.$Notify({ title: '这里是标题', message: '这里是内容，文案~~~', duration: 2000 })</p>
<at-button @click="open3">两秒关闭</at-button>
<p class="demo-desc">this.$Notify({ title: '这里是标题', message: '这里是内容，文案~~~', duration: 0 })</p>
<at-button @click="open4">手动关闭</at-button>

<script>
  export default {
    methods: {
      open3 () {
        this.$Notify({
          title: '这里是标题',
          message: '这里是内容，文案~~~',
          duration: 2000
        })
      },
      open4 () {
        this.$Notify({
          title: '这里是标题',
          message: '这里是内容，文案~~~',
          duration: 0
        })
      }
    }
  }
</script>
```
:::


## 不同类型的通知提醒

设置参数 `type` 定义不同类型的通知提醒，默认支持四种类型：`success`，`Error`，`Warning`，`Info`

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
          title: '这里是标题',
          message: '这里是内容，文案~~~',
          type: type
        })
      }
    }
  }
</script>
```
:::


## 使用 `this.$Notify.success`

:::demo
```html
<p class="demo-desc">this.$Notify.success({ title: '这里是标题', message: '这里是内容，文案~~~' })</p>
<at-button @click="open6">Success</at-button>

<script>
  export default {
    methods: {
      open6 () {
        this.$Notify.success({
          title: '这里是标题',
          message: '这里是内容，文案~~~'
        })
      }
    }
  }
</script>
```
:::


## 使用全局点击关闭

默认是点击「关闭按钮」关闭通知提醒框，也可以使用全局点击模式，即点击「通知提醒框」关闭。设置方法是传入 `showClose: false`

:::demo
```html
<at-button @click="open7">全局点击关闭</at-button>

<script>
  export default {
    methods: {
      open7 () {
        this.$Notify({
          title: '这里是标题',
          message: '这里是内容，文案~~~',
          showClose: false
        })
      }
    }
  }
</script>
```
:::

## Notification 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 通知提醒的类别 | String | `success`, `error`, `warning`, `info` | `info` |
| title | 必填，通知的标题 | String | - | - |
| message | 通知的内容 | String | - | - |
| duration | 自动关闭的延时，单位为毫秒 | Number | - | 4000 |
| showClose | 是否显示关闭按钮 | Boolean | - | true |
| icon | 自定义消息提醒的 ICON | String | - | - |
| onClose | 关闭通知提醒框时的回调函数 | Function | - | - |

<script>
export default {
  methods: {
    open () {
      this.$Notify({
        title: '这里是标题'
      })
    },
    open2 () {
      this.$Notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~'
      })
    },
    open3 () {
      this.$Notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000
      })
    },
    open4 () {
      this.$Notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 0
      })
    },
    open5 (type) {
      this.$Notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        type: type
      })
    },
    open6 (type) {
      this.$Notify.success({
        title: '这里是标题',
        message: '这里是内容，文案~~~'
      })
    },
    open7 () {
      this.$Notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        showClose: false
      })
    }
  }
}
</script>
