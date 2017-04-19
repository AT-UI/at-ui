<template>
  <div class="at-table__wrapper"
    :class="{
      'at-table--with-header': this.showSlotHeader,
      'at-table--with-footer': this.showSlotFooter
    }"
    :style="styles">
    <div class="at-table"
      :class="{
        'at-table--with-border': this.border,
        'at-table--with-stripe': this.stripe
      }">
      <div class="at-table__title" v-if="showSlotHeader" ref="title"><slot name="header"></slot></div>
      <!-- /title -->
      <div class="at-table__header" v-if="showHeader" ref="header" @mousewheel="handleMouseWheel">
        <at-table-head
          :styles="tableStyle"
          :columns="cloneColumns"
          :data="rebuildData"
          :obj-data="objData"></at-table-head>
      </div>
      <!-- /header -->
      <div
        class="at-table__body"
        :style="bodyStyle"
        ref="body">
        <at-table-body
          ref="tbody"
          :styles="tableStyle"
          :columns="cloneColumns"
          :data="rebuildData"
          :obj-data="objData"></at-table-body>
      </div>
      <!-- /body -->
      <div class="at-table__footer" v-if="showSlotFooter" ref="footer"><slot name="footer"></slot></div>
    </div>
  </div>
</template>

<script>
  import AtTableHead from './table-head.vue'
  import AtTableBody from './table-body.vue'
  import { deepCopy } from 'src/utils/util'

  export default {
    name: 'AtTable',
    components: {
      AtTableHead,
      AtTableBody
    },
    props: {
      data: {
        type: Array,
        default () {
          return []
        }
      },
      columns: {
        type: Array,
        default () {
          return []
        }
      },
      width: {
        type: [Number, String]
      },
      height: {
        type: [Number, String]
      },
      stripe: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      showHeader: {
        type: Boolean,
        default: true
      },
      highlightRow: {
        type: Boolean,
        default: false
      },
      rowClassName: {
        type: Function,
        default () {
          return ''
        }
      },
      context: Object,
      noDataText: String
    },
    data () {
      return {
        ready: false,
        tableWidth: 0,
        compiledUids: [],
        objData: this.makeObjData(), // checkbox or highlight-row
        rebuildData: [],  // for sort or filter
        cloneColumns: this.makeColumns(),
        showSlotHeader: true,
        showSlotFooter: true,
        bodyHeight: 0,
        bodyRealHeight: 0,
        currentContext: this.context,
        cloneData: deepCopy(this.data)
      }
    },
    computed: {
      styles () {
        const style = {}

        if (this.height) {
          const height = parseInt(this.height)
          style.height = `${height}px`
        }
        if (this.width) {
          style.width = `${this.width}px`
        }

        return style
      },
      tableStyle () {
        const style = {}

        if (this.tableWidth !== 0) {
          let width = ''
          width = this.tableWidth
          style.width = `${width}px`
        }

        return style
      },
      bodyStyle () {
        const style = {}

        if (this.bodyHeight !== 0) {
          style.height = `${this.bodyHeight}px`
        }

        return style
      }
    },
    watch: {
      data: {
        handler () {
          this.objData = this.makeObjData()
          this.rebuildData = this.makeData()
          setTimeout(() => {
            this.cloneData = deepCopy(this.data)
          }, 0)
        },
        deep: true
      },
      columns: {
        handler () {
          this.cloneColumns = this.makeColumns()
          this.rebuildData = this.makeData()
        },
        deep: true
      }
    },
    methods: {
      handleMouseIn (idx) {
        this.objData[idx]._isHover = true
      },
      handleMouseOut (idx) {
        this.objData[idx]._isHover = false
      },
      clickCurrentRow (idx) {
        this.highlightCurrentRow(idx)
        this.$emit('on-row-click', JSON.parse(JSON.stringify(this.cloneData[idx])))
      },
      dblclickCurrentRow (idx) {
        this.highlightCurrentRow(idx)
        this.$emit('on-row-dblclick', JSON.parse(JSON.stringify(this.cloneData[idx])))
      },
      highlightCurrentRow (idx) {
        if (!this.highlightRow || this.objData[idx]._isHighlight) return

        let oldIndex = -1
        for (const i in this.objData) {
          if (this.objData[i]._isHighlight) {
            oldIndex = parseInt(i)
            this.objData[i]._isHighlight = false
          }
        }
        this.objData[idx]._isHighlight = true

        const oldData = oldIndex < 0 ? null : JSON.parse(JSON.stringify(this.cloneData[oldIndex]))
        this.$emit('on-row-change', JSON.parse(JSON.stringify(this.cloneData[idx])), oldData)
      },
      getSelection () {
        const selectionIndexes = []

        for (const i in this.objData) {
          if (this.objData[i]._isChecked) {
            selectionIndexes.push(parseInt(i))
          }
        }

        return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexes.indexOf(index) > -1)))
      },
      toggleSelect (idx) {
        let data = {}

        for (const i in this.objData) {
          if (parseInt(i) === idx) {
            data = this.objData[i]
          }
        }

        const status = !data._isChecked
        this.objData[idx]._isChecked = status
        const selection = this.getSelection()

        if (status) {
          this.$emit('on-select', selection, JSON.parse(JSON.stringify(this.data[idx])))
        }
        this.$emit('on-selection-change', selection)
      },
      selectAll (status) {
        for (const data of this.rebuildData) {
          if (this.objData[data._index]._isDisabled) {
            continue
          } else {
            this.objData[data._index]._isChecked = status
          }
        }

        const selection = this.getSelection()

        if (status) {
          this.$emit('on-select-all', selection)
        }
        this.$emit('on-selection-change', selection)
      },
      handleMouseWheel (evt) {
        const deltaX = evt.deltaX
        const body = this.$refs.body

        if (deltaX > 0) {
          body.scrollLeft += 10
        } else {
          body.scrollLeft -= 10
        }
      },
      makeData () {
        const data = deepCopy(this.data)
        data.forEach((row, index) => {
          row._index = index
        })
        return data
      },
      makeObjData () {
        const data = {}

        this.data.forEach((row, index) => {
          const newRow = deepCopy(row)

          newRow._isHover = false
          newRow._isDisabled = newRow._disabled || false
          newRow._isChecked = newRow._checked || false
          newRow._isHighlight = newRow._highlight || false

          data[index] = newRow
        })

        return data
      },
      makeColumns () {
        const columns = deepCopy(this.columns)
        const arrs = []

        columns.forEach((column, index) => {
          column._index = index
          column._width = column.width ? column.width : ''
          arrs.push(column)
        })

        return arrs
      },
    },
    created () {
      if (!this.context) {
        this.currentContext = this.$parent
      }
      this.showSlotHeader = (typeof this.$refs.title !== 'undefined')
      this.showSlotFooter = (typeof this.$refs.footer !== 'undefined')
      this.rebuildData = this.makeData()
    },
    mounted () {
      this.$nextTick(() => {
        this.ready = true
      })
    }
  }
</script>
