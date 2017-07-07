
# Table 表格

----

## 基本用法

:::demo

```html
<at-table :columns="columns1" :data="data1"></at-table>
```

:::

## 可选择的列表

## 整合分页组件的表格

## 排序表格

## 过滤表格

## 远程加载数据

## 不同尺寸的表格

## 带边框

## 表格行列合并

## 固定表头

## 固定列

## 可编辑的单元格

## 可编辑行

## 动态控制表格属性

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
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
