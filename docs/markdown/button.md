## Button 按钮

----

按钮用于传递用户触摸时会触发的操作

### 基础按钮

基础按钮分三种：`主按钮（实心）` 、 `次按钮（空心）` 、 `文字按钮`

:::demo

```html
<at-button type="primary">主要按钮</at-button>
<at-button>次要按钮</at-button>
<at-button type="text">文字按钮</at-button>
```

:::

### 带颜色倾向的按钮

带有色彩倾向的按钮能给用户带来操作提示

:::demo

```html
<div class="row">
  <at-button :hollow="true">默认按钮</at-button>
  <at-button type="primary" :hollow="true">主要按钮</at-button>
  <at-button type="success" :hollow="true">成功按钮</at-button>
  <at-button type="error" :hollow="true">危险按钮</at-button>
  <at-button type="warning" :hollow="true">警告按钮</at-button>
  <at-button type="info" :hollow="true">信息按钮</at-button>
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

### 图标文字按钮

### 图标按钮

### 组合按钮

:::demo

```html
<at-button-group>
  <at-button>左</at-button>
  <at-button>中</at-button>
  <at-button>右</at-button>
</at-btn-group>
<br>
<at-button-group>
  <at-button>左</at-button>
  <at-button>中</at-button>
  <at-button>右</at-button>
</at-btn-group>
```

:::

### 按钮尺寸

:::demo

```html
<at-button type="primary" size="large">变大按钮</at-button>
<at-button type="primary">正常按钮</at-button>
<at-button type="primary" size="small">变小按钮</at-button>
<at-button type="primary" size="smaller">超小按钮</at-button>
```

:::

<style lang="sass" scoped>
  .row {
    .at-btn + .at-btn {
      margin-left: 8px;
    }

    & + .row {
      margin-top: 8px;
    }
  }
  .at-btn-group {
    margin-top: 15px;
  }
</style>
