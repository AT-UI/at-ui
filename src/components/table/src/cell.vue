<template>
  <div class="at-table__cell" ref="cell">
    <template v-if="renderType === 'index'">{{ naturalIndex + 1 }}</template>
    <template v-if="renderType === 'selection'">
      <at-checkbox :value="checked" :disabled="disabled" @on-change="toggleSelect"></at-checkbox>
    </template>
    <template v-if="renderType === 'normal'">
      <span v-html="row[column.key]"></span>
    </template>
  </div>
</template>

<script>
  import Vue from 'vue'
  import AtCheckbox from 'components/checkbox'

  export default {
    name: 'AtTableCell',
    components: {
      AtCheckbox
    },
    props: {
      row: Object,
      column: Object,
      naturalIndex: Number,
      index: Number,
      checked: Boolean,
      disabled: Boolean
    },
    data () {
      return {
        renderType: '',
        uid: -1,
        context: this.$parent.$parent.currentContext
      }
    },
    watch: {
      naturalIndex () {
        this.destroy()
        this.compile()
      }
    },
    methods: {
      compile () {
        if (this.column.render) {
          const $parent = this.context
          const template = this.column.render(this.row, this.column, this.index)
          const cell = document.createElement('div')
          const methods = {}

          cell.innerHTML = template
          this.$el.innerHTML = ''
          Object.keys($parent).forEach(key => {
            const func = $parent[key]
            if (typeof func === 'function') {
              methods[key] = func
            }
          })

          const res = Vue.compile(cell.outerHTML)

          // TODO
          const component = new Vue({
            render: res.render,
            staticRenderFns: res.staticRenderFns,
            methods,
            data () {
              return $parent._data
            }
          })

          component.row = this.row
          component.column = this.column

          const Cell = component.$mount()
          this.$refs.cell.appendChild(Cell.$el)
        }
      },
      destroy () {},
      toggleSelect () {
        this.$parent.$parent.toggleSelect(this.index)
      }
    },
    created () {
      if (this.column.type === 'index') {
        this.renderType = 'index'
      } else if (this.column.type === 'selection') {
        this.renderType = 'selection'
      } else if (this.column.type) {
        this.renderType = 'render'
      } else {
        this.renderType = 'normal'
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.compile()
      })
    },
    beforeDestroy () {
      this.destroy()
    }
  }
</script>
