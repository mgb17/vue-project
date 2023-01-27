<script lang="ts">
import ArrowLeft from '../icons/ArrowLeft.vue'
import ArrowRight from '../icons/ArrowRight.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      middlePages: 3,
      counter: 0,
    }
  },
  props: {
    currentPage: Number,
    totalPageNumber: Number,
  },
  computed: {
    pages() {
      if (this.totalPageNumber && this.currentPage) {
        // limitations: showedPages, add at least +1,
        const showedPages = Math.min(this.middlePages, this.totalPageNumber - 2) // except for 1st and last page, limit max page number

        let add = this.currentPage - Math.ceil(showedPages / 2) // distance to current page to update pages (add to 1)
        // ceil to have current page in the middle

        add = Math.max(add, 1) // at least +1

        add = Math.min(add, this.totalPageNumber - 1 - showedPages) //for higher current page numbers => add max (total - showedPages)

        // console.log(add)
        // return array from the number of elements as numbers in showedPages with spread operator.
        // console.log([...Array(showedPages)]);
        return [...Array(showedPages)].map((n, i) => i + 1 + add) //spread operator
        // +1 for skipping 0 => starting from 1
      }
    },
  },
  methods: {
    changePage(e) {
      let clickedPage = parseInt(e.target.innerHTML)
      this.$emit('changePage', clickedPage)
    },
    nextPage() {
      // typeof this.totalPageNumber === 'Number'
      if (
        this.totalPageNumber &&
        this.currentPage &&
        this.totalPageNumber > this.currentPage
      ) {
        let page = this.currentPage + 1
        this.$emit('changePage', page)
        return this.counter++
      }
    },
    previousPage() {
      if (this.currentPage && this.currentPage !== 1) {
        let page = this.currentPage - 1
        this.$emit('changePage', page)
      }
    },
  },

  mounted() {},
})
</script>

<template>
  <div class="container">
    <a href="">Counter is: {{ counter }}</a>
    <ArrowLeft @click="previousPage" />
    <button>click me</button>
    <div class="page-wrapper">
      <div @click="changePage" class="page-box" for="">
        <label :class="{ 'primary-color': currentPage === 1 }" for="">
          {{ 1 }}
        </label>
      </div>
      <div v-for="n in pages" @click="changePage" class="page-box">
        <label
          data-type="page"
          :class="{ 'primary-color': n === currentPage }"
          id=""
          for=""
        >
          {{ n }}
        </label>
      </div>
      <div @click="changePage" class="page-box" for="">
        <label
          :class="{ 'primary-color': currentPage === totalPageNumber }"
          for=""
        >
          {{ totalPageNumber }}
        </label>
      </div>
    </div>
    <ArrowRight data-type="increment" @click="nextPage"></ArrowRight>
  </div>
</template>

<style lang="scss" scoped>
.content {
  color: #fff;
  font-weight: 600;
}

.arrow-left,
.arrow-right {
  color: green;
  cursor: pointer;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  .page-wrapper {
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
    align-items: center;

    .page-box + .page-box {
      margin-left: 1rem;
    }

    .page-box {
      width: 2.75rem;
      height: 2.75rem;
      background-color: gray;
      color: #fff;
      font-size: 1.25rem;

      &:hover {
        background-color: green;
      }

      label {
        width: 2.75rem;
        height: 2.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .primary-color {
        background-color: green;
      }
    }
  }
}
</style>
