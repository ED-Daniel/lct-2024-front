import { createRouter, createWebHistory } from 'vue-router'
import MainPageViewVue from '@/views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPageViewVue
    }
  ]
})

export default router
