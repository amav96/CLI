<template>
<h1>App de tareas</h1>
 
  <tarea-form/>
  <p>  {{ tareas }} </p>

  <tarea-item
    v-for="tarea in tareas" :key="tarea.id"  
    :tarea="tarea"
  />

  <div class="alert alert-dark" v-if="tareas.length == 0">
      Sin tareas pendientes 😍
  </div>
</template>

<script>
import {ref, watchEffect } from 'vue'
import { provide,inject  } from 'vue'
import TareaForm from './TareaForm.vue'
import TareaItem from './TareaItem.vue'

export default {
  components: { TareaForm, TareaItem },

  setup(){
    // el setup viene por defecto con el metodo create (ciclo de vida)

      const tareas = ref([])

      provide('tareas',tareas)


      if(localStorage.getItem('tareas')){
        tareas.value = JSON.parse(localStorage.getItem('tareas'))
      }

      watchEffect(()=>{
        localStorage.setItem('tareas', JSON.stringify(tareas.value))
      })

      return { tareas }
  }

}
</script>

<style>

</style>