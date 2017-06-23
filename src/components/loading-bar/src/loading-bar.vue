<template>
  <transition name="fade">
    <div
      class="at-loading-bar"
      :class="[
        status ? `at-loading-bar--${status}` : ''
      ]"
      :style="barStyle"
      v-show="show"
    >
      <div class="at-loading-bar__inner"
        :style="{ width: percent + '%' }"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AtLoadingBar',
  props: {
    status: {
      type: String,
      default: 'success',
      validator: val => ['success', 'error'].indexOf(val) > -1
    },
    width: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      show: false,
      percent: 0
    }
  },
  computed: {
    barStyle () {
      return {
        height: `${((this.width | 0) || 2)}px`
      }
    }
  }
}
</script>
