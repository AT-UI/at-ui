import Modal from './src/modal.vue'

Modal.install = function (Vue) {
  Vue.component(Modal.name, Modal)
}

export default Modal
