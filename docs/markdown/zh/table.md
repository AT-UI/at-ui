
# Table 表格

----

## 基本用法

简单的数据展示表格

:::demo
```html
<at-table :columns="columns1" :data="data1"></at-table>

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
        ]
      }
    }
  }
</script>
```
:::

## 斑马线风格

设置属性 `stripe`，可让表格间隔显示不同的颜色，用于区分不同的行

:::demo
```html
<at-table :columns="columns1" :data="data1" stripe></at-table>

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
        ]
      }
    }
  }
</script>
```
:::

## 带边框风格

默认不带列边框，设置属性 `border` 可添加列表框

:::demo
```html
<at-table :columns="columns1" :data="data1" border></at-table>

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
        ]
      }
    }
  }
</script>
```
:::

## 固定高度

设置属性 `height`，可自定义表格的高度，此时表头会自动 `Fixed` 在顶部

:::demo
```html
<at-table :columns="columns1" :data="data1" height="220"></at-table>

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
        ]
      }
    }
  }
</script>
```
:::

## 多选

设置属性 `optional` 可开启多选功能；选中某一项会触发 `on-selection-change` 事件，点击「全选按钮」会触发 `on-select-all` 事件

:::demo
```html
<at-table :columns="columns1" :data="data2" optional></at-table>

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
```
:::

## 排序

如需对某一列数据进行排序，可给 `columns` 的数据项设置 `sortType` 属性，传入 `normal` 则表示该列不进行排序，但展示排序的操作按钮

`sortType` 支持的参数：`normal (不排序)`, `desc (降序)`, `asc (升序)`

:::demo
```html
<at-table :columns="columns2" :data="data2"></at-table>

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
            key: 'age',
            sortType: 'normal'
          },
          {
            title: '地址',
            key: 'address'
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
```
:::

## 自定义列模板

给 `columns` 的数据项设置一个函数 `render`，可以自定义该列的渲染模板，可以渲染自定义的组件，它是基于 Vue 的 `Render` 函数。

`render` 函数接收两个参数 `h`, `object`，`object` 包含 `item`, `column`, `index`，分别指当前单元格的数据，当前列的标题数据，当前的行号

:::demo
```html
<at-table :columns="columns3" :data="data2" sort></at-table>

<script>
  export default {
    data () {
      return {
        columns3: [
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
          },
          {
            title: '操作',
            render: (h, params) => {
              return h('div', [
                h('AtButton', {
                  props: {
                    size: 'small',
                    hollow: true
                  },
                  style: {
                    marginRight: '8px'
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.name)
                    }
                  }
                }, '查看姓名'),
                h('AtButton', {
                  props: {
                    size: 'small',
                    hollow: true
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.address)
                    }
                  }
                }, '查看地址')
              ])
            }
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
```
:::

## 尺寸

设置属性 `size` 可调整表格的尺寸大小，提供三种尺寸：`small`, `normal`, `large`，默认为 `normal`

:::demo
```html
<at-table :columns="columns3" :data="data2" size="large" sort></at-table>

<at-table style="margin-top: 24px;" :columns="columns4" :data="data2" size="small" sort></at-table>

<script>
  export default {
    data () {
      return {
        columns3: [
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
          },
          {
            title: '操作',
            render: (h, params) => {
              return h('div', [
                h('AtButton', {
                  props: {
                    size: 'small',
                    hollow: true
                  },
                  style: {
                    marginRight: '8px'
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.name)
                    }
                  }
                }, '查看姓名'),
                h('AtButton', {
                  props: {
                    size: 'small',
                    hollow: true
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.address)
                    }
                  }
                }, '查看地址')
              ])
            }
          }
        ],
        columns4: [
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
          },
          {
            title: '操作',
            render: (h, params) => {
              return h('div', [
                h('AtButton', {
                  props: {
                    size: 'smaller',
                    hollow: true
                  },
                  style: {
                    marginRight: '8px'
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.name)
                    }
                  }
                }, '查看姓名'),
                h('AtButton', {
                  props: {
                    size: 'smaller',
                    hollow: true
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.address)
                    }
                  }
                }, '查看地址')
              ])
            }
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
```
:::

## 分页

设置属性 `pagination` 可启用表格的分页功能

:::demo
```html
<at-table :columns="columns2" :data="data3" pagination></at-table>

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
            key: 'age',
            sortType: 'normal'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data3: this.makePageData()
      }
    },
    methods: {
      makePageData () {
        const data = [
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
        ]
        let pageData = []

        for (let i = 0; i < 5; i++) {
          pageData = pageData.concat(data)
        }

        return pageData
      }
    }
  }
</script>
```
:::

## Table 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 表格的尺寸 | String | `small`, `normal`, `large` | `normal` |
| stripe | 是否启用斑马线风格 | Boolean | - | false |
| border | 是否显示列边框 | Boolean | - | false |
| data | 表单的内容数据 | Array | - | [] |
| columns | 表单的标题数据 | Array | - | [] |
| optional | 是否支持选择 | Boolean | - | false |
| pagination | 是否显示分页 | Boolean | - | false |
| page-size | 每页的数据量 | Number | - | 10 |
| show-page-total | 是否显示数据总数 | Boolean | - | true |
| show-page-sizer | 是否显示更改每页展示数的选择框 | Boolean | - | false |
| show-page-quickjump | 是否显示快速跳转 | Boolean | - | false |
| height | 指定表格的高度 | Number / String | - | - |

## Table 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-selection-change | 选中值有变化时触发 | 选中的行的对象数组 |
| on-select-all | 只有全选时才会触发 | 所有行组成的对象数组 |
| on-page-change | 页码改变时触发的回调 | 页码 |
| on-page-size-change | 切换每页显示的条数时触发的回调 | 每页的条目数 |

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
        columns3: [
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
          },
          {
            title: '操作',
            render: (h, params) => {
              return h('div', [
                h('AtButton', {
                  props: {
                    size: 'small',
                    hollow: true
                  },
                  style: {
                    marginRight: '8px'
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.name)
                    }
                  }
                }, '查看姓名'),
                h('AtButton', {
                  props: {
                    size: 'small',
                    hollow: true
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.address)
                    }
                  }
                }, '查看地址')
              ])
            }
          }
        ],
        columns4: [
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
          },
          {
            title: '操作',
            render: (h, params) => {
              return h('div', [
                h('AtButton', {
                  props: {
                    size: 'smaller',
                    hollow: true
                  },
                  style: {
                    marginRight: '8px'
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.name)
                    }
                  }
                }, '查看姓名'),
                h('AtButton', {
                  props: {
                    size: 'smaller',
                    hollow: true
                  },
                  on: {
                    click: () => {
                      this.$Message(params.item.address)
                    }
                  }
                }, '查看地址')
              ])
            }
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
        ],
        data3: this.makePageData()
      }
    },
    methods: {
      makePageData () {
        const data = [
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
        ]
        let pageData = []

        for (let i = 0; i < 5; i++) {
          pageData = pageData.concat(data)
        }

        return pageData
      }
    }
  }
</script>
