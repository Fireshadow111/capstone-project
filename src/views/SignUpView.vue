<template>
  <navbar/>
  <div class="body">

  


        <div  class="loginbox animate__animated animate__fadeIn mt-3">
            <h1 id = "register"class="my-3 head">Sign Up</h1>
            <form method="POST" class="mx-3 my-3">
                <div class="row">
        <div class="col">
            <p>Username:</p>
          <input type="text" class="form-control"  name="firstName" placeholder="Enter FirstName" aria-label="First name" required="">
        </div>
      </div>
      <div class="row">
        <div class="col">
            <p>Email:</p>
          <input type="text" class="form-control"  name="userEmail" placeholder="Enter Email" aria-label="First name" required="">
        </div>
      </div>
      <div class="row">
        <div class="col">
            <p>Password:</p>
          <input type="password" class="form-control"   name="userPass" placeholder="Enter Password" aria-label="Last name" required="">
        </div>
        <div class="row">
        <div class="col">
            <p>Role:</p>
          <input type="password" class="form-control"   name="userPass" placeholder="Enter Password" aria-label="Last name" required="">
        </div>
      </div>
    </div>

<div>
<button style = "font-weight: bold;" type="submit" class="btn btn-light reg" value="register" ><span id="logs">Register</span><i class="fa fa-spinner fa-spin" id="icon"></i></button>
</div>

<router-link to="/login"><a href="">Already have an account?</a></router-link>
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
    }
}
</script>
<style scoped>
    
    #register{
      font-size: 40px;
      font-style: italic;
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
 
    color: #e10800;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
 
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

}

.loginbox button{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0px;
    
    transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

.loginbox button:hover{
  background-color: black;
 color: #e10800;
 border-color: white;
}

.loginbox button:active{
  box-shadow: 0 5px #666;
 transform: translatex(4px);
}

.loginbox a{
    text-decoration: none;
    color:#e10800;
}

.loginbox a:hover{
    color: rgb(198, 191, 191);
    transition: 0.3s;
}

.head{
    font-family: 'Syne', sans-serif !important;
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