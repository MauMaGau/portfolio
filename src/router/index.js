import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView.vue'
import NotFoundView from '../Views/NotFoundView.vue'

const routes = [
  {path: '/', component: HomeView},
  {path: '/about', component: AboutView},
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
