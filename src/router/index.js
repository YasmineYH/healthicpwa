import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ourdoctors',
    name: 'ourdoctors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OurDoctorsView.vue')
  },
  {
    path: '/scheduleappointment',
    name: 'scheduleappt',
    component: () => import(/* webpackChunkName: "about" */ '../views/ScheduleApptView.vue')
  },
  {
    path: '/maternitypages/:pageId',
    name: 'maternitypages',
    component: () => import(/* webpackChunkName: "about" */ '../views/MaternityPagesView.vue')
  },
  {
    path: '/authentication/:authId',
    name: 'authentication',
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
