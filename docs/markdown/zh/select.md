
# Select 选择器

----

## 基础用法

基本用法，可添加 `disabled` 属性禁用选择器

:::demo
```html
<at-select v-model="model1" style="width:100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州广州广州广州广州广州广州广州广州广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
</at-select>

<at-select v-model="model2" style="width:100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
</at-select>

<at-select v-model="model2" disabled style="width:100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
</at-select>
```
:::


## 不同尺寸

可设置 `size` 属性控制选择器大小，提供三种尺寸：`large`，`normal`，`small`

:::demo
```html
<at-select v-model="model3" size="small" style="width: 100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
</at-select>
<at-select v-model="model3" size="normal" style="width: 100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
</at-select>
<at-select v-model="model3" size="large" style="width: 100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
</at-select>
```
:::


## 可清空选择

设置 `clearable` 属性可清空已选项，仅适用于单选选择器

:::demo
```html
<at-select v-model="model4" clearable size="large" style="width: 100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
</at-select>
```
:::


## 分组选项

选项可通过使用 `AtOptionGroup` 组件进行分组，分组的名称可使用属性 `label` 设置

:::demo
```html
<at-select v-model="model5" style="width: 100px">
  <at-option-group label="广东省">
    <at-option value="1">深圳</at-option>
    <at-option value="2">广州</at-option>
    <at-option value="3">珠海</at-option>
  </at-option-group>
  <at-option-group label="其他">
    <at-option value="4">上海</at-option>
    <at-option value="5">北京</at-option>
    <at-option value="6" disabled>成都</at-option>
    <at-option value="7">昆明</at-option>
    <at-option value="8">杭州</at-option>
  </at-option-group>
</at-select>
```
:::


## 自定义模板

可自定义 `AtOption` 显示的内容，但是请给 `AtOption` 添加 `label` 属性，这可以让选择器优先显示选项的 `label` 值，而不是内容本身

:::demo
```html
<at-select v-model="model6" style="width: 140px">
  <at-option value="1" label="深圳"><span>深圳</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shenzhen</span></at-option>
  <at-option value="2" label="广州"><span>广州</span><span style="float: right;opacity: .6;font-size: 0.8em;">Guangzhou</span></at-option>
  <at-option value="3" label="上海"><span>上海</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shanghai</span></at-option>
  <at-option value="4" label="北京"><span>北京</span><span style="float: right;opacity: .6;font-size: 0.8em;">Beijin</span></at-option>
  <at-option value="5" label="成都"><span>成都</span><span style="float: right;opacity: .6;font-size: 0.8em;">Chengdu</span></at-option>
</at-select>
```
:::


## 多选列表

设置 `multiple` 属性可开启多项选择器，此时绑定的 `model` 将接受数组类型的数据

:::demo
```html
<at-select v-model="model7" multiple style="width: 240px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
</at-select>
```
:::


## 可搜索列表

添加 `filterable` 属性开启选择列表的可搜索功能

:::demo
```html
<at-select v-model="model8" filterable size="large" style="width: 240px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
  <at-option value="6">厦门</at-option>
  <at-option value="7">昆明</at-option>
  <at-option value="8">杭州</at-option>
</at-select>
```
:::

## Select 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
| :---------- | :-------------- | :---------- | :-----------------------------  | :-------- |
| value | 指定当前组件的 value 值，可通过 `v-model` 绑定 | String / Number / Array | - | - |
| multiple | 是否支持多选 | Boolean | - | false |
| disabled | 是否禁用选择器 | Boolean | - | false |
| clearable | 是否支持清空功能 | Boolean | - | false |
| filterable | 是否支持搜索功能 | Boolean | - | false |
| placeholder | 选择器的占位文案 | String | - | 请选择 |
| size | 设置选择器的尺寸 | String | `large`, `normal`, `small` | normal |
| notFoundText | 搜索无结果的提示 | String | - | 无匹配数据 |
| placement | `dropdown` 出现的位置 | String | `top`, `bottom` | bottom |
| valueWithLabel | 是否将 `label` 值一并返回，默认只返回 `value` | Boolean | - | false |

## Select 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| on-change | 绑定的值变化时触发 | 选中的选项值，类型为 `String`，`Number` 或者 `Array` |

<script>
  export default {
    data () {
      return {
        model1: '',
        model2: '2',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model7: [],
        model8: '',
      }
    }
  }
</script>
