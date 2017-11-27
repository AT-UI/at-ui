
# Quickstart

----

## Before Start

> Before using AT-UI, we recommend you to learn `Vue` and `ES2015`, and make sure that you had installed [Node.js](https://nodejs.org/en/) (≥ v6.x) correctly.

`AT-UI` is based on the `Vue.js` 2.x+ version, so we encourage you to know the basics below:

- [Vue Components](https://cn.vuejs.org/v2/guide/components.html)
- [Single File Components](https://cn.vuejs.org/v2/guide/single-file-components.html)

## Starter Kit

>  `Vue.js` provides an [official CLI](https://github.com/vuejs/vue-cli) for quickly scaffolding ambitious Single Page Applications. It provides batteries-included build setups for a modern frontend workflow. It takes only a few minutes to get up and running with hot-reload, lint-on-save, and production-ready builds.

We provide a `vue cli template` for you to create SPA (Single Page Application) quickly.

```shell
vue init at-ui/at-template my-project
```

If you prefer not to use `vue-cli`, we also provide Starter Kit: [at-webpack-boilerplate](https://github.com/at-ui/at-webpack-boilerplate)

## Standard Development Flow

In Production Project, often use `Webpack`, `Rollup` or `Gulp` workflow, most ot them can achieve loading components on demand. So it's not recommended to use `<script>` for global use.

### Global Components Usage

Import all components or required components in the entry file of the project.

```js
import Vue from 'vue'
import AtComponents from 'at-ui'
import 'at-ui-style'    // Import CSS

// import 'at-ui-style/src/index.scss'      // Or import the unbuilt version of SCSS

Vue.use(AtComponents)
```

If you had imported all the components globally, you can use global instance methods of `AT-UI` directly, such as:

```js
this.$Loading.start()
this.$Message.success(config)
this.$Modal.alert(config)
this.$Notify(config)
```

### Import On Demand

The components that can be registered locally are applicable to scenarios that are used to combination with other frameworks. Firstly, you can load components on demand and reduce the size of files by using the [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) plugin.

```bash
npm install babel-plugin-component
```

Then update `.babelrc` file:

```json
{
  "presets": ["es2015", "stage-2"],
  "plugins": [["import", {
    "libraryName": "at",
    "libraryDirectory": "src/components"
  }]]
}
```

Now you can import components that you want.

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

In template, use components with custom tag as `<at-input></at-input>`, use `v-model` to achieve data binding.

```html
<template>
  <div>
    <at-input v-model="value" placeholder="Please input..."></at-input>
  </div>
</template>
```

The following are the complete list of components and the way to be imported:

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

## Customize Theme

The style of `AT-UI` is independent to a separate project [AT-UI-Style](https://github.com/at-ui/at-ui-style), The variables for each component are stored in the file `at-ui-style/src/variables/default.scss`. User can customize the style of components according to actual needs.
