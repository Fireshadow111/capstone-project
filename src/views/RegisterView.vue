<template>
  <navbar/>
  <div class="body">

  
<div>

        <div  class="loginbox animate__animated animate__fadeIn mt-4">
            <h1 id = "register"class="my-3 head" style = "color:#e10800;">Register</h1>
            <form  @submit.prevent="registerUser" class="mx-3 my-3">
                <div class="row">
        <div class="col">
            <p>Username:</p>
          <input v-model ="user_Name" type="text" class="form-control"  name="user_Name" placeholder="Enter Username..." aria-label="First name" >
        </div>
      </div>
      <div class="row">
        <div class="col">
            <p>Email:</p>
          <input v-model = "user_Email" type="text" class="form-control"  name="user_Email" placeholder="Enter Email..." aria-label="First name" >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>User Role:</p>
          <input  v-model = "user_Role" type="text" class="form-control"  name="user_Role" placeholder="Enter User Role..." aria-label="First name" >
      
     
 
        </div>
        <div class="row">
        <div class="col">
          <p>Password:</p>
          <input v-model = "user_Pass" type="password" class="form-control"   name="user_Pass" placeholder="Enter Password..." aria-label="Last name">
 
        </div>
      </div>
    </div>

<div>
<button @click="registerUser" style = "font-weight: bold;" class="btn btn-light reg" ><span id="logs">Register</span><i class="fa fa-spinner fa-spin" id="icon"></i></button>
</div>

<router-link to="/login"><a href="">Already have an account?</a></router-link>
</form>
            

        
    </div>
        </div>
        </div>

        <footer id = "footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>

</template>
<script>
import router from '@/router'
import Swal from 'sweetalert2'
import navbar from '../components/navbar.vue'
export default {
    components:{
      navbar
    },

    data() {
        return {
            user_Name: null,
            user_Email: null,
            user_Role: null,
            user_Pass: null,
            registrationComplete: false
        }
    },
    methods: {
    registerUser(){
      if (this.registrationComplete) return;
      if (this.user_Name && this.user_Email && this.user_Role && this.user_Pass) {
        this.registrationComplete = true;
        this.$store.dispatch('register', {
          user_Name: this.user_Name,
          user_Email: this.user_Email,
          user_Role: this.user_Role,
          user_Pass: this.user_Pass
        }).then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your account has been created successfully.',
          }).then(() => {
            this.resetForm();
            this.$router.push('/');
          });
        }).catch((error) => {
          console.error('Error registering user:', error);
          this.registrationComplete = false;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.',
          });
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all the fields.',
        });
      }
    },
    resetForm() {
      this.user_Name = '';
      this.user_Email = '';
      this.user_Role = '';
      this.user_Pass = '';
      this.registrationComplete = false;
    }
  },
  
}
</script>
<style scoped>

label{
  font-weight: bold;
    font-size: 18px;
}

    
#dropdown{
  border-radius: 20px;
  
}
    #register{
      font-size: 40px;
      font-family: "Roboto";
  
     

    }


    i{
    display: none;
}


.body{
    margin: 0;
    padding: 0;
    
    background-position: center;
    background-size: cover;
    min-height: 100vh;
}

.loginbox{
    min-width: 300px;
    max-width: 700px;
 
    color: white;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 20px; 
  border-radius: 20px; 
  box-shadow: 0 0 25px #e10800;
  
 
}

h1{
    margin: 0;
    padding: 0 0 10px;
    text-align: center;
    font-size: 28px;
}

.loginbox p{
    margin: 0;
    padding: 0;

    font-weight: bold;
    font-size: 18px;
}

.loginbox form input{
    /* width: 100%; */
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 30px;
    color: white;
    border-radius: 0px;
    font-weight: bold;

}

.loginbox button{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0px;
    border-radius: 20px;
    background-color: black;
 color: #e10800;
    
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

.loginbox button:hover{
  background-color: #e10800;
 color: black;
 border-color: white;
}

.loginbox button:active{
  box-shadow: 0 5px #666;
 transform: translatex(4px);
}

.loginbox a{
    text-decoration: none;
    color:#e10800;
    font-style: Arial;

}

.loginbox a:hover{
    color: rgb(198, 191, 191);
    transition: 0.3s;
}



.reg{
    font-family: 'Syne', sans-serif !important;
}

@media screen and (width <= 650){
    .loginbox{
        width: 70% !important;
    }
}



#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}



</style>