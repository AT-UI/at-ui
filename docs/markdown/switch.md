
# Switch 开关

----

### 基础用法

开关用于表示两种状态之间的切换，跟单独使用的 `checkbox` 有点类型，但 `switch` 开关更多的是 触发即可改变状态，而 `checkbox` 更多的是用于表格，一般都需要配合表单的提交操作

:::demo

```html
<at-switch v-model="check" @change="changeStatus"></at-switch>
<span>{{check}}</span>
```

:::

### 内嵌文字或图标

开关内可以插入文字或图标，增强视觉

:::demo

```html
<at-switch>
  <span slot="checkedText">开</span>
  <span slot="unCheckedText">关</span>
</at-switch>
<at-switch>
  <span slot="checkedText"><i class="icon icon-left-arrow"></i></span>
  <span slot="unCheckedText"><i class="icon icon-right-arrow"></i></span>
</at-switch>
```

:::

### 不可用开关

失效状态

:::demo

```html
<at-switch disabled></at-switch>
```

:::

### 不同尺寸

:::demo

```html
<div>
  <at-switch></at-switch>
  <at-switch>
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </at-switch>
  <at-switch disabled></at-switch>
</div>
<div style="margin-top: 20px;">
  <at-switch size="small"></at-switch>
  <at-switch size="small">
    <span slot="checkedText">开</span>
    <span slot="unCheckedText">关</span>
  </at-switch>
  <at-switch size="small" disabled></at-switch>
</div>
```

:::

### API

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | Switch 状态值 | boolean | - | false |
| disabled | 是否不可用 | boolean | — | false |
| size | 尺寸 | string | 'small' | - |

<script>
export default {
  data() {
    return {
      check: true
    }
  },
  methods: {
    changeStatus(status) {
      this.check = status
    }
  }
}
</script>

<style lang="scss" scoped>
.at-switch + .at-switch {
  margin-left: 20px;
}
</style>
