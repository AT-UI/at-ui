<template>
  <table cellspacing="0" cellpadding="0" border="0" :style="styles">
    <tbody class="at-table__tbody">
      <tr
        v-for="(row, index) in data"
        :key="row"
        @mouseenter.stop="handleMouseIn(row._index)"
        @mouseleave.stop="handleMouseOut(row._index)"
        @click.stop="clickCurrentRow(row._index)"
        @dblclick.stop="dblclickCurrentRow(row._index)"
        >
        <td v-for="column in columns">
          <at-table-cell
            :row="row"
            :column="column"
            :natural-index="index"
            :index="row._index"
            :checked="rowChecked(row._index)"
            :disabled="rowDisabled(row._index)"
            ></at-table-cell>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import AtTableCell from './cell.vue'

  export default {
    name: 'AtTableBody',
    components: {
      AtTableCell
    },
    props: {
      columns: {
        type: Array
      },
      data: {
        type: Array
      },
      objData: {
        type: Object
      },
      styles: Object
    },
    methods: {
      rowChecked (idx) {
        return this.objData[idx] && this.objData[idx]._isChecked
      },
      rowDisabled (idx) {
        return this.objData[idx] && this.objData[idx]._isDisabled
      },
      handleMouseIn (idx) {
        this.$parent.handleMouseIn(idx)
      },
      handleMouseOut (idx) {
        this.$parent.handleMouseOut(idx)
      },
      clickCurrentRow (idx) {
        this.$parent.clickCurrentRow(idx)
      },
      dblclickCurrentRow (idx) {
        this.$parent.dblclickCurrentRow(idx)
      }
    },
    mounted () {
    }
  }
</script>
