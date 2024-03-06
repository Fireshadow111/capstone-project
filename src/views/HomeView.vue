<template>
  <body id ="background">
    
    <div id = "home-con" class="container text-center">
      <div class="row align-items-center">

    <div id = "heading-div" class = "">
<div class = "d-flex justify-content-center">

  <h1>Welcome to</h1>

</div>

<div class = "d-flex justify-content-center mt-2">

  <h2>The House of Razer</h2>

</div>


</div>



<div class = "d-flex justify-content-center mt-3">

  <a href = "#about">
    <button id = "button1" type="button" class="btn-lg mx-2">Buy Now!</button>

  </a>

  <a href = "#contact">

    <button id = "button2" type="button" class="btn-lg mx-2">About us?</button>

  </a>
  
</div>





</div>

</div>



  </body>
  


</template>

<script>



export default {
  name: 'HomeView',
  components: {
   
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

}


#heading-div{
  background-color: black;
  border-radius: 70px;
  border: 3.5px solid #44d62c ;
  background-color: none;
  animation-name: welcome;
  animation-duration: 26s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;

  margin-top: 200px;
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
  font-size: 22px;
  background-color: #44d62c;
  border-color: black;
  border-radius: 50px;
  margin-top: 20px;
  color: black;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  font-weight: bold;

}

#button2{
  font-family: "Roboto";
  font-size: 22px;
  background-color: #44d62c;
  border-color: black;
  border-radius: 50px;
  margin-top: 20px;
  color: black;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  font-weight: bold;
}

#button1:hover{
  background-color: black;
  color: #44d62c;
  border-color: white;
}

#button2:hover{
  background-color: black;
  color: #44d62c;
  border-color: white;
}


.footer {
  font-size: 15px;
  color: black;
  font-weight: bolder;
  text-align: center;
  background-color: #44d62c;
}

</style>