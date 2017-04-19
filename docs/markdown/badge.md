
# Badge 徽标

----

### 独立使用

不包裹任何元素，类似 `Tag` 标签

:::demo

```html
<at-badge :value="3"></at-badge>
<at-badge :value="23"></at-badge>
<at-badge :value="199"></at-badge>
```

:::

### 文本内容

徽标既可以数字，也可以是文本内容

:::demo

```html
<at-badge value="new"></at-badge>
<at-badge value="hot"></at-badge>
```

:::

### 不同状态

可以传递 `status` 指定不同的状态徽标

:::demo

```html
Primary <at-badge value="123"></at-badge><br>
Success <at-badge value="123" status="success"></at-badge><br>
Warning <at-badge value="123" status="warning"></at-badge><br>
Info <at-badge value="123" status="info"></at-badge>
```

:::

### 设定最大值

可自定义徽标的最大值，超过最大值则显示 `+`

:::demo

```html
<at-badge :value="123" :max-num="99"></at-badge>
```

:::

### 组合用法

组合其他组件使用，用于展示消息数量

:::demo

```html
<at-badge value="3">
  <at-button>回复</at-button>
</at-badge>
<at-badge :value="111" :max-num="99" style="margin-left: 20px;">
  <at-button>回复</at-button>
</at-badge>
<at-badge value="new" style="margin-left: 20px;">
  <at-button>回复</at-button>
</at-badge>
```

:::

### 小红点

不显示具体的数字

:::demo

```html
<at-badge :value="12" dot></at-badge>
<at-badge :value="12" dot style="margin-left: 20px;">
  <at-button>回复</at-button>
</at-badge>
<at-badge :value="12" dot style="margin-left: 20px;">
  <i class="icon icon-store"></i>
</at-badge>
<at-badge :value="12" dot style="margin-left: 20px;">
  <span>消息</span>
</at-badge>
```

:::

### 动态展示

展示动态变化的效果

:::demo

```html
<at-badge :value="num" :max-num="12">
  <span class="badge-example"></span>
</at-badge>
<at-badge :value="num" :show="show" style="margin-left: 20px;" dot>
  <span class="badge-example"></span>
</at-badge>
<br>
<at-button-group>
  <at-button btn-size="small" @click="num -= 1">-</at-button>
  <at-button btn-size="small" @click="num += 1">+</at-button>
</at-button-group>
<at-button btn-size="small" @click="toggleDot">{{show ? '隐藏' : '显示'}}小红点</at-button>
```

:::

### 状态点

用于表示状态的小圆点

### Badge 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定的值 | string, number | - | - |
| maxNum | 允许的最大值，超出则用'+'号显示 | number | - | 99 |
| dot | 是否显示为小红点 | boolean | - | false |
| status | 徽标的类型 | string | success, warning, info | - |
| show | 是否显示小红点 | boolean | - | true |
| style | 原生属性，CSS 样式 | string | - | - |

<script>
export default {
  data() {
    return {
      num: 3,
      show: true
    }
  },
  methods: {
    toggleDot() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
  .badge-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #EEE;
    cursor: pointer;
  }
</style>

