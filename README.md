# AT UI

一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站产品

## 特性

- 基于 `Vue` 开发的 UI 组件
- 基于 npm + webpack + babel 的工作流，支持 ES2015
- CSS 样式独立，保证不同的框架实现都能保持统一的 UI 风格（ 详见：[AT-UI Style](https://github.com/o2team/at-ui-style) ）
- 提供友好的 API，可灵活的使用组件

## 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)

## 安装

- 推荐使用 npm 安装

```bash
npm install at-ui
```
- 也可以使用 `<script>` 全局引用

```html
<script type="text/javascript" src="at.min.js"></script>
```

## 使用

由于 `AT-UI` 的样式独立成了单独的项目，所以在使用 `AT-UI` 前，需要安装 `at-ui-style`。可采用 npm 的方式安装，或者使用 `<script>` 标签的方式引入样式文件。

```bash
npm install at-ui-style
```

或者

```html
<link rel="stylesheet" href="at.min.css" />
```

### 全局组件使用

可以在项目的入口文件中引入所有组件或者所需组件

```js
import Vue from 'vue'
import AtComponents from 'at-ui'
import 'at-ui-style'      // 引入组件样式

// import 'at-ui-style/src/index.scss'    // 或者引入未构建的 scss 样式

Vue.use(AtComponents)
```

如果全局引入了所有组件，那么可以直接使用 `AT-UI` 的全局实例方法

```js
this.$Message.success(config)
this.$Notify(config)
this.$Loading.start()
this.$Modal.alert(config)
```

### 单个组件使用

可以在单独的页面中局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import {AtInput} from 'at-ui'

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

在模板中，使用 `<at-input></at-input>` 的方式使用组件，并且用 `v-model` 的语法实现动态绑定

```html
<template>
  <div>
    <at-input v-model="value" placeholder="请输入..."></at-input>
  </div>
</template>
```

### 本地开发

```bash
$ git clone git@github.com:o2team/at-ui.git
$ npm install
$ npm run dev
```

### 贡献

如果你在使用 `AT-UI` 时遇到问题，或者有好的建议，欢迎给我们提 `Issue` 或 `Pull Request`

## [License](LICENSE)
