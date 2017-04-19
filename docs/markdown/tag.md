# Tag 标签

----

### 基本标签

:::demo

```html

<at-tag>标签一</at-tag>
<at-tag>标签二</at-tag>
<at-tag>标签三</at-tag>
<at-tag :closable="true">标签三</at-tag>

```

:::

### 各种类型的标签

:::demo

```html

<at-tag type="default">标签一</at-tag>
<at-tag type="primary">标签二</at-tag>
<at-tag type="success">标签三</at-tag>
<at-tag type="error">标签四</at-tag>
<at-tag type="warning">标签五</at-tag>
<at-tag type="info">标签六</at-tag>

```

:::

### 多彩的标签

### 可选择的标签

### API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 类型 | string | 'default', 'primary', 'success', 'error', 'warning', 'info' | default |
| closable | 是否可关闭 | boolean | — | false |
