import Vue from 'vue'
import LoadingBar from './loading-bar.vue'

LoadingBar.newInstance = properties => {
  const _props = properties || {}

  let props = ''
  Object.keys(_props).forEach(prop => {
    props += ` :${prop}=${prop}`
  })

  const div = document.createElement('div')
  div.innerHTML = `<loading-bar${props}></loading-bar>`
  document.body.appendChild(div)

  const loadingBar = new Vue({
    el: div,
    data: _props,
    components: { LoadingBar }
  }).$children[0]

  return {
    component: loadingBar,
    update (options) {
      if (options.percent) {
        loadingBar.percent = options.percent
      }
      if (options.status) {
        loadingBar.status = options.status
      }
      if (options.show) {
        loadingBar.show = options.show
      }
    },
    destroy () {
      document.body.removeChild(div)
    }
  }
}

export default LoadingBar
