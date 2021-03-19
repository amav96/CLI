<template>
<div class="container">

    <h1 class="text-center"> Paises API </h1>
    <Continentes/>
    <Buscador/>
    <CardList/>
  
</div>

</template>

<script>
import CardList from './components/CardList'
import Continentes from './components/Continentes.vue'
import Buscador from './components/Buscador'
export default {
  components:{
    CardList,Continentes,Buscador
  }
}
</script>
