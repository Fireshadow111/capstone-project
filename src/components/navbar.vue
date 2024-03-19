<template>
    <body>
     
      <nav style = "border-radius: 100px; max-width: 95%;" class="navbar navbar-light mx-auto mt-2">
  <button  class="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    <span><i class="fa-solid fa-bars "  style="color: #000000;"></i></span>
  </button>
  <span class="name animate__animated animate__backInDown"><img id = "logo" src="https://cdn-images.imagevenue.com/2d/81/14/ME17RP2V_o.png" alt=""></span>
            <button type="button" class="btn position-relative cart">
              <router-link to="/checkout" @click="scrollTop()"><i style = "color:black" class="fa fa-shopping-cart cart"></i></router-link>
  </button>

<div style = "background-color:black" class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" data-bs-dismiss="offcanvas">
          <li class="nav-item my-4 mx-2">
            <router-link to="/" @click="scrollTop()">Home</router-link>
          </li>
          <li class="nav-item my-4 mx-2">
            <router-link to="/about" @click="scrollTop()">About</router-link>
          </li>
          <li class="nav-item my-4 mx-2">
            <router-link to="/contact" @click="scrollTop()">Contact</router-link>
          </li>
          <li class="nav-item my-4 mx-2">
            <router-link to="/admin" @click="scrollTop()">Admin</router-link>
          </li>
        </ul>
        
      </div>
      <div class="btn-group my-4 justify-content-center" data-bs-dismiss="offcanvas">
      
        <router-link to="/profile" class="sign-but my-3 p-1 py-2 btn btn1">Profile</router-link>
                    <router-link to="/login" class="sign-but my-3 p-1 py-2 btn btn1">Login</router-link>
              </div>
</div>
</nav>

</body>

</template>
<script>
import 'animate.css';
export default {
    name: "navbar",
    methods: {
      scrollTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
}
}
</script>
<style scoped>



.btn{
border-radius: 0px;
}
.my-element {
display: inline-block;
margin: 0 0.5rem;

animation: backInDown;
animation-duration: 2s;
}

.container-fluid{
text-align: center;
}

.navbar{
max-height: 90px;
text-align: center;
background-color: #e10800;

}

.custom-toggler .navbar-toggler-icon {
color: black;
}

.navbar span{
text-align: center;

}

.offcanvas{
  background-color: rgb(242, 242, 242);
  max-width: 80vw;
}


nav {
padding: 17px;
}

nav a {
font-size: 27px;
text-decoration: none;
font-weight: bold;
color: white;
font-family: 'Syne';
}

nav a.router-link-exact-active {
color:#e10800;
}
.navbar-toggler{
  border: 2px solid black;
  border-radius: 0px;
}


.cart{
  font-size: 29px;
}

#logo{
  max-height: 60px;
  max-width: 100%;
}

.numbers{
  color: black;
  font-size: 18px;
}



.sign-but{
          text-align: center;
          text-decoration: none;
          max-width: 75%;
          border: 2px solid #e10800;
          transition: background-color 0.3s ease, color 0.3s ease;
            }

      .sign-but:hover{
         background-color: black;
         color:#e10800;
      }


    #check-logo:hover{
      transform: translatex(100px);
    }

     


@media screen and (width <= 375px) {
.name{
font-size: 18px;
}
}


</style>