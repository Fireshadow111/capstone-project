<template>

  <body>
    
    <navbar/>
  

    <div class="container text-center">
      <div class=" row align-items-center">
        <div id="about-head" class = "mt-5 mb-4">
          <h1 id = "aboutDrag" >About</h1>
          </div>

          </div>
          </div>
      <h2 class="about-title"><i>Tame, Slay, Dominate. in the world of gaming!</i></h2>

      <h3 class="about-body mt-4 mb-4">Red Dragon is a manufacturer of unique high-quality gaming peripheral. Enjoy excellent performance, durable designs, and perfected ergonomics in everything from keyboards and mice to headsets and speakers.</h3>

      <div class=red-banner-div>
        <img class="red-banner" src="https://cdn-images.imagevenue.com/00/17/85/ME17RPSL_o.png">
      </div>

   
      <footer id = "footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
  </body>
</template>
<script>
import footer from '../components/footer.vue'
import navbar from '../components/navbar.vue'
export default {
  components:{
    navbar,
    footer
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
}

.about-title {
  color: #e10800;
  text-align: center;

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
  color: white;
  font-size: 28px;
}

#aboutDrag{

color: #e10800;

font-weight: bolder;
font-family: "Montserrat";
font-size: 60px;



}
#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}





@media only screen and (max-width: 1080px) {
  .red-banner {
    width: 80%; 
  }

  .about-body {
    font-size: 24px; 
  }
}

@media only screen and (max-width: 720px) {
  .red-banner {
    width: 90%; 
  }

  .about-body {
    font-size: 20px;
  }

  #aboutDrag {
    font-size: 40px;
  }
}



@media only screen and (max-width: 300px) {
  .red-banner {
    width: 100%; 
  }

  .about-body {
    font-size: 16px;
  }

  #aboutDrag {
    font-size: 30px; 
  }

  #about-head {
    font-size: 30px; 
  }
}
</style>