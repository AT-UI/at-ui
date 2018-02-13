import Vue from 'vue'
import VueI18n from 'vue-i18n'

import App from './App'
import router from './router'
import DemoBox from './components/demobox'
import IconList from './components/iconlist'
import VueClipboard from './directives/clipboard'
import AtUI from 'at-ui-lib'
import zhLocale from 'at-ui-locale-zh'
import enLocale from 'at-ui-locale-en'
import 'at-ui-style'

Vue.use(VueI18n)
Vue.use(AtUI)
Vue.use(VueClipboard)
Vue.component('demo-box', DemoBox)
Vue.component('icon-list', IconList)

const matchArr = window.location.href.match(/#\/(zh|en)/)
const urlLang = matchArr && matchArr[1]
let navigatorLang = window.navigator.language.slice(0, 2)

if (['en', 'zh'].indexOf(navigatorLang) <= -1) {
  navigatorLang = ''
}

const userLang = urlLang || window.localStorage.getItem('at-ui-language') || navigatorLang || 'zh'

const i18n = new VueI18n({
  locale: userLang,
  fallbackLocale: 'en',
  messages: {
    'en': {
      ...enLocale
    },
    'zh': {
      ...zhLocale
    }
  }
})

AtUI.i18n((key, value) => i18n.t(key, value))

Vue.config.debug = process.env.NODE_ENV !== 'production'

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  i18n,
  ...App
})
