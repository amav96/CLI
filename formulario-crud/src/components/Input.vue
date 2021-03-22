<template>
   <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese Nombre"
    v-model.trim="tarea.nombre"
   />
<!-- primer check -->
<div class="form-check form-check-inline">
  <input
   id="check-1"
   type="checkbox"
   class="form-check-input"
   v-model.trim="tarea.categorias"
   value="javascript"
  />
  <label class="form-check-label" for="check-1">Javascript</label>

</div>
<!-- segunda check -->

<div class="form-check form-check-inline">
  <input
   id="check-2"
   type="checkbox"
   class="form-check-input"
   v-model="tarea.categorias"
   value="NodeJs"
  />
  <label class="form-check-label" for="check-2">NodeJs</label>

</div>

<!-- tercer radio -->

<div class="mt-2">

      <div class="form-check form-check-inline">
        
        <input
        type="radio"
        id="radio-1"
        class="form-check-input"
        value="urgente"
        v-model="tarea.estado"
        />
        <label class="form-check-label"  for="radio-1" > Urgente</label>

    </div>

<!-- cuarto radio -->

    <div class="form-check form-check-inline">
    
      <input
      type="radio"
      id="radio-2"
      class="form-check-input"
      value="relax"
      v-model="tarea.estado"
      />
      <label class="form-check-label"  for="radio-2" > Relax</label>

    </div>

</div>

<!-- quinta seccion -->

<div class="mt-2">
    <div class="form-check form-check-inline">
      <input
      class="form-control my-2"
      type="number"
      v-model.number="tarea.numero"
      />
    </div>

</div>

  <button  
  class="btn btn-success mt-2 btn-block"
  :disabled="bloquear"
  >
  Procesar
  </button>

</template>

<script>

const { validationMixin, default: Vuelidate } = require('vuelidate')
const { required, minLength } = require('vuelidate/lib/validators')

export default {
    props : {
        tarea: Object
    },
    computed: {
        bloquear () {
        return this.tarea.nombre.trim() === '' ? true : false 
        }
    }

}

</script>

