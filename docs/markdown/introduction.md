## 介绍

----

`AT-UI` 是一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站产品

### 特性

- 基于 `Vue` 开发的 UI 组件
- 基于 npm + webpack + babel 的工作流，支持 ES2015
- CSS 样式独立，保证不同的框架实现都能保持统一的 UI 风格（ 详见：[AT-UI Style](https://github.com/o2team/at-ui-style) ）
- 提供友好的 API，可灵活的使用组件

### 浏览器支持

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)

### 版本

`AT-UI`：[![npm version](https://badge.fury.io/js/at-ui.svg)](https://badge.fury.io/js/at-ui)

`AT-UI-Style`：[![npm version](https://badge.fury.io/js/at-ui-style.svg)](https://badge.fury.io/js/at-ui-style)

### 安装

#### 使用 npm 安装

推荐使用 `npm` 的方式进行开发，享受 `node` 生态圈和 `webpack` 工具链带来的便利。通过 `npm` 安装的模块包，我们可以轻松的使用 `import` 或者 `require` 的方式进行引用

```bash
npm install at-ui

npm install at-ui-style
```

#### 浏览器标签引入

可以采用传统的 `<script>` 和 `<link>` 标签的方式引入资源，并且全局使用 `AT-UI`。

可以在 [UNPKG](https://unpkg.com/at-ui/) 上找到最新版本的资源文件，然后在页面中直接引入

```html
<!-- 引入Vue -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- 引入样式 -->
<link rel="stylesheet" href="//unpkg.com/at-ui-style/css/at.min.css">
<!-- 引入组件库 -->
<script src="//unpkg.com/at-ui/dist/at.min.js"></script>
```

### 贡献

如果你在使用 `AT-UI` 时遇到问题，或者有好的建议，欢迎给我们提 [Issue](https://github.com/o2team/at-ui/issues) 或 [Pull Request](https://github.com/o2team/at-ui/pulls)
