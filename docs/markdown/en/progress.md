# Progress

----

Used to display the progress and status of events.

## Basic

Basic progress will set the status to `success` automatically when the progress arrives at `100%`.

:::demo
```html
<at-progress :percent="0"></at-progress>
<at-progress :percent="60"></at-progress>
<at-progress :percent="100"></at-progress>
<at-progress :percent="50" status="error"></at-progress>
```
:::

## Mini Progress

In the narrow areas, you need to use a mini progress bar. Set the width of progress bar with `stroke-width` property.

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

## Dynamic

Click the buttons below to see the transition of progress.

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

## Progress Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| percent | the percentage of Progress | Number | - | 0 |
| status | the status of Progress | String | `success`, `error` | - |
| stroke-width | the width of Progress Bar | Number | - | 8 |

## Progress Events

| Event Name      | Description          | Return Value  |
|------------- |-------------- |---------- |
| on-status-success | Emitted when the percentage of Progress achieved `100%` | event |

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
