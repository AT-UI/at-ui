import Step from '../steps/src/step.vue'

Step.install = function (Vue) {
  Vue.component(Step.name, Step)
}

export default Step
