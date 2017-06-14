import Vue from 'vue'

import App from './App'
import router from './router'
import DemoBox from './components/demobox'
import IconList from './components/iconlist'
import ATComponents from 'at'
import 'stylesheet/css/at.css'

window.Vue = Vue

// 注册组件
// for (var key of Object.keys(ATComponents)) {
//   let lowerKey = key.toLocaleLowerCase()
//   Vue.component(`at-${lowerKey}`, ATComponents[key])
// }

Vue.use(ATComponents)
Vue.component('demo-box', DemoBox)
Vue.component('icon-list', IconList)

Vue.config.debug = process.env.NODE_ENV !== 'production'

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  ...App
})
