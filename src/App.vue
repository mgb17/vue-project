<script lang="ts">
import Pagination from './components/Pagination.vue'
import Products from './components/Products.vue'
import Playground from './components/Playground.vue'
import Search from './components/Search.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Pagination,
    Products,
    Playground,
    Search,
  },
  data() {
    return {}
  },
  computed: {
    products() {
      return this.$store.getters['products/products']
    },
  },
})
</script>

<template>
  <Products :products="products" />
</template>
