<template>
  <ul class="at-option-group">
    <li class="at-option-group__label">{{ label }}</li>
    <ul class="at-option-group__list">
      <slot></slot>
    </ul>
  </ul>
</template>

<script>
  export default {
    name: 'AtOptionGroup',
    props: {
      label: {
        type: String,
        required: true
      }
    }
  }
</script>
