
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

可以局部注册所需的组件，适用于与其他框架组合使用的场景。首先我们需要借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件以达到减小项目体积的目的。

```bash
npm install babel-plugin-component
```

然后修改 `.babelrc` 配置：

```json
{
  "presets": ["es2015", "stage-2"],
  "plugins": [["import", {
    "libraryName": "at",
    "libraryDirectory": "src/components"
  }]]
}
```

接下来引入你需要用的组件

```js
import { Input as AtInput } from 'at-ui'

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

以下是完整的组件列表和引入方式：

```js
import Vue from 'vue'
import {
  Button,
  ButtonGroup,
  Tag,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxGroup,
  Input,
  InputNumber,
  Textarea,
  Badge,
  Switch,
  Slider,
  Tooltip,
  Popover,
  Alert,
  Progress,
  LoadingBar,
  Modal,
  Select,
  Option,
  OptionGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Pagination,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Table,
  Card,
  Collapse,
  CollapseItem,
  Steps,
  Step,
  Rate,
  Tabs,
  TabPane,
  Timeline,
  TimelineItem
} from 'at-ui'

Vue.prototype.$Notify = Notification
Vue.prototype.$Loading = LoadingBar
Vue.prototype.$Modal = Dialog
Vue.prototype.$Message = Message
```

## 自定义主题

`AT-UI` 的样式已抽离成单独的项目 [AT-UI-Style](https://github.com/at-ui/at-ui-style)，各个组件的样式变量都存放在 `at-ui-style/src/variables/default.scss` 文件中。用户可根据实际需要，自定义组件的样式
