
# 快速上手

----

## 使用前准备

> 在使用之前，推荐学习 `Vue` 和 `ES2015` ，并正确配置 `Node.js` v6.x 或以上版本

`AT-UI` 基于 `Vue.js` 2.x+ 版本开发，所以有必要了解以下基础知识：
- [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)
- [单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

## 基于模板工程开发

> `Vue.js` 提供一个官方命令行工具 `vue-cli`，可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需几分钟即可创建并启动一个带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。

我们提供了一个模板工程，可通过 `vue-cli` 工具初始化模板项目，快速搭建单页应用

```shell
vue init at-ui/at-template my-project
```

如果不想使用 `vue-cli` 工具，我们也同样提供了可直接使用的模板工程：[at-webpack-boilerplate](https://github.com/at-ui/at-webpack-boilerplate)

## 标准开发

实际项目中，往往会使用 `webpack`，`rollup` 或者 `gulp` 的工作流，大多可以做到按需加载页面用到的组件，所以不推荐直接使用 `<script>` 标签全局引入的方式使用。

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import Vue from 'vue'
import AtComponents from 'at-ui'
import 'at-ui-style'    // 引入组件样式

// import 'at-ui-style/src/index.scss'      // 或者引入未构建版本的 scss 样式

Vue.use(AtComponents)
```

如果全局引入了所有组件，那么可以直接使用 `AT-UI` 的全局实例方法，如：

```js
this.$Message.success(config)
this.$Notify(config)
this.$Loading.start()
this.$Modal.alert(config)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { AtInput } from 'at-ui'

export default {
  components: {
    AtInput
  },
  data () {
    return {
      value: 'O2Team'
    }
  }
}
```

在模板中，用 `<at-input></at-input>` 自定义标签的方式使用组件，并且可用 `v-model` 语法实现数据的动态绑定

```html
<template>
  <div>
    <at-input v-model="value" placeholder="请输入..."></at-input>
  </div>
</template>
```

## 自定义主题

`AT-UI` 的样式已抽离成单独的项目 [AT-UI-Style](https://github.com/at-ui/at-ui-style)，各个组件的样式变量都存放在 `at-ui-style/src/variables/default.scss` 文件中。用户可根据实际需要，自定义组件的样式
