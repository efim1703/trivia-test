import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/Index.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('@/views/Company/Index.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/Users/Index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
