<template>
  <header
    class="page-header"
    :class="[
      collapse ? 'collapse' : ''
    ]"
    id="J-page-header">
    <div class="nav-container">
      <div class="nav-left">
        <router-link :to="{ name: 'Home' }">
          <div class="logo">
            <img class="logo-img" src="../assets/logo-at@2x.png" preload="">
            <span>AT UIKIT</span>
          </div>
        </router-link>
      </div>
      <div class="nav-right">
        <ul class="navbar">
          <li class="active">指南</li>
          <li><router-link :to="{ name: 'Introduction' }">组件</router-link></li>
          <li class="disabled">资源</li>
        </ul>
        <div class="btn-language">EN</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    if (!this.collapse) {
      window.addEventListener('scroll', this.headerCollapse)
    } else {
      window.removeEventListener('scroll', this.headerCollapse)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.headerCollapse)
  },
  methods: {
    headerCollapse () {
      const header = document.getElementById('J-page-header')
      const offsetTop = document.body.scrollTop || 0

      if (offsetTop > 50) {
        header.classList.add('collapse')
      } else {
        header.classList.remove('collapse')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~stylesheet/src/variables/index.scss';

$header-height: 80px;

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  background-color: transparent;
  transition: all .3s;
  z-index: 100;

  &.collapse {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
  }
}
.nav-container {
  margin: 0 auto;
  width: 90%;
  // max-width: 1140px;
  color: #1D1D1F;

  .nav-left {
    float: left;

    .logo {
      position: relative;
      height: $header-height;
      line-height: $header-height;

      img {
        position: absolute;
        top: 50%;
        margin-top: -15px;
        width: 30px;
        height: 30px;
      }
      span {
        margin-left: 40px;
        color: #3473e7;
        font-weight: bold;
      }
    }
  }
  .nav-right {
    float: right;

    .navbar {
      display: inline-block;
      margin: 0;
      padding: 0;
      height: $header-height;
      font-size: 14px;
      line-height: $header-height;
      list-style-type: none;

      li {
        display: inline-block;
        margin: 0 24px;
        cursor: pointer;
        transition: color .3s;

        &:hover {
          color: $brand-blue-500;

          a {
            color: $brand-blue-500;
          }
        }
        &.disabled {
          color: #C9C9C9;
          cursor: not-allowed;
        }
        a {
          color: #1D1D1F;
        }
      }
    }
    .btn-language {
      display: inline-block;
      margin: 0 24px;
      padding: 2px 12px;
      border: 1px solid #1D1D1F;
      border-radius: 2px;
      cursor: pointer;
      transition: color .3s, border .3s;

      &:hover {
        color: $brand-blue-500;
        border-color: $brand-blue-500;
      }
    }
  }
}
</style>
