<script lang="ts">
import Pagination from './components/Pagination.vue'
import Products from './components/Products.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Pagination,
    Products,
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
