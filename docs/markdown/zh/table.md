
# Table 表格

----

## 基本用法

简单的数据展示表格

:::demo
```html
<at-table :columns="columns1" :data="data1"></at-table>
```
:::

## 斑马线风格

设置属性 `stripe`，可让表格间隔显示不同的颜色，用于区分不同的行

:::demo
```html
<at-table :columns="columns1" :data="data1" stripe></at-table>
```
:::

## 带边框风格

默认不带列边框，设置属性 `border` 可添加列表框

:::demo
```html
<at-table :columns="columns1" :data="data1" border></at-table>
```
:::

## 固定高度

设置属性 `height`，可自定义表格的高度，此时表头会自动 `Fixed` 在顶部

:::demo
```html
<at-table :columns="columns1" :data="data1" height="220"></at-table>
```
:::

## 多选

设置属性 `optional` 可开启多选功能；选中某一项会触发 `on-selection-change` 事件，点击「全选按钮」会触发 `on-select-all` 事件

:::demo
```html
<at-table :columns="columns1" :data="data2" optional></at-table>
```
:::

## 排序

:::demo
```html
<at-table :columns="columns2" :data="data2" sort></at-table>
```
:::

## 自定义列模板

## 尺寸

## 远程加载数据

<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        columns2: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age',
            sortType: 'normal'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '库里',
            age: 18,
            address: '深圳市宝安区创业一路'
          },
          {
            name: '詹姆斯',
            age: 25,
            address: '广州市天河区岗顶'
          },
          {
            name: '科比',
            age: 24,
            address: '上海市浦东新区'
          },
          {
            name: '杜兰特',
            age: 22,
            address: '深圳市南山区深南大道'
          },
          {
            name: '威斯布鲁克',
            age: 21,
            address: '北京市朝阳区'
          },
          {
            name: '邓肯',
            age: 26,
            address: '深圳市罗湖区万象城'
          },
          {
            name: '帕克',
            age: 25,
            address: '深圳市福田区中心书城'
          },
          {
            name: '欧文',
            age: 20,
            address: '广州市番禺区大学城'
          },
          {
            name: '托马斯',
            age: 19,
            address: '北京市朝阳区'
          }
        ],
        data2: [
          {
            name: '库里',
            age: 18,
            address: '深圳市宝安区创业一路'
          },
          {
            name: '詹姆斯',
            age: 25,
            address: '广州市天河区岗顶'
          },
          {
            name: '科比',
            age: 24,
            address: '上海市浦东新区'
          },
          {
            name: '杜兰特',
            age: 22,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
