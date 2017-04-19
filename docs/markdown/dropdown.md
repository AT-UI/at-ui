
# Dropdown 下拉菜单

----

### 基础用法

:::demo

```html
<at-dropdown>
  <at-button size="small">下拉菜单</at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item>广州</at-dropdown-item>
    <at-dropdown-item disabled>上海</at-dropdown-item>
    <at-dropdown-item divided>北京</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
```

:::

### 触发的方式

:::demo

```html
<at-dropdown>
  <at-button size="small">hover菜单</at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item>广州</at-dropdown-item>
    <at-dropdown-item disabled>上海</at-dropdown-item>
    <at-dropdown-item divided>北京</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
<at-dropdown trigger="click">
  <at-button size="small">click菜单</at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item>广州</at-dropdown-item>
    <at-dropdown-item disabled>上海</at-dropdown-item>
    <at-dropdown-item divided>北京</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
```

:::

### 菜单的对齐方式

:::demo

```html
<at-dropdown placement="bottom-right">
  <at-button size="small">hover菜单</at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item>广州</at-dropdown-item>
    <at-dropdown-item disabled>上海</at-dropdown-item>
    <at-dropdown-item divided>北京</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
```

:::

### 级联菜单


### 带下拉框的按钮
