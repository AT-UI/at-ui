export default {
  bind (el, binding) {
    el.__vueClickOutside__ = documentHandler
    document.addEventListener('click', documentHandler)

    function documentHandler (evt) {
      if (el.contains(evt.target)) {
        return false
      }
      if (binding.expression) {
        binding.value(evt)
      }
    }
  },
  unbind (el, binding) {
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__
  }
}
