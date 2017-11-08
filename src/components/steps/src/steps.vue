<template>
  <div
    :class="[
      'at-steps',
      direction === 'vertical' ? 'at-steps--vertical' : 'at-steps--horizontal',
      size === 'small' ? 'at-steps--small' : ''
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AtSteps',
  props: {
    current: {
      type: Number,
      default: 0,
      validator: val => val >= 0
    },
    status: {
      type: String,
      default: 'process',
      validator: val => ['wait', 'process', 'finish', 'error'].indexOf(val) > -1
    },
    size: {
      type: String,
      default: 'default',
      validator: val => ['default', 'small'].indexOf(val) > -1
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: val => ['horizontal', 'vertical'].indexOf(val) > -1
    }
  },
  data () {
    return {
      steps: []
    }
  },
  methods: {
    updateStepsStatus () {
      const current = this.current
      const status = this.status

      this.steps.forEach((child, index) => {
        const prevChild = this.steps[index - 1]

        if (index === current) {
          if (status === 'error') {
            child.internalStatus = 'error'
            prevChild && (prevChild.nextError = true)
          } else {
            child.internalStatus = 'process'
          }
        } else if (index < current) {
          child.internalStatus = 'finish'
        } else {
          child.internalStatus = 'wait'
        }

        if (child.finalStatus !== 'error' && prevChild) {
          prevChild.nextError = false
        }
      })
    }
  },
  watch: {
    current () {
      this.updateStepsStatus()
    },
    steps (steps) {
      steps.forEach((step, index) => {
        step.index = index
      })
      this.updateStepsStatus()
    }
  },
  mounted () {
    this.updateStepsStatus()
  }
}
</script>

