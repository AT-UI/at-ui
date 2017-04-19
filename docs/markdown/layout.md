
# Grid 栅格

----

### 概述

市面上一般使用 `12栅格` 系统，也有采用 `8栅格` 系统的，但是随着设备屏幕越来越大，传统的 `12栅格` 系统在一些业务场景下，没办法很好的解决元素布局的问题，所以我们使用了 `24栅格` 系统。也就是将页面区域 24 等分。

### Flex 布局

该栅格系统支持 `Flex` 布局，允许子元素在父节点内的水平对齐方式（居左，居中，居右）等

### 基础栅格

使用单一分栏创建基础的栅格布局

:::demo 这里是测试代码

```html
<div class="row at-row no-gutter" v-for="n in 12/2">
  <div :class="`col-md-${n}`"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div :class="`col-md-${12 - n}`"><div class="at-box-row bg-c-brand-dark"></div></div>
</div>
```
:::

### 分隔布局

区块之间增加间隔

:::demo 这里是测试代码

```html
<div class="row at-row" v-for="n in 12/2">
  <div :class="`col-md-${n}`"><div class="at-box-row bg-c-brand-dark"></div></div>
  <div :class="`col-md-${12 - n}`"><div class="at-box-row bg-c-brand-dark"></div></div>
</div>
```
:::

### 左右偏移

列与列之间可以通过设置 `offset` 来设定偏移值

### 栅格排序

### 栅格列的对其方式

