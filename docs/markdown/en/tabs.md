
# Tabs

----

## Basic

Tabs make it easy to switch between different views. Default activate first tab.

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


## Disabled

Disabled a tab.

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

## Icon

The Tab with Icon.

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

## Extra content

You can add extra actions to the right of Tabs by adding the slot extra.

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
    <at-button size="small">Extra Content</at-button>
  </div>
</at-tabs>
```
:::

## Mini tab

Set the property `size` to `small` can be displayed as a mini-type.

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
    <at-button size="small">Extra Content</at-button>
  </div>
</at-tabs>
```
:::

## Card type tab

Set the property `type` to `card` can display the card style.

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
    <at-button size="small">Extra Content</at-button>
  </div>
</at-tabs>
```
:::

## Mini Card tab

Mini card tab.

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
    <at-button size="small">Extra Content</at-button>
  </div>
</at-tabs>
```
:::

## Do not use animation

Animating can be disabled by setting the property `animated` to `false`.

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

## Add & close tab

Set the property `closable` to `false` can disable close. But you should delete `at-tab-pane` manually by listen to `on-tab-remove` event.

:::demo
```html
<at-tabs :animated="false" value="tab6" closable @on-tab-remove="removeHandle">
  <at-tab-pane
    v-for="(item, index) in tabList" :key="index"
    :label="item.label" :name="item.name" :unclosable="index === 0 ? true : false">
    <p>{{ item.content }}</p>
  </at-tab-pane>
  <div slot="extra">
    <at-button size="small" @click="addHandle">Add</at-button>
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


## Tabs Props
| Property      | Description       | Type      | Accepted values             | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | name of the selected tab. Use v-model to enable a two-way binding | String | - | name of first tab |
| type | type of Tab | String | `line` `card` | `line` |
| size | size of Tab | String | `default` `small` | `default` |
| closable | whether the tab can be closed | Boolean | - | false |
| animated | whether to use animation when switching tabs | Boolean | - | true |

## Tabs Events

| Event Name   | Description     | 	Return Value  |
|---------- |-------------- |---------- |
| on-change | triggers when switching tab | the current tab `{index, name}` |
| on-tab-remove | triggers when deleting tab | the deleted tab `{index, name}` |

## Tabs slot

| Name      | Description |
|----------|-------- |
| extra | the contents of the attachment on the right side of the tab |
| - | tab-pane components and extra content |

## TabPane Props

| Property     | Description      | Type    | Accepted values            | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | identifier corresponding to the activeName of Tabs, representing the alias of the tab-pane | String / Number | - | ordinal number of the tab-pane in the sequence, e.g. the first tab-pane is 1 |
| label | title of the tab | String | - | - |
| icon | icon of the tab | String | - | - |
| disabled | whether to disable the tab | Boolean | - | false |
| closable | whether the tab can be closed, the priority is higher than the Tabs `closable` | Boolean | - | true |

## TabPane slot

| Name     | Description |
|----------|-------- |
| - | content of the tab |


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
