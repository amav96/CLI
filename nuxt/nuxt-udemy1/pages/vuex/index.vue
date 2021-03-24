<template>
    <div class="container">
        <h2>Vuex</h2>

        <form @submit.prevent="agregarTarea(tarea)">

            <input type="text" class="form-control mb-2" v-model="tarea">
            <button type="submit"  >Agregar</button>

        </form>

        <ul>
            <li v-for="(item,index) in tareas" :key="index">
                {{ item.id }} - {{ item.nombre }}
                <nuxt-link 
                class="btn-sm btn-warning"
                :to="`/vuex/${item.id}`"
                 >Editar</nuxt-link>
                <button 
                class="btn-sm btn-danger"
                @click="eliminarTarea(item)"
                >Eliminar</button>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>
import {db} from '@/plugins/firebase.js'
import { mapState, mapActions } from 'vuex'
export default {

// con el fecth hacemos llamado directamente a nuestra tienda en esta ocacion
    // fetch({store}){

    //    return  db.collection('tareas').get()
    //       .then(query => {
    //           const tareas = []
    //           query.forEach(element => {
    //               tareas.push(element.data())
    //           });
    //           return   store.commit('setTareas',tareas)
    //       })
    //       .catch(function(error){
    //           console.log('Error getting documents: ', error)
    //       })
    // }

    computed: {
       ...mapState(['tareas'])
    },
    methods : {
        ...mapActions(['agregarTarea','eliminarTarea'])
    },
    data(){
        return{
            tarea:''
        }
    }

}
</script>

<style>

</style>