<template>
  <!-- / S 极简分页 -->
  <ul
    class="at-pagination at-pagination--simple"
    :class="[
      size ? `at-pagination--${size}` : ''
    ]"
    v-if="simple">
    <li
      title="上一页"
      class="at-pagination__prev"
      :class="[
        this.currentPage === 1 ? 'at-pagination--disabled' : ''
      ]"
      @click="handlePrev">
      <i class="icon icon-chevron-left"></i>
    </li>
    <div class="at-pagination__simple-paper">
      <input type="text" class="at-input__original" :value="currentPage" @keydown="handleKeydown" @keyup="handleKeyup" @change="handleKeyup">
      <span>/</span>
      {{ totalPage }}
    </div>
    <li
      title="下一页"
      class="at-pagination__next"
      :class="[
        this.currentPage === this.totalPage ? 'at-pagination--disabled' : ''
      ]"
      @click="handleNext">
      <i class="icon icon-chevron-right"></i>
    </li>
  </ul>
  <!-- / E 极简分页 -->
  <!-- / S 基础分页 -->
  <ul
    class="at-pagination"
    :class="[
      size ? `at-pagination--${size}` : ''
    ]"
    v-else>
    <span class="at-pagination__total" v-show="showTotal">
      <slot name="total">共 {{ total }} 条</slot>
    </span>
    <li
      title="上一页"
      class="at-pagination__prev"
      :class="[
        this.currentPage === 1 ? 'at-pagination--disabled' : ''
      ]"
      @click="handlePrev">
      <i class="icon icon-chevron-left"></i>
    </li>
    <template v-if="totalPage < 9">
      <li v-for="num in pageRange" class="at-pagination__item" :class="[ currentPage === num ? 'at-pagination__item--active' : '' ]" @click="changePage(num)">{{ num }}</li>
    </template>
    <template v-else>
      <li class="at-pagination__item" :class="[ currentPage === 1 ? 'at-pagination__item--active' : '' ]" @click="changePage(1)">1</li>
      <li class="at-pagination__item at-pagination__item--jump-prev" title="向前5页" v-if="currentPage > 4" @click="handleJumpPrev"><i class="icon icon-left-arrow"></i></li>
      <li class="at-pagination__item" v-if="currentPage > 3" @click="changePage(currentPage - 2)">{{ currentPage - 2 }}</li>
      <li class="at-pagination__item" v-if="currentPage > 2" @click="changePage(currentPage - 1)">{{ currentPage - 1 }}</li>
      <li class="at-pagination__item at-pagination__item--active" v-if="currentPage !== 1 && currentPage !== totalPage">{{ currentPage }}</li>
      <li class="at-pagination__item" v-if="currentPage < totalPage - 1" @click="changePage(currentPage + 1)">{{ currentPage + 1 }}</li>
      <li class="at-pagination__item" v-if="currentPage < totalPage - 2" @click="changePage(currentPage + 2)">{{ currentPage + 2 }}</li>
      <li class="at-pagination__item at-pagination__item--jump-next" title="向后5页" v-if="currentPage < totalPage - 3" @click="handleJumpNext"><i class="icon icon-right-arrow"></i></li>
      <li class="at-pagination__item" v-if="totalPage > 1" :class="[ currentPage === totalPage ? 'at-pagination__item--active' : '' ]" @click="changePage(totalPage)">{{ totalPage }}</li>
    </template>
    <li
      title="下一页"
      class="at-pagination__next"
      :class="[
        this.currentPage === this.totalPage ? 'at-pagination--disabled' : ''
      ]"
      @click="handleNext">
      <i class="icon icon-chevron-right"></i>
    </li>
    <div v-if="showSizer" class="at-pagination__sizer">
      <at-select v-model="currentPageSize" :size="size" @on-change="changeSize">
        <at-option v-for="item in pageSizeOpts" :key="item" :value="item">{{ item }} 条/页</at-option>
      </at-select>
    </div>
    <div class="at-pagination__quickjump" v-if="showQuickjump">
      <span>前往</span>
      <input type="text" class="at-input__original" v-model="jumpPage" @keydown="handleKeydown" @keyup.enter="changePage()">
      <span>页</span>
    </div>
  </ul>
  <!-- / E 基础分页 -->
</template>

<script>
  export default {
    name: 'AtPagination',
    componentName: 'AtPagination',
    props: {
      current: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        required: true,
        default: 0
      },
      pageSize: {
        type: Number,
        default: 10
      },
      size: {
        type: String,
        validator: val => ['small'].indexOf(val) > -1
      },
      simple: {
        type: Boolean,
        default: false
      },
      showTotal: {
        type: Boolean,
        default: false
      },
      showQuickjump: {
        type: Boolean,
        default: false
      },
      showSizer: {
        type: Boolean,
        default: false
      },
      pageSizeOpts: {
        type: Array,
        default () {
          return [10, 20, 30, 40]
        }
      }
    },
    data () {
      return {
        currentPage: this.current,
        currentPageSize: this.pageSize,
        jumpPage: this.current
      }
    },
    watch: {
      current (val) {
        this.currentPage = val
      },
      pageSize (val) {
        this.currentPageSize = val
      }
    },
    computed: {
      totalPage () {
        const num = Math.ceil(this.total / this.currentPageSize)
        return (num === 0) ? 1 : num
      },
      visiblePage () {
        return this.totalPage >= 5 ? 5 : this.totalPage
      },
      pageRange () {
        const range = []
        let start = 1

        if (this.currentPage + (this.visiblePage / 2) > this.totalPage) {
          start = this.totalPage - this.visiblePage + 1
          start = start > 0 ? start : 1
        } else if (this.currentPage - (this.visiblePage / 2) > 0) {
          start = Math.ceil(this.currentPage - (this.visiblePage / 2))
        }

        for (let i = 0; i < this.visiblePage && i < this.totalPage; i++) {
          range.push(start + i)
        }

        return range
      }
    },
    methods: {
      changePage (page) {
        let num = (page || this.jumpPage || 1) | 0
        num = num > this.totalPage ? this.totalPage : num
        num = num < 1 ? 1 : num

        if (this.currentPage !== num) {
          this.jumpPage = num
          this.currentPage = num
          this.$emit('page-change', num)
        }
      },
      handlePrev () {
        const page = this.currentPage
        if (page <= 1) return false
        this.changePage(page - 1)
      },
      handleNext () {
        const page = this.currentPage
        if (page >= this.totalPage) return false
        this.changePage(page + 1)
      },
      handleJumpPrev () {
        const page = this.currentPage - 5
        page ? this.changePage(page) : this.changePage(1)
      },
      handleJumpNext () {
        const page = this.currentPage + 5
        page > this.totalPage ? this.changePage(this.totalPage) : this.changePage(page)
      },
      handleKeydown (evt) {
        const key = evt.keyCode

        // 按键 0~9，空格，左右方向键
        if (!((key >= 48 && key <= 57) || key === 8 || key === 37 || key === 39)) {
          evt.preventDefault()
        }
      },
      handleKeyup (evt) {
        const key = evt.keyCode
        const numVal = evt.target.value | 0

        if (key === 38) { // Up Arrow
          this.handlePrev()
        } else if (key === 40) { // Down Arrow
          this.handleNext()
        } else if (key === 13) { // Return
          let page = 1

          page = (numVal > this.totalPage) ? this.totalPage : numVal
          page = (numVal <= 0) ? 1 : numVal
          evt.target.value = page
          this.changePage(page)
        }
      },
      changeSize (size) {
        this.currentPageSize = size
        this.changePage(1)
        this.$emit('pagesize-change', size)
      }
    }
  }
</script>

