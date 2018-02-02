import Timeline from './src/timeline'

Timeline.install = function (Vue) {
  Vue.component(Timeline.name, Timeline)
}

export default Timeline
