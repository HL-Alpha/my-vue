import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/myPage',
      name: 'my-page',
      component: () => import('@/views/01-myPage.vue'),
    },
    {
      path: '/routerQuery',
      name: 'router-query',
      component: () => import('@/views/01-routerQuery.vue'),
    },
    {
      path: '/routerParams/:id/:category',
      name: 'router-params',
      component: () => import('@/views/01-routerParams.vue'),
    },
    {
      path: '/lv1',
      name: 'lv1',
      children: [
        {
          // 注意這邊的 path 不需要加 /
          path: 'page',
          name: 'lv1-page',
          component: () => import('@/views/01-nested.vue'),
        },
      ],
    },
    {
      path: '/hook',
      name: 'hook',
      component: () => import('@/views/02-hook.vue'),
    },
    {
      path: '/variable',
      name: 'variable',
      component: () => import('@/views/03-variable.vue'),
    },
    {
      path: '/dataBinding',
      name: 'data-binding',
      component: () => import('@/views/04-dataBinding.vue'),
    },
    {
      path: '/condition',
      name: 'condition',
      component: () => import('@/views/05-condition.vue'),
    },
    {
      path: '/loop',
      name: 'loop',
      component: () => import('@/views/06-loop.vue'),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/views/07-event.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('@/views/08-computed.vue'),
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('@/views/09-watch.vue'),
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('@/views/10-component.vue'),
    },
    {
      path: '/env',
      name: 'env',
      component: () => import('@/views/11-env.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/12-pinia.vue'),
    },
    {
      path: '/pinia2',
      name: 'pinia2',
      component: () => import('@/views/12-pinia2.vue'),
    },
    {
      path: '/axios',
      name: 'axios',
      component: () => import('@/views/13-axios.vue'),
    },

    // 404 頁面
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/01-notFound.vue'),
    },
  ],
})

export default router
