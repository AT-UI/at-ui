<template>
  <div class="wrapper">
    <m-header :collapse="false"></m-header>
    <section class="section section-banner">
      <div class="container">
        <div class="logo">
          <svg width="161px" height="160px" viewBox="0 0 161 160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient x1="22.5170547%" y1="8.01121418%" x2="96.9400333%" y2="96.3671667%" id="linearGradient-1">
                <stop stop-color="#66C7FF" offset="0%"></stop>
                <stop stop-color="#3473E7" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Desktop-HD-Copy-2" transform="translate(-640.000000, -245.000000)" fill="url(#linearGradient-1)">
                <path d="M801,245 L801,405 L718.862712,405 C704.67281,404.638416 691.529157,400.841844 679.431356,393.610169 C667.333555,386.378495 657.737324,376.706275 650.642373,364.59322 C643.547422,352.299374 640,339.101765 640,325 C640,310.536651 643.592902,297.158254 650.778814,284.864407 C657.964725,272.57056 667.742876,262.807946 680.113559,255.576271 C692.484243,248.525388 705.946255,245 720.5,245 C729.414169,245 738.009846,246.355919 746.287288,249.067797 C754.564731,251.779675 762.068893,255.666641 768.8,260.728814 L768.8,245 L801,245 Z M768.8,325 C768.8,318.672285 767.572046,312.570651 765.116102,306.694915 C762.660157,300.81918 759.158215,295.621492 754.610169,291.101695 C750.062124,286.581898 744.83195,283.101707 738.919492,280.661017 C733.007033,278.220327 726.867263,277 720.5,277 C707.765473,277 696.39553,281.700518 686.389831,291.101695 C681.841785,295.621492 678.385323,300.81918 676.020339,306.694915 C673.655355,312.570651 672.472881,318.672285 672.472881,325 C672.472881,337.836222 677.111818,349.135544 686.389831,358.898305 C696.213608,368.11869 707.583551,372.728814 720.5,372.728814 L768.8,372.728814 L768.8,325 Z" id="a-copy-4"></path>
              </g>
            </g>
          </svg>
        </div>
        <h1>一款轻量级、模块化的前端 UI 组件库</h1>
        <div class="btn-container">
          <div class="btn btn-begin"><router-link :to="{ name: 'Introduction' }">开始使用</router-link></div>
          <div class="btn btn-github"><a href="https://github.com/o2team/at-ui">Github</a></div>
        </div>
      </div>
      <div class="prototype-screens flex">
        <div class="prototype prototype-1"><img src="../assets/prototype-1.png" alt=""></div>
        <div class="prototype prototype-2"><img src="../assets/prototype-2.png" alt=""></div>
        <div class="prototype prototype-3"><img src="../assets/prototype-3.png" alt=""></div>
        <div class="prototype prototype-4"><img src="../assets/prototype-4.png" alt=""></div>
      </div>
      <div class="separate-panel"></div>
    </section>
    <section class="section section-navigation">
      <div class="container flex flex-around">
        <div class="navigation-panel">
          <div class="icon">
            <img src="../assets/icon-navigation-1.png" alt="">
          </div>
          <div class="title">指南</div>
          <div class="desc">了解设计指南，利用统一的规范进行设计赋能，帮助产品设计师，前端工程师，后台工程师迅速搭建中后台产品。</div>
          <router-link :to="{ name: 'Guide' }"><div class="btn-readmore">查看详情</div></router-link>
        </div>
        <div class="navigation-panel">
          <div class="icon">
            <img src="../assets/icon-navigation-2.png" alt="">
          </div>
          <div class="title">组件</div>
          <div class="desc">基于 Vue 的 UI 组件化，可以通过组件的 Demo 体验交互细节，开发中既可以根据需要单独引用，也可以使用全局方式引入所有组件。</div>
          <router-link :to="{ name: 'Docs' }"><div class="btn-readmore">查看详情</div></router-link>
        </div>
        <div class="navigation-panel">
          <div class="icon">
            <img src="../assets/icon-navigation-3.png" alt="">
          </div>
          <div class="title">资源</div>
          <div class="desc">提供视觉稿原稿下载，产品可直接用 Sketch 工具快速搭建高保真的产品原型稿，减少沟通成本，提升工作效率。</div>
          <div class="btn-readmore">暂未开放</div>
        </div>
      </div>
    </section>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from '../components/header'
import MFooter from '../components/footer'

export default {
  components: {
    MHeader,
    MFooter
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/style/index';

$bg-color: #F8FAFF;
$drop-shadow: 0 4px 30px 0 rgba(223, 225, 230, .5);

.wrapper {
  background-color: $bg-color;
  overflow: hidden;
}
.section {
  width: 100%;

  .container {
    max-width: 1140px;
    margin: 0 auto;
  }
}

/**
 * Section banner
 */
.section-banner {
  text-align: center;

  .logo {
    margin: 200px auto 0;
    width: 160px;
  }
  h1 {
    margin-top: 56px;
    color: #8994C6;
    font-size: 32px;
  }
  .btn-container {
    margin-top: 72px;

    .btn {
      display: inline-block;
      width: 190px;
      height: 56px;
      margin: 0 35px;
      font-size: 18px;
      line-height: 56px;
      border-radius: 28px;
      transition: all .3s;
      cursor: pointer;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .btn-begin {
      color: #fff;
      background-image: linear-gradient(90deg, #00AEFF 0%, #3369E7 100%);
      box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);

      &:hover {
        box-shadow: 0 4px 12px 0 rgba(51, 105, 231, 0.4);

        a {
          color: #fff;
        }
      }
      a {
        color: #fff;
      }
    }
    .btn-github {
      color: #316DE9;
      border: 1px solid #2F6EE9;

      &:hover {
        color: $brand-blue-400;
        border-color: $brand-blue-400;
      }
    }
  }
  .prototype-screens {
    margin-top: 104px;

    .prototype {
      display: inline-block;
      margin: 0 16px;
      background-color: #fff;
      border-radius: 30px;
      box-shadow: $drop-shadow;

      img {
        width: 100%;
      }
    }
    .prototype-1 {
      margin-top: 120px;
    }
    .prototype-2 {
      margin-top: 80px;
    }
    .prototype-3 {
      margin-top: 40px;
    }
  }
  .separate-panel {
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      top: -180px;
      width: 100%;
      height: 350px;
      background: #F8FAFF;
      box-shadow: 0 -4px 30px 0 #DFE1E6;
      transform: skewY(-4deg);
    }
  }
}

/**
 * Section navigation
 */
.section-navigation {
  position: relative;
  background-color: $bg-color;

  .container {
    margin: 80px auto 200px;
    height: 380px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: $drop-shadow;
  }
  .navigation-panel {
    margin-top: 56px;
    padding-left: 32px;
    width: 250px;
    height: 250px;

    .icon {
      margin-left: -32px;
      width: 80px;
      height: 83px;

      img {
        width: 100%;
      }
    }
    .title {
      margin: 16px 0;
      color: #4573DE;
      font-size: 18px;
    }
    .desc {
      color: #6B798C;
      font-size: 14px;
      line-height: 1.5;
    }
    .btn-readmore {
      display: inline-block;
      margin-top: 16px;
      padding: 4px 20px;
      color: #6B798C;
      font-size: 13px;
      border: 1px solid #ECECEC;
      border-radius: 2px;
      transition: all .3s;
      cursor: pointer;

      &:hover {
        color: $brand-blue-400;
        border-color: $brand-blue-400;
      }
    }
  }
}
</style>
