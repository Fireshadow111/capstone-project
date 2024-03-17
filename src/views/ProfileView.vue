<template>

<navbar/>

<!-- 
<div v-for ="item in users" :key = "item.id" class="justify-content-center" id="profile">
    <div class="card-body">
      <h5 class="card-title">{{ item.user_Name }}</h5>
      <p class="card-text">{{ item.user_Email }}</p>
      <p class="quantity">{{item.user_Role}}</p>
    </div>
  </div> -->
    

</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  components:{
    navbar
  },

  // data(){
  //   return{
  //       user_Name:null,
  //     user_Email:null,
    
  //     user_Role:null,
  //     }
  // },
  // computed: {
  //   getUser(){
  //     this.$store.dispatch('getUser')
  //   },
  // },
  // mounted() {
  //   this.getUser
  // },
}
</script>
<style>
  
</style>