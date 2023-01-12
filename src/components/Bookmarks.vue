<script lang="ts">
import Bookmark from './icons/Bookmark.vue'
import Product from './Product.vue'

export default {
  components: {
    Bookmark,
    Product,
  },
  data() {
    return {
      bookmarkAdded: false,
    }
  },
  computed: {
    bookmarks() {
      return this.$store.getters['bookmarks/bookmarks']
    },
  },
  methods: {
    editBookmark(product) {
      this.$store.dispatch('bookmarks/editBookmark', {
        product: product,
      })
      ;(this.bookmarkAdded = !this.bookmarkAdded),
        console.log(this.$store.getters['bookmarks/bookmarks'])
    },
  },
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
        <!-- <div class="container-wrapper">
          <div class="container">
            <div class="image-wrapper">
              <img
                class="first-image"
                src="https://res.cloudinary.com/baywa-ag-p/image/upload/A2542940.jpg"
                alt=""
              />
            </div>
            <span class="ribbon">Angebot</span>
            <div class="divider"></div>
            <div class="title-wrapper">
              <h4 class="title">{{ bookmark.title }}</h4>
              <div class="variant">
                  {{ product.variant }} Varianten verfügbar
                </div>
            </div>

            <div class="price">
              <div class="old-price-wrapper">
                <span class="old-price">{{ bookmark.oldPrice }} €</span>
              </div>
              {{ bookmark.price }} € / Stück
            </div>

            <div class="availability">
            </div>
            <div class="buttons">
              <button class="bookmark">
                <Bookmark
                  @click="editBookmark(product)"
                  :class="{ 'primary-color': bookmarkAdded }"
                />
              </button>
              <button class="buy">kaufen</button>
            </div>
          </div>
        </div> -->
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
.container-wrapper {
  margin: 1rem;
  display: flex;
  width: 330px;

  .container {
    background-color: #fff;
    box-shadow: 0px 1rem 0.5rem -1rem gray;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    .image-wrapper {
      position: relative;
      height: 15rem;
      padding: 1rem;

      .first-image {
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: calc(100% - 2rem);
        max-height: calc(100% - 2rem);
        object-fit: contain;
      }
    }

    .ribbon {
      top: 11.5rem;
      right: -0.3rem;
      position: absolute;
      padding: 0.25rem 0.5rem 0.5rem 0.5rem;
      color: #fff;
      background-color: #009650;
      font-weight: bold;
      border-top-right-radius: 0.2rem;
      box-shadow: 0 -5px 0 inset gray;

      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 5px),
        calc(100% - 5px) 100%,
        calc(100% - 5px) calc(100% - 5px),
        0 calc(100% - 5px)
      );
    }

    .divider {
      position: absolute;
      top: 14rem;
      width: 100%;
      height: 1px;
      background-color: #bbb;
    }

    .title-wrapper {
      .title {
        color: #4d4d4d;
        margin: 1rem 2rem 1rem 2rem;
        font-size: 1.1rem;
        word-wrap: break-word;
        height: 7rem;
      }

      .variant {
        margin: 1rem 2rem 0 2rem;
        background-color: lightgray;
        color: gray;
        padding: 0.25rem 2rem 0.25rem 0.25rem;
        font-size: 0.75rem;
      }
    }

    .price {
      padding: 0 2rem;
      font-weight: bold;
      color: #4d4d4d;
      font-size: 1.25rem;
      margin-bottom: 1rem;
      display: flex;

      .old-price-wrapper {
        margin-right: 0.5rem;
        position: relative;
        white-space: nowrap;

        .old-price {
          color: gray;
        }

        .old-price::before {
          content: '';
          position: absolute;
          left: 0;
          width: 100%;
          height: 0;
          display: block;
          border-bottom: 2px solid red;
          top: 50%;
          transform: rotate(348deg);
        }
      }
    }

    .availability {
      margin-bottom: 0.5rem;

      .info {
        margin-bottom: 0.5rem;
        margin-left: 2rem;
        color: gray;
        font-size: 0.75rem;
      }

      .bars {
        display: flex;
        position: relative;

        .bar {
          width: 33%;
          height: 0.75rem;
          background-color: #cddc00;
        }

        .bar::before {
          content: '';
          width: 33%;
          height: 0.75rem;
          position: absolute;
          left: 33.5%;
          background-color: #cddc00;
        }

        .bar::after {
          content: '';
          width: 33%;
          height: 0.75rem;
          position: absolute;
          right: 0;
          background-color: #cddc00;
        }

        // low in store
        &.low .bar {
          background-color: #009650;
        }

        // medium in store
        &.medium .bar,
        &.medium .bar::before {
          background-color: #009650;
        }

        // high in store
        &.high .bar,
        &.high .bar::before,
        &.high .bar::after {
          background-color: #009650;
        }
      }
    }

    .buttons {
      display: flex;
      height: 3rem;

      .bookmark {
        width: 33%;
        border: none;
        cursor: pointer;
      }

      .buy {
        width: 67%;
        border: none;
        background-color: #009650;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

.bookmarks {
  display: flex;
  width: 100vw;
  align-items: stretch;
  flex-wrap: wrap;
}

@media (max-width: 559px) {
  .bookmarks {
    grid-template-columns: 100%;
  }
}

@media (min-width: 560px) {
  .bookmarks {
    grid-template-columns: repeat(2, 49.5%);
  }
}

@media (min-width: 768px) {
  .bookmarks {
    grid-template-columns: repeat(3, 32.5%);
  }
}

@media (min-width: 1024px) {
  .bookmarks {
    grid-template-columns: repeat(4, 24.2%);
  }
}
</style>
