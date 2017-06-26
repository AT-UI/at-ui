import Vue from 'vue'
import LoadingBarVue from './loading-bar.vue'

const LoadingBarConstructor = Vue.extend(LoadingBarVue)
let instance

const LoadingBar = options => {
  options = options || {}

  instance = new LoadingBarConstructor({
    data: options
  })

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
}

LoadingBar.prototype.update = options => {
  if (options.percent) {
    instance.percent = options.percent
  }
  if (options.status) {
    instance.status = options.status
  }
  if (options.show) {
    instance.show = options.show
  }
}

LoadingBar.prototype.destroy = () => {
  document.body.removeChild(instance.vm.$el)
}

export default LoadingBar
