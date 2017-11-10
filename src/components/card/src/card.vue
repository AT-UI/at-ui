<template>
  <div class="at-card"
    :class="{
      'at-card--bordered': bordered,
      'at-card--no-hover': noHover
    }">
    <div class="at-card__head" v-if="!(!$slots.title && !$slots.extra)">
      <div class="at-card__title" v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <div class="at-card__extra" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="at-card__body" :style="bodyStyle">
      <slot v-if="!loading"></slot>
      <slot v-else name="loading">
        <div class="at-card__body--loading">
          <div>
            <span style="width: 95%"></span>
          </div>
          <div>
            <span style="width: 32%"></span>
            <span style="width: 58%"></span>
          </div>
          <div>
            <span style="width: 23%"></span>
            <span style="width: 65%"></span>
          </div>
          <div>
            <span style="width: 59%"></span>
            <span style="width: 32%"></span>
          </div>
          <div>
            <span style="width: 26%"></span>
            <span style="width: 10%"></span>
            <span style="width: 50%"></span>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AtCard',
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    noHover: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    bodyStyle: {
      type: Object
    }
  }
}
</script>

