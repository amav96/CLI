import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// importo la tienda para hacer uso de sus propiedades y metodos
import store from '../store'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {rutaProtegida: true}
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    meta: {rutaProtegida: true},

    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  },
  {
    path: '/registro',
    name: 'Registro',

    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/ingreso',
    name: 'Ingreso',

    component: () => import(/* webpackChunkName: "about" */ '../views/Ingreso.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // to : para acceder al meta 
  // next : decirle al usuario que si esta registrado puede acceder a la ruta
  // beforeEach hace un recorrido por cada una de las rutas
  // console.log(to.meta.rutaProtegida)
  if(to.meta.rutaProtegida){
     if(store.getters.usuarioAutenticado){
      //  si esta autenticado...siga adelante
       next()
     }else{
      //  si no, chau
       next('/ingreso')
     }
  }else{
    // si no es protegida siga con su accionar normal 
    next()
  }

})

export default router
