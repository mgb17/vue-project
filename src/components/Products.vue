<script>
import Product from './Product.vue'
import Pagination from './Pagination.vue'

export default {
  components: {
    Product,
    Pagination,
  },
  data() {
    return {
      currentPageNew: '',
      itemsPerPage: 2,
    }
  },
  props: {
    products: Array,
  },
  mounted() {
    this.currentPageNew = this.$refs.pagination.currentPage
    console.log(`from products: ${this.$refs.pagination.currentPage}`)
  },
  computed: {
    currentProducts() {
      return this.products.slice(
        (this.currentPageNew - 1) * this.itemsPerPage,
        this.currentPageNew * this.itemsPerPage,
      )
    },
  },
  watch: {},
}
</script>

<template>
  <div class="products">
    <Product
      :product="product"
      :key="product.id"
      v-for="product in currentProducts"
    />
  </div>

  <Pagination ref="pagination" :products="products" message="hello dotSource" />
</template>

<style scoped>
.products {
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
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
