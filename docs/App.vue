<template>
  <transition name="fade" mode="out-in" @after-leave="afterLeave">
    <router-view></router-view>
  </transition>
</template>

<script>
import Sidebar from './components/sidebar'
import navsConfig from './router/nav.config.yml'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      navs: navsConfig['zh-CN']
    }
  },
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
