import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: function () {
      return import('../views/SignupView.vue')
    }
  },
  {
    path: '/buy',
    name: 'buy',
    component: function () {
      return import('../views/BuyView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/AdminView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
