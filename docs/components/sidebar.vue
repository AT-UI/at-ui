<template>
<div>
  <v-header :isOpenMenu="isOpenMenu" @click="isOpenMenu = !isOpenMenu"></v-header>
  <div class="at-sidebar" :class="{'open': isOpenMenu}">
    <header class="at-sidebar__header">
      <img class="at-sidebar__logo" src="../assets/o2logo.png" alt="O2Team">
      <h1 class="at-sidebar__title clearfix">
        <small>AT UI KIT</small>
      </h1>
    </header>

    <nav class="at-nav">
      <template v-for="item in data">
        <h2 class="at-nav__title">{{ item.title }}</h2>
        <ul class="at-nav__items">
          <template v-if="item.items">
            <li class="at-nav__item" v-for="navItem in item.items">
              <router-link class="at-nav__page at-nsc" :to="{ name: navItem.name }">{{ navItem.title }}</router-link>
            </li>
          </template>
          <li class="at-nav__item active" v-for="group in item.groups">
            <a class="at-nav__group at-nsc" @click="toggleMenu">{{ group.title }}</a>
            <ul class="at-nav__child-items">
              <li class="at-nav__child-item" v-for="navItem in group.items">
                <router-link class="at-nav__component at-nsc" :to="{ name: navItem.name }">{{ navItem.name }}<span>{{ navItem.title }}</span></router-link>
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </nav>

    <div class="at-copyright at-c-brand-ca">
      <p>
        © 2017 <a href="http://aotu.io" target="_blank">AOTU Library</a>.
        <br>UI KIT created by <a href="http://aotu.io" target="_blank">AOTULabs</a>.
      </p>
      <p>AT v0.10.0</p>
    </div>
  </div>
</div>
</template>

<script>
import VHeader from './header'

export default {
  components: {
    VHeader
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      isOpenMenu: false
    }
  },
  methods: {
    toggleMenu (event) {
      const parentNode = event.target.parentNode
      if (parentNode.classList.contains('active')) {
        parentNode.classList.remove('active')
      } else {
        parentNode.classList.add('active')
      }
    }
  }
}
</script>

<style lang="scss">
.at-sidebar {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 264px;
  padding: 0;
  background-color: #fff;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  background: linear-gradient(to bottom, #6191E8, #8CB2FF);

  &.open {
    left: 0;
  }
}
.at-sidebar__header {
  display: block;
  padding: 24px 24px 36px;
  text-align: center;
}
.at-sidebar__title {
  display: block;
  margin: 0;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;

  small {
    display: block;
    font-size: 16px;
    font-weight: normal;
  }
}
.at-sidebar__logo {
  margin: 0 0 24px 0;
  height: 100px;
}

@media (max-width: 767px) {
  .at-sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 103px 0 24px;

    &.open {
      left: 0;
    }
  }
  .at-sidebar__header {
    display: none;
  }
}

/**
 * Copyright
 */
.at-copyright {
  display: block;
  padding: 0 24px 24px;

  p {
    /*color: #B0B1B3;*/
    color: #fff;
    font-size: 12px;
    line-height: 21px;

    &:last-of-type {
      margin: 0;
    }
  }
  a {
    color: rgba(255,255,255,.6);
  }
}

/**
 * Navigation
 */
.at-nav__title {
  margin: 0 0 21px;
  padding: 0 30px;
  color: rgba(255,255,255,.6);
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.at-nav__items {
  margin: 0 0 32px;
  padding: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 24px;
}
.at-nav__item {
  position: relative;
  color: #fff;
}
.at-nav__group {
  font-weight: bold;
  border-color: #FEA1AC;
}
.at-nav__child-items {
  display: none;
  font-size: 14px;
  min-height: 0;
  background-color: rgba(255,255,255,.1);

  .active & {
    display: block;
  }
}
.at-nav__child-item {
  border-color: #FEA1AC;
  border-bottom: 1px solid transparent;
  border-radius: 4px;
}
.at-nav__page {
  position: relative;
  display: block;
  padding: 5px 24px 5px 25px;
  border-left: 5px solid transparent;
  cursor: pointer;
  font-weight: normal;

  &.active, &:hover, &.router-link-active {
    border-left-color: #fff;
    background-color: rgba(255,255,255,.1);
  }
}
.at-nav__group {
  display: block;
  position: relative;
  padding: 6px 30px;
  font-weight: normal;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    width: 5px;
    height: 8px;
    margin-top: -4px;
    transform: rotate(90deg);
    transition: transform .25s ease;
    background: transparent url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAAhDE4sAAAAAXNSR0IArs4c6QAAAQVJREFUSA2l1Q2rAUEUxnF8RZfIzduSSJL39y9Bud/1Yv1HZNNzyp6dOpjTnF+zmZ2TyzHiOM4TJyIKc9d4Ime+w7gRXS/09yDeHwHrpcYo6hChODnCvO/B2hQqbODBWmDX5Laev4cerGFgIw9WN7CxB/s1sIkHq4FdiM8x82BVFIUtPFjFwFYerAz2//mMzDcerGRgOw9WNLBDIaV2Y30savIip1PsxNrNXleILMiP8UhbsVynAKx/bK0rRBbEOkNLsVynQKxTPdcVIgtivWdTsVynQLK/+SDZ7yKQJqGu2u9vR4Ds9zVIRGTvICCqQbp6Wuj7yZadvsu+DgBQwI6Er+8D3QFgic2emZJA5QAAAABJRU5ErkJggg==") center no-repeat;
    background-size: 100% auto;
  }
  .active & {
    font-weight: bold;
  }
  .active &:after {
    transform: rotate(-90deg);
  }
}
.at-nav__component {
  display: block;
  font-size: 14px;
  padding: 5px 24px 5px 30px;
  color: #616367;
  border-left: 5px solid transparent;

  &.active, &:hover, &.router-link-active  {
    border-left-color: #fff;
    background-color: rgba(255,255,255,.1);
  }
  span {
    padding-left: 6px;
    font-size: 12px;
    color: rgba(255,255,255,.6)
  }
}
.at-nav__arrow {
  position: absolute;
  top: 18px;
  right: 12px;
  width: 16px;
  opacity: .25;
  margin: -4px 0 0;

  .active & {
    transform: rotate(180deg);
  }
}
.at-nsc,
.at-nsc:focus,
.at-nsc:hover,
.at-nsc:active,
.at-nsc:visited {
  color: #fff;
}

</style>
