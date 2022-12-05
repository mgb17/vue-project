<script>
import Product from './Product.vue'

export default {
  components: {
    Product,
  },
  props: {
    products: Array,
  },
}
</script>

<template>
  <div class="products">
    <Product :product="product" :key="product.id" v-for="product in products" />
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
