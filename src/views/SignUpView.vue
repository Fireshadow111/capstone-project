<template>
  <navbar/>
  <div class="body">
        <div class="loginbox animate__animated animate__fadeIn">
            <h1 class="my-5 head">Sign Up</h1>
            <form method="POST" class="mx-4 my-5">
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
<button type="submit" class="btn btn-light reg" value="register" ><span id="logs">Register</span><i class="fa fa-spinner fa-spin" id="icon"></i></button>
</div>

<router-link to="/login"><a href="">Already have an account?</a></router-link>
</form>
            

        
    </div>
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
    color: #44d62c;
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

}

.loginbox form input{
    /* width: 100%; */
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 30px;
    color: #44d62c;
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
 color: #44d62c;
 border-color: white;
}

.loginbox button:active{
  box-shadow: 0 5px #666;
 transform: translatex(4px);
}

.loginbox a{
    text-decoration: none;
    color: #44d62c;
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
</style>