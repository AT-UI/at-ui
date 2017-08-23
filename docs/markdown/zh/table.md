
# Table 表格

----

## 基本用法

:::demo

```html
<at-table :columns="columns1" :data="data1"></at-table>
```

:::

## 斑马线风格

## 带边框风格

## 固定高度

## 多选

## 排序

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
