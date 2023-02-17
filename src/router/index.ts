import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Contato from '@/views/Contato.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
