<template>
 <div>
     <h1>Agregar Tarea</h1>

     <form @submit.prevent="agregarTarea(nombre)" class="form-inline">

         <div class="input-group-prepend">
         <label for="">Nombre</label>
         </div>

         <input type="text" v-model="nombre" class="form-control">
         <button class="btn btn-primary" type="submit" >Agregar</button>
     </form>
 </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {

    name:'Agregar',
    data () {
        return {
            nombre: ''
        }
    },
    methods : {
        ...mapActions(['agregarTarea'])
    }

}
</script>

