import Menu from './src/menu.vue'

Menu.install = function (Vue) {
  Vue.component(Menu.name, Menu)
}

export default Menu
