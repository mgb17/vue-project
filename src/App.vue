<script>
import Pagination from './components/Pagination.vue'
import Products from './components/Products.vue'

export default {
  components: {
    Pagination,
    Products,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
        {
          id: 2,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
        {
          id: 3,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
        {
          id: 4,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
      ],
    }
  },
}
</script>

<template>
  <Products :products="products" />
  <Pagination message="hello dotsource" number="17" />
</template>

<style scoped></style>

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
