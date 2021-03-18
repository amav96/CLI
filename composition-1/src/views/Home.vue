<template>
  <div class="home">
      <h1
      :style= "{color}"
      >
      Contador: {{ contador }}</h1>
      <button @click="aumentar" >+</button>
      <button @click="disminuir" >-</button>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
 
 
 data(){

   return {

     contador : 0

   }
 },
 computed: {

     color(){
       if(this.contador < 0){

         console.log("rojo")
         return 'red'

       }else{

       console.log("verde")
         return 'green'
       }
     }
   
 },
 methods:{
   aumentar(){
     this.contador ++
   },
   disminuir(){
     this.contador --
   }
 }

}
</script>
