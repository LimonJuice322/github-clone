import { createRouter, createWebHistory  } from 'vue-router'
import Issues from '@/views/Issues';

const routes = [
  {
    path: '/',
    name: 'issues',
    component: Issues
  },
]

const router = createRouter({
  history: createWebHistory() ,
  routes
})

export default router
