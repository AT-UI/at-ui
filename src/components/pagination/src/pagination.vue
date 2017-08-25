<template>
  <!-- S 极简分页 -->
  <ul
    v-if="simple"
    class="at-pagination at-pagination--simple"
    :class="{
      [`at-pagination--${size}`]: size
    }">
    <li
      :title="t('at.pagination.prevText')"
      class="at-pagination__prev"
      :class="{
        'at-pagination--disabled': this.currentPage === 1
      }"
      @click="handlePrev">
      <i class="icon icon-chevron-left"></i>
    </li>
    <div class="at-pagination__simple-paging">
      <input type="text" class="at-input__original" :value="currentPage" @keydown="handleKeydown" @keyup="handleKeyup" @change="handleKeyup">
      <span>/</span>
      <span class="at-pagination__paging-total">{{ totalPage }}</span>
    </div>
    <li
      :title="t('at.pagination.nextText')"
      class="at-pagination__next"
      :class="{
        'at-pagination--disabled': this.currentPage === this.totalPage
      }"
      @click="handleNext">
      <i class="icon icon-chevron-right"></i>
    </li>
  </ul>
  <!-- E 极简分页 -->
  <!-- S 基础分页 -->
  <ul
    v-else
    class="at-pagination"
    :class="{
      [`at-pagination--${size}`]: size
    }">
    <span class="at-pagination__total" v-show="showTotal">
      <slot name="total">{{ `${t('at.pagination.total')} ${total} ${t('at.pagination.items')}` }}</slot>
    </span>
    <li
      :title="t('at.pagination.prevText')"
      class="at-pagination__prev"
      :class="{
        'at-pagination--disabled': this.currentPage === 1
      }"
      @click="handlePrev">
      <i class="icon icon-chevron-left"></i>
    </li>
    <template v-if="totalPage < 9">
      <li
        v-for="num in pageRange"
        :key="num"
        class="at-pagination__item"
        :class="{
          'at-pagination__item--active': currentPage === num
        }"
        @click="changePage(num)">{{ num }}</li>
    </template>
    <template v-else>
      <li class="at-pagination__item" :class="{ 'at-pagination__item--active': currentPage === 1 }" @click="changePage(1)">1</li>
      <li class="at-pagination__item at-pagination__item--jump-prev" :title="t('at.pagination.prev5Text')" v-if="currentPage > 4" @click="handleJumpPrev"><i class="icon icon-chevrons-left"></i></li>
      <li class="at-pagination__item" v-if="currentPage > 3" @click="changePage(currentPage - 2)">{{ currentPage - 2 }}</li>
      <li class="at-pagination__item" v-if="currentPage > 2" @click="changePage(currentPage - 1)">{{ currentPage - 1 }}</li>
      <li class="at-pagination__item at-pagination__item--active" v-if="currentPage !== 1 && currentPage !== totalPage">{{ currentPage }}</li>
      <li class="at-pagination__item" v-if="currentPage < totalPage - 1" @click="changePage(currentPage + 1)">{{ currentPage + 1 }}</li>
      <li class="at-pagination__item" v-if="currentPage < totalPage - 2" @click="changePage(currentPage + 2)">{{ currentPage + 2 }}</li>
      <li class="at-pagination__item at-pagination__item--jump-next" :title="t('at.pagination.next5Text')" v-if="currentPage < totalPage - 3" @click="handleJumpNext"><i class="icon icon-chevrons-right"></i></li>
      <li class="at-pagination__item" v-if="totalPage > 1" :class="{ 'at-pagination__item--active' : currentPage === totalPage }" @click="changePage(totalPage)">{{ totalPage }}</li>
    </template>
    <li
      :title="t('at.pagination.nextText')"
      class="at-pagination__next"
      :class="{
        'at-pagination--disabled': this.currentPage === this.totalPage
      }"
      @click="handleNext">
      <i class="icon icon-chevron-right"></i>
    </li>
    <div v-if="showSizer" class="at-pagination__sizer">
      <at-select v-model="currentPageSize" :size="size" @on-change="changeSize">
        <at-option v-for="item in pageSizeOpts" :key="item" :value="item">{{ `${item} ${t('at.pagination.pageSize')}` }}</at-option>
      </at-select>
    </div>
    <div class="at-pagination__quickjump" v-if="showQuickjump">
      <span>{{ t('at.pagination.goto') }}</span>
      <input type="text" class="at-input__original" v-model="jumpPageNum" @keydown="handleKeydown" @keyup.enter="changePage()">
      <span>{{ t('at.pagination.pageText') }}</span>
    </div>
  </ul>
  <!-- E 基础分页 -->
</template>

<script>
  import Locale from 'src/mixins/locale'

  export default {
    name: 'AtPagination',
    mixins: [Locale],
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
        type: String
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
        jumpPageNum: this.current
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
        let num = (page || this.jumpPageNum || 1) | 0
        num = num > this.totalPage ? this.totalPage : num
        num = num < 1 ? 1 : num

        if (this.currentPage !== num) {
          this.jumpPageNum = num
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

        if (key === 40) { // Up Arrow
          this.handlePrev()
        } else if (key === 38) { // Down Arrow
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

