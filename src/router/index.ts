import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/ProductList/ProductList.vue'),
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../components/Bookmarks/Bookmarks.vue'), 
      //his generates a separate chunk (Favorites.[hash].js) for this route which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
