<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item,index) in tareasState" :key="index" > {{ item}}</h2>
   
    <h4>{{ titulo }}</h4>
    <h4>{{ contador }}</h4>
    <button @click="aumentarContador(1)" >+</button>
  </div>
</template>


<script>
import {mapState, mapMutations} from 'vuex'
export default {

  computed : {
    ...mapState('tareas',['tareasState','contador']),
    ...mapState(['titulo']),
    ...mapState('contador',['contador'])
  },
  methods:{
    ...mapMutations('contador',['aumentarContador'])
  }
 
}
</script>
