
# Textarea 文本域

----

文本域输入框，用于输入多行文本，不适用于富文本输入

## 基础文本域

默认固定为两行的文本域，使用方法类似 `AtInput` 组件

:::demo
```html
<at-textarea v-model="inputValue" placeholder="这里是输入框..."></at-textarea>
```
:::

## 禁用状态

添加属性 `disabled` 禁用文本域输入框

:::demo
```html
<at-textarea v-model="inputValue" placeholder="这里是输入框..." disabled></at-textarea>
```
:::

## 自适应文本高度（限制行数）

可根据输入文本的行数，自动调整输入框的高度，可分别通过 `minRows` 和 `maxRows` 属性来设置文本域的最小和最大行数

:::demo
```html
<p class="demo-desc">minRows=2, maxRows=4</p>
<at-textarea v-model="inputValue2" min-rows="2" max-rows="4" placeholder="这里输入内容，请输入多行"></at-textarea>
```
:::

## 自适应文本高度（不限制行数）

设置属性 `autosize`，可根据输入文本的行数，自动调整输入框的高度，不限制行数。如果同时使用 `autosize` 和 `minRows`，会优先使用 `autosize`

:::demo
```html
<at-textarea v-model="inputValue3" autosize placeholder="这里输入内容，请输入多行"></at-textarea>
```
:::

## Textarea 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 原生属性 | String | - | - |
| value | 文本域的值，可通过 `v-model` 绑定 | String | - | - |
| autosize | 是否自动调整输入框高度 | Boolean | - | false |
| placeholder | 占位文本（原生属性） | String | - | - |
| disabled | 是否禁用（原生属性） | Boolean | - | false |
| autofocus | 是否自动获取焦点（原生属性） | Boolean | - | false |
| resize | 是否能被用户缩放 | String | `none`, `both`, `horizontal`, `vertical`  | `vertical` |

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
    & + .at-textarea {
      margin-top: 15px;
    }
  }
</style>
