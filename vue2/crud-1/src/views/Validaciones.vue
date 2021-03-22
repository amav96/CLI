<template>
  <div class="mt-5">
      <h1>Vuelidate</h1>

      <form @submit.prevent="submit">

          <input type="email" placeholder="Ingrese mail" class="form-control my-3"
          v-model.lazy="$v.email.$model"
          :class="{'is-invalid': $v.email.$error}"
          >
          <p class="text-danger" v-if="$v.email.$model != '' &&!$v.email.email" > Este email es incorrecto </p>
          <!-- <p class="text-danger" v-if="!$v.email.required" >Campo requerido</p> -->
          
          <input type="password" placeholder="Ingresa contraseña" class="form-control my-3"
          v-model="$v.password.$model"
           :class="{'is-invalid': $v.password.$error}"
          >

           <p class="text-danger" v-if="!$v.password.minLength" > Minimo 6 caracter </p>
         
           <!-- <p>{{ $v.password }}</p> -->


          <input type="password" placeholder="Repite contraseña" class="form-control my-3"
          v-model="$v.repeatPassword.$model"
          :class="{'is-invalid': $v.repeatPassword.$error}"
          >
          <p class="text-danger" v-if="!$v.repeatPassword.sameAsPassword" >Contraseña incorrecta</p>

          <!-- <p>{{ $v.repeatPassword }}</p> -->

          <b-button variant="primary" type="submit" 
          :disabled="$v.$invalid"
          >Enviar</b-button>

          <p>{{ $v.$invalid }}</p>
          <p> {{ $v}}</p>

      </form>
  </div>
</template>

<script>
const { validationMixin, default: Vuelidate } = require('vuelidate')
const { required, minLength, email, sameAs } = require('vuelidate/lib/validators')

export default {
    name: "Validaciones",
    
    data(){
        return {
            email: '',
            password: '',
            repeatPassword: ''
        }
    },
    validations: {

        email:{required,email},
        password: {
            required,
            minLength: minLength(6)
        },
        repeatPassword : {
            sameAsPassword : sameAs('password')
        }
    },
    methods:{
        submit(){

        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
            // this.submitStatus = 'ERROR'
            console.log('se genero un error')
        } else {
           console.log('todos los campos correctos')
           console.log('Enviando informacion' + this.$v.email.$model + ' ' + this.$v.password.$model)
          }
        }
    }

}
</script>

<style>

</style>