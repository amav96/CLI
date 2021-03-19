<template>

  <div class="row">
      <div 
       class="col-12"
       v-for="pais in paises" :key="pais.name"
       
      >
      
       <Card :pais="pais" /> 
      </div>
  </div>

</template>

<script>
import { computed, onMounted } from 'vue'
// con useSotre podemos acceder a nuestra tienda
import { useStore } from 'vuex'
import Card from '../components/Card'
export default {

components:{
 Card
},
    setup(){
        // setup ejecuta ciclo vida created()

        const store = useStore()

        const paises = computed( () => {
            return store.getters.topPaisesPoblacion
        })


        onMounted(async () => {
            // para ejectuar una actions del sotre/tienda. Usamos el dispatch
           await store.dispatch('getPaises')
           await store.dispatch('filtrarRegion','Americas')
            

        })

        return {paises}

    }

}
</script>

<style>

</style>