import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    tareas : [],
    tarea:{
      id:'',
      nombre: '',
      categorias: [],
      estado : '',
      numero: 0,
    
    }
  },
  mutations: {
    // cargar tareas del local storage
    cargar(state,payload){
       state.tareas = payload
    },

// aqui agrego tareas
    set(state,payload){
      state.tareas.push(payload)
      localStorage.setItem('tareas',JSON.stringify(state.tareas))
    },
    delete(state,payload){

      // filter arma un nuevo array con la condicion que se le indique
      state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
      localStorage.setItem('tareas',JSON.stringify(state.tareas))

    }
    , 
    tarea(state,payload){
       if(!state.tareas.find(tarea => tarea.id == payload)){
        router.push('/')
        return
       }
      // find busca algo dentro del objeto/array
      // devuelve el item y lo almacena en state.tarea
      state.tarea = state.tareas.find(tarea => tarea.id == payload)

    },
    // el peyload es el objeto que viaja desde el form para editar
    update(state, payload){
      // el map nos devuelve un array pero indicandole la condicion que nostros querramos
      state.tareas = state.tareas.map(tarea => tarea.id == payload.id ? payload : tarea)
      // empujamos a la pagina raiz
      router.push('/')
      localStorage.setItem('tareas',JSON.stringify(state.tareas))
    }

  },
  actions: {
    carLocalStorage({commit}){
      if(localStorage.getItem('tareas')){
        
        const tareasLs = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar',tareasLs)
        return

      }
      localStorage.setItem('tareas',JSON.stringify([]))
  },
    //recibe la tarea que lleno el usuario
    // creo un metodo para setear tareas
    setTareas({commit},tarea){

      // viaja la tarea por el commit
      // enviar a una mutacion
      commit('set',tarea)
       
    },
    deleteTareas({commit},id){
      // enviar a una mutacion
      commit('delete',id)

    },
    editarTareas({commit},id){
      // enviar a una mutacion
      commit('tarea',id)
    },
    updateTareas({commit},tarea){
      // enviar a una mutacion
      commit('update',tarea)

    }


  },
  modules: {
  }
})
