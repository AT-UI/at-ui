
# Menu 导航菜单

----

导航菜单一般分为顶部导航和侧边导航，是为页面提供导航功能的菜单列表

## 顶部导航

顶部导航需要设置 `mode="horizontal"`

:::demo
```html
<at-menu mode="horizontal" active-Name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
  <at-menu-item name="2"><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
  <at-submenu name="3">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三 - 子菜单</template>
    <at-menu-item-group title="分组一">
      <at-menu-item name="3-1">子菜单一</at-menu-item>
      <at-menu-item name="3-2">子菜单二</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="分组二">
      <at-menu-item name="3-3">子菜单三</at-menu-item>
      <at-menu-item name="3-4">子菜单四</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-menu-item name="4"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
</at-menu-item-group>
```
:::

## 侧边垂直导航

顶部导航需要设置 `mode="vertical"`

:::demo
```html
<at-menu mode="vertical" active-Name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
  <at-menu-item name="2"><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
  <at-submenu name="3">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三 - 子菜单</template>
    <at-menu-item-group title="分组一">
      <at-menu-item name="3-1">子菜单一</at-menu-item>
      <at-menu-item name="3-2">子菜单二</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="分组二">
      <at-menu-item name="3-3">子菜单三</at-menu-item>
      <at-menu-item name="3-4">子菜单四</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-menu-item name="4"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
</at-menu-item-group>
```
:::

## 侧边内嵌导航

导航菜单默认 `mode="inline"`

:::demo
```html
<at-menu active-Name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
  <at-menu-item name="2"><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
  <at-submenu name="3">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三 - 子菜单</template>
    <at-menu-item-group title="分组一">
      <at-menu-item name="3-1">子菜单一</at-menu-item>
      <at-menu-item name="3-2">子菜单二</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="分组二">
      <at-menu-item name="3-3">子菜单三</at-menu-item>
      <at-menu-item name="3-4">子菜单四</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-menu-item name="4"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
</at-menu-item-group>
```
:::

## 每次只展开一个子菜单

## 主题

