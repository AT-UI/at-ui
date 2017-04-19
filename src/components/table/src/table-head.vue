<template>
  <table cellspacing="0" cellpadding="0" border="0" :style="styles">
    <thead class="at-table__thead">
      <tr>
        <th v-for="(column, index) in columns">
          <div class="at-table__cell">
            <template v-if="column.type === 'selection'">
              <at-checkbox :value="isSelectAll" @on-change="selectAll"></at-checkbox>
            </template>
            <template v-else>
              <span v-html="renderHeader(column, index)"></span>
            </template>
          </div>
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
  import AtCheckbox from 'components/checkbox'

  export default {
    name: 'AtTableHead',
    components: {
      AtCheckbox
    },
    props: {
      styles: {
        type: Object
      },
      columns: {
        type: Array
      },
      objData: {
        type: Object
      },
      data: {
        type: Array
      }
    },
    computed: {
      currentStyles () {
        const style = Object.assign({}, this.styles)
        const width = this.$parent.bodyHeight === 0 ? parseInt(this.styles.width) : parseInt(this.styles.width) + this.$parent.scrollBarWidth

        style.width = `${width}px`
        return style
      },
      isSelectAll () {
        let isAll = true

        if (!this.data.length) {
          isAll = false
        }

        for (let i = 0; i < this.data.length; i++) {
          if (!this.objData[this.data[i]._index]._isChecked && !this.objData[this.data[i]._index]._isDisabled) {
            isAll = false
            break
          }
        }

        return isAll
      }
    },
    methods: {
      renderHeader (column, index) {
        if ('renderHeader' in this.columns[index]) {
          return this.columns[index].renderHeader(column, index)
        }

        return column.title || '#'
      },
      selectAll () {
        this.$parent.selectAll(!this.isSelectAll)
      }
    }
  }
</script>
