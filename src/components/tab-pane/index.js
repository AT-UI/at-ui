import TabPane from '../tabs/src/tab-pane.vue'

TabPane.install = function (Vue) {
  Vue.component(TabPane.name, TabPane)
}

export default TabPane
