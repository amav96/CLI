<template>
  <div class="container">
      <div class="card">
        <div class="card-body">
          <h1>{{ articulo.title }}</h1>
          <p class="small">{{ articulo.nombreAutor }}</p>
          <p>{{ articulo.body }}</p>
          <nuxt-link to="/blog"  class="btn btn-primary">Atras </nuxt-link>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data () {
    return {
      
    }
  },
  async asyncData({params,res}){

    
    try {

      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

      const articulo =  res.data
        
      const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
  
     
      articulo.nombreAutor = resAutor.data.name
        
        return {articulo }

    } catch (error) {
       console.log(error)
       return {error: error}
    }
    

  }


}
</script>

<style>

</style>