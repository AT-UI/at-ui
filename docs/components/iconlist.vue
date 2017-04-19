<template>
  <ul class="at-icon-list row">
    <li v-for="name in icons" class="at-icon-list__item col-md-2 col-lg-1 flex flex-middle flex-center" v-clipboard:copy="name">
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
  data () {
    return {
      icons: IconData
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
    font-size: 22px;
  }
  p {
    margin-top: 5px;
  }
}
</style>
