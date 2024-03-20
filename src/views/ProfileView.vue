<template>
  <navbar/>
  <!-- <div class="d-flex">
    <div v-for="user in $store.state.user" :key="user.userID" class="col-md-6 justify-content-center" id="profile">
      <div class="card-body">
        <h5 class="card-title">{{ user.user_Name }}</h5>
        <p class="card-text">{{ user.user_Email }}</p>
        <p class="card-text">{{ user.user_Role }}</p>
        <p class="quantity">{{user.user_Pass}}</p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">firstName</label>
        <input v-model="firstName" type="email" class="form-control" id="exampleFormControlInput1" placeholder="firstName">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">lastName</label>
        <input v-model="lastName" type="email" class="form-control" id="exampleFormControlInput1" placeholder="lastName">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">userRole</label>
        <input v-model="userRole" type="email" class="form-control" id="exampleFormControlInput1" placeholder="userRole">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">emailAdd</label>
        <input v-model="emailAdd" type="email" class="form-control" id="exampleFormControlInput1" placeholder="emailAdd">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" placeholder="Password" class="form-label">Password</label>
        <input v-model="Password" class="form-control" id="exampleFormControlTextarea1" rows="1"></input>
      </div>
      <div class="d-flex justify-content-center"><button @click="editUserProfile">Edit</button></div>
    </div>
  </div> -->
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  components:{
    navbar
  },
  data() {
    return {
      user_Name:null,
      user_Email:null,
      user_Pass:null,
      user_Role:null,
    }
  },
  computed: {
    getUser(){
      this.$store.dispatch('getUser')
    },
    editUserProfile(){
      let edit = {
        
      user_Name: this.user_Name,
     user_Email: this.user_Email,
      user_Pass: this.user_Pass,
      user_Role: this.user_Role,
      }
      console.log(this.$data);
      this.$store.dispatch('editUserProfile',edit)
    }
  },
  mounted() {
    this.getUser
  }
}
</script>
<style>
    
</style>