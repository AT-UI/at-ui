/**
 * Directive - clickoutside
 * a callback invoked when a target element was not clicked, it was clicked outside the target DOM element
 */
export default {
  bind (el, binding) {
    el._handler = evt => {
      if (!el.contains(evt.target) && binding.expression) {
        binding.value(evt)
      }
    }

    document.addEventListener('click', el._handler)
  },
  unbind (el, binding) {
    document.removeEventListener('click', el._handler)
  }
}
