import Vue from 'vue'

import App from './App'
import router from './router'
import DemoBox from './components/demobox'
import IconList from './components/iconlist'
import AtComponents from 'at-ui'
import 'at-ui-style'
// import 'stylesheet/css/at.css'

// 注册组件
// for (var key of Object.keys(AtComponents)) {
//   let lowerKey = key.toLocaleLowerCase()
//   Vue.component(`at-${lowerKey}`, AtComponents[key])
// }

Vue.use(AtComponents)
Vue.component('demo-box', DemoBox)
Vue.component('icon-list', IconList)

Vue.config.debug = process.env.NODE_ENV !== 'production'

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  ...App
})
