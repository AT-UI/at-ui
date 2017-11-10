
# Tabs 标签页

----

## 基本用法

选项卡切换组件，默认选中第一项。

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

禁用某一项。

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

通过设置属性 `icon`，可为标签添加一个图标。

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

设置 slot `extra` 可以在页签右侧添加附加操作。

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
    <at-button size="small">额外内容</at-button>
  </div>
</at-tabs>
```
:::

## 迷你型

设置属性 `size` 为 `small`，可以显示为迷你型标签。

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
    <at-button size="small">额外内容</at-button>
  </div>
</at-tabs>
```
:::

## 卡片式页签

设置属性 `type` 为 `card` ，则显示为卡片式标签。

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
  <div slot="extra">
    <at-button size="small">额外内容</at-button>
  </div>
</at-tabs>
```
:::

## 卡片式页签（迷你型）

迷你型的卡片式标签。

:::demo
```html
<at-tabs type="card" v-model="activeKey" size="small">
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
    <at-button size="small">额外内容</at-button>
  </div>
</at-tabs>
```
:::

## 不使用动画切换 tab-pane

通过设置属性 `animated` 为 `false` 可以禁用动画。

:::demo
```html
<at-tabs :animated="false" v-model="activeKey">
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

## 新增和关闭页签

可以动态增加或关闭标签，但需要监听 `on-tab-remove` 事件，手动删除 `at-tab-pane`

:::demo
```html
<at-tabs :animated="false" value="tab6" closable @on-tab-remove="removeHandle">
  <at-tab-pane
    v-for="(item, index) in tabList" :key="index"
    :label="item.label" :name="item.name" :unclosable="index === 0 ? true : false">
    <p>{{ item.content }}</p>
  </at-tab-pane>
  <div slot="extra">
    <at-button size="small" @click="addHandle">添加</at-button>
  </div>
</at-tabs>

<script>
  export default {
    data () {
      return {
        tabList: [{
          label: 'Tab1',
          name: 'tab1',
          content: 'tab1 content'
        }, {
          label: 'Tab2',
          name: 'tab2',
          content: 'tab2 content'
        }, {
          label: 'Tab3',
          name: 'tab3',
          content: 'tab3 content'
        }, {
          label: 'Tab4',
          name: 'tab4',
          content: 'tab4 content'
        }, {
          label: 'Tab5',
          name: 'tab5',
          content: 'tab5 content'
        }, {
          label: 'Tab6',
          name: 'tab6',
          content: 'tab6 content'
        }],
        count: 7
      }
    },
    methods: {
      addHandle () {
        const count = this.count++
        this.tabList.push({
          label: `Tab${count}`,
          name: `tab${count}`,
          content: `Tab${count} content`,
        })
      },
      removeHandle (data) {
        this.tabList.splice(data.index, 1)
      }
    }
  }
</script>
```
:::


## Tabs 参数
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据 | String | - | 第一项的 `name` |
| type | 标签的样式类型 | String | `line` `card` | `line` |
| size | 标签的尺寸 | String | `default` `small` | `default` |
| closable | 标签是否可关闭 | Boolean | - | false |
| animated | 切换标签时是否使用动画 | Boolean | - | true |

## Tabs 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 切换 tab 时触发 | 当前标签的 `{index, name}` |
| on-tab-remove | 删除 tab 时触发 | 被删除标签的 `{index, name}` |

## Tabs slot

| 名称      | 说明 |
|----------|-------- |
| extra | 标签右侧的附件内容 |
| - | tab-pane 组件 和 slot extra 内容 |

## TabPane 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 用于标识当前标签 | String / Number | - | 当前标签的序列号 |
| label | 标签的标题 | String | - | - |
| icon | 标签的图标 | String | - | - |
| disabled | 是否禁用该标签 | Boolean | - | false |
| closable | 是否可以关闭该标签，优先级高于 Tabs 的 `closable` | Boolean | - | true |

## TabPane slot

| 名称      | 说明 |
|----------|-------- |
| - | 当前标签的显示内容 |


<script>
export default {
  data () {
    return {
      activeKey: 'name3',
      tabList: [{
        label: 'Tab1',
        name: 'tab1',
        content: 'tab1 content'
      }, {
        label: 'Tab2',
        name: 'tab2',
        content: 'tab2 content'
      }, {
        label: 'Tab3',
        name: 'tab3',
        content: 'tab3 content'
      }, {
        label: 'Tab4',
        name: 'tab4',
        content: 'tab4 content'
      }, {
        label: 'Tab5',
        name: 'tab5',
        content: 'tab5 content'
      }, {
        label: 'Tab6',
        name: 'tab6',
        content: 'tab6 content'
      }],
      count: 7
    }
  },
  methods: {
    addHandle () {
      const count = this.count++
      this.tabList.push({
        label: `Tab${count}`,
        name: `tab${count}`,
        content: `Tab${count} content`,
      })
    },
    removeHandle (data) {
      this.tabList.splice(data.index, 1)
    }
  }
}
</script>
