<template>

  <body>
    
  
    <!-- <div class="container-fluid pb-2 pt-5">
  
      <h1 class="about-head">About Us</h1> -->

      <div class="container text-center">
      <div class="row align-items-center">
        <div id="about-div">

          <h1 id="about-head" class = " mt-4 mb-1">About us</h1>

        </div>
      </div>
    </div>
      <h2 class="about-title"><i>For gamers, by gamers</i></h2>

      <h3 class="about-body">The triple-headed snake trademark of Razer is one of the most recognized logos in the
        global gaming and esports communities. With a fan base that spans every continent, the company has designed and
        built the worlds
        largest gamer-focused ecosystem of hardware, software and services.</h3>

      <div class=razer-banner-div>
        <img class="razer-banner" src="https://cdn-images.imagevenue.com/48/fd/29/ME17QOJ8_o.jpg">
      </div>

   

  </body>
</template>
<script>
export default {
  
}
</script>
<style>

body{
 background-color: black;


}


#about-head {
  background-color: black;
  color: white;
  border: 5px solid #44d62c;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;
}

.about-title {
  color: #44d62c;
  text-align: center;
  margin-top: 30px;
}

.razer-banner {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;

}

.razer-banner-div {
  display: flex;
  justify-content: center;
}

.about-body {
  text-align: center;
  color: white;
  margin-top: 20px;
  font-size: 28px;
}
  
</style>