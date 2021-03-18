<template>
  <h1> contador: {{ contador }} </h1>
   <Btn :textoBoton="'Aumentar'"  @accion="aumentar" />
   <Btn :textoBoton="'Disminuir'"  @accion="disminuir" />

</template>

<script>
import Btn from '../components/Btn'
import {useContador} from '../hooks/useContador'

export default {
components:{
    Btn
},
    setup(){
        return {...useContador()}
    }

}
</script>

<style>

</style>