<template>
  <button @click="accionHijo" > {{ textoBoton }} </button>
</template>

<script>
export default {
      props: ['textoBoton'],
      setup(props,context){
          const accionHijo = () => {

            //    accedo a la accion del componente padre 
            // con context
               context.emit('accion')

            // //    accion es el @ que esta en el componente padre y lo paso como propiedad

          }

          return {accionHijo}
      }
}
</script>

<style>

</style>