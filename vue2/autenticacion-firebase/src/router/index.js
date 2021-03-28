import Vue from 'vue'
import VueRouter from 'vue-router'

import {auth} from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    meta: {requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  },
  {
    path: '/agregar',
    name: 'Agregar',
    meta: {requiresAuth: true},
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {

  if(to.matched.some(record => record.meta.requiresAuth)){

     const usuario = auth.currentUser
     
     console.log('usuario desde router: ',usuario)

     if(!usuario){
         next({path:'/login'})
     }else{
       next()
     }
  }else{
    next()
  }

})

export default router
