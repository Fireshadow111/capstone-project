import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'
import ContactView from '../views/ContactView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AdminView from '../views/AdminView.vue'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },

  {
    path: '/products/:id',
    name: 'product',
    component: ProductView
  },

  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },

  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },

  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },

  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
