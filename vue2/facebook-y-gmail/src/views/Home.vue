<template>
 <v-layout>
   <h1>Bienvenido {{usuario.nombre}}</h1>
 </v-layout>
</template>

<script>
// @ is an alias to /src

import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {

  },
  computed : {
    ...mapState(['usuario'])
  }
}
</script>
