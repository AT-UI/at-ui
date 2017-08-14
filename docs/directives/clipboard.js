/**
 * vue clipboard base on clipboard.js
 * https://github.com/zhuowenli/vue-clipboards/blob/master/src/vue-clipboards.js
 */
const Clipboard = require('clipboard')

if (!Clipboard) {
  throw new Error('[vue-clipboard] Cannot locate clipboard.js')
}

function isDom (obj) {
  return typeof window.HTMLElement === 'object'
    ? obj instanceof window.HTMLElement
    : obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string'
}

export default function (Vue) {
  const clipboard = {}
  const DEFAULTKEY = 'DEFAULT'

  Vue.directive('clipboard', {
    bind (el, binding, vnode) {
      const option = {}
      const key = (vnode.key || vnode.key === 0) ? vnode.key : DEFAULTKEY
      let text = binding.value
      let $parent = null

      if (text) {
        if (typeof text === 'function') {
          text = text()
        }

        if (/(string|number)/.test(typeof text)) {
          option.text = () => text
        } else {
          throw new Error('[vue-clipboard] Invalid value.')
        }
      }

      if (vnode.data.attrs && vnode.data.attrs.model) {
        $parent = isDom(vnode.data.attrs.model) ? vnode.data.attrs.model : document.querySelector(vnode.data.attrs.model)
      }

      if (vnode.elm.offsetParent) {
        option.container = vnode.elm.offsetParent
      } else if (isDom($parent)) {
        option.container = $parent
      } else {
        option.container = el.parentElement || document.body
      }

      clipboard[key] = new Clipboard(el, option)

      const { comoponentOptions, data } = vnode
      const listeners = comoponentOptions ? comoponentOptions.listeners : null
      const on = data ? data.on : null
      const events = listeners || on

      if (events && typeof events === 'object' && Object.keys(events).length) {
        Object.keys(events).map(
          cb => clipboard[key].on(cb, events[cb].fn || events[cb].fns)
        )
      }

      return clipboard[key]
    },
    unbind (vnode) {
      const key = (vnode.key || vnode.key === 0) ? vnode.key : DEFAULTKEY

      if (clipboard[key] && clipboard[key].destroy) {
        clipboard[key].destroy()
        clipboard[key] = null
      }
    },
    update (el, binding, vnode) {
      binding.def.unbind(vnode)
      binding.def.bind(el, binding, vnode)
    }
  })
}
