<template>
  <div
    class="at-table"
    :class="{
      [`at-table--${this.size}`]: this.size,
      [`at-table--${this.stripe}`]: this.stripe,
      [`at-table--${this.border}`]: this.border
    }"
    :style="tableStyles">

    <!-- S Content -->
    <div class="at-table__content">
      <div class="at-table__body">
        <table>
          <thead class="at-table__thead">
            <tr>
              <!-- S Checkbox -->
              <th v-if="columnType === 'selection'" class="at-table__column-selection">
                <at-checkbox v-model="isSelectAll" label="all" @click="handleSelectAll"></at-checkbox>
              </th>
              <!-- E Checkbox -->
              <!-- S Column th -->
              <th
                v-for="(column, index) in columns"
                :key="column"
                :class="column.className"
                :style="{
                  cursor: column.sort ? 'pointer' : 'text'
                }"
                @click="column.sort && sort(column)">
                <slot name="th" :title="column.title" :column="column" :index="index">
                  {{ column.title }}
                </slot>
                <template v-if="column.sort">
                  <div class="at-table__column-sorter"
                    :class="{
                      'sort-asc': column.sort === 'asc',
                      'sort-desc': column.sort === 'desc'
                    }">
                    <span class="at-table__column-sorter-up" @click.stop="sort(column, 'asc')"><i class="icon icon-chevron-up"></i></span>
                    <span class="at-table__column-sorter-down" @click.stop="sort(column, 'desc')"><i class="icon icon-chevron-down"></i></span>
                  </div>
                </template>
              </th>
              <!-- E Column th -->
            </tr>
          </thead>

          <tbody class="at-table__tbody" v-show="sortData.length">
            <template v-for="(item, index) in sortData">
              <tr @click="handleRowClick(index)" @mouseover="handleRowHover(index)">
                <td v-if="columnType" class="at-table__column-selection">
                  <at-checkbox v-model="item['checked']" @click.native.stop="changeRowSelect(index)"></at-checkbox>
                </td>
                <td v-for="(column, cindex) in columns">
                  <slot name="td" :content="item[column.key]" :item="item" :column="column" :index="index" :cindex="cindex">
                    {{ item[column.key] }}
                  </slot>
                </td>
              </tr>
            </template>
          </tbody>

          <tbody class="at-table__tbody" v-if="sortData.length === 0">
            <tr>
              <td :colspan="columnType ? columns.length + 1 : columns.length">
                <slot name="emptyText">No Data.</slot>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- E Content -->

    <!-- S Pagination -->
    <div v-if="pagination && total" class="at-table__footer">
      <div class="at-table__pagination">
        <at-pagination :total="total" :page-size="pageSize" show-total show-sizer show-quickjump></at-pagination>
      </div>
    </div>
    <!-- E Pagination -->
  </div>
</template>

<script>
import { deepCopy } from 'src/utils/util'
import AtCheckbox from 'src/components/checkbox'
import AtPagination from 'src/components/pagination'

let rowKey = 1
let columnKey = 1

export default {
  name: 'AtTable',
  components: {
    AtCheckbox,
    AtPagination
  },
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
    columnType: {
      type: String
    },
    pagination: {
      type: Boolean,
      default: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    rowClickChecked: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    }
  },
  data () {
    return {
      objData: this.makeObjData(), // use for checkbox to select all
      sortData: [], // use for sort or filter
      columnsData: this.makeColumns(),
      current: [],
      initFlag: false,
      total: 0,
      scrollbarWidth: 15,
      hoverIndex: null,
      paramsName: {}
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
      let isAll = false
      if (!this.data.length) {
        isAll = false
      }
      for (let i = 0, len = this.data.length; i < len; i++) {
        if (!this.objData[this.data[i]._index].isChecked && !this.objData[this.data[i]._index].isDisabled) {
          isAll = false
          break
        }
      }

      return isAll
    }
  },
  methods: {
    makeColumns () {
      const columns = deepCopy(this.columns)
      columns.forEach((column, idx) => {
        column._index = idx
        column._columnKey = columnKey++
        column._sortType = 'normal'

        if (column.sortType) {
          column._sortType = column.sortType
        }
      })
      return columns
    },
    makeData () {
      const data = deepCopy(this.data)
      data.forEach((row, idx) => {
        row._index = idx
        row._rowKey = rowKey++
      })
      return data
    },
    makeObjData () {
      const rowData = {}

      this.data.forEach((row, index) => {
        const newRow = deepCopy(row)

        newRow.isDisabled = !!newRow._disabled
        newRow.isChecked = !!newRow._checked
        newRow.isHighlight = !!newRow._highlight

        rowData[index] = newRow
      })

      return rowData
    },
    makeDataWithSort () {
      let data = this.makeData()
      let sortType = 'normal'
      let sortIndex = -1

      for (let i = 0, len = this.columnsData.length; i < len; i++) {
        if (this.columnsData[i]._sortType !== 'normal') {
          sortType = this.columnsData[i]._sortType
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
        if (this.objData[data._index].isDisabled) {
          continue
        } else {
          this.objData[data._index].isChecked = status
        }
      }

      const selection = this.getSelection()

      status && this.$emit('on-select-all', selection)
      this.$emit('on-selection-change', selection)
    },
    sort (data, type, index) {
      const key = this.columnsData[index].key
      data.sort((a, b) => {
        if (this.columnsData[index].sortMethod) {
          return this.columnsData[index].sortMethod(a[key], b[key], type)
        } else if (type === 'asc') {
          return a[key] > b[key] ? 1 : -1
        } else if (type === 'desc') {
          return a[key] < b[key] ? 1 : -1
        }
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
    }
  },
  created () {
    this.sortData = this.makeDataWithSort()
  }
}
</script>
