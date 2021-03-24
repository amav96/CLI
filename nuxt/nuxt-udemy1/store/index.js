import {db} from '@/plugins/firebase.js'

 
export const state = () => ({
    tareas : '',
    tarea: ''
})

export const mutations = {

    // con las mutaciones llenamos los state

    setTareas(state,payload){

        state.tareas = payload;
      
    },
    setTarea(state, payload){
        state.tareas.push(payload)
    },
    deleteTarea(state, payload){
        // buscamos el index con findIndex 
       const index = state.tareas.findIndex(item => item.id === payload.id);
    //    eliminamos el index con splice, recibe el index y 1 la cantiadad de que queremos eliminar
       state.tareas.splice(index,1)
    },
    updateTarea(state, payload){
        const index = state.tareas.findIndex(item => item.id === payload.id)
        // acceso al index de la tarea que quiero editar
        state.tareas[index].nombre = payload.nombre 
    },
    setTareaIndividual(state,payload){
        state.tarea = payload
    }

}

export const actions = {
    
// solo en nuxtserverinit y fetch retornamos la cosas
    nuxtServerInit({commit}, {req}){
       return db.collection('tareas').get()
          .then(queryData => {
              const tareas = []
              queryData.forEach(element => {
                let tarea = element.data();
                tarea.id = element.id  ;
                tareas.push(tarea)
              });

            return  commit('setTareas', tareas)
          })
            .catch(function(error){
               console.log('Error getting documents: ', error)
           })
    },
    async agregarTarea({commit},payload){
       try {
           const doc = await db.collection('tareas').add({
               nombre: payload,
               fecha: new Date()
           })
         
           commit('setTarea',{nombre: payload, id: doc.id})
           
       } catch (error) {
           console.log(error)
           
       }
    },
    eliminarTarea({commit},payload){
        db.collection('tareas').doc(payload.id).delete().then(function(){
            console.log('Document succesfully deleted!')
            commit('deleteTarea', payload)
        }).catch(function(error){
            console.error("error removing document: ", error)
        })
    },
    editarTarea({commit}, payload){
        db.collection('tareas').doc(payload.id).update({
            nombre: payload.nombre
        })
        .then(()=>{
            console.log('tarea editada')
            commit('updateTarea', payload)
            this.app.router.push('/vuex')
        })
        .catch(e=>{
            console.log(e)
        })
    }


}