<template>
<header class="at-header">
  <img class="at-header__logo" src="../assets/o2logo.png" alt="O2Team">
  <h1 class="at-header__title"><small>AT-DESKTOP-UI KIT</small></h1>
  <div class="at-nav-handle" @click="toggleMenu()" :class="{'open': isOpen}">
    <div class="at-nav-handle__container">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</header>
</template>

<script>
export default {
  props: {
    isOpenMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: this.isOpenMenu
    }
  },
  methods: {
    toggleMenu () {
      this.isOpen = !this.isOpen
      this.$emit('openMenu')
    }
  }
}
</script>

<style lang="scss">
$small-viewport: 767px;

.at-header {
  display: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1001;
  margin: 0 0 36px;
  padding: 12px;
  background-color: #fff;
  /*border-bottom: 1px solid #ddd;*/
  /*box-shadow: 0 0 1px rgba(0,0,0,.1);*/
  background-color: #6191E8;

  &:after {
    display: none;
  }
}
.at-header__logo {
  float: left;
  height: 28px;
  margin: 0 6px 0 0;
}
.at-header__title {
  float: left;
  /*color: #303637;*/
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  line-height: 28px;

  a {
    display: none;
    display: block;
  }
  small {
    margin-left: 10px;
    font-size: 80%;
    font-weight: normal;
  }
}

@media (max-width: 767px) {
  .at-header {
    display: block;
  }
  .at-header__title a {
    display: none;
  }
}

.at-nav-handle {
  display: block;
  position: fixed;
  top: 15px;
  right: 0;
  overflow: hidden;
  cursor: pointer;
  height: 27px;
  width: 48px;
  transform: rotate(0);
  transition: .5s ease-in-out;
  z-index: 1001;

  &.open {
    position: fixed;

    span:nth-child(1) {
      top: 11px;
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      opacity: 0;
      right: -60px;
    }
    span:nth-child(3) {
      top: 11px;
      transform: rotate(45deg);
    }
  }
  span {
    position: absolute;
    right: 12px;
    display: block;
    width: 27px;
    height: 3px;
    opacity: 1;
    transform: rotate(0);
    transition: .25s ease-in-out;
    /*background-color: #303637;*/
    background-color: #fff;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 9px;
    }
    &:nth-child(3) {
      top: 18px;
    }
  }
}
.at-nav-handle__container {
  padding: 12px 0 0;
}
</style>
