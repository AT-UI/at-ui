import MenuItemGroup from '../menu/src/menu-group.vue'

MenuItemGroup.install = function (Vue) {
  Vue.component(MenuItemGroup.name, MenuItemGroup)
}

export default MenuItemGroup
