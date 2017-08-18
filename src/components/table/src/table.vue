<template>
  <div
    class="at-table"
    :class="{
      [`at-table--${this.size}`]: this.size,
      [`at-table--${this.stripe}`]: this.stripe,
      [`at-table--${this.border}`]: this.border
    }"
    :style="tableStyles">

    <!-- S Header -->
    <div class="at-table__header" :style="headerStyle">
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
      </table>
    </div>
    <!-- E Header -->

    <!-- S Content -->
    <div class="at-table__content" @scroll="handleScrollBody">
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

          <tbody class="at-table__tbody" v-show="current.length">

          </tbody>
        </table>
      </div>
    </div>
    <!-- E Content -->
  </div>
</template>

<script>
export default {
  name: 'AtTable',
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
    headerStyle () {
      const styles = {}

      if (this.width) {
        styles.width = `${this.width}px`
      }

      return styles
    }
  }
}
</script>
