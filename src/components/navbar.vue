<template>
    <body>
        
  
     <div id="navbarContainer">

    <nav  class="navbar navbar-expand-lg">
  <div  class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div  class="navbar-nav">
        <router-link id = "links" class = "mx-3" aria-current="page" to= "/">Home</router-link> 
        <router-link id = "links" class = "mx-3" to ="/products">Products</router-link>
        <router-link id = "links" class = "mx-3" to ="/checkout">Checkout</router-link>
        <router-link id = "links" class = "mx-3" to ="/about">About</router-link>
        <router-link id = "links" class = "mx-3" to ="/contact">Contact</router-link>
        <router-link id = "links" class = "mx-3" to ="/admin">Admin</router-link>
        <router-link id = "links" class = "mx-3" to ="/signup">Sign Up</router-link>
        <router-link id = "links" class = "mx-3" to ="/login">Login</router-link>
      </div>
    </div>
  </div>
</nav>
</div>
</body>

</template>
<script>
export default {
    
}
</script>
<style scoped>

body{
    background-color: black;
}

#navbarContainer{
  display: flex;
  justify-content: center;
  width: 100%;
 
  
}
#links {
  font-size: 35px;
  color: white;
  font-family: "DM Serif Display";
  font-style: italic;
  font-weight: bold;

  transition: text-decoration 0.5s;
  text-decoration: none;

  
}

#links:hover {
  text-decoration: underline;
  text-decoration-color: #44d62c;
  text-decoration-thickness: 3px;
}

#navbarNavAltMarkup{
  border-bottom: 2px solid #44d62c;
  text-decoration-thickness: 3px;

  

}
    

  #nav-image{
    max-width: 160px;
  
    
  }


  /* #nav-aura{
    box-shadow: 0 0 28px #44d62c;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
#nav-aura:hover{
    transform:scale(105%);
    box-shadow: 0 0 45px #44d62c;
} */



</style>