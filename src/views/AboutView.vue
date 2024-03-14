<template>

  <body>
    
    <navbar/>
  

    <div class="container text-center">
      <div class=" row align-items-center">
        <div id="about-head">
          <h1 id = "aboutDrag">About</h1>
          </div>

          </div>
          </div>
      <h2 class="about-title"><i>Tame, Slay, Dominate. in the world of gaming!</i></h2>

      <h3 class="about-body mt-4 mb-4">Red Dragon is a manufacturer of unique high-quality gaming peripheral. Enjoy excellent performance, durable designs, and perfected ergonomics in everything from keyboards and mice to headsets and speakers.</h3>

      <div class=red-banner-div>
        <img class="red-banner" src="https://cdn-images.imagevenue.com/00/17/85/ME17RPSL_o.png">
      </div>

   

  </body>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  components:{
    navbar
  }
}
</script>
<style>

body{
 background-color: black;


}


#about-head {
  background-color: black;
  color: white;
  border: 5px solid #e10800;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;
  margin-top: 70px;
}

.about-title {
  color: #e10800;
  text-align: center;
  margin-top: 30px;
}

.red-banner {
  width: 60%;
  height: 50%;
  margin-bottom: 10px;

}

.red-banner-div {
  display: flex;
  justify-content: center;
}

.about-body {
  text-align: center;
  color: #e10800;
  font-size: 28px;
}

#aboutDrag{

color: #e10800;
font-style: italic;
font-family: "DM Serif Display";
font-size: 60px;

}
  
</style>