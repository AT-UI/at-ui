# Button

----

Clicking a button will trigger an operation.

## Type

There are three basic buttons: `Primary` 、 `Default` 、 `Text`.

:::demo
```html
<at-button type="primary">Primary Button</at-button>
<at-button>Default Button</at-button>
<at-button type="text">Text Button</at-button>
```
:::

## Disabled

To make a button as disabled, add `disabled` property to the `Button`.

:::demo
```html
<at-button type="primary" disabled>Primary Button</at-button>
<at-button hollow disabled>Default Button</at-button>
<at-button type="text" disabled>Text Button</at-button>
```
:::

## With Color Tendency

Button with color tendency gives user an operating hint.

:::demo
```html
<div class="row">
  <at-button hollow>Default</at-button>
  <at-button type="primary" hollow>Primary</at-button>
  <at-button type="success" hollow>Success</at-button>
  <at-button type="error" hollow>Error</at-button>
  <at-button type="warning" hollow>Warning</at-button>
  <at-button type="info" hollow>Info</at-button>
</div>
<div class="row">
  <at-button>Default</at-button>
  <at-button type="primary">Primary</at-button>
  <at-button type="success">Success</at-button>
  <at-button type="error">Error</at-button>
  <at-button type="warning">Warning</at-button>
  <at-button type="info">Info</at-button>
</div>
```
:::

## With Icon

`Button` components can contain an `Icon`. This is done by setting the `Icon` property or placing an `Icon` within the `Button`. The `Icon` is fixed in front of the text that setted by `icon` property.

:::demo
```html
<div class="row">
  <at-button icon="icon-download">Download</at-button>
  <at-button icon="icon-user-plus">Add User</at-button>
  <at-button icon="icon-edit"></at-button>
  <at-button type="primary" icon="icon-search"></at-button>
</div>
<div class="row">
  <at-button icon="icon-edit" circle></at-button>
  <at-button type="primary" icon="icon-search" circle></at-button>
</div>
```
:::

## Loading

A loading indicator can be added to button by setting the `loading` property.

:::demo
```html
<at-button loading>Loading</at-button>
<at-button loading></at-button>
<at-button loading circle></at-button>
```
:::

## Button Group

Buttons can be grouped by placing multiple `Button` components into a `ButtonGroup` component.

:::demo
```html
<at-button-group>
  <at-button>Left</at-button>
  <at-button>Center</at-button>
  <at-button>Right</at-button>
</at-button-group>
<br>
<at-button-group>
  <at-button icon="icon-edit" title="Edit"></at-button>
  <at-button icon="icon-copy" title="Copy"></at-button>
  <at-button icon="icon-download" title="Download"></at-button>
</at-button-group>
<br>
<at-button-group>
  <at-button><i class="icon icon-chevron-left"></i>Go back</at-button>
  <at-button>Go forward<i class="icon icon-chevron-right"></i></at-button>
</at-button-group>
```
:::

## Size

Size of Button: `large`, `normal`, `small`, `smaller`.<br>
Size of GroupButton: `large`, `normal`, `small`.<br>
Set the `size` property to use different size of button, it's `normal` size by default.

:::demo
```html
<div>
  <at-button type="primary" size="large">Large Button</at-button>
  <at-button type="primary">Normal Button</at-button>
  <at-button type="primary" size="small">Small Button</at-button>
  <at-button type="primary" size="smaller">Smaller Button</at-button>
</div>
<div style="margin-top: 8px;">
  <at-button type="primary" size="large" icon="icon-search" circle></at-button>
  <at-button type="primary" icon="icon-search" circle></at-button>
  <at-button type="primary" size="small" icon="icon-search" circle></at-button>
  <at-button type="primary" size="smaller" icon="icon-search" circle></at-button>
</div>
<div style="margin-top: 8px;">
  <at-button-group size="large">
    <at-button>Left</at-button>
    <at-button>Center</at-button>
    <at-button>Right</at-button>
  </at-button-group>
  <at-button-group>
    <at-button>Left</at-button>
    <at-button>Center</at-button>
    <at-button>Right</at-button>
  </at-button-group>
  <at-button-group size="small">
    <at-button>Left</at-button>
    <at-button>Center</at-button>
    <at-button>Right</at-button>
  </at-button-group>
</div>
```
:::

## Button Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | type of button | String | `default`, `primary`, `success`, `error`, `warning`, `info`, `text` | - |
| nativeType | same as native type | String | - | `button` |
| size | size of button | String | `large`, `small`, `smaller` | normal |
| hollow | whether a hollow button | Boolean | - | false |
| icon | set the icon of button, input the `classname` | String | see the document of `Icon` | - |
| loading | set the loading status of button | Boolean | - | false |
| circle | set the circle shape of button | Boolean | - | false |

## Button Group Props

| Property      | Description          | Type      | Accepted values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | size of button | String | `large`, `small` | normal |
| gap | gap of the buttons | Number | - | -1 |

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
