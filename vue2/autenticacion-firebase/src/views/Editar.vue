<template>
  
  <div>
     
       {{ tarea.id }} - {{tarea.nombre}} 
       <h1>editar</h1>
       <form  @submit.prevent="editarTarea(tarea)">
           <input type="text" v-model="tarea.nombre">
           <button class="btn btn-danger" type="submit" > Editar</button>
       </form>

  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name:'Editar',
    data(){
        return {
            id: this.$route.params.id
        }
    },
    created(){
        this.getTarea(this.id)
    }
    ,
    computed :{
        ...mapState(['tarea'])
    }
    ,
    methods:{
        ...mapActions(['getTarea','editarTarea'])
    }

}
</script>

<style>

</style>