# Progress 进度条

----

用于展示事件的进度和状态

### 基本进度条

标准的进度条，当进度达到 `100%` 的时候，会自动把状态设置为 `success`

:::demo

```html

<at-progress :percent="0"></at-progress>
<at-progress :percent="60"></at-progress>
<at-progress :percent="100"></at-progress>
<at-progress :percent="100" status="success"></at-progress>
<at-progress :percent="50" status="error"></at-progress>

```

:::

### 小型进度条

在一些狭小的区域，需要使用小型进度条

:::demo

```html

<at-progress :percent="0" :stroke-width="4"></at-progress>
<at-progress :percent="60" :stroke-width="4"></at-progress>
<at-progress :percent="100" :stroke-width="4"></at-progress>
<at-progress :percent="100" status="success" :stroke-width="4"></at-progress>
<at-progress :percent="50" status="error" :stroke-width="4"></at-progress>

```

:::

### 环形进度条

暂不支持

### Progress 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percent | 百分比 | Number | - | 0 |
| status | 进度条状态 | String | `success`, `error` | Infinity |
| stroke-width | 进度条的线宽 | Number | - | 10 |

<style lang="scss" scoped>
.at-progress:not(:last-child) {
  margin-bottom: 8px;
}
</style>
