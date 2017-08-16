
# Popover 弹出框

----

## 基本用法

默认显示在正中间，并且以 `click` 方式激活，使用方法跟 `Tooltip` 基本一样

:::demo
```html
<at-popover placement="top" title="Title" content="Top Placement">
  <at-button size="small">点击</at-button>
</at-popover>
<at-popover content="Top Placement" title="Title">
  一段文字
</at-popover>
```
:::

## 更改激活的方式

默认使用 `click` 方式激活，可设置 `trigger` 更换激活方式

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

## 弹出框的位置

设置属性 `placement` 可更改弹出框的位置，默认显示在顶部 `top`

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

## 嵌套内容

除了可以使用属性 `title` 和 `content` 设置弹出框的内容，还可以使用 `slot="title"` 和 `slot="content"` 的方式设置弹出框的嵌套内容

:::demo
```html
<at-popover placement="top" v-model="show" @toggle="toggleShow">
  <at-button size="small">删除</at-button>
  <template slot="content">
    <p>这是一段内容，确定删除吗？</p>
    <div style="text-align: right; margin-top: 8px;">
      <at-button size="smaller" @click="show = false">取消</at-button>
      <at-button type="primary" size="smaller" @click="show = false">确定</at-button>
    </div>
  </template>
</at-popover>
```
:::

## Popover 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 标题文字 | String | - | - |
| content | 提示文字 | String | - | - |
| trigger | 触发的事件类型 | String | `hover`, `focus`, `click` | `click` |
| placement | 弹出框的位置 | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

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
