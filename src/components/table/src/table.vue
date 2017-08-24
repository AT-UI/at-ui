<template>
  <div
    class="at-table"
    :class="{
      'at-table--fixHeight': this.height,
      'at-table--stripe': this.stripe,
      [`at-table--${this.size}`]: this.size,
      [`at-table--border`]: this.border
    }"
    :style="tableStyles">

    <!-- S Content -->
    <div class="at-table__content" :style="contentStyle">
      <!-- S Header -->
      <div class="at-table__header" v-if="height">
        <table>
          <thead class="at-table__thead" ref="header">
            <tr>
              <!-- S Checkbox -->
              <th v-if="optional" class="at-table__cell at-table__column-selection">
                <at-checkbox v-model="isSelectAll" @click.native="handleSelectAll"></at-checkbox>
              </th>
              <!-- E Checkbox -->
              <!-- S Column th -->
              <th
                v-for="(column, index) in columnsData"
                :key="column"
                class="at-table__cell at-table__column"
                :class="column.className"
                :style="{
                  cursor: column.sortType ? 'pointer' : 'text'
                }"
                @click="column.sortType && handleSort(index)">
                {{ column.title }}
                <template v-if="column.sortType">
                  <div class="at-table__column-sorter"
                    :class="{
                      'sort-asc': column._sortType === 'asc',
                      'sort-desc': column._sortType === 'desc'
                    }">
                    <span class="at-table__column-sorter-up" @click.stop="handleSort(index, 'asc')"><i class="icon icon-chevron-up"></i></span>
                    <span class="at-table__column-sorter-down" @click.stop="handleSort(index, 'desc')"><i class="icon icon-chevron-down"></i></span>
                  </div>
                </template>
              </th>
              <!-- E Column th -->
            </tr>
          </thead>
        </table>
      </div>
      <!-- E Header -->

      <!-- S Body -->
      <div class="at-table__body" :style="bodyStyle">
        <table>
          <thead class="at-table__thead" v-if="!height" ref="header">
            <tr>
              <!-- S Checkbox -->
              <th v-if="optional" class="at-table__cell at-table__column-selection">
                <at-checkbox v-model="isSelectAll" @click.native.prevent="handleSelectAll"></at-checkbox>
              </th>
              <!-- E Checkbox -->
              <!-- S Column th -->
              <th
                v-for="(column, index) in columnsData"
                :key="column"
                class="at-table__cell at-table__column"
                :class="column.className"
                :style="{
                  cursor: column.sortType ? 'pointer' : 'text'
                }"
                @click="column.sortType && handleSort(index)">
                {{ column.title }}
                <template v-if="column.sortType">
                  <div class="at-table__column-sorter"
                    :class="{
                      'sort-asc': column._sortType === 'asc',
                      'sort-desc': column._sortType === 'desc'
                    }">
                    <span class="at-table__column-sorter-up" @click.stop="handleSort(index, 'asc')"><i class="icon icon-chevron-up"></i></span>
                    <span class="at-table__column-sorter-down" @click.stop="handleSort(index, 'desc')"><i class="icon icon-chevron-down"></i></span>
                  </div>
                </template>
              </th>
              <!-- E Column th -->
            </tr>
          </thead>

          <tbody class="at-table__tbody" v-if="sortData.length" ref="body">
            <template v-for="(item, index) in sortData">
              <tr>
                <td v-if="optional" class="at-table__cell at-table__column-selection">
                  <at-checkbox v-model="objData[index].isChecked" @on-change="changeRowSelection"></at-checkbox>
                </td>
                <td v-for="(column, cindex) in columns" class="at-table__cell">
                  {{ item[column.key] }}
                </td>
              </tr>
            </template>
          </tbody>

          <tbody class="at-table__tbody" v-else>
            <tr>
              <td class="at-table__cell" :colspan="optional ? columns.length + 1 : columns.length">
                <slot name="emptyText">No Data.</slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- E Body -->
    </div>
    <!-- E Content -->

    <!-- S Pagination -->
    <div v-if="pagination && total" class="at-table__footer" ref="footer">
      <at-pagination :total="total" :page-size="pageSize" :show-total="showPageTotal" :show-sizer="showPageSizer" :show-quickjump="showPageQuickJump"></at-pagination>
    </div>
    <!-- E Pagination -->
  </div>
</template>

<script>
import { getStyle, deepCopy } from 'src/utils/util'
import AtCheckbox from 'src/components/checkbox'
import AtPagination from 'src/components/pagination'

export default {
  name: 'AtTable',
  components: [
    AtCheckbox,
    AtPagination
  ],
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    stripe: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default () {
        return []
      }
    },
    columns: {
      type: Array,
      required: true
    },
    optional: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Boolean,
      default: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    showPageTotal: {
      type: Boolean,
      default: true
    },
    showPageSizer: {
      type: Boolean,
      default: false
    },
    showPageQuickJump: {
      type: Boolean,
      default: false
    },
    rowClickChecked: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Number, String]
    }
  },
  data () {
    return {
      objData: this.makeObjData(), // use for checkbox to select all
      sortData: [], // use for sort or filter
      columnsData: this.makeColumns(),
      current: [],
      total: 0,
      scrollbarWidth: 15,
      bodyHeight: 0
    }
  },
  watch: {
    height () {
      this.calculateBodyHeight()
    }
  },
  computed: {
    tableStyles () {
      const styles = {}

      if (this.height) {
        styles.height = `${this.height}px`
      }
      if (this.width) {
        styles.width = `${this.width}px`
      }

      return styles
    },
    isSelectAll () {
      let isAll = true
      if (!this.sortData.length) {
        isAll = false
      }
      for (let i = 0, len = this.sortData.length; i < len; i++) {
        if (!this.objData[this.sortData[i].index].isChecked) {
          isAll = false
          break
        }
      }

      return isAll
    },
    bodyStyle () {
      const styles = {}
      if (this.bodyHeight !== 0) {
        const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0
        styles.height = `${this.bodyHeight}px`
        styles.marginTop = `${headerHeight}px`
      }
      return styles
    },
    contentStyle () {
      const styles = {}
      if (this.bodyHeight !== 0) {
        const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0
        styles.height = `${this.bodyHeight + headerHeight}px`
      }
      return styles
    }
  },
  methods: {
    calculateBodyHeight () {
      if (this.height) {
        this.$nextTick(() => {
          const headerHeight = parseInt(getStyle(this.$refs.header, 'height')) || 0
          const footerHeight = parseInt(getStyle(this.$refs.footer, 'height')) || 0

          this.bodyHeight = this.height - headerHeight - footerHeight
        })
      } else {
        this.bodyHeight = 0
      }
    },
    makeColumns () {
      const columns = deepCopy(this.columns)
      columns.forEach((column, idx) => {
        column._index = idx
        column._sortType = 'normal'

        if (column.sortType) {
          column._sortType = column.sortType
          column.sortType = column.sortType
        }
      })
      return columns
    },
    makeData () {
      const data = deepCopy(this.data)
      data.forEach((row, idx) => {
        row.index = idx
      })
      return data
    },
    makeObjData () {
      const rowData = {}

      this.data.forEach((row, index) => {
        const newRow = deepCopy(row)

        newRow.isChecked = !!newRow.isChecked

        rowData[index] = newRow
      })

      return rowData
    },
    makeDataWithSort () {
      let data = this.makeData()
      let sortType = 'normal'
      let sortIndex = -1

      for (let i = 0, len = this.columnsData.length; i < len; i++) {
        if (this.columnsData[i].sortType && this.columnsData[i].sortType !== 'normal') {
          sortType = this.columnsData[i].sortType
          sortIndex = i
          break
        }
      }

      if (sortType !== 'normal') {
        data = this.sort(data, sortType, sortIndex)
      }

      return data
    },
    handleSelectAll () {
      const status = !this.isSelectAll

      for (const data of this.sortData) {
        this.objData[data.index].isChecked = status
      }

      const selection = this.getSelection()

      status && this.$emit('on-select-all', selection)
      this.$emit('on-selection-change', selection)
    },
    handleSort (index, type) {
      const key = this.columnsData[index].key
      const sortType = this.columnsData[index]._sortType
      const sortNameArr = ['normal', 'desc', 'asc']

      if (this.columnsData[index].sortType) {
        if (!type) {
          const tmpIdx = sortNameArr.indexOf(sortType)
          if (tmpIdx >= 0) {
            type = sortNameArr[(tmpIdx + 1) > 2 ? 0 : tmpIdx + 1]
          }
        }
        if (type === 'normal') {
          this.sortData = this.makeDataWithSort()
        } else {
          this.sortData = this.sort(this.sortData, type, index)
        }
      }
      this.columnsData[index]._sortType = type

      this.$emit('on-sort-change', {
        column: JSON.parse(JSON.stringify(this.columns[this.columnsData[index]._index])),
        order: type,
        key
      })
    },
    sort (data, type, index) {
      const key = this.columnsData[index].key
      data.sort((a, b) => {
        if (this.columnsData[index].sortMethod) {
          return this.columnsData[index].sortMethod(a[key], b[key], type)
        } else if (type === 'asc') {
          return a[key] > b[key] ? 1 : -1
        }
        return a[key] < b[key] ? 1 : -1
      })
      return data
    },
    getSelection () {
      const selectionIndexArray = []
      for (const i in this.objData) {
        if (this.objData[i].isChecked) {
          selectionIndexArray.push(i | 0)
        }
      }
      return JSON.parse(JSON.stringify(this.data.filter((data, index) => selectionIndexArray.indexOf(index) > -1)))
    },
    changeRowSelection () {
      const selection = this.getSelection()
      this.$emit('on-selection-change', selection)
    }
  },
  created () {
    this.sortData = this.makeDataWithSort()
  },
  mounted () {
    this.calculateBodyHeight()
  }
}
</script>
