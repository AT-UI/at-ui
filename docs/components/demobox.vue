<template>
  <div class="at-component__container">
    <div class="at-component__sample">
      <slot name="demo"></slot>
    </div>
    <transition name="fade">
      <div class="at-component__code" v-show="isShow">
        <slot name="source-code"></slot>
      </div>
    </transition>
    <a class="at-component__code-toggle" @click="isShow = !isShow">{{ isShow ? '隐藏代码' : '显示代码' }}</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>
