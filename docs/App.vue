<template>
  <div class="at-container">
    <sidebar :data="navs"></sidebar>
    <div class="at-content at-markdown">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import './components/style'
import Sidebar from './components/sidebar'
import navsData from './router/nav.config.yml'

export default {
  components: {
    Sidebar
  },
  data () {
    return {
      navs: navsData['zh-CN']
    }
  }
}
</script>
