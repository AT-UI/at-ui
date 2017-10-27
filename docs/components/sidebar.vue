<template>
  <div class="at-sidebar col-sm-24 col-md-6 col-lg-4">
    <nav class="at-nav">
      <template v-for="item in data">
        <h2 class="at-nav__title">{{ item.title }}</h2>
        <ul class="at-nav__items">
          <template v-if="item.items">
            <li class="at-nav__item" v-for="navItem in item.items">
              <router-link class="at-nav__page" :to="navItem.name.toLowerCase()">{{ navItem.title }}</router-link>
            </li>
          </template>
          <li class="at-nav__item active" v-for="group in item.groups">
            <a class="at-nav__group" @click="toggleMenu">{{ group.title }}<i class="icon icon-chevron-down"></i></a>
            <ul class="at-nav__child-items">
              <li class="at-nav__child-item" v-for="navItem in group.items">
                <router-link v-if="lang === 'zh'" class="at-nav__component" :to="navItem.name.toLowerCase()">{{ navItem.name }}<span>{{ navItem.title }}</span></router-link>
                <router-link v-else class="at-nav__component" :to="navItem.name.toLowerCase()">{{ navItem.title }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </template>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
    lang () {
      return this.$route.path.split('/')[1] || 'zh'
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
@import '~stylesheet/src/variables/index.scss';

.at-sidebar {
  display: inline-block;
  margin: 32px 0;
  padding: 0;
  // max-width: 264px;
  color: #3F536E;
  background-color: #fff;
  border-right: 1px solid $grey-100;
  z-index: 99;
}

/**
 * Navigation
 */
.at-nav {
  font-size: 14px;

  &__title {
    padding: 0 24px 8px;
    color: #8DABC4;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__group {
    display: block;
    position: relative;
    padding: 6px 0 6px 24px;
    color: #2C405A;
    font-weight: normal;

    &:hover {
      color: $brand-blue-700;
    }
    i {
      position: absolute;
      top: 50%;
      right: 16px;
      margin-top: -7px;
      color: #A8C6DF;
      font-size: 14px;
      transition: all .3s;
    }
    .active & {
      font-weight: bold;
    }
    .active & i {
      transform: rotate(-180deg);
    }
  }
  &__items {
    margin: 0 0 32px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
  }
  &__item {
    position: relative;
  }
  &__child-items {
    display: none;

    .active & {
      display: block;
    }
  }
  &__page {
    display: block;
    position: relative;
    padding: 8px 24px;
    color: #3F536E;
    font-weight: normal;
    line-height: 1.5;
    cursor: pointer;

    &:after {
      content: '';
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background: #6190E8;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      box-shadow: 1px 0 12px 0 #6190E8;
    }

    &:hover {
      color: $brand-blue-400;
      background-color: rgba(236, 242, 252, 0.25);
    }
    &.active, &.router-link-active {
      background-color: rgba(236, 242, 252, 0.2);

      &:after {
        display: inline-block;
      }
      &:hover {
        color: #3F536E;
      }
    }
  }
  &__component {
    display: block;
    position: relative;
    padding: 6px 24px 6px 32px;
    color: #616367;
    font-size: 14px;

    &:after {
      content: '';
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      width: 6px;
      height: 100%;
      background: #6190E8;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      box-shadow: 1px 0 12px 0 #6190E8;
    }
    &:hover {
      color: $brand-blue-400;
      background-color: rgba(236, 242, 252, 0.25);
    }
    &.active, &.router-link-active {
      background-color: rgba(236, 242, 252, 0.2);

      &:after {
        display: inline-block;
      }
      &:hover {
        color: #3F536E;
      }
    }
    span {
      padding-left: 6px;
      font-size: 12px;
      opacity: 0.6;
      // color: rgba(255,255,255,.6)
    }
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
