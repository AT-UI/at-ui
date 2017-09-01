
# Breadcrumb

----

Breadcrumb displays the current location within a hierarchy. It provides a navigation to upper nodes.

## Basic

Use `at-breadcrumb` and `at-breadcrumb-item` to create breadcrumbs and add links with `href` property.

:::demo
```html
<at-breadcrumb>
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item href="#/en/docs/introduction">Components</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```
:::

## Vue Router Integration

Used together with `vue-router`. Passed an `object` to `to` property. If you don't need a new history, add the `replace` property to `Breadcrumb Item`.

:::demo
```html
<at-breadcrumb>
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item :to="{ name: 'Layout-en' }">Layout</at-breadcrumb-item>
  <at-breadcrumb-item :to="{ name: 'Color-en' }" replace>Color</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```
:::

## Configuring the Separator

The separator can be customized by setting the `separator` property, which supports `HTML String`.

:::demo
```html
<at-breadcrumb separator=">">
  <at-breadcrumb-item>Home</at-breadcrumb-item>
  <at-breadcrumb-item href="#/en/docs/introduction">Components</at-breadcrumb-item>
  <at-breadcrumb-item>Breadcrumb</at-breadcrumb-item>
</at-breadcrumb>
```
:::


## Breadcrumb Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| separator | customize separator | String | - | `/` |

## BreadcrumbItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| href | link, same as the `href` property in `<a>` | String | - | - |
| to | the object of `vue-router`, same as the `to` property in `vue-router` | String / Object | - | - |
| replace | whether to add new history when using `to` | Boolean | - | false |
