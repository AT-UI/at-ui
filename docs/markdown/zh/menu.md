
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

## 顶部导航（多级菜单）

可以在 `AtSubmenu` 中嵌套 `AtSubmenu` 组合成多级菜单

:::demo
```html
<at-menu mode="horizontal" active-Name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
  <at-menu-item name="2"><i class="icon icon-layers"></i>导航菜单二</at-menu-item>
  <at-submenu name="3">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三</template>
    <at-menu-item name="3-1"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
    <at-menu-item name="3-2"><i class="icon icon-settings"></i>导航菜单五</at-menu-item>
    <at-submenu name="3-3">
      <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单六</template>
      <at-menu-item name="3-3-1"><i class="icon icon-settings"></i>导航菜单七</at-menu-item>
      <at-menu-item name="3-3-2"><i class="icon icon-settings"></i>导航菜单八</at-menu-item>
    </at-submenu>
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

## 侧边垂直导航（多级菜单）

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
  <at-submenu name="4">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单四</template>
    <at-menu-item name="4-1"><i class="icon icon-settings"></i>导航菜单五</at-menu-item>
    <at-menu-item name="4-2"><i class="icon icon-settings"></i>导航菜单六</at-menu-item>
    <at-submenu name="4-3">
      <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单七</template>
      <at-menu-item name="4-3-1"><i class="icon icon-settings"></i>导航菜单八</at-menu-item>
      <at-menu-item name="4-3-2"><i class="icon icon-settings"></i>导航菜单九</at-menu-item>
    </at-submenu>
  </at-submenu>
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
  <at-submenu name="5">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三 - 子菜单</template>
    <at-menu-item name="5-1">子菜单一</at-menu-item>
    <at-menu-item name="5-2">子菜单二</at-menu-item>
  </at-submenu>
</at-menu-item-group>
```
:::

## 每次只展开一个子菜单

设置属性 `inline-collapsed`，可开启 `手风琴模式`，即每次只能有一个子菜单被打开。同时 `AtSubmenu` 组件可使用参数 `opened` 配置子菜单默认展开

:::demo
```html
<at-menu active-Name="1-1" inline-collapsed>
  <at-submenu name="1" opened>
    <template slot="title"><i class="icon icon-home"></i>导航菜单一</template>
    <at-menu-item-group title="分组一">
      <at-menu-item name="1-1">子菜单一</at-menu-item>
      <at-menu-item name="1-2">子菜单二</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="分组二">
      <at-menu-item name="1-3">子菜单三</at-menu-item>
      <at-menu-item name="1-4">子菜单四</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-submenu name="2">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单二</template>
    <at-menu-item name="2-1">子菜单一</at-menu-item>
    <at-menu-item name="2-2">子菜单二</at-menu-item>
    <at-menu-item name="2-3">子菜单三</at-menu-item>
    <at-menu-item name="2-4">子菜单四</at-menu-item>
  </at-submenu>
  <at-submenu name="3">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三</template>
    <at-menu-item name="3-1">子菜单一</at-menu-item>
    <at-menu-item name="3-2">子菜单二</at-menu-item>
    <at-menu-item name="3-3">子菜单三</at-menu-item>
    <at-menu-item name="3-4">子菜单四</at-menu-item>
  </at-submenu>
  <at-submenu name="4">
    <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单四</template>
    <at-menu-item name="4-1">子菜单一</at-menu-item>
    <at-menu-item name="4-2">子菜单二</at-menu-item>
  </at-submenu>
</at-menu-item-group>
```
:::

## 主题

