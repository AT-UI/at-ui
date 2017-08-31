
# Breadcrumb 面包屑

----

显示当前页面在网站中的层级位置，点击可切换层级

## 基础用法

使用 `at-breadcrumb` 和 `at-breadcrumb-item` 创建面包屑，使用 `href` 属性添加链接

:::demo
```html
<at-breadcrumb>
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item href="#/zh/docs/introduction">Components</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```
:::

## 添加路由链接

除了可以使用 `href` 属性配置链接，也可以给 `to` 属性传入 `object` 添加 `vue-router` 的路由。添加 `replace` 属性可设置不给 `history` 添加新记录

:::demo
```html
<at-breadcrumb>
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item :to="{ name: 'Layout-zh' }">Layout</at-breadcrumb-item>
  <at-breadcrumb-item :to="{ name: 'Color-zh' }" replace>Color</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```
:::

## 自定义分隔符

可以通过设置 `separator` 属性来自定义分隔符，支持 HTML 字符串

:::demo
```html
<at-breadcrumb separator=">">
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item href="#/zh/docs/introduction">Components</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```
:::


## Breadcrumb 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符，可使用 HTML 字符串 | String | - | `/` |

## BreadcrumbItem 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| href | 链接跳转地址，同 `<a>` 中的 `href` 属性 | String | - | - |
| to | 路由跳转对象，同 `vue-router` 中的 `to` | String / Object | - | - |
| replace | 在使用 `to` 时，是否不需要向 `history` 添加新记录 | Boolean | - | false |
