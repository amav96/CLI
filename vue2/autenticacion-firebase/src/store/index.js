import Vue from 'vue'
import Vuex from 'vuex'

import {auth,db} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario : null,
    error: null,
    tareas : [],
    tarea : {
      nombre:'',
      id:''
    }
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state,payload){
      state.error = payload 
    },
    setTareas(state, payload){
      state.tareas = payload
    },
    setTarea(state,payload){
      state.tarea = payload
    },
    setEliminarTarea(state,payload){
      // filter devuelve segun la condicion que se le indica
         state.tareas = state.tareas.filter(item => item.id !== payload)
    }
  },
  actions: {
    eliminarTarea({commit,dispatch,state},idTarea){
      db.collection(state.usuario.email).doc(idTarea).delete()
         .then(() => {
           console.log('eliminado exitosamente')
          //  el dispatch ejecuta otra accion que tengamos dentro de nuestra acciones
          //  dispatch('getTareas')
          commit('setEliminarTarea',idTarea)
         })
    },
    agregarTarea({commit,state},nombreTarea){
      db.collection(state.usuario.email).add({
        nombre : nombreTarea
      })
      .then(doc => {
        console.log(doc.id)
        router.push('/')
      })
         
    },
    getTarea({commit,state}, idTarea){

      db.collection(state.usuario.email).doc(idTarea).get()
         .then(doc => {
          let tarea = doc.data()
          tarea.id = doc.id 
          commit('setTarea',tarea)
         })

    },
    editarTarea({commit,state},tarea){
      db.collection(state.usuario.email).doc(tarea.id).update({
        nombre: tarea.nombre,
      })
      .then(() => {
        console.log('tarea editada')
        router.push('/')
      })
    },
    getTareas({commit,state}){
      const tareas = []
      db.collection(state.usuario.email).get()
        .then(res => {
          res.forEach(doc => {
            // console.log(doc.id)
            // console.log(doc.data())
            let tarea = doc.data()
            tarea.id = doc.id
            tareas.push(tarea)
          })
          commit('setTareas', tareas)
        })
  },
    crearUsuario({commit}, usuario){
      console.log(usuario)
       auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
           .then(res => {
             console.log(res)
             const usuarioCreado = {
               email: res.user.email,
               uid: res.user.uid
             }

             db.collection(res.user.email).add({
               nombre : 'tarea de ejemplo'
             }).then(doc => {
              commit('setUsuario',usuarioCreado)
              router.push('/')
             })
             .catch(error =>{
               console.log(error)
             })

            
           })
           .catch(error => {
             console.log(error)
             commit('setError',error)
           })
    },
    loginUsuario({commit},usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
         .then(res => {
           console.log(res)
           const usuarioLogueado = {
            email: res.user.email,
            uid: res.user.uid
          }
           commit('setUsuario',usuarioLogueado)
             router.push('/')
         })
         .catch(error => {
           console.log(error)
           commit('setError',error)
         })
    },
    signOut({commit}){
      auth.signOut()
         .then(()=>{
           router.push('/login')
         })
    },
    detectarUsuario({commit}, usuario){
      commit('setUsuario', usuario)
    }

  },
  getters:{
    existeUsuario(state){
      if(state.usuario ===  null){
        return false
      }else {
        return true 
      }
    }
  },
  modules: {
  }
})
