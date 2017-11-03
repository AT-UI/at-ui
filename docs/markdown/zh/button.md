# Button 按钮

----

按钮用于传递用户触摸时会触发的操作

## 基础按钮

基础按钮分三种：`主按钮（实心）` 、 `次按钮（空心）` 、 `文字按钮`

:::demo
```html
<at-button type="primary">主要按钮</at-button>
<at-button>次要按钮</at-button>
<at-button type="text">文字按钮</at-button>
```
:::

## 不可用状态按钮

添加属性 `disabled` 禁用按钮

:::demo
```html
<at-button type="primary" disabled>主要按钮</at-button>
<at-button hollow disabled>次要按钮</at-button>
<at-button type="text" disabled>文字按钮</at-button>
```
:::

## 带颜色倾向的按钮

带有色彩倾向的按钮能给用户带来操作提示

:::demo
```html
<div class="row">
  <at-button hollow>默认按钮</at-button>
  <at-button type="primary" hollow>主要按钮</at-button>
  <at-button type="success" hollow>成功按钮</at-button>
  <at-button type="error" hollow>危险按钮</at-button>
  <at-button type="warning" hollow>警告按钮</at-button>
  <at-button type="info" hollow>信息按钮</at-button>
</div>
<div class="row">
  <at-button>默认按钮</at-button>
  <at-button type="primary">主要按钮</at-button>
  <at-button type="success">成功按钮</at-button>
  <at-button type="error">危险按钮</at-button>
  <at-button type="warning">警告按钮</at-button>
  <at-button type="info">信息按钮</at-button>
</div>
```
:::

## 图标文字按钮

如需要在在按钮中添加图标，可设置 `icon` 属性，或者自行在 `Button` 中内联 `icon`。通过 `icon` 属性设置的图标，位置固定在文本的前面。

:::demo
```html
<div class="row">
  <at-button icon="icon-download">下载资源</at-button>
  <at-button icon="icon-user-plus">添加用户</at-button>
  <at-button icon="icon-edit"></at-button>
  <at-button type="primary" icon="icon-search"></at-button>
</div>
<div class="row">
  <at-button icon="icon-edit" circle></at-button>
  <at-button type="primary" icon="icon-search" circle></at-button>
</div>
```
:::

## 加载中按钮

可通过添加 `loading` 属性，使按钮处于加载中状态

:::demo
```html
<at-button loading>加载中</at-button>
<at-button loading></at-button>
<at-button loading circle></at-button>
```
:::

## 组合按钮

可以将多个按钮放进 `AtButtonGroup` 中形成一个组合按钮

:::demo
```html
<at-button-group>
  <at-button>左</at-button>
  <at-button>中</at-button>
  <at-button>右</at-button>
</at-button-group>
<br>
<at-button-group>
  <at-button icon="icon-edit" title="编辑"></at-button>
  <at-button icon="icon-copy" title="复制"></at-button>
  <at-button icon="icon-download" title="下载"></at-button>
</at-button-group>
<br>
<at-button-group>
  <at-button><i class="icon icon-chevron-left"></i>后退</at-button>
  <at-button>往前<i class="icon icon-chevron-right"></i></at-button>
</at-button-group>
```
:::

## 按钮尺寸

按钮提供四种尺寸：大、中、小、超小，可通过 `size` 属性配置；<br>
组合按钮提供三种尺寸：大、中、小<br>
若不设置 `size` 属性，则默认为中等大小

:::demo
```html
<div>
  <at-button type="primary" size="large">变大按钮</at-button>
  <at-button type="primary">正常按钮</at-button>
  <at-button type="primary" size="small">变小按钮</at-button>
  <at-button type="primary" size="smaller">超小按钮</at-button>
</div>
<div style="margin-top: 8px;">
  <at-button type="primary" size="large" icon="icon-search" circle></at-button>
  <at-button type="primary" icon="icon-search" circle></at-button>
  <at-button type="primary" size="small" icon="icon-search" circle></at-button>
  <at-button type="primary" size="smaller" icon="icon-search" circle></at-button>
</div>
<div style="margin-top: 8px;">
  <at-button-group size="large">
    <at-button>左</at-button>
    <at-button>中</at-button>
    <at-button>右</at-button>
  </at-button-group>
  <at-button-group>
    <at-button>左</at-button>
    <at-button>中</at-button>
    <at-button>右</at-button>
  </at-button-group>
  <at-button-group size="small">
    <at-button>左</at-button>
    <at-button>中</at-button>
    <at-button>右</at-button>
  </at-button-group>
</div>
```
:::

## Button 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮的类型 | String | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | - |
| nativeType | 原生按钮的类型 | String | - | `button` |
| size | 按钮的大小 | String | `large`, `small`, `smaller` | - |
| hollow | 是否为空心按钮 | Boolean | - | false |
| icon | 按钮的图标类名，填入图标的 `classname` | String | 见文档 `Icon 图标` | - |
| loading | 设置按钮的载入状态 | Boolean | - | false |
| circle | 设置圆形图标按钮 | Boolean | - | false |

## Button Group 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 按钮的大小 | String | `large`, `small` | 正常大小 |
| gap | 按钮间隔 | Number | - | -1 |

<style lang="scss" scoped>
  .row {
    .at-btn + .at-btn {
      margin-left: 8px;
    }

    & + .row {
      margin-top: 8px;
    }
    .at-btn-group .at-btn {
      margin-left: 0;
    }
  }
  .at-btn-group {
    margin-left: 8px;
    margin-top: 16px;
  }
</style>
