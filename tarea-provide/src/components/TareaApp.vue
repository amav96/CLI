<template>
<h1>App de tareas</h1>
 
  <tarea-form/>
  <p>  {{ tareas }} </p>
</template>

<script>
import {ref } from 'vue'
import { provide,inject  } from 'vue'
import TareaForm from './TareaForm.vue'

export default {
  components: { TareaForm },

  setup(){
      const tareas = ref([])

      provide('tareas',tareas)

      return { tareas }
  }

}
</script>

<style>

</style>