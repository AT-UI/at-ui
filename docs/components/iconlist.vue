<template>
  <ul class="at-icon-list row">
    <li v-for="name in icons" :key="name" class="at-icon-list__item col-sm-6 col-md-4 col-lg-3 flex flex-middle flex-center" v-clipboard:copy="name">
      <div class="">
        <i class="icon" :class="name"></i>
        <p>{{name}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import '../directive'
import IconData from '../icons.json'

export default {
  props: {
    type: {
      type: String,
      default: 'core'
    }
  },
  data () {
    return {
      icons: IconData[this.type]
    }
  }
}
</script>

<style lang="scss">
$bg-color-light: #ECF5FD;

.at-icon-list__item {
  height: 100px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: $bg-color-light;
    transform: scale(1.2);
  }
  i {
    font-size: 26px;
  }
  p {
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>
