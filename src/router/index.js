import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Makanan from '../views/Makanan.vue'
import DetailMakanan from '../views/DetailMakanan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/makanan',
    name: 'Makanan',
    component: Makanan
  },

  {
    path: '/makanan/:id',
    name: 'DetailMakanan',
    component: DetailMakanan,
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
