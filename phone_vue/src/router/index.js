import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import HomeView from '../views/HomeView.vue'
import ProductItem from '@/views/ProductItem.vue'
import CategoryDetail from '@/views/CategoryDetail.vue'
import SearchProduct from '@/views/SearchProduct.vue'
import CartView from '@/views/CartView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import MyAccount from '../views/MyAccount.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import SuccessView from '@/views/SuccessView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/:category_slug/:product_slug',
    name: 'ProductItem',
    component: ProductItem
  },
  {
    path: '/:category_slug',
    name: 'CategoryDetail',
    component: CategoryDetail
  },
  {
    path: '/search',
    name: 'SearchProduct',
    component: SearchProduct
  },
  {
    path: '/CartView',
    name: 'CartView',
    component: CartView
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },
  {
    path: '/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/cart/checkout',
    name: 'CheckoutView',
    component: CheckoutView,
    meta: {
        requireLogin: true
    }
  },
  {
    path: '/cart/success',
    name: 'SuccessView',
    component: SuccessView,
    meta: {
        requireLogin: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'LogIn', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
