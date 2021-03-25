<template>
  <div class="about">
    <h1>Inicio</h1>
  
    <router-link to="/agregar" >
          <button class="btn btn-success btn-block" >Agregar</button>
    </router-link>

    <ul class="list-group mt-5">
      <li class="list-group-item"
       v-for="(item, index) in tareas" :key="item.id">
        {{ item.nombre }} - {{ item.id}}
        <div class="float-right">

          <router-link :to="`editar/${item.id}`" >
            <button  class="btn btn-warning btn-sm mr-2" > Editar </button>
          </router-link>
        <button  @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm" > Eliminar </button>

        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'Inicio',
  data (){
    return {

    }
  },
created(){
    this.getTareas()
},
computed:{
  ...mapState(['tareas'])
},
  methods: {
    ...mapActions(['getTareas','eliminarTarea'])
  }
}

</script>
