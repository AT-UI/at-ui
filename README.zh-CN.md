<p align="center">
  <a href="https://at.aotu.io/">
    <img width="200" src="http://storage.360buyimg.com/mtd/home/logo-at1502718221686.svg">
  </a>
</p>

# AT UI

[![NPM][npm-version-image]][npm-version-url] [![david-dm][david-dm-image]][david-dm-url] [![travis][travis-image]][travis-url]

一款基于 `Vue.js 2.0` 的前端 UI 组件库，主要用于快速开发 PC 网站产品

## 特性

- 基于 `Vue` 开发的 UI 组件
- 基于 npm + webpack + babel 的工作流，支持 ES2015
- CSS 样式独立，保证不同的框架实现都能保持统一的 UI 风格（ 详见：[AT-UI Style](https://github.com/at-ui/at-ui-style) ）
- 提供友好的 API，可灵活的使用组件

## 支持环境

- 现代浏览器和 IE9 及以上
- [Electron](http://electron.atom.io/)
- [NW.js](http://nwjs.io)

## 相关链接

- [主页](https://at-ui.github.io/at-ui/)
- [Vue](https://vuejs.org/)
- [Webpack](https://webpack.js.org/)
- [AT-UI for Angular](https://github.com/icepoint0/at-angular) （由 [@icepoint0](https://github.com/icepoint0) 同学开发，感谢贡献）

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

## 贡献

如果你在使用 `AT-UI` 时遇到问题，或者有好的建议，欢迎给我们提 `Issue` 或 `Pull Request`。在开始之前，请阅读 [贡献指南](https://github.com/at-ui/at-ui/blob/master/.github/CONTRIBUTING.md)

## License

MIT


[npm-version-image]: https://img.shields.io/npm/v/at-ui.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/at-ui
[david-dm-image]: https://david-dm.org/AT-UI/at-ui.svg?style=flat-square
[david-dm-url]: https://david-dm.org/AT-UI/at-ui
[travis-image]: https://img.shields.io/travis/AT-UI/at-ui/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/AT-UI/at-ui
