<script>
import Pagination from './components/Pagination.vue'

export default {
  components: {
    Pagination,
  },
  data() {
    return {}
  },
}
</script>

<template>
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
