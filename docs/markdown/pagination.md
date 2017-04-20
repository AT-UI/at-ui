
# Pagination 分页

----

### 基础分页

当页数小于 8 页时

:::demo

```html
<at-pagination :total="60"></at-pagination>
```

:::

### 更多的分页

当页数大于 8 页时，会显示更多可点击项

:::demo

```html
<at-pagination :total="100"></at-pagination>
```

:::

### 显示总数

:::demo

```html
<at-pagination :total="80" show-total></at-pagination>
```

:::

### 快速跳转

:::demo

```html
<at-pagination :total="100" show-quickjump></at-pagination>
```

:::

### 改变每页显示的数量

:::demo

```html
<at-pagination :total="100" show-sizer></at-pagination>
```

:::

### 完整功能的分页

:::demo

```html
<at-pagination :total="100" show-total show-sizer show-quickjump></at-pagination>
```

:::

### 小型分页

:::demo

```html
<at-pagination size="small" :total="100" show-total show-sizer show-quickjump></at-pagination>
```

:::

### 极简风格的分页

:::demo

```html
<at-pagination :total="100" simple></at-pagination>
<at-pagination :total="100" size="small" simple></at-pagination>
```

:::

### Pagination 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| current | 当前页码 | Number | - | 1 |
| total | 总的数据条目数 | Number | - | 0 |
| page-size | 每页最多展示的条目数 | Number | - | 10 |
| page-size-opts | 改变每页显示数量的 `select` 选择框配置项 | Array | - | [10, 20, 30, 40] |
| show-total | 是否显示总条目数 | Boolean | - | false |
| show-sizer | 是否显示每页展示数量的 `select` 选择框 | Boolean | - | false |
| show-quickjump | 是否显示快速跳转 | Boolean | - | false |
| size | 分页组件的大小 | String | 'small' | - |
| simple | 是否为极简风格 | Boolean | - | false |

### Pagination 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 页码改变时触发的回调 | 页码 |
| pagesize-change | 切换每页显示的条数时触发的回调 | 每页的条目数 |

<style lang="sass" scoped>
  .at-pagination + .at-pagination {
    margin-top: 16px;
  }
</style>
