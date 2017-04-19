<template>
  <span class="at-breadcrumb__item">
    <a v-if="href || Object.keys(to).length" class="at-breadcrumb__link" @click="handleClick"><slot></slot></a>
    <span v-else class="at_breadcrumb__text"><slot></slot></span>
    <span class="at-breadcrumb__separator" v-html="separator"></span>
  </span>
</template>

<script>
  export default {
    name: 'AtBreadcrumbItem',
    props: {
      href: String,
      to: {
        type: [Object, String],
        default () {
          return {}
        }
      },
      replace: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        separator: ''
      }
    },
    mounted () {
      this.separator = this.$parent.separator
    },
    methods: {
      handleClick () {
        const to = this.to
        const href = this.href

        if (href) {
          window.location.href = href
        } else {
          this.replace ? this.$router.replace(to) : this.$router.push(to)
        }
      }
    }
  }
</script>
