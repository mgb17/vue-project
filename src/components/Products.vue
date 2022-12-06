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
      currentPage: 1,
      itemsPerPage: 2,
    }
  },
  props: {
    products: Array,
  },
  computed: {
    currentProducts() {
      return this.products.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage,
      )
    },
  },
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
