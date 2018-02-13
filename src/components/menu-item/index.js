import MenuItem from '../menu/src/menu-item.vue'

MenuItem.install = function (Vue) {
  Vue.component(MenuItem.name, MenuItem)
}

export default MenuItem
