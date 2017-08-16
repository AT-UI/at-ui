
# LoadingBar 加载进度条

----

全局创建了一个用于显示页面加载、异步请求的加载进度条。

因为可复用性的关系，`LoadingBar` 只会全局创建一个实例，而且在 `Vue.prototype` 中添加了全局对象 `$Loading`，可以直接通过 `this.$Loading` 操作实例

## 基础用法

通过调用 `$Loading` 提供的三种方法来控制全局的加载进度条 `start()`、`finish()`、`error()`

:::demo
```html
<at-button @click="start">Start</at-button>
<at-button @click="finish">Finish</at-button>
<at-button @click="error">Error</at-button>
<at-button @click="update">Update</at-button>

<script>
  export default {
    methods: {
      start () {
        this.$Loading.start()
      },
      finish () {
        this.$Loading.finish()
      },
      error () {
        this.$Loading.error()
      },
      update () {
        this.$Loading.update(50)
      }
    }
  }
</script>
```
:::

## LoadingBar 函数方法

| 函数名      | 说明          | 参数      |
|---------- |-------------- |---------- |
| start | 开始从 0 显示加载进度条，并自动加载 | - |
| finish | 完成进度条 | - |
| error | 显示错误类型的进度条 | - |
| update | 指定进度的百分比，更新进度条 | percent，指定进度的百分比 |

## LoadingBar 配置

提供 `LoadingBar` 的全局配置，使用方法如下：

```js
this.$Loading.config({
  width: 4
})
```

:::demo
```html
<at-button @click="setWidth">{{ btnText }}</at-button>
```
:::

## LoadingBar 参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | 进度条的线宽 | Number | - | 2 |

<script>
export default {
  data () {
    return {
      isSetWidth: false,
      btnText: '设置线宽为 4px'
    }
  },
  methods: {
    start () {
      this.$Loading.start()
    },
    finish () {
      this.$Loading.finish()
    },
    error () {
      this.$Loading.error()
    },
    update () {
      this.$Loading.update(50)
    },
    setWidth () {
      if (this.isSetWidth) {
        this.isSetWidth = false
        this.btnText = '设置线宽为 4px'
        this.$Loading.config({
          width: 2
        })
      } else {
        this.isSetWidth = true
        this.btnText = '取消设置线宽'
        this.$Loading.config({
          width: 4
        })
      }
    }
  }
}
</script>
