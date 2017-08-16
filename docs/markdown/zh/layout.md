
# Grid 栅格

----

## 概述

栅格化设计是按照一定的规则把页面分成固定的相同宽度，然后列出各种组合的可能性，以便于在进行页面呈现的时候能够快速的进行布局。市面上一般使用 `12栅格` 系统，也有采用 `8栅格` 系统的，但是随着设备屏幕越来越大，传统的 `12栅格` 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 `24栅格` 系统。也就是将页面区域 24 等分。

栅格系统需要注重一致的外边距和间隙宽度，所以我们采用了 `8dp` 的栅格系统，即栅格系统中的所有组件都与间隔为 `8dp` 的基准网格对齐，一切距离、尺寸都应该是 `8dp` 的整数倍（AT-UI 在尽量遵守该规则，但存在部分元素不符合 `8dp` 的规范）。由于 `8dp` 对于文字排版可能会存在过宽的情况，所以文字排版使用 `4dp` 的基准。

> 8dp 栅格系统相关资源：[The 8-Point Grid](https://spec.fm/specifics/8-pt-grid)

## Flex 布局

该栅格系统使用 `Flexbox` 实现，支持 `Flex` 布局，允许子元素在父节点内的水平对齐方式（居左，居中，居右）等

## 屏幕 Breakpoint

参考 [Bootstrap](http://getbootstrap.com/css/#grid-media-queries) 和 [Semantic UI](https://semantic-ui.com/elements/container.html)，`AT-UI` 选用了如下 `Breakpoint`

| Breakpoint | 设备类型 |
| :--: | :--: |
| 480px | Mobile |
| 768px | Tablet |
| 992px | Desktop |
| 1200px | Wide Desktop |

## 基础栅格

使用单一的 `row` 和多个 `col` 组合，创建基础的栅格布局

:::demo
```html
<div class="row at-row no-gutter" v-for="n in 24/2">
  <div :class="`col-md-${n}`"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div :class="`col-md-${24 - n}`"><div class="at-box-row bg-c-brand-light"></div></div>
</div>
```
:::

## 分隔布局

`col` 块之间增加间隔，默认添加间隔，如不需要间隔，可添加 `class="no-gutter"`

:::demo
```html
<div class="row at-row" v-for="n in 24/2">
  <div :class="`col-md-${n}`"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div :class="`col-md-${24 - n}`"><div class="at-box-row bg-c-brand-light"></div></div>
</div>
```
:::

## 左右偏移

列与列之间可以通过设置 `offset` 来设定偏移值，例如：`col-md-offset-3`，意思是向左偏移 3 个单元格

:::demo
```html
<div class="row at-row" v-for="n in 6">
  <div class="col-md-2"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div :class="`col-md-2 col-md-offset-${n}`"><div class="at-box-row bg-c-brand-dark"></div></div>
</div>
```
:::

## Flex 布局

`AT-UI` 的 `Grid System` 就是使用 `Flexbox` 实现的，如果要针对某些元素设置 `Flex` 布局，可使用 `class="flex"`。子元素通过添加不同的值 `flex-start`，`flex-center`，`flex-end`，`flex-top`，`flex-middle`，`flex-around`，`flex-between` ，分别定义其在父元素中的排列方式。

:::demo
```html
<p class="demo-desc">flex-start</p>
<div class="row at-row no-gutter">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
</div>
<p class="demo-desc">flex-center</p>
<div class="row at-row no-gutter flex-center">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
</div>
<p class="demo-desc">flex-end</p>
<div class="row at-row no-gutter flex-end">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
</div>
<p class="demo-desc">flex-around</p>
<div class="row at-row no-gutter flex-around">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
</div>
<p class="demo-desc">flex-between</p>
<div class="row at-row no-gutter flex-between">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light"></div></div>
</div>
```
:::

## 栅格列的对齐方式

`row` 中的子元素 `col` 的对齐方式，支持三种对齐方式：`flex-top`，`flex-middle`，`flex-bottom`

:::demo
```html
<p class="demo-desc">flex-top</p>
<div class="row at-row flex-center">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light" style="height: 100px"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark" style="height: 70px"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light" style="height: 120px"></div></div>
</div>
<p class="demo-desc">flex-middle</p>
<div class="row at-row flex-center flex-middle">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light" style="height: 100px"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark" style="height: 70px"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light" style="height: 120px"></div></div>
</div>
<p class="demo-desc">flex-bottom</p>
<div class="row at-row flex-center flex-bottom">
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light" style="height: 100px"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-dark" style="height: 70px"></div></div>
  <div class="col-md-4"><div class="at-box-row bg-c-brand-light" style="height: 120px"></div></div>
</div>
```
:::

## 类名说明

| classname | 说明 |
| :------- | :--- |
| .container | Grid 容器，相对父容器居中对齐 |
| .container-fluid | 容器左右两边预留 `24px` 的间隙 |
| .no-gutter | 默认 `col` 之间会设置 `8px` 的间隔，添加此类名可去除默认的间隔 |
| .row | 包裹 `col` 的容器 |
| .row.reverse | 反向排列子元素 |
| .flex | 使用 `flexbox` 布局 |

<style lang="scss" scoped>
  .row {
    background-color: #f2f8fe;
  }
  .at-row {
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
  .at-box-row {
    height: 36px;
    border-radius: 8px;
  }
</style>
