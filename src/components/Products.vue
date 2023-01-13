<script lang="ts">
import Product from './Product.vue'
import Pagination from './Pagination.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Product,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
    }
  },
  computed: {
    products() {
      return this.$store.getters['products/products']
    },
    visibleProducts() {
      if (this.products) {
        return this.products.slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage,
        )
      }
    },
    totalPageNumber() {
      if (this.products) {
        return Math.ceil(this.products.length / this.itemsPerPage)
      }
    },
  },
  created() {},
  watch: {},
  methods: {
    changePage(page: number) {
      this.currentPage = page
    },
  },
})
</script>

<template>
  <div class="products">
    <Product :product="item" :key="item.code" v-for="item in visibleProducts" />
  </div>

  <div class="wish-list">
    <router-link to="/favorites">
      <button>Favorites</button>
    </router-link>
  </div>

  <Pagination
    @changePage="changePage"
    :currentPage="currentPage"
    :totalPageNumber="totalPageNumber"
    :products="products"
  ></Pagination>
</template>

<style lang="scss" scoped>
.products {
  display: grid;
  width: 100%;
  max-width: 1440px;
  align-items: stretch;
  flex-wrap: wrap;
}

.wish-list {
  margin: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  button {
    background-color: darkred;
    padding: 0.5rem;
    border-radius: 1rem;
    color: #fff;
    cursor: pointer;
  }
}

@media (max-width: 559px) {
  .products {
    grid-template-columns: 100%;
  }
}

@media (min-width: 560px) {
  .products {
    grid-template-columns: repeat(2, 50%);
  }
}

@media (min-width: 768px) {
  .products {
    grid-template-columns: repeat(3, 33%);
  }
}

@media (min-width: 1024px) {
  .products {
    grid-template-columns: repeat(4, 25%);
  }
}
</style>
