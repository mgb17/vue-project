<script lang="ts">
import ArrowLeft from './icons/ArrowLeft.vue'
import ArrowRight from './icons/ArrowRight.vue'
import { defineComponent } from 'vue'
// import type { PropType } from 'vue'

// interface totalPageNumber {
//   id: Number
// }

export default defineComponent({
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {}
  },
  props: {
    currentPage: Number,
    totalPageNumber: Number,
    // totalPageNumber: {
    //   type: Number as PropType<totalPageNumber>,
    // },
  },
  methods: {
    changePage(e) {
      // this.currentPage = parseInt(e.target.innerHTML)
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
        // console.log(this.currentPage++)
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
  // created() {
  //   this.$emit('changePage', this.currentPage)
  // },
})
</script>

<template>
  <div class="container">
    <ArrowLeft @click="previousPage" />
    <div class="page-wrapper">
      <div v-for="n in totalPageNumber" @click="changePage" class="page-box">
        <label :class="{ 'primary-color': n === currentPage }" id="" for="">
          {{ n }}
        </label>
      </div>
    </div>
    <ArrowRight @click="nextPage" />
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
