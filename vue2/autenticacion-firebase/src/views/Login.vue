<template>
   <div>
       <h1>Acceso de usuarios</h1>

       <form @submit.prevent="loginUsuario({email:email, password:pass})">
           <input 
           type="email"
           placeholder="Ingrese email"
           v-model="email"
           >
           <input 
           type="password"
           placeholder="Ingrese contraseña"
           v-model="pass"
           >
           <button> Loguear</button>
       </form>
      <p>{{ error }}</p>
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
     name: 'Login',
     data () {
         return {
             email : '',
             pass : ''
         } 
     },
     computed:{
         ...mapState(['error'])
     },
     methods:{
         ...mapActions(['loginUsuario'])
     }
}
</script>

<style>

</style>