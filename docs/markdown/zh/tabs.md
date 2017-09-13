
# Tabs 标签页

----

## 基本用法

:::demo
```html
<at-tabs>
  <at-tab-pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </at-tab-pane>
  <at-tab-pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </at-tab-pane>
  <at-tab-pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </at-tab-pane>
</at-tabs>
```
:::


## 禁用某一项

:::demo
```html
<at-tabs>
  <at-tab-pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </at-tab-pane>
  <at-tab-pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </at-tab-pane>
  <at-tab-pane label="Tab3" name="name3" :disabled="true">
    <p>Content of Tab Pane 3</p>
  </at-tab-pane>
</at-tabs>
```
:::

## 图标

:::demo
```html
<at-tabs>
  <at-tab-pane label="Tab1" name="name1" icon="icon-github">
    <p>Content of Tab Pane 1</p>
  </at-tab-pane>
  <at-tab-pane label="Tab2" name="name2" icon="icon-twitter">
    <p>Content of Tab Pane 2</p>
  </at-tab-pane>
  <at-tab-pane label="Tab3" name="name3" icon="icon-pocket">
    <p>Content of Tab Pane 3</p>
  </at-tab-pane>
</at-tabs>
```
:::

## 附加内容

:::demo
```html
<at-tabs>
  <at-tab-pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </at-tab-pane>
  <at-tab-pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </at-tab-pane>
  <at-tab-pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </at-tab-pane>
  <div slot="extra">
    <at-button size="small" @click="extraHandle">额外内容</at-button>
  </div>
</at-tabs>
```
:::

## 迷你型

:::demo
```html
<at-tabs size="small">
  <at-tab-pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </at-tab-pane>
  <at-tab-pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </at-tab-pane>
  <at-tab-pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </at-tab-pane>
  <div slot="extra">
    <at-button size="small" @click="extraHandle">额外内容</at-button>
  </div>
</at-tabs>
```
:::

## 卡片式页签

:::demo
```html
<at-tabs type="card" v-model="activeKey">
  <at-tab-pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </at-tab-pane>
  <at-tab-pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </at-tab-pane>
  <at-tab-pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </at-tab-pane>
</at-tabs>
```
:::

## 是否使用动画切换 Tabs

:::demo
```html
<at-tabs :animated="false" v-model="activeKey" @on-change="changeHandle">
  <at-tab-pane label="Tab1" name="name1">
    <p>Content of Tab Pane 1</p>
  </at-tab-pane>
  <at-tab-pane label="Tab2" name="name2">
    <p>Content of Tab Pane 2</p>
  </at-tab-pane>
  <at-tab-pane label="Tab3" name="name3">
    <p>Content of Tab Pane 3</p>
  </at-tab-pane>
</at-tabs>
```
:::

## 可移动

:::demo
```html
<at-tabs :animated="false" v-model="activeKey">
  <at-tab-pane
    v-for="index in 10" :key="index"
    :label="`Tab${index}`" :name="`name${index}`">
    <p>Content of Tab Pane {{ index }}</p>
  </at-tab-pane>
  <div slot="extra">
    <at-button size="small" @click="extraHandle">额外内容</at-button>
  </div>
</at-tabs>
```
:::

<script>
export default {
  data () {
    return {
      activeKey: 'name3'
    }
  },
  methods: {
    extraHandle () {
      console.log('click extra')
    },
    changeHandle (data) {
      console.log(data)
    }
  }
}
</script>
