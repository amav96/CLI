<template>
  <div>
      <h1>Ruta protegida</h1>
      <p>{{usuario.email}}</p>
      <router-link to="/agregar" >
          <button class="btn btn-success btn-block" >Agregar</button>
    </router-link>

      <ul class="list-group mt-5">
        <li class="list-group-item"
        v-for="(item, index) in tareas" :key="item.id">
          {{ item.nombre }} - {{ item.id}}
          <router-link :to="`editar/${item.id}`" >
            <button  class="btn btn-warning btn-sm mr-2" > Editar </button>
          </router-link>
           <button  @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm" > Eliminar </button>
        </li>
      </ul>

  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    
        name:'Inicio',
        created() {
           this.getTareas()
        },
        computed : {
          ...mapState(['usuario','tareas'])
        },
        methods:{
          ...mapActions(['getTareas','eliminarTarea'])
        }

}
</script>

<style>

</style>