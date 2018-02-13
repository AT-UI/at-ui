import Popover from './src/popover.vue'

Popover.install = function (Vue) {
  Vue.component(Popover.name, Popover)
}

export default Popover
