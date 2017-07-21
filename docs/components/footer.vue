<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-logo"></div>
      <div class="footer-desc">
        <div class="footer-copyright">© 2017 Created by<a href="//aotu.io" target="_blank"> 凹凸实验室</a></div>
      </div>
      <a data-redirect="https://github.com/o2team"><div class="github-logo"></div></a>
    </div>
  </footer>
</template>

<style lang="scss">
@import '../assets/style/mixin';

/**
 * Footer
 */
.footer {
  padding: 30px 0 30px;
  color: #6190E8;
  text-align: center;
  background-color: #fff;

  .container {
    position: relative;
    width: 90%;
  }
  &-logo {
    width: 198px;
    height: 40px;
    @include image2x-background('o2logo');
    margin: 10px 0 14px;
  }
  &-desc {
    text-align: left;
    font-size: 12px;
    color: #6190E8;
  }
  &-copyright {
    letter-spacing: 1px;
    font-weight: 300;

    a {
      color: #6190E8;
      text-decoration: none;
    }
  }
  .github-logo {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 42px;
    height: 42px;
    @include image2x-background('github');
    transition: transform .3s;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
