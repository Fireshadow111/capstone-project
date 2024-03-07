<template>
  <body id ="background">
    
    <div class="home">
  <div class="row">
 
    <div class="col-12">
      <h1 class="text-capitalize m-4">Welcome <span>To</span><span class="d-block">Razer</span></h1>
      <h6 class="fs-2 text-capitalize m-4">"For Gamers <span class="d-inline-block">By Gamers"</span></h6>
     
      <button id ="home-button" type="button" class="btn btn-dark">Buy Now</button>
    
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

  background-image: url(	https://cdn-images.imagevenue.com/87/25/0a/ME17QOE6_o.jpg);
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




#home-button{
  width: 150px;
  height: 50px;
  color: black;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: bold;
  background-color: #44d62c;;
  border: solid 3px white;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
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
  color: #44d62c;;
 }

 span{
  color: #44d62c;;
  text-transform: uppercase;
  font-style: italic;
 }

 h6{
  font-style: italic;
 }

 h1,h6,a, button{
  /* margin-left:2.3rem; */
  font-weight: 650;
  color:#44d62c;
  background-color: none;
  animation-name: welcome;
  animation-duration: 18s;
  animation-delay: 0s;
  position: relative;
  animation-direction: alternate;
 }

 img{
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