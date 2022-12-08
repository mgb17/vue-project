<script>
import ArrowLeft from './icons/ArrowLeft.vue'
import ArrowRight from './icons/ArrowRight.vue'

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      totalPageNumber: Math.ceil(this.products.length / 2),
      currentPage: 1,
    }
  },
  props: {
    message: String,
    products: Array,
  },
  methods: {
    changePage(e) {
      this.currentPage = parseInt(e.target.innerHTML)
      console.log(`from pagination: ${this.currentPage}`)
    },
    previousPage() {
      if (this.currentPage !== 1) {
        return this.currentPage--
      }
    },
    nextPage() {
      if (this.totalPageNumber > this.currentPage) {
        return this.currentPage++
      }
    },
  },
  mounted() {},
  // emits: ['changePage'],
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
      <div v-for="item in totalPageNumber" :key="item.id" class="page-box">
        <input type="radio" id="box-1" name="number" checked />
        <label @click="changePage" id="asd" for="box-1">{{ item }}</label>
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

input {
  position: absolute;
  opacity: 0;
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

input:checked ~ label {
  background-color: green;
}
</style>
