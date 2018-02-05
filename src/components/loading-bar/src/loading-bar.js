import Vue from 'vue'
import LoadingBarVue from './loading-bar.vue'

const LoadingBarConstructor = Vue.extend(LoadingBarVue)
let instance

class LoadingBar {
  constructor (options) {
    options = options || {}

    instance = new LoadingBarConstructor({
      data: options
    })

    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
  }

  update (newOptions) {
    if (newOptions.percent) {
      instance.percent = newOptions.percent
    }
    if (newOptions.status) {
      instance.status = newOptions.status
    }
    if (newOptions.show) {
      instance.show = newOptions.show
    }
  }

  destroy () {
    document.body.removeChild(instance.vm.$el)
  }
}

export default LoadingBar
