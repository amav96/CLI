<template>
   <h1 class="my-5"> Registro de usuario </h1>
   <form @submit.prevent="procesarFormulario()">
        <input 
        class="form-control my-2"
        type="email"
        placeholder="email"
        v-model.trim="email"
        >

        <input
        class="form-control my-2"
        type="password"
        placeholder="password"
        v-model.trim="pass1"
        >

        <input
        class="form-control my-2"
        type="password"
        placeholder="password"
        v-model.trim="pass2"
        >

        <input
        class=" btn btn-primary my-2"
        type="submit"
        value="Registrar"
        :disabled="bloquear"
         >

   </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {

    data () {
        return {
            email: '',
            pass1: '',
            pass2: '',
        }
    },
    computed:{
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5 && this.pass1 === this.pass2 ){
                return false
            }

            return true
        }
    },
    methods:{
        ...mapActions(['registrarUsuario']),
        procesarFormulario(){
            this.registrarUsuario({email: this.email, password: this.pass1})
            this.email = ''
            this.pass1 = ''
            this.pass2 = ''
        }
    }

}
</script>

<style>

</style>