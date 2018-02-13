import Vue from 'vue'
import NotificationVue from './notification.vue'

const NotificationConstructor = Vue.extend(NotificationVue)

const noticeType = ['success', 'error', 'warning', 'info']
const instances = []
let instance
let seed = 1
let zindexSeed = 1010

const Notification = options => {
  if (Vue.prototype.$isServer) return
  options = options || {}

  const onClose = options.onClose
  const id = `notification_${seed++}`

  options.onClose = function () {
    Notification.close(id, onClose)
  }

  instance = new NotificationConstructor({
    data: options
  })

  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.isShow = true
  instance.dom = instance.vm.$el
  instance.dom.style.zIndex = (zindexSeed++)

  const offset = 0
  let topDist = offset

  for (let i = 0, len = instances.length; i < len; i++) {
    topDist += instances[i].$el.offsetHeight + 16
  }

  topDist += 16
  instance.top = topDist
  instances.push(instance)

  return instance.vm
}

Notification.close = function (id, onClose) {
  const len = instances.length
  let index
  let removedHeight
  let i = 0

  for (i = 0; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof onClose === 'function') {
        onClose(instances[i])
      }
      index = i
      removedHeight = instances[i].dom.offsetHeight
      instances.splice(i, 1)
      break
    }
  }

  if (len > 1) {
    for (i = index; i < len - 1; i++) {
      instances[i].dom.style.top = `${parseInt(instances[i].dom.style.top) - removedHeight - 16}px`
    }
  }
}

noticeType.forEach(type => {
  Notification[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }

    options.type = type
    return Notification(options)
  }
})

export default Notification
