
# Tooltips 文字提示

---

### 基本用法

默认显示在正中间

:::demo

```html
<at-tooltip placement="top" content="Top Placement">
  <at-button>按钮</at-button>
</at-tooltip>
<at-tooltip content="Top Placement" style="margin-left: 25px;">
  一段文字
</at-tooltip>
```

:::


### 不同的展示方向

提供9种不同的方向展示信息

:::demo

```html
<div class="show-box">
  <div class="top row col-md-12 flex-center">
    <at-tooltip class="item" content="Top Left 提示文字" placement="top-left"><span>TL</span></at-tooltip>
    <at-tooltip class="item" content="Top 提示文字" placement="top"><span>Top</span></at-tooltip>
    <at-tooltip class="item" content="Top Right 提示文字" placement="top-right"><span>TR</span></at-tooltip>
  </div>
  <div class="center row col-md-12 flex-between">
    <div class="left col-md-2">
      <at-tooltip class="item" content="Left Top 提示文字" placement="left-top"><span>LT</span></at-tooltip>
      <at-tooltip class="item" content="Left 提示文字" placement="left"><span>Left</span></at-tooltip>
      <at-tooltip class="item" content="Left Bottom 提示文字" placement="left-bottom"><span>LB</span></at-tooltip>
    </div>
    <div class="right col-md-2">
      <at-tooltip class="item" content="Right Top 提示文字" placement="right-top"><span>RT</span></at-tooltip>
      <at-tooltip class="item" content="Right 提示文字" placement="right"><span>Right</span></at-tooltip>
      <at-tooltip class="item" content="Right Bottom 提示文字" placement="right-bottom"><span>RB</span></at-tooltip>
    </div>
  </div>
  <div class="bottom row col-md-12 flex-center">
    <at-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-left"><span>BL</span></at-tooltip>
    <at-tooltip class="item" content="Bottom 提示文字" placement="bottom"><span>Bottom</span></at-tooltip>
    <at-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-right"><span>BR</span></at-tooltip>
  </div>
</div>
```

:::

### Tooltip 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | 提示文字 | String | - | - |
| placement | 气泡框位置 | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | top |

<style lang="scss" scoped>
.show-box {
  max-width: 600px;
}
.top,
.bottom {
  padding: 20px;
  width: 100%;

  .item + .item {
    margin-left: 30px;
  }
}
.center {
  width: 100%;

  .item + .item {
    margin-top: 20px;
  }
}
.left {
  flex-direction: column;
}
.at-tooltip.item {
  display: flex;
}
.item > span {
  display: inline-block;
  width: 60px;
  height: 32px;
  line-height: 32px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all .3s;

  &:hover {
    color: #a0c1ff;
    border-color: #a0c1ff;
  }
}
</style>
