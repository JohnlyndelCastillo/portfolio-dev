import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Johnlyn del Castillo — Software QA Engineer' },
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue'),
      meta: { title: 'Resume — Johnlyn del Castillo' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        top: 88,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title

  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) {
    canonical.href = `https://johnlyndc.vercel.app${to.path === '/' ? '/' : to.path}`
  }
})

export default router
