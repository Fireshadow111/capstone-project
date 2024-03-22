<template >
<navbar/> 
<center>
<div>

  <div class="container text-center">
      <div class="row align-items-center">
        <div id="profile-head" class = "mt-5 mb-5">
          <h1 id = "profileDrag">User Profile</h1>
          </div>

          </div>
          </div>

          <h1 id = "input-head">Messege to all users!</h1>
          <p class = "mb-5" id = "input-text">Input your new information into the fields then hit edit </p>

  <div class="container text-center">

   
    <div class="tables">
        <table class="table table-striped table-bordered table-hover table-checkable order-column dataTable table-dark">
        <thead><tr>
          <th class = "text-center" style = "color:#e10800;">ID</th>
          <th class = "text-center" style = "color:#e10800;">Username</th>
          <th class = "text-center" style = "color:#e10800;">Email</th>
          <th class = "text-center" style = "color:#e10800;">Password</th>
          <th class = "text-center" style = "color:#e10800;">Role</th>
   
          
          </tr></thead>
          <tbody>
            <tr v-for ="item in $store.state.user" :key = "item.id">
              <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.user_ID}}</td>
                <td class = "text-center" style="color: white;border: solid 3px #e10800; ">{{item.user_Name}}</td>
                <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.user_Email}}</td>
                <td class = "text-center" style="color: white;border: solid 3px #e10800; ">{{item.user_Pass}}</td>
                <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.user_Role}}</td>
            
                
            </tr>
       
          </tbody>
        </table>
      </div>
  </div>
  <div class="col-md-6">
    <div id = "user-background">
      <input type="text"  placeholder="Username" class="input" v-model="user_Name" required>
      <input type="text" placeholder="Email" class="input" v-model="user_Email" required>
      <input type="text" placeholder="Password" class="input" v-model="user_Pass" required>
      <input type="text" placeholder="Role" class="input" v-model="user_Role" required>
    </div>
  </div>
  <div><button class = "mb-5" @click="editUserProfile">Edit</button></div>
</div>

</center>
        

<footer id = "footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
  
</template>
<script>
import footer from '../components/footer.vue'
import navbar from '../components/navbar.vue'
export default {
  components:{
    navbar,
    footer
  },
  data() {
    return {
      user_Name:null,
      user_Email:null,
      user_Pass:null,
      user_Role:null
    }
  },
  computed: {
    editUserProfile(){
      let edit = {
      user_Name: this.user_Name,
      user_Email: this.user_Email,
      user_Pass: this.user_Pass,
      user_Role: this.user_Role,
    };
      this.$store.dispatch('editUserProfile',edit);
    },
    getUser(){
      this.$store.dispatch('getUser')
    }
  },
  mounted() {
    this.getUser
  },
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

#input-head{
    color: #e10800;
    font-style: italic;
    justify-content: start
  }

  #input-text{
    justify-content: start;
    color: white;
    font-style: italic;
    font-size: 20px;
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

button {
  width: 130px;
  height: 50px;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  background-color: #e10800;
  border: solid 3px black !important;
  border-radius: 50px;
  cursor: pointer;
}

button:hover {
  background-color: black;
  color: #e10800;
  border-color: white !important;
}

button:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}


#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}
  
</style>