
# Textarea 多行文本输入框

----

### 基本的输入框

默认固定两行的输入框

:::demo

```html
<at-textarea v-model="inputValue" placeholder="这里是输入框..."></at-textarea>
```

:::

### 禁用的输入框

:::demo

```html
<at-textarea v-model="inputValue" placeholder="这里是输入框..." disabled></at-textarea>
```

:::

### 自动调整输入框高度（限制行数）

可根据输入文本的行数，自动调整输入框的高度，可通过 `minRows` 和 `maxRows` 来设置

:::demo

```html
<at-textarea v-model="inputValue2" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="这里输入内容，请输入多行"></at-textarea>
```

:::

### 自动调整输入框高度（不限制行数）

可根据输入文本的行数，自动调整输入框的高度，不限制行数

:::demo

```html
<at-textarea v-model="inputValue3" autosize placeholder="这里输入内容，请输入多行"></at-textarea>
```

:::

### Textarea 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 原生属性 | string | - | - |
| value | 绑定的值 | string | - | - |
| autosize | 自动调整输入框高度 | boolean, object | { minRows: 2, maxRows: 4 } | false |
| placeholder | 占位文本（原生属性） | string | - | - |
| disabled | 是否禁用（原生属性） | boolean | - | false |
| autofocus | 是否自动获取焦点（原生属性） | boolean | - | false |

<script>
export default {
  data() {
    return {
      inputValue: '',
      inputValue2: '',
      inputValue3: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.at-textarea {
  width: 400px;

  & + .at-textarea {
    margin-top: 15px;
  }
}
</style>
