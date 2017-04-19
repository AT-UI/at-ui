
# Popover 弹出框

---

### 基本用法

默认显示在正中间，`click` 激活，使用方法跟 `Tooltip` 基本一样

:::demo

```html
<at-popover placement="top" title="Title" content="Top Placement">
  <at-button size="small">点击</at-button>
</at-popover>
<at-popover content="Top Placement" title="Title" style="margin-left: 25px;">
  一段文字
</at-popover>
<at-popover placement="right" content="Top Placement" style="margin-left: 25px;">
  <at-button size="small">点击</at-button>
</at-popover>
```

:::

### 更改激活的方式

:::demo

```html
<at-popover trigger="hover" content="Top Placement">
  <at-button size="small">Hover</at-button>
</at-popover>
<at-popover trigger="hover" title="Title" content="Top Placement">
  <at-button size="small">Hover</at-button>
</at-popover>
```

:::

### 嵌套内容

:::demo

```html
<at-popover placement="top" v-model="show" @toggle="toggleShow">
  <at-button>删除</at-button>
  <template slot="content">
    <p>这是一段内容，确定删除吗？</p>
    <div style="text-align: right; margin-top: 6px;">
      <at-button size="smaller" @click="show = false">取消</at-button>
      <at-button type="primary" size="smaller" @click="show = false">确定</at-button>
    </div>
  </template>
</at-popover>
```

:::

### Popover 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| Title | 标题文字 | String | - | - |
| content | 提示文字 | String | - | - |
| trigger | 触发的事件类型 | String | `hover`, `focus`, `click` | click |
| placement | 气泡框位置 | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | top |


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
