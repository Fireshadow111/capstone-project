<template>
 
 <navbar/>


  <router-view/>
</template>

<script>
import navbar from '../src/components/navbar'
import footer from '../src/components/footer' 


export default{

  components:{
    navbar,
    footer
  }
}


</script>


<style>

</style>
