
# Input 输入框

----

### 单行输入框

:::demo

```html
<at-input v-model="inputValue" placeholder="输入提示"></at-input>
<at-input v-model="inputValue" placeholder="禁用状态" disabled></at-input>
```

:::

### 密码类型的输入框

:::demo

```html
<at-input v-model="password" type="password"></at-input>
```

:::

### 带状态的单行输入框

通过添加状态表示不同含义的输入框

:::demo

```html
<at-input v-model="inputValue2" placeholder="success" status="success" icon="correct"></at-input>
<at-input v-model="inputValue2" placeholder="error" status="error" icon="cancel-1"></at-input>
<at-input v-model="inputValue2" placeholder="warning" status="warning"></at-input>
<at-input v-model="inputValue2" placeholder="info" status="info" icon="info"></at-input>
```

:::

### 带图标的输入框

纯粹在输入框后面添加提示性的图标

:::demo

```html
<at-input v-model="inputValue3" placeholder="请输入链接" icon="link"></at-input>
```

:::

### 前置/后置标签型输入框

可设置前置还是后置元素，只能传递文本标签

:::demo

```html
<at-input v-model="inputValue4" placeholder="请输入内容">
  <template slot="prepend">
    <span>Https://</span>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" size="small">
  <template slot="append">
    <span>@aotu.io</span>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容">
  <template slot="prepend">
    <i class="icon icon-link"></i>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" button>
  <template slot="prepend">
    <span>搜索</span>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" button>
  <template slot="append">
    <span>搜索</span>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" button>
  <template slot="prepend">
    <i class="icon icon-search"></i>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" button>
  <template slot="append">
    <i class="icon icon-search"></i>
  </template>
</at-input>
```

### 组合型输入框

### 搜索框

### 前缀/后缀内嵌型输入框

:::

### 不同尺寸

:::demo

```html
<at-input v-model="inputValue" size="large" placeholder="大尺寸"></at-input>
<at-input v-model="inputValue" placeholder="正常尺寸"></at-input>
<at-input v-model="inputValue" size="small" placeholder="小尺寸"></at-input>
```

:::

### Input 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 原生属性 | string | - | - |
| value | 绑定的值 | string, number | - | - |
| button | 是否包含可点击的按钮，用于复合型输入框 | boolean | - | false |
| size | 输入框尺寸 | string | small, normal, large | normal |
| type | 输入框类型（原生属性） | string | - | text |
| placeholder | 占位文本（原生属性） | string | - | - |
| disabled | 是否禁用（原生属性） | boolean | - | false |
| max | 最大值（原生属性） | number | - | - |
| min | 最小值（原生属性） | number | - | - |
| autofocus | 是否自动获取焦点（原生属性） | boolean | - | false |
| status | 输入框类型 | string | success, error, warning, info | - |

### Input 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| focus | 获得焦点时触发 | event |
| blur | 失去焦点时触发 | event |

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValue2: '',
      inputValue3: '',
      inputValue4: '',
      password: ''
    }
  }
}
</script>

<style lang="sass" scoped>
.at-input {
  width: 200px;

  & + .at-input {
    margin-top: 15px;
  }
}
</style>
