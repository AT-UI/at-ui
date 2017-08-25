# Tag 标签

----

## 基本标签

设置 `closable` 属性可给标签添加关闭按钮，点击关闭按钮触发 `on-close` 事件，按钮不包含逻辑，如需删除 `tag`，请自行添加关闭逻辑

:::demo
```html
<at-tag>标签一</at-tag>
<at-tag>标签二</at-tag>
<at-tag>标签三</at-tag>
<at-tag name="标签四" closable v-if="show" @on-close="handleClose">标签四</at-tag>
```
:::

## 各种颜色的标签

内置六种颜色的标签，如需其他颜色的标签，可设置 `color` 属性的值为十六进制的色值，例如 `color="#6190E8"`

:::demo
```html
<at-tag color="default">标签一</at-tag>
<at-tag color="primary">标签二</at-tag>
<at-tag color="success">标签三</at-tag>
<at-tag color="error">标签四</at-tag>
<at-tag color="warning">标签五</at-tag>
<at-tag color="info">标签六</at-tag>
<at-tag color="#ecefce">#ecefce</at-tag>
```
:::

## API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于触发关闭事件时的回调 | Boolean | — | false |
| color | 类型 | String / Hex | 可传入十六进制颜色值，或者 `default`, `primary`, `success`, `error`, `warning`, `info` | default |
| closable | 是否可关闭 | Boolean | — | false |

## Tag 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-close | 点击关闭按钮时触发 | event |

<script>
  export default {
    data () {
      return {
        show: true
      }
    },
    methods: {
      handleClose (evt, name) {
        this.$Message.info(`关闭标签 - ${name}`)
        this.show = false
      }
    }
  }
</script>
