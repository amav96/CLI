import Vue from 'vue'
import VueRouter from 'vue-router'

import { auth } from '@/firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/ingreso',
    name: 'Ingreso',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue'),
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes 
})

router.beforeEach((to,from,next) => {

  const user = auth.currentUser

  if(to.matched.some(record => record.meta.requiresAuth)){

      if(user){
        next()
      }else{
          next({path:'/ingreso'})
      }
  }else{
    next()
  }
})

export default router
