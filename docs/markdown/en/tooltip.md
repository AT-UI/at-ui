
# Tooltips

----

Tooltips is similar to the `title` attribute of `HTML`. When the mouse is suspended above the element, a tooltip will appears.

## Basic

When the mouse hovers, the tooltip box defaults to the top position.

:::demo
```html
<at-tooltip placement="top" content="information">
  <at-button>Button</at-button>
</at-tooltip>
<at-tooltip content="information"><span>Please hover me!</span></at-tooltip>
```
:::

## Customize Content

Customize the content of tooltip by `slot="content"` property.

:::demo
```html
<at-tooltip>
  <span>Information</span>
  <template slot="content">
    <p>Text One</p>
    <p>Text Two</p>
  </template>
</at-tooltip>
```
:::

## Placement

The ToolTip has 12 placements choice.

:::demo
```html
<div class="show-box">
  <div class="top row col-md-16 flex-center">
    <at-tooltip class="item" content="Top Left Message" placement="top-left"><at-button>Top Left</at-button></at-tooltip>
    <at-tooltip class="item" content="Top Message" placement="top"><at-button>Top</at-button></at-tooltip>
    <at-tooltip class="item" content="Top Right Message" placement="top-right"><at-button>Top Right</at-button></at-tooltip>
  </div>
  <div class="center row col-md-16 flex-between">
    <div class="left col-md-4">
      <at-tooltip class="item" content="Left Top Message" placement="left-top"><at-button>Left Top</at-button></at-tooltip>
      <at-tooltip class="item" content="Left Message" placement="left"><at-button>Left</at-button></at-tooltip>
      <at-tooltip class="item" content="Left Bottom Message" placement="left-bottom"><at-button>Left Bottom</at-button></at-tooltip>
    </div>
    <div class="right col-md-4">
      <at-tooltip class="item" content="Right Top Message" placement="right-top"><at-button>Right Top</at-button></at-tooltip>
      <at-tooltip class="item" content="Right Message" placement="right"><at-button>Right</at-button></at-tooltip>
      <at-tooltip class="item" content="Right Bottom Message" placement="right-bottom"><at-button>Right Bottom</at-button></at-tooltip>
    </div>
  </div>
  <div class="bottom row col-md-16 flex-center">
    <at-tooltip class="item" content="Bottom Left Message" placement="bottom-left"><at-button>Bottom Left</at-button></at-tooltip>
    <at-tooltip class="item" content="Bottom Message" placement="bottom"><at-button>Bottom</at-button></at-tooltip>
    <at-tooltip class="item" content="Bottom Right Message" placement="bottom-right"><at-button>Bottom Right</at-button></at-tooltip>
  </div>
</div>
```
:::

## Tooltip Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| content | the content of tooltip | String | - | - |
| placement | the position of tooltip | String | `top`, `top-left`, `top-right`, `left`, `left-top`, `left-bottom`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right` | `top` |

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
