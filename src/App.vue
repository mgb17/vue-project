<script lang="ts">
import Pagination from './components/Pagination/Pagination.vue'
import ProductList from './components/ProductList/ProductList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Pagination,
    ProductList,
  },
  data() {
    return {}
  },
  // computed: {
  //   products() {
  //     return this.$store.getters['products/products']
  //   },
  // },
})
</script>

<template>
  <router-view v-slot="slotProps">
    <component :is="slotProps.Component"></component>
  </router-view>
</template>
