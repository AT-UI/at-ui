
# Dropdown 下拉菜单

----

展示折叠的下拉菜单

## 基础用法

基础的下拉菜单，使用方式是用 `AtDropdown`，`AtDropdownMenu` 和 `AtDropdownItem` 的组合

:::demo
```html
<at-dropdown>
  <span>下拉菜单 <i class="icon icon-chevron-down"></i></span>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item>深圳</at-dropdown-item>
    <at-dropdown-item>广州</at-dropdown-item>
    <at-dropdown-item disabled>上海</at-dropdown-item>
    <at-dropdown-item divided>北京</at-dropdown-item>
    <at-dropdown-item>杭州</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
<at-dropdown>
  <at-button size="small">下拉菜单 <i class="icon icon-chevron-down"></i></at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item>深圳</at-dropdown-item>
    <at-dropdown-item>广州</at-dropdown-item>
    <at-dropdown-item disabled>上海</at-dropdown-item>
    <at-dropdown-item divided>北京</at-dropdown-item>
    <at-dropdown-item>杭州</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
```
:::

## 激活的方式

下拉菜单默认使用 `hover` 的方式激活，可通过参数 `trigger` 更换激活的方式，支持 `click`，`hover`，`focus`

:::demo
```html
<at-dropdown>
  <at-button size="small">Hover 菜单 <i class="icon icon-chevron-down"></at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item name="guangzhou">广州</at-dropdown-item>
    <at-dropdown-item name="shanghai" disabled>上海</at-dropdown-item>
    <at-dropdown-item name="beijin" divided>北京</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
<at-dropdown trigger="click">
  <at-button size="small">Click 菜单 <i class="icon icon-chevron-down"></at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item name="guangzhou">广州</at-dropdown-item>
    <at-dropdown-item name="shanghai" disabled>上海</at-dropdown-item>
    <at-dropdown-item name="beijin" divided>北京</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
```
:::

## 菜单的对齐方式

设置属性 `placement` 更改下拉菜单的对齐方式

:::demo
```html
<at-dropdown placement="bottom-right">
  <at-button size="small">Hover 菜单 <i class="icon icon-chevron-down"></at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item name="guangzhou">广州</at-dropdown-item>
    <at-dropdown-item name="shanghai" disabled>上海</at-dropdown-item>
    <at-dropdown-item name="beijin" divided>北京</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
```
:::

## 下拉菜单触发的事件

点击菜单选项触发事件 `on-dropdown-command`，返回 `AtDropdownItem` 的 `name` 值

:::demo
```html
<at-dropdown placement="bottom-right" @on-dropdown-command="handleCommand">
  <at-button size="small">Hover 菜单 <i class="icon icon-chevron-down"></at-button>
  <at-dropdown-menu slot="menu">
    <at-dropdown-item name="shenzhen">深圳</at-dropdown-item>
    <at-dropdown-item name="guangzhou">广州</at-dropdown-item>
    <at-dropdown-item name="shanghai" disabled>上海</at-dropdown-item>
  </at-dropdown-menu>
</at-dropdown>
```
:::

## Dropdown 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| trigger | 触发 `Dropdown` 的方式 | String | `click`, `hover`, `focus` | `hover` |
| placement | 下拉框的对齐方式 | String | `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right` | `bottom` |

## Dropdown 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-dropdown-command | 菜单项点击的时候触发 | 点击的菜单的 `name` 值 |

## DropdownItem 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 菜单的值 | String | - | - |
| disabled | 是否禁用 | Boolean | - | false |
| divided | 是否添加分割线 | Boolean | - | false |

<style lang="scss" scoped>
  .at-dropdown + .at-dropdown {
    margin-left: 8px;
  }
  .at-dropdown__trigger {
    > span {
      font-size: 12px;
    }
  }
</style>

<script>
  export default {
    methods: {
      handleCommand (name) {
        this.$Message(`点击菜单：${name}`)
      }
    }
  }
</script>
