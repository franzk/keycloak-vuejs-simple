// src/router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'
import About from '@/views/About.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => { 
  next();
})

export default router
