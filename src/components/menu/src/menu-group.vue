<template>
  <li class="at-menu__item-group">
    <div class="at-menu__item-group-title">{{ title }}</div>
    <ul><slot></slot></ul>
  </li>
</template>

<script>
  export default {
    name: 'AtMenuItemGroup',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
