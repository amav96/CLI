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
    
    },
    user: null
  },
  mutations: {
    setUser(state,payload){

      state.user = payload

    },
    // cargar tareas del local storage
    cargar(state,payload){
       state.tareas = payload
    },

// aqui agrego tareas
    set(state,payload){
      state.tareas.push(payload)
   
    },
    delete(state,payload){

      // filter arma un nuevo array con la condicion que se le indique
      state.tareas = state.tareas.filter(tarea => tarea.id !== payload)
     
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
      
    }

  },
  actions: {
   async registrarUsuario({commit},usuario){

      try {
         
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8pjOXafRs-xrWHPEhlLfjAjTmEC7UGzU',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        console.log(userDB)

        if(userDB.error){
          console.log(userDB.error)
          return
        }

        commit('setUser', userDB)

      } catch (error) {
        console.log(error)
      }

    },
   async  getData({commit}){
     try {

      const res = await fetch(`https://udemy-curso-7ad1c-default-rtdb.firebaseio.com/tareas.json`)
      // es GET por defecto
      const dataDB = await res.json()

      const arrayTareas = []

      for(let id in dataDB){
        arrayTareas.push(dataDB[id])
      }
      
      commit('cargar',arrayTareas)
       
     } catch (error) {
        console.log(error) 
     }
       
     
  },
    //recibe la tarea que lleno el usuario
    // creo un metodo para setear tareas
    async setTareas({commit},tarea){

      try {
        const res =  await fetch(`https://udemy-curso-7ad1c-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
           method: 'PUT',
           headers:{
              'Content-Type': 'application/json'
           },
           body: JSON.stringify(tarea)
         })

         const dataDB =  await res.json()
         console.log(dataDB)
        
      } catch (error) {
        console.log(error)
      }

      // viaja la tarea por el commit
      // enviar a una mutacion
      commit('set',tarea)
       
    },
    async deleteTareas({commit},id){

      try {
        await fetch(`https://udemy-curso-7ad1c-default-rtdb.firebaseio.com/tareas/${id}.json`,{
          method: 'DELETE'
        })

        // enviar a una mutacion
        commit('delete',id)
        
      } catch (error) {
        console.log(error)
      }
     

    },
    editarTareas({commit},id){
      // enviar a una mutacion
      commit('tarea',id)
    },
    async updateTareas({commit},tarea){

      try {
        const res = await fetch(`https://udemy-curso-7ad1c-default-rtdb.firebaseio.com/tareas/${tarea.id}.json`,{
          method : 'PATCH',
          body: JSON.stringify(tarea)
        })
        const dataDB = await res.json()

       // enviar a una mutacion
       commit('update',tarea)
        
      } catch (error) {
        console.log(error)
      }
     

    }


  },
  modules: {
  }
})
