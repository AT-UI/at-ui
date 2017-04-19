## Button 按钮

### 基础按钮

不同的色彩代表不同的提示

:::demo

```html
<at-button>默认按钮</at-button>
<at-button type="primary">主要按钮</at-button>
<at-button type="success">成功按钮</at-button>
<at-button type="error">危险按钮</at-button>
<at-button type="warning">警告按钮</at-button>
<at-button type="info">信息按钮</at-button>
```

:::

### 基础按钮带颜色倾向

:::demo

```html
<at-button :hollow="true">默认按钮</at-button>
<at-button type="primary" :hollow="true">主要按钮</at-button>
<at-button type="success" :hollow="true">成功按钮</at-button>
<at-button type="error" :hollow="true">危险按钮</at-button>
<at-button type="warning" :hollow="true">警告按钮</at-button>
<at-button type="info" :hollow="true">信息按钮</at-button>
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

<style lang="scss" scoped>
  .at-btn-group {
    margin-top: 15px;
  }
</style>
