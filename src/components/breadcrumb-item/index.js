import BreadcrumbItem from '../breadcrumb/src/breadcrumb-item.vue'

BreadcrumbItem.install = function (Vue) {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
}

export default BreadcrumbItem
