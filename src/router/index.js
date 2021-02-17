import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Payments from '../views/Payments.vue'
import Customers from '../views/Customers.vue'
import Subscriptions from '../views/Subscriptions.vue'
import Cancel from '../views/Cancel.vue'
import Success from '../views/Success.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: Subscriptions
  },
  {
    path: '/failed',
    name: 'Cancel',
    component: Cancel
  },
  {
    path: '/success',
    name: 'Success',
    component: Success
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
