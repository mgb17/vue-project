<script lang="ts">
import Product from './Product.vue'
import Pagination from './Pagination.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Product,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 2,
    }
  },
  props: {
    products: Object,
  },
  computed: {
    visibleProducts() {
      if (this.products) {
        return this.products.slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage,
        )
      }
    },
    totalPageNumber() {
      if (this.products) {
        return Math.ceil(this.products.length / this.itemsPerPage)
      }
    },
  },
  created() {},
  watch: {},
  methods: {
    changePage(page: number) {
      this.currentPage = page
    },
  },
})
</script>

<template>
  <div class="products">
    <Product :product="item" :key="item.code" v-for="item in visibleProducts" />
  </div>

  <Pagination
    @changePage="changePage"
    :currentPage="currentPage"
    :totalPageNumber="totalPageNumber"
    :products="products"
  ></Pagination>
</template>

<style scoped>
.products {
  display: flex;
  width: 100vw;
  align-items: stretch;
  flex-wrap: wrap;
}

@media (max-width: 559px) {
  .products {
    grid-template-columns: 100%;
  }
}

@media (min-width: 560px) {
  .products {
    grid-template-columns: repeat(2, 49.5%);
  }
}

@media (min-width: 768px) {
  .products {
    grid-template-columns: repeat(3, 32.5%);
  }
}

@media (min-width: 1024px) {
  .products {
    grid-template-columns: repeat(4, 24.2%);
  }
}
</style>
