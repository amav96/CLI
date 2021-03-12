<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Numero</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="tarea in tareas" :key="tarea.id" >
      <th scope="row">{{ tarea.id}}</th>
      <td>{{ tarea.nombre}}</td>
      <td> 
          <span v-for="(cat, index) in tarea.categorias" :key="index">
              {{ cat }}

              {{
                   (tarea.categorias.length === index + 1) ? '' : ', '
                    
              }}
          </span>
      </td>
      <td>{{ tarea.estado}}</td>
      <td>{{ tarea.numero}}</td>
      <td>
          <button class="btn btn-danger btn-sm" @click="deleteTareas(tarea.id)" >
              Eliminar
          </button>
          <router-link
          class="btn btn-warning btn-sm ml-2"
          :to="{
              name: 'Editar',
              params: {
                  id: tarea.id
              }
          }"
          >
           Editar
          </router-link>
       </td>
      
    </tr>
   
  </tbody>
</table>
  
</template>

<script>
import {mapState , mapActions} from 'vuex'
export default {

       computed : {
        //    mapeo al vuex, siempre en computed e ingresa a las mutaciones de vuex
           ...mapState(['tareas']),
          
       },
       methods :{
        //    mapea acciones, actiones de vuex
            ...mapActions(['deleteTareas'])
       }
}
</script>
