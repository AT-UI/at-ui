
# Menu

----

Menus typically have `Top Navigator` or `Side Navigator`, a menu list that provides navigation for the page.

## Top Navigator

Set `mode` to `horizontal`.

:::demo
```html
<at-menu mode="horizontal" active-name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>Navigation One</at-menu-item>
  <at-menu-item name="2" disabled><i class="icon icon-layers"></i>Navigation Two</at-menu-item>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three - Submenu</template>
    <at-menu-item-group title="Group One">
      <at-menu-item name="3-1">Submenu One</at-menu-item>
      <at-menu-item name="3-2" disabled>Submenu Two</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="Group Two">
      <at-menu-item name="3-3">Submenu Three</at-menu-item>
      <at-menu-item name="3-4">Submenu Four</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</at-menu-item>
</at-menu>
```
:::

## Top Navigator (Multi-Level)

Nested `Submenu` in `Submenu` can bi combined into multilevel menus.

:::demo
```html
<at-menu mode="horizontal" active-name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>Navigation One</at-menu-item>
  <at-menu-item name="2"><i class="icon icon-layers"></i>Navigation Two</at-menu-item>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <at-menu-item name="3-1"><i class="icon icon-settings"></i>Submenu One</at-menu-item>
    <at-menu-item name="3-2"><i class="icon icon-settings"></i>Submenu Two</at-menu-item>
    <at-submenu>
      <template slot="title"><i class="icon icon-life-buoy"></i>Submenu Three</template>
      <at-menu-item name="3-3-1"><i class="icon icon-settings"></i>Submenu Four</at-menu-item>
      <at-menu-item name="3-3-2"><i class="icon icon-settings"></i>Submenu Five</at-menu-item>
    </at-submenu>
  </at-submenu>
  <at-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</at-menu-item>
</at-menu>
```
:::

## Side Navigator

Set `mode` to `vertical`.

:::demo
```html
<at-menu mode="vertical" active-name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>Navigation One</at-menu-item>
  <at-menu-item name="2" disabled><i class="icon icon-layers"></i>Navigation Two</at-menu-item>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <at-menu-item-group title="Group One">
      <at-menu-item name="3-1">Submenu One</at-menu-item>
      <at-menu-item name="3-2" disabled>Submenu Two</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="Group Two">
      <at-menu-item name="3-3">Submenu Three</at-menu-item>
      <at-menu-item name="3-4">Submenu Four</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</at-menu-item>
</at-menu>
```
:::

## Side Navigator (Multi-Level)

:::demo
```html
<at-menu mode="vertical" active-name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>Navigation One</at-menu-item>
  <at-menu-item name="2"><i class="icon icon-layers"></i>Navigation Two</at-menu-item>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <at-menu-item-group title="Group One">
      <at-menu-item name="3-1">Submenu One</at-menu-item>
      <at-menu-item name="3-2">Submenu Two</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="Group Two">
      <at-menu-item name="3-3">Submenu Three</at-menu-item>
      <at-menu-item name="3-4">Submenu Four</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Four</template>
    <at-menu-item name="4-1"><i class="icon icon-settings"></i>Submenu Five</at-menu-item>
    <at-menu-item name="4-2"><i class="icon icon-settings"></i>Submenu Six</at-menu-item>
    <at-submenu>
      <template slot="title"><i class="icon icon-life-buoy"></i>Submenu Seven</template>
      <at-menu-item name="4-3-1"><i class="icon icon-settings"></i>Submenu Eight</at-menu-item>
      <at-menu-item name="4-3-2"><i class="icon icon-settings"></i>Submenu Night</at-menu-item>
    </at-submenu>
  </at-submenu>
</at-menu>
```
:::

## Side Inline Navigator

Set `mode` to `inline`.

:::demo
```html
<at-menu active-name="1">
  <at-menu-item name="1"><i class="icon icon-home"></i>Navigation One</at-menu-item>
  <at-menu-item name="2" disabled><i class="icon icon-layers"></i>Navigation Two</at-menu-item>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <at-menu-item-group title="Group One">
      <at-menu-item name="3-1">Submenu One</at-menu-item>
      <at-menu-item name="3-2">Submenu Two</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="Group Two">
      <at-menu-item name="3-3">Submenu Three</at-menu-item>
      <at-menu-item name="3-4" disabled>Submenu Four</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-menu-item name="4"><i class="icon icon-settings"></i>Navigation Four</at-menu-item>
  <at-submenu disabled>
    <template slot="title"><i class="icon icon-life-buoy"></i>Submenu Five</template>
    <at-menu-item name="5-1">Submenu Six</at-menu-item>
    <at-menu-item name="5-2">Submenu Seven</at-menu-item>
  </at-submenu>
</at-menu>
```
:::

## Collapsed Inline Navigator

Set `inline-collapsed` property to open collapsed mode. Which means only one submenu can be expanded at the same time.

:::demo
```html
<at-menu active-name="1-1" inline-collapsed>
  <at-submenu opened>
    <template slot="title"><i class="icon icon-home"></i>Navigation One</template>
    <at-menu-item-group title="Group One">
      <at-menu-item name="1-1">Submenu One</at-menu-item>
      <at-menu-item name="1-2">Submenu Two</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="Group Two">
      <at-menu-item name="1-3">Submenu Three</at-menu-item>
      <at-menu-item name="1-4">Submenu Four</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Two</template>
    <at-menu-item name="2-1">Submenu One</at-menu-item>
    <at-menu-item name="2-2">Submenu Two</at-menu-item>
    <at-menu-item name="2-3">Submenu Three</at-menu-item>
    <at-menu-item name="2-4">Submenu Four</at-menu-item>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Three</template>
    <at-menu-item name="3-1">Submenu One</at-menu-item>
    <at-menu-item name="3-2">Submenu Two</at-menu-item>
    <at-menu-item name="3-3">Submenu Three</at-menu-item>
    <at-menu-item name="3-4">Submenu Four</at-menu-item>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Four</template>
    <at-menu-item name="4-1">Submenu One</at-menu-item>
    <at-menu-item name="4-2">Submenu Two</at-menu-item>
  </at-submenu>
</at-menu>
```
:::

## Themes

There are two built-in themes: `light` and `dark`. The default value is `light`.

:::demo
```html
<div class="row" style="margin-bottom: 24px;">
  <at-switch :value="true" @change="changeTheme">
    <span slot="checkedText">Dark</span>
    <span slot="unCheckedText">Light</span>
  </at-switch>
  <at-radio-group v-model="mode" style="margin-left: 40px;">
    <at-radio label="inline">Inline</at-radio>
    <at-radio label="horizontal">Horizontal</at-radio>
    <at-radio label="vertical">Vertical</at-radio>
  </at-radio-group>
</div>
<at-menu :theme="theme" :mode="mode" active-name="0" >
  <at-menu-item name="0" disabled><i class="icon icon-box"></i>Submenu</at-menu-item>
  <at-submenu>
    <template slot="title"><i class="icon icon-home"></i>Navigation One</template>
    <at-menu-item-group title="Group One">
      <at-menu-item name="1-1">Submenu One</at-menu-item>
      <at-menu-item name="1-2">Submenu Two</at-menu-item>
    </at-menu-item-group>
    <at-menu-item-group title="Group Two">
      <at-menu-item name="1-3">Submenu Three</at-menu-item>
      <at-menu-item name="1-4">Submenu Four</at-menu-item>
    </at-menu-item-group>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-life-buoy"></i>Navigation Two</template>
    <at-menu-item name="2-1">Submenu One</at-menu-item>
    <at-menu-item name="2-2">Submenu Two</at-menu-item>
    <at-menu-item name="2-3" disabled>Submenu Three</at-menu-item>
    <at-menu-item name="2-4">Submenu Four</at-menu-item>
  </at-submenu>
  <at-submenu>
    <template slot="title"><i class="icon icon-command"></i>Navigation Three</template>
    <at-menu-item name="3-1">Submenu One</at-menu-item>
    <at-menu-item name="3-2">Submenu Two</at-menu-item>
    <at-menu-item name="3-3">Submenu Three</at-menu-item>
    <at-menu-item name="3-4">Submenu Four</at-menu-item>
  </at-submenu>
  <at-submenu disabled>
    <template slot="title"><i class="icon icon-inbox"></i>Navigation Four</template>
    <at-menu-item name="4-1">Submenu One</at-menu-item>
    <at-menu-item name="4-2">Submenu Two</at-menu-item>
  </at-submenu>
</at-menu>
```
:::

## Vue Router Integration

Used together with `vue-router`. Set `router` property to `at-menu`, and Passed an `object` to `to` property. If you don't need a new history, add the `replace` property to `Menu Item`.

:::demo
```html
<at-menu router>
  <at-menu-item :to="{ name: 'Breadcrumb-en' }">Breadcrumb</at-menu-item>
  <at-menu-item :to="{ name: 'Dropdown-en' }">Dropdown</at-menu-item>
  <at-menu-item :to="{ name: 'Menu-en' }">Menu</at-menu-item>
  <at-menu-item :to="{ name: 'Pagination-en' }">Pagination</at-menu-item>
</at-menu>
```
:::

## Menu Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| mode | the mode of Menu | String | `inline`, `horizontal`, `vertical` | `inline` |
| theme | the theme of Menu | String | `light`, `dark` | `light` |
| activeName | the name of actived item | String, Number | - | - |
| router | whether to use `vue-router` | Boolean | - | false |
| inlineCollapsed | enable collapsed mode | Boolean | - | false |
| width | the width of Menu, only valid in `vertical` and `inline` mode | String | - | `240px` |

## Menu Events

| Event Name | Description          | Return Value  |
|---------- |-------------- |---------- |
| on-select | Emitted when the menu item was clicked | name |

## MenuGroup Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | the title of grouop | String | - | - |

## Submenu Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| disabled | whether the Submenu is disabled | Boolean | - | false |
| opened | whether to expand the submenu | Boolean | - | false |

## MenuItem Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | the name of Menu Item | String / Number | - | - |
| to | the object of `vue-router`, same as the `to` property in `vue-router` | String / Object | - | - |
| replace | whether to add new history when using `to` | Boolean | - | false |
| disabled | whether the MenuItem is disabled | Boolean | - | false |

<script>
  export default {
    data () {
      return {
        theme: 'dark',
        mode: 'inline',
      }
    },
    watch: {
      mode (value) {
        if (value !== 'inline') {}
      }
    },
    methods: {
      changeTheme (value) {
        this.theme = value ? 'dark' : 'light'
      }
    }
  }
</script>
