<template>
  <div class="at-progress"
    :class="[
      type ? 'at-progress--' + type : 'at-progress--bar',
      status ? 'at-progress--' + status : ''
    ]"
  >
    <div class="at-progress-circle" v-if="type === 'circle'">

    </div>
    <div class="at-progress-bar" v-else>
      <div class="at-progress-bar__wraper" :style="{ height: strokeWidth + 'px' }">
        <div class="at-progress-bar__inner" :style="{ width: percent + '%' }"></div>
      </div>
    </div>
    <div class="at-progress__text">
      <span v-if="!status">{{ percent }}%</span>
      <i v-else class="icon" :class="statusIconClass"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtProgress',
  props: {
    type: {
      type: String,
      default: 'bar',
      validator: val => ['bar', 'circle'].indexOf(val) > -1
    },
    status: {
      type: String,
      default: '',
      validator: val => ['', 'success', 'error'].indexOf(val) > -1
    },
    percent: {
      type: Number,
      default: 0,
      required: true
    },
    strokeWidth: {
      type: Number,
      default: 10
    }
  },
  computed: {
    statusIconClass () {
      return this.status === 'success' ? 'icon-correct' : 'icon-cancel-1'
    }
  }
}
</script>
