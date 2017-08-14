import Vue from 'vue'

import App from './App'
import router from './router'
import DemoBox from './components/demobox'
import IconList from './components/iconlist'
import VueClipboard from './directives/clipboard'
import AtComponents from 'at-ui'
import 'at-ui-style'

Vue.use(AtComponents)
Vue.use(VueClipboard)
Vue.component('demo-box', DemoBox)
Vue.component('icon-list', IconList)

Vue.config.debug = process.env.NODE_ENV !== 'production'

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  ...App
})
