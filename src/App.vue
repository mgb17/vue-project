<script>
import Pagination from './components/Pagination.vue'
import Product from './components/Product.vue'

export default {
  components: {
    Pagination,
    Product,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <Product />
  <Pagination message="hello dotsource" number="17" />

  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <!-- <RouterView /> -->
</template>

<style scoped></style>
