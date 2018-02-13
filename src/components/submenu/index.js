import Submenu from '../menu/src/submenu.vue'

Submenu.install = function (Vue) {
  Vue.component(Submenu.name, Submenu)
}

export default Submenu
