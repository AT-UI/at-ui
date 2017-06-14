/**
 * https://github.com/yuche/vue-strap/blob/master/src/utils/NodeList.js
 */
const ArrayProto = Array.prototype
const nodeError = new Error('Passed arguments must be of Node')
let blurEvent
let blurList = []
let Events = []

function isNode (val) { return val instanceof window.Node }
function isNodeList (val) {
  return val instanceof window.NodeList ||
          val instanceof window.HTMLCollection ||
          val instanceof Array
}

class NodeList {
  constructor (args) {
    let nodes = args
    if (args[0] === window) {
      nodes = [window]
    } else if (typeof args[0] === 'string') {
      nodes = (args[1] || document).querySelectorAll(args[0])
      if (args[1]) { this.owner = args[1] }
    } else if (0 in args && !isNode(args[0]) && args[0] && 'length' in args[0]) {
      nodes = args[0]
      if (args[1]) { this.owner = args[1] }
    }
    if (nodes) {
      for (const i in nodes) {
        if (Object.prototype.hasOwnProperty.call(nodes, i)) {
          this[i] = nodes[i]
        }
      }
      this.length = nodes.length
    } else {
      this.length = 0
    }
  }

  concat (...args) {
    const nodes = ArrayProto.slice.call(this)
    function flatten (arr) {
      ArrayProto.forEach.call(arr, el => {
        if (isNode(el)) {
          if (!~nodes.indexOf(el)) nodes.push(el)
        } else if (isNodeList(el)) {
          flatten(el)
        }
      })
    }
    ArrayProto.forEach.call(args, arg => {
      if (isNode(arg)) {
        if (!~nodes.indexOf(arg)) nodes.push(arg)
      } else if (isNodeList(arg)) {
        flatten(arg)
      } else {
        throw Error('Concat arguments must be of a Node, NodeList, HTMLCollection, or Array of (Node, NodeList, HTMLCollection, Array)')
      }
    })
    return NodeListJS(nodes, this)
  }
  delete () {
    const notRemoved = flatten(this).filter(el => {
      if (el.remove) {
        el.remove()
      } else if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
      return document.body.contains(el)
    })
    if (notRemoved.length) console.warn('NodeList: Some nodes could not be deleted.')
    return notRemoved
  }
  each (...args) {
    ArrayProto.forEach.apply(this, args)
    return this
  }
  filter (...args) {
    return NodeListJS(ArrayProto.filter.apply(this, args), this)
  }
  find (element) {
    const nodes = []
    flatten(this).forEach(node => { ArrayProto.push.apply(nodes, node.querySelectorAll(element)) })
    return flatten(nodes, this.owner)
  }
  findChildren (element) {
    if (element) return this.find(element).filter(el => this.includes(el.parentElement))
    return flatten(this.map(el => el.children))
  }
  forEach (...args) {
    ArrayProto.forEach.apply(this, args)
    return this
  }
  includes (element, index) {
    return ~this.indexOf(element, index)
  }
  map (...args) {
    const mapped = ArrayProto.map.apply(this, args)
    return mapped.some(el => (isNode(el) || isNodeList(el))) ? flatten(mapped, this) : mapped
  }
  parent () {
    return flatten(this.map(el => el.parentNode), this)
  }
  pop (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    const nodes = []
    const pop = ArrayProto.pop.bind(this)
    while (amount--) nodes.push(pop())
    return NodeListJS(nodes, this)
  }
  push (...args) {
    ArrayProto.forEach.call(args, arg => {
      if (!isNode(arg)) throw nodeError
      if (!~this.indexOf(arg)) ArrayProto.push.call(this, arg)
    })
    return this
  }
  shift (amount) {
    if (typeof amount !== 'number') { amount = 1 }
    const nodes = []
    while (amount--) nodes.push(ArrayProto.shift.call(this))
    return nodes.length === 1 ? nodes[0] : NodeListJS(nodes, this)
  }
  slice (...args) {
    return NodeListJS(ArrayProto.slice.apply(this, args), this)
  }
  splice (...args) {
    for (let i = 2, l = args.length; i < l; i++) {
      if (!isNode(args[i])) throw nodeError
    }
    ArrayProto.splice.apply(this, args)
    return this
  }
  unshift (...args) {
    const unshift = ArrayProto.unshift.bind(this)
    ArrayProto.forEach.call(args, arg => {
      if (!isNode(arg)) throw nodeError
      if (!~this.indexOf(arg)) unshift(arg)
    })
    return this
  }

  addClass (classes) {
    return this.toggleClass(classes, true)
  }
  removeClass (classes) {
    return this.toggleClass(classes, false)
  }
  toggleClass (classes, value) {
    let method
    if (typeof value === 'undefined' || value === null) {
      method = 'toggle'
    } else if (value) {
      method = 'add'
    } else {
      method = 'remove'
    }

    if (typeof classes === 'string') {
      classes = classes.trim().replace(/\s+/, ' ').split(' ')
    }
    this.each(el => {
      let list = el.className.trim().replace(/\s+/, ' ').split(' ')
      classes.forEach(c => {
        const hasClass = ~list.indexOf(c)
        if (!hasClass && method !== 'remove') list.push(c)
        if (hasClass && method !== 'add') { list = list.filter(ele => (ele !== c)) }
      })
      el.className = list.join(' ')
    })
    return this
  }

  get (prop) {
    const arr = []
    this.each(el => {
      if (el !== null) { el = el[prop] }
      arr.push(el)
    })
    return flatten(arr, this)
  }
  set (prop, value) {
    if (prop.constructor === Object) {
      this.each(el => {
        if (el) {
          for (const key in prop) {
            if (key in el) { el[key] = prop[key] }
          }
        }
      })
    } else {
      this.each(el => {
        if (prop in el) { el[prop] = value }
      })
    }
    return this
  }
  call (...args) {
    const method = ArrayProto.shift.call(args)
    const arr = []
    let returnThis = true
    this.each(el => {
      if (el && el[method] instanceof Function) {
        el = el[method].apply(el, args)
        arr.push(el)
        if (returnThis && typeof el !== 'undefined') {
          returnThis = false
        }
      } else {
        arr.push(null)
      }
    })
    return returnThis ? this : flatten(arr, this)
  }
  item (index) {
    return NodeListJS([this[index]], this)
  }
  get asArray () {
    return ArrayProto.slice.call(this)
  }

  // event handlers
  on (events, selector, callback) {
    if (typeof events === 'string') { events = events.trim().replace(/\s+/, ' ').split(' ') }
    if (!this || !this.length) return this
    if (typeof callback === 'undefined') {
      callback = selector
      selector = null
    }
    if (!callback) return this
    const fn = callback
    callback = selector ? function (e) {
      const els = NodeListJS(selector, this)
      if (!els.length) { return }
      els.some(el => {
        const target = el.contains(e.target)
        if (target) fn.call(el, e, el)
        return target
      })
    } : function (e) {
      fn.apply(this, [e, this])
    }
    this.each(el => {
      events.forEach(event => {
        if (el === window || isNode(el)) {
          el.addEventListener(event, callback, false)
          Events.push({
            el,
            event,
            callback
          })
        }
      })
    })
    return this
  }
  off (events, callback) {
    if (events instanceof Function) {
      callback = events
      events = null
    }
    if (typeof events === 'string' && callback instanceof Function) {
      this.each(el => {
        events.split(' ').forEach(event => {
          Events.forEach((e, i) => {
            if (Events[i] && Events[i].el === el &&
                Events[i].event === event && Events[i].callback === callback) {
              Events[i].el.removeEventListener(Events[i].event, Events[i].callback)
              delete Events[i]
            }
          })
        })
      })
    } else if (typeof events === 'string') {
      this.each(el => {
        events.split(' ').forEach(event => {
          Events.forEach((e, i) => {
            if (Events[i] && Events[i].el === el && Events[i].event === event) {
              Events[i].el.removeEventListener(Events[i].event, Events[i].callback)
              delete Events[i]
            }
          })
        })
      })
    } else if (callback instanceof Function) {
      this.each(el => {
        Events.forEach(e => {
          if (Events[e] && Events[e].el === el && Events[e].callback === callback) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        })
      })
    } else {
      this.each(el => {
        Events.forEach(e => {
          if (Events[e] && Events[e].el === el) {
            Events[e].el.removeEventListener(Events[e].event, Events[e].callback)
            delete Events[e]
          }
        })
      })
    }
    Events = Events.filter(el => (typeof el !== 'undefined'))
    return this
  }
  onBlur (callback) {
    if (!this || !this.length) return this
    if (!callback) return this
    this.each(el => { blurList.push({ el, callback }) })
    if (!blurEvent) {
      blurEvent = e => {
        blurList.forEach(item => {
          const target = item.el.contains(e.target) || item.el === e.target
          if (!target) item.callback.call(item.el, e, item.el)
        })
      }
      document.addEventListener('click', blurEvent, false)
      document.addEventListener('touchstart', blurEvent, false)
    }
    return this
  }
  offBlur (callback) {
    this.each(el => {
      blurList = blurList.filter(blur => {
        if (blur && blur.el === el && (!callback || blur.callback === callback)) {
          return false
        }
        return el
      })
    })
    return this
  }
}

const NL = NodeList.prototype

function flatten (arr, owner) {
  const list = []
  ArrayProto.forEach.call(arr, el => {
    if (isNode(el)) {
      if (!~list.indexOf(el)) list.push(el)
    } else if (isNodeList(el)) {
      for (const id in el) list.push(el[id])
    } else if (el !== null) {
      arr.get = NL.get
      arr.set = NL.set
      arr.call = NL.call
      arr.owner = owner
      return arr
    }
  })
  return NodeListJS(list, owner)
}

Object.getOwnPropertyNames(ArrayProto).forEach(key => {
  if (key !== 'join' && key !== 'copyWithin' && key !== 'fill' && typeof NL[key] === 'undefined') {
    NL[key] = ArrayProto[key]
  }
})
if (window.Symbol && window.Symbol.iterator) {
  NL.values = ArrayProto[window.Symbol.iterator]
  NL[window.Symbol.iterator] = NL.values
}
const div = document.createElement('div')
function setterGetter (prop) {
  if (NL[prop]) return
  if (div[prop] instanceof Function) {
    NL[prop] = (...args) => {
      const arr = []
      let returnThis = true
      for (const i in NL) {
        let el = NL[i]
        if (el && el[prop] instanceof Function) {
          el = el[prop].apply(el, args)
          arr.push(el)
          if (returnThis && typeof el !== 'undefined') {
            returnThis = false
          }
        } else {
          arr.push(null)
        }
      }
      return returnThis ? this : flatten(arr, this)
    }
  } else {
    Object.defineProperty(NL, prop, {
      get () {
        const arr = []
        this.each(el => {
          if (el !== null) { el = el[prop] }
          arr.push(el)
        })
        return flatten(arr, this)
      },
      set (value) {
        this.each(el => {
          if (el && prop in el) { el[prop] = value }
        })
      }
    })
  }
}
for (const prop in div) setterGetter(prop)

function NodeListJS (...args) { return new NodeList(args) }
window.NL = NodeListJS

export default NodeListJS
