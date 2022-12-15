<script>
import ArrowLeft from './icons/ArrowLeft.vue'
import ArrowRight from './icons/ArrowRight.vue'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {}
  },
  props: {
    message: String,
    products: Array,
    currentPage: Number,
    totalPageNumber: Number,
  },
  methods: {
    changePage(e) {
      // this.currentPage = parseInt(e.target.innerHTML)
      // console.log(`from pagination: ${this.currentPage}`)
      let clickedPage = parseInt(e.target.innerHTML)
      this.$emit('changePage', clickedPage)
    },
    nextPage() {
      this.$emit('nextPage')
    },
    previousPage() {
      this.$emit('previousPage')
    },
  },
  // emits: ['nextPage', 'previousPage'],

  mounted() {},
  // created() {
  //   this.$emit('changePage', this.currentPage)
  // },
}
</script>

<template>
  <div class="content">Message from pagination is: {{ message }}</div>
  <div class="container">
    <ArrowLeft @click="previousPage" />
    <div class="page-wrapper">
      <div
        v-for="number in totalPageNumber"
        @click="changePage"
        :key="number.id"
        class="page-box"
      >
        <label :class="{ green: number === currentPage }" id="" for="">
          {{ number }}
        </label>
      </div>
    </div>
    <ArrowRight @click="nextPage" />
    <h2 :style="{ color: 'white' }">current page: {{ currentPage }}</h2>
  </div>
</template>

<style scoped>
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
}

div + div {
  margin-left: 1rem;
}

.page-wrapper {
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  align-items: center;
}

.page-box {
  width: 2.75rem;
  height: 2.75rem;
  background-color: gray;
  color: #fff;
  font-size: 1.25rem;
}

.page-box:hover {
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

.green {
  background-color: green;
}
</style>
