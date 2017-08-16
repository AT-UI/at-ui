
# Alert

----

Alert component used to display information that needs to be noticed in the page. Unlike `AtMessage` component, alert component is presented in a non floating layer that will always display on the page and not disappear automatically.


## Basic

Only used for display information, without close button by default.<br>
There are four `type` of Alert: `success`，`error`，`warning`，`info`<br>
The contents of Alert are passed through `message` property.

:::demo
```html
<at-alert message="Here is the information~Here is the information~Here is the information~" type="success"></at-alert>
<at-alert message="Here is the information~" type="error"></at-alert>
<at-alert message="Here is the information~" type="warning"></at-alert>
<at-alert message="Here is the information~" type="info"></at-alert>
```
:::


## Closable

To make a alert component closable, add `closable` property to the Alert.

:::demo
```html
<at-alert message="Here is the alert that can be closed." closable></at-alert>
```
:::


## Customize Close Text

Customize the text or icon of close button by `close-text` property.

:::demo
```html
<at-alert message="Here is the information~" close-text="Close"></at-alert>
```
:::


## With Icon

Append Icon before text by `show-icon` property, that can improve readability.

:::demo
```html
<at-alert message="Here is the information with ICON" show-icon></at-alert>
```
:::


## Auxiliary Content

The text of alert component can contain title and content, which are configured by `message` and `description` properties.

:::demo
```html
<at-alert message="Title of Success" description="Here is the information" type="success" closable></at-alert>
<at-alert message="Title of Error" description="Here is the information" type="error" closable></at-alert>
<at-alert message="Title of Warning" description="Here is the information" type="warning" closable></at-alert>
<at-alert message="Title of Info" description="Here is the information" type="info" closable></at-alert>
```
:::


## With Icon and Auxiliary Content

Multiple properties are used in combination.

:::demo
```html
<at-alert message="Title of Success" description="Here is the information~Here is the information~Here is the information~Here is the information~Here is the information~Here is the information~Here is the information~" type="success" show-icon closable></at-alert>
<at-alert message="Title of Error" description="Here is the information" type="error" show-icon closable></at-alert>
<at-alert message="Title of Warning" description="Here is the information" type="warning" show-icon closable></at-alert>
<at-alert message="Title of Info" description="Here is the information" type="info" show-icon closable></at-alert>
```
:::


## Alert Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | the type of Alert | String | `success`, `error`, `warning`, `info` | `info` |
| message | required, main content of Alert | String | - | - |
| description | auxiliary content of Alert | String | - | - |
| closable | whether display the close button | Boolean | - | false |
| showIcon | whether display the type of icon | Boolean | - | false |
| closeText | customize close text | String | - | - |
| icon | customize the icon of alert | String | - | `info` |


## Alert Events

| Event Name      | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-close | Emitted when close button clicked | - |


<style lang="scss" scoped>
.at-alert + .at-alert {
  margin-top: 8px;
}
</style>
