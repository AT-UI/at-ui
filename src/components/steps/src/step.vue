<template>
  <div
    class="at-step"
    :class="stepStatusClass"
    :style="stepStyle">
    <div v-if="!isLastStep" class="at-step__line"></div>
    <div class="at-step__head">
      <div class="at-step__label"
        :class="{
          'at-step__icon': icon
        }">
        <div v-if="icon">
          <i :class="['icon', `${icon}`]"></i>
        </div>
        <template v-else>
          <div v-if="['process', 'wait'].indexOf(finalStatus) > -1"
            class="at-step__order">
            {{ index + 1 }}
          </div>
          <div v-if="finalStatus === 'finish'">
            <i class="icon icon-check"></i>
          </div>
          <div v-if="finalStatus === 'error'">
            <i class="icon icon-x"></i>
          </div>
        </template>
      </div>
    </div>
    <div class="at-step__main">
      <div class="at-step__title">{{ title }}</div>
      <div class="at-step__description" v-if="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtStep',
  props: {
    title: String,
    icon: String,
    description: String,
    status: {
      type: String,
      validator: val => ['wait', 'process', 'finish', 'error'].indexOf(val) > -1
    }
  },
  data () {
    return {
      index: -1,
      internalStatus: '',
      nextError: false
    }
  },
  computed: {
    stepStyle () {
      const style = {}
      if (this.$parent.direction !== 'vertical') {
        style.width = `${1 / this.stepsTotal * 100}%`
      }
      return style
    },
    stepsTotal () {
      return this.$parent.steps.length
    },
    finalStatus () {
      return this.status || this.internalStatus
    },
    isLastStep () {
      return this.index === this.stepsTotal - 1
    },
    stepStatusClass () {
      const className = {}

      switch (this.finalStatus) {
        case 'process':
          className['at-step--process'] = true
          break
        case 'wait':
          className['at-step--wait'] = true
          break
        case 'finish':
          className['at-step--finish'] = true
          break
        case 'error':
          className['at-step--error'] = true
          break
      }

      if (this.nextError) {
        className['at-step--next-error'] = true
      }

      return className
    }
  },
  beforeCreate () {
    this.$parent.steps.push(this)
  },
  beforeDestroy () {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)

    if (index >= 0) {
      steps.splice(index, 1)
    }
  }
}
</script>
