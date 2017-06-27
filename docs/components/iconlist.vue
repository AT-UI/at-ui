<template>
  <ul class="at-icon-list row">
    <li v-for="name in icons" class="at-icon-list__item col-md-4 col-lg-3 flex flex-middle flex-center" v-clipboard:copy="name">
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
  text-align: center;
  height: 100px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: $bg-color-light;
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
