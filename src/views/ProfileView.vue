<template >

<navbar/>

<div class="container text-center">
      <div class="row align-items-center">
        <div id="profile-head" class = "mb-5 mt-5">
          <h1 id = "profileDrag">Profile</h1>
          </div>

          </div>
          </div>



          <div id = "user-background">
          <input type="text"  placeholder="Username" class="input" v-model="user_Name" required>
          <input type="text" placeholder="Email" class="input" v-model="user_Email" required>
          <input type="text" placeholder="Password" class="input" v-model="user_Pass" required>
          <input type="text" placeholder="Role" class="input" v-model="user_Role" required>
        </div>


        


  
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  components:{
    navbar
  }
}
</script>
<style scoped>

#profileDrag{

color: #e10800;
font-weight: bolder;
font-family: "Montserrat";
font-size: 60px;

}

#profile-head {
  background-color: black;
  color: white;
  border: 5px solid #e10800;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;

}



input.input {
  width: 50%;
  height: 40px;

  margin-bottom: 15px;
  border: 1px solid #e10800;
  border-radius: 5px;
  background: transparent;
  color: white;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border-radius: 30px;
}
  
</style>