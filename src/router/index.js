import { createRouter, createWebHistory } from 'vue-router'
import ChatApp from '../views/ChatApp.vue'
import Display from '../views/Display.vue'

const routes = [
  {
    path: '/ChatApp',
    name: 'ChatApp',
    component: ChatApp
  },
  {
    path: '/',
    name: 'Display',
    component: Display
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
