
# Input 输入框

----

## 单行输入框

基本输出框，默认宽度 `100%`

:::demo
```html
<at-input v-model="inputValue" placeholder="输入提示"></at-input>
<at-input v-model="inputValue" placeholder="禁用状态" disabled></at-input>
<at-input v-model="password" type="password" placeholder="密码"></at-input>
```
:::

## 带状态的单行输入框

添加属性 `status` ，表示不同含义的输入框，只是颜色上的变化，不影响按钮逻辑。默认提供四种状态：`success`，`error`，`warning`，`info`

:::demo
```html
<at-input v-model="inputValue2" placeholder="success" status="success" icon="check-circle"></at-input>
<at-input v-model="inputValue2" placeholder="error" status="error" icon="x-circle"></at-input>
<at-input v-model="inputValue2" placeholder="warning" status="warning" icon="alert-circle"></at-input>
<at-input v-model="inputValue2" placeholder="info" status="info" icon="info"></at-input>
```
:::

## 带图标的输入框

添加属性 `icon` ，在输入框后面显示提示性的图标。`icon` 属性值为图标的类名，具体请查阅 `品牌/图标` 章节

:::demo
```html
<at-input v-model="inputValue3" placeholder="请输入链接" icon="link"></at-input>
```
:::

## 前置 / 后置标签型输入框

设置 `slot="prepend"` 或者 `slot="append"` ，可自定义复合型输入框

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
<at-input v-model="inputValue4" placeholder="请输入内容" prepend-button>
  <template slot="prepend">
    <span>搜索</span>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" append-button>
  <template slot="append">
    <span>搜索</span>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" prepend-button>
  <template slot="prepend">
    <i class="icon icon-search"></i>
  </template>
</at-input>
<at-input v-model="inputValue4" placeholder="请输入内容" append-button>
  <template slot="append">
    <i class="icon icon-search"></i>
  </template>
</at-input>
```
:::

## 不同尺寸

设置属性 `size` 指定输入框的尺寸，支持三种尺寸：`large`，`normal`，`small`

:::demo
```html
<at-input v-model="inputValue" size="large" placeholder="大尺寸"></at-input>
<at-input v-model="inputValue" placeholder="正常尺寸"></at-input>
<at-input v-model="inputValue" size="small" placeholder="小尺寸"></at-input>
```
:::

## Input 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 输入框类型，原生属性 | String | - | - |
| name | 原生属性 | String | - | - |
| value | 绑定的值 | String / Number | - | - |
| placeholder | 占位文本（原生属性） | String | - | - |
| disabled | 是否禁用（原生属性） | Boolean | - | false |
| readonly | 是否只读（原生属性） | Boolean | - | false |
| maxlength | 最大长度（原生属性） | Number | - | - |
| minlength | 最小长度（原生属性） | Number | - | - |
| max | 最大值（原生属性） | Number | - | - |
| min | 最小值（原生属性） | Number | - | - |
| autofocus | 是否自动获取焦点（原生属性） | Boolean | - | false |
| size | 输入框尺寸 | String | `small`, `normal`, `large` | normal |
| status | 输入框类型 | String | success, error, warning, info | - |
| prependButton | 前置元素是否包含可点击的按钮，用于复合型输入框 | Boolean | - | false |
| appendButton | 后置元素是否包含可点击的按钮，用于复合型输入框 | Boolean | - | false |

## Input slot

| 名称 | 说明          |
|------ |------------ |
| prepend | 前置内容，仅在 text 类型下有效 |
| append | 后置内容，仅在 text 类型下有效 |

## Input 事件

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

<style lang="scss" scoped>
.at-input {
  width: 200px;

  & + .at-input {
    margin-top: 15px;
  }
}
</style>
