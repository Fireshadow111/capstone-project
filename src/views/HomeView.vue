<template>
  <body id ="background">
    
    <div class="container text-center">
  <div class="row">
    <div class="col">
      
      <div id = "welcome">
    <h1 class="text-capitalize m-4">Welcome <span>To</span><span class="d-block">Razer</span></h1>
  </div>
     
      
    </div>
    <div class="col">
    
    </div>
    <div class="col">

      <div id = "gamers" class = "justify-content-end">
      <h6 id = "right"  class="fs-2 text-capitalize m-4">"For Gamers <span class="d-inline-block">By Gamers"</span></h6>
      <router-link  to = "/products" id ="home-button" type="button" class="btn btn-dark">Buy Now</router-link>
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
  min-height: 88vh;
}

#background{

  background-image: url(	https://cdn-images.imagevenue.com/5d/b8/81/ME17QOE5_o.png);
  background-size: cover;
  background-attachment: fixed;
 

}


#gamers{
  margin-top: 400px;
}

#welcome{
  margin-right: 300px;
}


#home-button{
  width: 70%;
  height: 50px;
  color: black;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: bold;
  background-color: #44d62c;;
  border: solid 3px white;
 
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;

 
  background-color: none;
  animation-name: image;
  animation-duration: 18s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;
}

#home-button:hover{
  background-color: black;
  color: #44d62c;
}

#home-button:active{
  box-shadow: 0 5px #666;
  transform: translatex(4px);
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


h1{
  font-size: 100px;
  color:#44d62c;
  margin-top: 5rem;
  font-family: "DM Serif Display";
  font-size: 70px;
  color: #44d62c;
  font-weight: bolder;

  background-color: none;
  animation-name: welcome;
  animation-duration: 18s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;
 }

 span{
  color: #44d62c;;
  text-transform: uppercase;
  font-style: italic;
 }

 h6{
  font-style: italic;
 }


 #welcome{
  margin-top: 100px;
 }

  
  #right{
    font-size: 80px;
  font-weight: 850;
  color:#44d62c;
  background-color: none;
  animation-name: image;
  animation-duration: 18s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;
 }




 


 


 @media screen and (max-width: 900px){
   h1{
    font-size: 50px;
   }
 }

/* Home Page Animations */

@keyframes welcome{
  0%{
      left: -800px;
      top: 0px;
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


@keyframes image{
  0%{
      left: 800px;
      top: 0px;
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

</style>