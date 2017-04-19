
# Select 选择器

----

### 基础用法

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

### 不同尺寸

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


### 可清空选择

:::demo

```html
<at-select v-model="model4" clearable style="width: 100px">
  <at-option value="1">深圳</at-option>
  <at-option value="2">广州</at-option>
  <at-option value="3">上海</at-option>
  <at-option value="4">北京</at-option>
  <at-option value="5">成都</at-option>
</at-select>
```

:::


### 分组选项

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
    <at-option value="6">成都</at-option>
    <at-option value="7">昆明</at-option>
    <at-option value="8">杭州</at-option>
  </at-option-group>
</at-select>
```

:::


### 自定义模板

:::demo

```html
<at-select v-model="model6" style="width: 140px">
  <at-option value="1"><span>深圳</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shenzhen</span></at-option>
  <at-option value="2"><span>广州</span><span style="float: right;opacity: .6;font-size: 0.8em;">Guangzhou</span></at-option>
  <at-option value="3"><span>上海</span><span style="float: right;opacity: .6;font-size: 0.8em;">Shanghai</span></at-option>
  <at-option value="4"><span>北京</span><span style="float: right;opacity: .6;font-size: 0.8em;">Beijin</span></at-option>
  <at-option value="5"><span>成都</span><span style="float: right;opacity: .6;font-size: 0.8em;">Chengdu</span></at-option>
</at-select>
```

:::


### 多选列表

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


### 可搜索列表

:::demo

```html
<at-select v-model="model7" filterable style="width: 240px">
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

### 可搜索的标签列表

可添加随意输入的内容

### 联动列表

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
      }
    }
  }
</script>
