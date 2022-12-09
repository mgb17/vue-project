<script>
import Pagination from './components/Pagination.vue'
import Products from './components/Products.vue'
import Playground from './components/Playground.vue'

export default {
  components: {
    Pagination,
    Products,
    Playground,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 1st',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
        {
          id: 2,
          title: 'Lorem asdqw ahashdasjd 2nd',
          variant: '2',
          price: '128,99',
          oldPrice: '22,95',
          info: 'mehrere',
        },
        {
          id: 3,
          title: 'Lorem asdqw ahashdasjd 3rd',
          variant: '2',
          price: '128,99',
          oldPrice: '22,95',
          info: 'mehrere',
        },
        {
          id: 4,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 4th',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
        {
          id: 5,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 5th',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
        {
          id: 6,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 6th',
          variant: '2',
          price: '64,99',
          oldPrice: '44,95',
          info: 'wenige',
        },
        {
          id: 7,
          title: 'GARDENA combisystem-Vertikutier-Boy asdasdasd 7th',
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
