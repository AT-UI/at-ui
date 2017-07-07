
# Tooltips 文字提示

----

文字提示框类似于 `HTML` 的 `title` 属性，当鼠标悬浮在元素上方时，会出现一个文字提示框

## 基本用法

鼠标悬停时，文字提示框默认显示在顶上的位置

:::demo
```html
<at-tooltip placement="top" content="提示信息">
  <at-button>按钮</at-button>
</at-tooltip>
<at-tooltip content="提示信息"><span>一段文字</span></at-tooltip>
```
:::

## 自定义文字提示的内容

可通过 `slot="content"` 的方式设置文字提示的内容

:::demo
```html
<at-tooltip>
  <span>文字提示</span>
  <template slot="content">
    <p>文字1</p>
    <p>文字2</p>
  </template>
</at-tooltip>
```
:::

## 不同的展示方向

`placement` 属性可设置文字提示框出现的位置，默认提供9种不同的方向

:::demo
```html
<div class="show-box">
  <div class="top row col-md-16 flex-center">
    <at-tooltip class="item" content="Top Left 提示文字" placement="top-left"><at-button>上左</at-button></at-tooltip>
    <at-tooltip class="item" content="Top 提示文字" placement="top"><at-button>上边</at-button></at-tooltip>
    <at-tooltip class="item" content="Top Right 提示文字" placement="top-right"><at-button>上右</at-button></at-tooltip>
  </div>
  <div class="center row col-md-16 flex-between">
    <div class="left col-md-4">
      <at-tooltip class="item" content="Left Top 提示文字" placement="left-top"><at-button>左上</at-button></at-tooltip>
      <at-tooltip class="item" content="Left 提示文字" placement="left"><at-button>左边</at-button></at-tooltip>
      <at-tooltip class="item" content="Left Bottom 提示文字" placement="left-bottom"><at-button>左下</at-button></at-tooltip>
    </div>
    <div class="right col-md-4">
      <at-tooltip class="item" content="Right Top 提示文字" placement="right-top"><at-button>右上</at-button></at-tooltip>
      <at-tooltip class="item" content="Right 提示文字" placement="right"><at-button>右边</at-button></at-tooltip>
      <at-tooltip class="item" content="Right Bottom 提示文字" placement="right-bottom"><at-button>右下</at-button></at-tooltip>
    </div>
  </div>
  <div class="bottom row col-md-16 flex-center">
    <at-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-left"><at-button>下左</at-button></at-tooltip>
    <at-tooltip class="item" content="Bottom 提示文字" placement="bottom"><at-button>下边</at-button></at-tooltip>
    <at-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-right"><at-button>下右</at-button></at-tooltip>
  </div>
</div>
```
:::

## Tooltip 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | 提示文字 | String | - | - |
| placement | 气泡框位置 | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

<style lang="scss" scoped>
.at-tooltip {
  & + .at-tooltip {
    margin-left: 16px;
  }
  span {
    font-size: 12px;
  }
  p {
    color: #fff;
    font-size: 12px;
  }
}
.show-box {
  max-width: 600px;

  .at-tooltip + .at-tooltip {
    margin: 0;
  }
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
