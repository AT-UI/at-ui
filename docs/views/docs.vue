<template>
  <div class="wrapper">
    <m-header></m-header>
    <div class="at-container flex">
      <sidebar :data="navs"></sidebar>
      <div class="at-content at-markdown col-md-18">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/style/docs.scss';

.page-header {
  position: relative !important;
}
</style>

<script>
import MHeader from '../components/header'
import Sidebar from '../components/sidebar'
import navsConfig from '../router/nav.config.yml'

export default {
  components: {
    Sidebar,
    MHeader
  },
  data () {
    return {
      navs: navsConfig['zh-CN']
    }
  }
}
</script>
