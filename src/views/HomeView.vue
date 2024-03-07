<template>
  <body id ="background">
    
    <div id = "home-con" class="container text-center">
      <div class="row align-items-center">

    <div id = "heading-div" class = "">
<div class = "d-flex justify-content-center">

  <h1>Welcome to</h1>

</div>

<div class = "d-flex justify-content-center mt-2">

  <h2>Razer</h2>

</div>


</div>



</div>

</div>


  <div id = "footer-prob">
<footer id="footer">Razer - @Copyright&copy  - 2024</footer>
</div>
  </body>
  


</template>

<script>
import footer from '../components/footer.vue'


export default {
  name: 'HomeView',
  components: {
   footer
  }
}
</script>


<style scoped>

body{
  min-height: 100vh;
}

#background{

  background-image: url(https://cdn-images.imagevenue.com/0a/31/3f/ME17QOEA_o.png);
  background-size: cover;
  background-attachment: fixed;
 

}


#heading-div{
  min-width: 100%;
  background-color: black;
  border-radius: 70px;
  border: 3.5px solid #44d62c;
  background-color: none;
  animation-name: welcome;
  animation-duration: 26s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;

  margin-top: 150px;
}

/* Home Page Animations */

@keyframes welcome{
  0%{
      left: 0px;
      top: -800px;
  }

  25%{
      left: 0px;
      top: 0px;

  }

  50%{
      left: 0px;
     top:0px;

  }

  75%{
      top: 0px;
      left: 0px 
   }

   100%{
      left: 0px;
      top: 0px;
  }
}  






h1{
  font-family: "DM Serif Display";
  font-size: 70px;
  color: white;
}

h2{
  color: #44d62c;
  font-size: 45px;
  font-family: "Roboto";
  font-weight: bold;
  font-style: italic;
}

#button1{
  font-family: "Roboto";
  font-size: 30px;
  border-color: black;
  border-radius: 50px;
  margin-top: 20px;
  background-color: black;
  color: #44d62c;
  border-color: white;
  border-width: 3px;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  font-weight: bold;

}

#button2{
  font-family: "Roboto";
  font-size: 30px;
  
  border-color: black;
  border-radius: 50px;
  margin-top: 20px;
  background-color: black;
  color: #44d62c;
  border-color: white;
  border-width: 3px;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  font-weight: bold;
}

#button1:hover{
  background-color: #44d62c;
  color: black;
}

#button2:hover{
  background-color: #44d62c;
  color: black;
}


#footer {
  color: black;
  font-weight: bolder;
  text-align: center;
  background-color: #44d62c;
}

#footer-prob {
  position: sticky;
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>