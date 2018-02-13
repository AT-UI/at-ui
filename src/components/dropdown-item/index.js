import DropdownItem from '../dropdown/src/dropdown-item.vue'

DropdownItem.install = function (Vue) {
  Vue.component(DropdownItem.name, DropdownItem)
}

export default DropdownItem
