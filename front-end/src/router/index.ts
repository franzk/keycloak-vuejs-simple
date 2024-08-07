// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home, name: 'home' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => { 
  next();
})

export default router
