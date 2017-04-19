
# Alert 警告提示

---

警告提示用于展示页面中需要提示用户关注的信息


### 基本用法

仅用来做信息的展示，默认带关闭按钮

:::demo

```html
<at-alert message="这里是提示的文案~这里是提示的文案~这里是提示的文案~" type="success"></at-alert>
<at-alert message="这里是提示的文案~" type="error"></at-alert>
<at-alert message="这里是提示的文案~" type="warning"></at-alert>
<at-alert message="这里是提示的文案~" type="info"></at-alert>
```

:::


### 不可关闭的警告提示

不显示关闭按钮，警告提示一直展示

:::demo

```html
<at-alert message="这里是不可关闭的警告提示" :closable="false"></at-alert>
```

:::


### 自定义关闭按钮

可自定义关闭按钮为文字或者其他字符，自定义的文字会替换原先的关闭 `Icon`

:::demo

```html
<at-alert message="这里是自定义关闭按钮的警告提示" close-text="关闭"></at-alert>
```

:::


### 显示警告类别的 Icon

在警告提示前添加图标标识可提高信息的可读性

:::demo

```html
<at-alert message="显示 ICON 的警告提示" show-icon></at-alert>
```

:::


### 显示辅助内容

:::demo

```html
<at-alert message="成功提示的标题" description="成功提示的详细说明成功提示的详细说明成功提示的详细说明" type="success"></at-alert>
<at-alert message="错误提示的标题" description="错误提示的详细说明错误提示的详细说明错误提示的详细说明" type="error"></at-alert>
<at-alert message="警告提示的标题" description="警告提示的详细说明警告提示的详细说明警告提示的详细说明" type="warning"></at-alert>
<at-alert message="信息提示的标题" description="信息提示的详细说明信息提示的详细说明信息提示的详细说明" type="info"></at-alert>
```

:::


### 显示类别 ICON 和辅助内容

:::demo

```html
<at-alert message="成功提示的标题" description="成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明成功提示的详细说明" type="success" show-icon></at-alert>
<at-alert message="错误提示的标题" description="错误提示的详细说明错误提示的详细说明错误提示的详细说明" type="error" show-icon></at-alert>
<at-alert message="警告提示的标题" description="警告提示的详细说明警告提示的详细说明警告提示的详细说明" type="warning" show-icon></at-alert>
<at-alert message="信息提示的标题" description="信息提示的详细说明信息提示的详细说明信息提示的详细说明" type="info" show-icon></at-alert>
```

:::


### Alert 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 警告提示的类别 | string | `success`, `error`, `warning`, `info` | `info` |
| message | 必填，警告的主要内容，也可作为标题 | string | - | - |
| description | 警告的辅助内容 | string | - | - |
| closable | 是否显示关闭按钮 | boolean | - | true |
| showIcon | 是否显示警告类别的ICON | boolean | - | false |
| closeText | 自定义关闭样式 | string | - | - |
| icon | 自定义类别ICON | string | - | 'info' |


### Alert 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| close | 点击关闭按钮时触发 | - |


<style lang="scss" scoped>
.at-alert + .at-alert {
  margin-top: 8px;
}
</style>
