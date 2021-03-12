<template> 
 <h1 class="my-5" > Editar Tarea </h1>
<!-- route parmas captura lo que viene de la url -->
  Editar  {{ $route.params.id }} - {{ tarea }}
  <form @submit.prevent="updateTareas(tarea)">
  <Input :tarea="tarea" />
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Input from '../components/Input'
export default {
    components:{
       Input
    },
    computed : {
        // mapeamos la tarea buscandola
        ...mapState(['tarea'])
    },
     methods : {
    //     ejectamos el metodo editar tareas pasandole el id 
        ...mapActions(['editarTareas','updateTareas'])
    },
    created(){
        // mostramos en la vista la tarea pasada por la url
        this.editarTareas(this.$route.params.id)
    }

}
</script>

<style>

</style>