
# Breadcrumb 面包屑

----

### 基础用法

使用 `at-breadcrumb` 和 `at-breadcrumb-item`

:::demo

```html
<at-breadcrumb>
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item href="/components">Components</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```

:::

### 自定义分隔符

可以通过设置 `separator` 属性来自定义分隔符，支持 HTML 字符串

:::demo

```html
<at-breadcrumb separator=">">
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item href="/components">Components</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```

:::


### Breadcrumb 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | 分隔符，可使用 HTML 字符串 | string |- | / |

### BreadcrumbItem 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| href | 链接跳转地址，同 `<a>` 中的 `href` 属性 | string | - | - |
| to | 路由跳转对象，同 `vue-router` 中的 `to` | string, object | - | - |
| replace | 在使用 `to` 时，是否不会向 history 添加新记录 | boolean | - | false |
