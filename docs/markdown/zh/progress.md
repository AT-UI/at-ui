# Progress 进度条

----

用于展示事件的进度和状态

## 基本进度条

标准的进度条，当进度达到 `100%` 的时候，会自动将状态设置为 `success`

:::demo
```html
<at-progress :percent="0"></at-progress>
<at-progress :percent="60"></at-progress>
<at-progress :percent="100"></at-progress>
<at-progress :percent="50" status="error"></at-progress>
```
:::

## 小型进度条

在一些狭小的区域，需要使用小型进度条。通过参数 `stroke-width` 可配置进度条的线宽

:::demo
```html
<div class="row no-gutter">
  <div class="col-sm-24 col-md-12">
    <at-progress :percent="0" :stroke-width="4"></at-progress>
    <at-progress :percent="60" :stroke-width="4"></at-progress>
    <at-progress :percent="100" :stroke-width="4"></at-progress>
    <at-progress :percent="50" status="error" :stroke-width="4"></at-progress>
  </div>
</div>
```
:::

## 动态展示

点击操作按钮，查看进度条的状态变化

:::demo
```html
<at-progress :percent="percent"></at-progress>
<at-button-group size="small">
  <at-button @click="descPercent"><i class="icon icon-minus"></i></at-button>
  <at-button @click="inscPercent"><i class="icon icon-plus"></i></at-button>
</at-button-group>

<script>
  export default {
    data () {
      return {
        percent: 0
      }
    },
    methods: {
      descPercent () {
        this.percent -= 10
        this.percent = this.percent < 0 ? 0 : this.percent
      },
      inscPercent () {
        this.percent += 10
        this.percent = this.percent > 100 ? 100 : this.percent
      }
    }
  }
</script>
```
:::

## Progress 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percent | 百分比 | Number | - | 0 |
| status | 进度条状态 | String | `success`, `error` | - |
| stroke-width | 进度条的线宽 | Number | - | 8 |

## Progress 事件

| 事件名称      | 说明          | 返回值  |
|------------- |-------------- |---------- |
| on-status-success | 进度到 `100%` 时触发 | 触发时 `percent` 的值 |

<style lang="scss" scoped>
.at-progress {
  margin-bottom: 8px;
}
</style>

<script>
export default {
  data () {
    return {
      percent: 0
    }
  },
  methods: {
    descPercent () {
      this.percent -= 10
      this.percent = this.percent < 0 ? 0 : this.percent
    },
    inscPercent () {
      this.percent += 10
      this.percent = this.percent > 100 ? 100 : this.percent
    }
  }
}
</script>
