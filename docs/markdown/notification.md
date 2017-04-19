
# Notification 通知提醒

---

在页面的右上角全局显示通知提醒信息，跟 `Alert` 有点类似。常用于以下场景：
- 较复杂的通知内容
- 有交互的通知
- 系统的推送


### 基本用法

仅显示标题，或者显示标题和内容，默认 `4s` 后自动关闭

:::demo

```html
<at-button size="small" @click="open">打开通知（仅标题）</at-button>
<at-button size="small" @click="open2">打开通知（标题和内容）</at-button>
```

:::


### 自定义自动关闭的延时

默认是 `4s` 自动关闭，如需手动关闭，则设置延时为 0

:::demo

```html
<at-button size="small" @click="open3">两秒关闭</at-button>
<at-button size="small" @click="open4">手动关闭</at-button>
```

:::


### 不同类型的通知提醒

分四种状态

:::demo

```html
<at-button size="small" @click="open5('info')">Info</at-button>
<at-button size="small" @click="open5('success')">Success</at-button>
<at-button size="small" @click="open5('error')">Error</at-button>
<at-button size="small" @click="open5('warning')">Warning</at-button>
```

:::

### 使用全局点击关闭

默认是点击「关闭按钮」关闭通知提醒框，也可以使用全局点击模式，即点击「通知提醒框」关闭

:::demo

```html
<at-button size="small" @click="open7">全局点击关闭</at-button>
```

:::


### 显示通知类型的 ICON

通知提醒框左侧有类型ICON

:::demo

```html
<at-button size="small" @click="open6('info')">Info</at-button>
<at-button size="small" @click="open6('success')">Success</at-button>
<at-button size="small" @click="open6('error')">Error</at-button>
<at-button size="small" @click="open6('warning')">Warning</at-button>
```

:::


### Alert 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 通知提示的类别 | string | `success`, `error`, `warning`, `info` | `info` |
| title | 必填，通知的标题 | string | - | - |
| message | 通知的内容 | string | - | - |
| duration | 自动关闭的延时，默认为 `4000` | number | - | 4000 |
| showIcon | 是否显示通知类别的ICON | boolean | - | false |
| showClose | 是否显示关闭按钮 | boolean | - | true |
| icon | 自定义类别ICON | string | - | 'info' |
| onClose | 关闭通知提醒框时的回调函数 | function | - | - |


<script>
export default {
  methods: {
    open() {
      this.$notify({
        title: '这里是标题'
      })
    },
    open2() {
      this.$notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~'
      })
    },
    open3() {
      this.$notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 2000
      })
    },
    open4() {
      this.$notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        duration: 0
      })
    },
    open5(type) {
      this.$notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        type: type
      })
    },
    open6(type) {
      this.$notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        type: type,
        showIcon: true
      })
    },
    open7() {
      this.$notify({
        title: '这里是标题',
        message: '这里是内容，文案~~~',
        showIcon: true,
        showClose: false
      })
    }
  }
}
</script>
