<template>
  <div class="search">
    <input type="text" v-model="search" />
    <!-- <input @keydown.enter="searchList" type="text" v-model="search" /> -->
    <!-- <button @click="searchList">Search</button> -->
    <ul>
      <li>
        {{ filteredList }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      itemList: ['aa', 'bb', 'cc', 'cb'],
      filteredList: '',
    }
  },
  methods: {
    searchList() {
      //   this.filteredList = this.itemList.filter((i) => i.includes(this.search))
    },
  },
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search))
    },
  },
}
</script>

<style>
.search {
  margin: 2rem;
}
</style>
