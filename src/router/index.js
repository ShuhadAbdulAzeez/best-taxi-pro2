import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tours from '../views/Tours.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/tours', name: 'Tours', component: Tours },
]

const router = createRouter({
  history: createWebHistory('/best-taxi-pro2/'),
  routes: [
    {path: '/', name: 'Home', component: Home },
    {path: '/tours', name: 'Tours', component: Tours },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router


