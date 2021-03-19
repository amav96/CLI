<template>
 Hijo Contador : {{ contador }}
</template>

<script>
import { inject } from 'vue'
export default {

setup(){
    const contador = inject('contador')


    return {contador}
}


}
</script>

<style>

</style>