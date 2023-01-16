<script lang="ts">
import Bookmark from '../icons/Bookmark.vue'
import Product from '../Product/Product.vue'

export default {
  components: {
    Bookmark,
    Product,
  },
  data() {
    return {}
  },
  computed: {
    bookmarks() {
      return this.$store.getters['bookmarks/bookmarks']
    },
  },
  methods: {},
}
</script>

<template>
  <div class="">
    <router-link to="/" class="home">
      <button>Home</button>
    </router-link>
    <div class="title">
      <h2>Wish List</h2>
    </div>
    <div v-show="!bookmarks.length" class="title">
      <h3>There is no item in your wish list!</h3>
    </div>
    <div class="bookmarks">
      <div v-for="product in bookmarks">
        <Product :product="product"></Product>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  button {
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: darkred;
    color: #fff;
    cursor: pointer;
  }
}

.title {
  color: #fff;
  margin: 1rem;
  justify-content: center;
  display: flex;
}

.primary-color {
  color: green;
}

.bookmarks {
  display: grid;
  width: 100%;
  max-width: 1440px;
}

@media (max-width: 559px) {
  .bookmarks {
    grid-template-columns: 100%;
  }
}

@media (min-width: 560px) {
  .bookmarks {
    grid-template-columns: repeat(2, 50%);
  }
}

@media (min-width: 768px) {
  .bookmarks {
    grid-template-columns: repeat(3, 33%);
  }
}

@media (min-width: 1024px) {
  .bookmarks {
    grid-template-columns: repeat(4, 25%);
  }
}
</style>
