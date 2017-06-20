# Radio 单选框

----

### 基本单选框

每个都是独立的单选按钮，各自需要单独绑定一个 `model`

:::demo
```html
<at-radio v-model="radio" label="选项一">选项一</at-radio>
<at-radio v-model="radio" label="选项二">选项二</at-radio>
```
:::

### 不可用状态

添加属性 `disabled`，设置按钮不可用

:::demo
```html
<at-radio v-model="radio2" label="选项三" disabled>不可点且未选中</at-radio>
<at-radio v-model="radio2" label="选项四" disabled>不可点且选中</at-radio>
```
:::

### 单选框组合

如果按钮存在互斥的情况，可用单选框组，但如果选项过多，建议使用下拉框组件

::: demo

```html

<at-radio-group v-model="radio3">
  <at-radio label="选项一">选项一</at-radio>
  <at-radio label="选项二">选项二</at-radio>
  <at-radio label="选项三">选项三</at-radio>
</at-radio-group>

```

:::


### 组合按钮

按钮样式的单选框组合

:::demo

```html

<at-radio-group v-model="radio4">
  <at-radio-button label="北京">北京</at-radio-button>
  <at-radio-button label="上海" :disabled="true">上海</at-radio-button>
  <at-radio-button label="深圳">深圳</at-radio-button>
  <at-radio-button label="凹凸实验室">凹凸实验室</at-radio-button>
</at-radio-group>

```

:::

### 组合按钮的不同样式


### 不同大小的组合按钮

提供大中小三种尺寸的组合按钮

:::demo

```html

<at-radio-group v-model="radio5" size="large">
  <at-radio-button label="北京">北京</at-radio-button>
  <at-radio-button label="上海" :disabled="true">上海</at-radio-button>
  <at-radio-button label="深圳">深圳</at-radio-button>
  <at-radio-button label="凹凸实验室">凹凸实验室</at-radio-button>
</at-radio-group>
<br/>
<at-radio-group v-model="radio5" size="normal">
  <at-radio-button label="北京">北京</at-radio-button>
  <at-radio-button label="上海" :disabled="true">上海</at-radio-button>
  <at-radio-button label="深圳">深圳</at-radio-button>
  <at-radio-button label="凹凸实验室">凹凸实验室</at-radio-button>
</at-radio-group>
<br/>
<at-radio-group v-model="radio5" size="small">
  <at-radio-button label="北京">北京</at-radio-button>
  <at-radio-button label="上海" :disabled="true">上海</at-radio-button>
  <at-radio-button label="深圳">深圳</at-radio-button>
  <at-radio-button label="凹凸实验室">凹凸实验室</at-radio-button>
</at-radio-group>

```

:::

### Radio-Group 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| size | 按钮尺寸，仅适用于单选按钮样式 | string | small, normal, large | normal |

### Radio-Group 事件

| 事件名称      | 说明          | 返回值  |
|---------- |-------------- |---------- |
| change | 绑定的值有变化时触发 | 选择的按钮的 label 值 |

<script>
  export default {
    data() {
      return {
        radio: '选项二',
        radio2: '选项四',
        radio3: '选项一',
        radio4: '深圳',
        radio5: '深圳'
      }
    }
  }
</script>
