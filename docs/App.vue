<template>
  <transition name="fade" mode="out-in">
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
  }
}
</script>
