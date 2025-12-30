import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView.vue'
import PlaygroundView from '../Views/PlaygroundView.vue'
import NotFoundView from '../Views/NotFoundView.vue'

const routes = [
  {name: 'home', path: '/', component: HomeView},
  {path: '/about', component: AboutView},
  {name: 'playground', path: '/playground/:page', component: PlaygroundView},
  {name: 'NotFound', path: '/:pathMatch(.*)*', component: NotFoundView}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
