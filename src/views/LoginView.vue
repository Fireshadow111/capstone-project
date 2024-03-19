<template>
<navbar/>
<div class="body">
        <div class="loginbox p-2  animate__animated animate__fadeIn">
            <h1 id = "login" class="my-4 head" style = "color:#e10800; ">Login</h1>
            
            <form method="POST" class="mx-3 my-3">
    <div>
        <p style = "font-weight: bold;">Email:</p>
       <input type="email"  name="userEmail" id="email" class="my-2" placeholder="Enter Email..." required> 
    </div>
    <div>
        <p style = "font-weight: bold;">Password:</p>
        <input type="password"  name="password" id="password" class="my-2" placeholder="Enter Password..." required>
    </div>
    <div>
      <button class="btn btn-light log" id="log" ><span id="logs">Login </span><i class="fa fa-spinner fa-spin" id="icon"></i></button>
    </div>
    <h4>{{ $store.state.login }}</h4>
    <router-link to="/register"><a href="">Don't have an account?</a></router-link>
     </form>

        
    </div>
        </div>
        <footer id = "footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
    components:{
      navbar
    },

    data() {
    return{
        user_Email: null,
        user_Pass: null
    }
    },
    computed: {
        loginUser(){
            console.log(this.$data)
            this.$store.dispatch('loginUser',this.$data)
        },
    },
}

</script>
<style scoped>

#login{
    color: #e10800; 
    font-size: 40px;
    font-family: "Roboto";
}

i{
    display: none;
}
.my-element {
  animation: fadeIn;
  animation-duration: 5s;
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
    background-color: #000;
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

    font-size: 18px;

}

.loginbox input{
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 40px;
    color: white;

}

.loginbox button{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;
    background-color: black;
 color: #e10800; 

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

    font-family: Arial;
}

.loginbox a:hover{
    color: rgb(198, 191, 191);
    transition: 0.3s;
}



#log{
    font-weight: bold;
}

#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}

</style>