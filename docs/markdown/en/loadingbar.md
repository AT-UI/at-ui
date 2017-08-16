
# LoadingBar

----

Create a loading progress bar globally to display the status of asynchronous requests.

Because of reusability, `LoadingBar` creates only one instance globally. You can use the `this.$Loading` instance directly.

## Basic

Invoke `$Loading` by thress methods: `start()`、`finish()`、`error()`

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

## LoadingBar Methods

| Function Name      | Description          | Parameter      |
|---------- |-------------- |---------- |
| start | start loading the progress from 0, and load automatically | - |
| finish | complete progress | - |
| error | display the error type of progress bar | - |
| update | specify and update the percentage of progress | percentage |

## LoadingBar Configs

Provides the global configuration of `LoadingBar`, usage methods below:

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

## LoadingBar Props

| Property      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | the width of line | Number | - | 2 |

<script>
export default {
  data () {
    return {
      isSetWidth: false,
      btnText: 'Set line width to 4px'
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
        this.btnText = 'Set line width to 4px'
        this.$Loading.config({
          width: 2
        })
      } else {
        this.isSetWidth = true
        this.btnText = 'Cancel the line width to 4px'
        this.$Loading.config({
          width: 4
        })
      }
    }
  }
}
</script>
