<template>
  <transition name="fade">
    <div
      class="at-alert"
      :class="[
        type ? `at-alert--${type}` : '',
        description ? 'at-alert--with-description' : ''
      ]"
      v-show="isShow">
      <i class="icon at-alert__icon" :class="[ iconClass ]" v-if="showIcon"></i>
      <div class="at-alert__content">
        <p class="at-alert__message" v-if="message" v-text="message"></p>
        <p class="at-alert__description" v-if="description" v-text="description"></p>
      </div>
      <i
        class="icon at-alert__close"
        :class="[
          closeText ? 'at-alert__close--custom' : 'icon-x'
        ]"
        v-show="closable || closeText"
        @click="handleClose"
        v-text="closeText"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AtAlert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String,
      default: '',
      required: true
    },
    description: String,
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'info'
    },
    closeText: String
  },
  data () {
    return {
      isShow: true
    }
  },
  computed: {
    iconClass () {
      const classArr = {
        'success': 'icon-check-circle',
        'error': 'icon-x-circle',
        'warning': 'icon-alert-circle',
        'info': 'icon-info'
      }
      return classArr[this.type] || this.icon
    }
  },
  methods: {
    handleClose () {
      this.isShow = false
      this.$emit('on-close')
    }
  }
}
</script>

