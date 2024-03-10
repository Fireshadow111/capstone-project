<template>
  <body>
    
    <navbar/>

 


   <div class="container">
   <div class="row">
  
   <div class="col-md-4 my-5  d-flex justify-content-center">
       <div class="card h-100" style="width: 18rem;">
           <img src="https://cdn-images.imagevenue.com/8d/93/5d/ME17QI1U_o.jpg" class="card-img-top" alt="">
           <div class="card-body">
               <h5 style="color: #44d62c; background-color: black;" class="card-title">Razer Blade 15</h5>
               <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>NVIDIA GeForce RTX 40 Series Intel Core i7 Processor</i></p>
               <p class="card-text" style="font-size: 17px;">$2499.99</p>
               <button id = "products-add-cart-button" class="btn btn-primary">Add to Cart</button>
           </div>
       </div>
   </div>


   <div class="col-md-4 my-5 d-flex justify-content-center">
       <div class="card h-100" style="width: 18rem;">
           <img src="https://cdn-images.imagevenue.com/fa/c4/44/ME17QI1V_o.jpg" class="card-img-top" alt="">
           <div class="card-body">
               <h5 style="color: #44d62c; background-color: black;" class="card-title">Razer Viper V2</h5>
               <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>Ultra-lightweight, Ultra-fast Wireless Esports Mouse</i></p>
               <p class="card-text" style="font-size: 17px;">$149.99</p>
               <button id = "products-add-cart-button" class="btn btn-primary">Add to Cart</button>
           </div>
       </div>
   </div>

   
   <div class="col-md-4 my-5 d-flex justify-content-center">
       <div class="card h-100" style="width: 18rem;">
           <img src="https://cdn-images.imagevenue.com/12/38/70/ME17QNXY_o.jpg" class="card-img-top" alt="">
           <div class="card-body">
               <h5 style="color: #44d62c; background-color: black;" class="card-title">Razer Blackshark</h5>
               <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>Multi-platform wired esports headset</i></p>
               <p class="card-text" style="font-size: 17px;">$39.99</p>
               <button id = "products-add-cart-button" class="btn btn-primary">Add to Cart</button>
           </div>
       </div>
   </div>


   <div class="col-md-4 my-5 d-flex justify-content-center">
       <div class="card h-100" style="width: 18rem;">
           <img src="https://cdn-images.imagevenue.com/c5/bd/8e/ME17QI1T_o.jpg" class="card-img-top" alt="">
           <div class="card-body">
               <h5 style="color: #44d62c; background-color: black;" class="card-title">Razer Blackwidow</h5>
               <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>Mechanical Gaming Keyboard with Razer Chroma™ RGB</i></p>
               <p class="card-text" style="font-size: 17px;">$229.99</p>
               <button id = "products-add-cart-button" class="btn btn-primary">Add to Cart</button>
           </div>
       </div>
   </div>

 
   <div class="col-md-4 my-5 d-flex justify-content-center">
       <div class="card h-100" style="width: 18rem;">
           <img src="https://cdn-images.imagevenue.com/ff/86/44/ME17QI1S_o.jpg" class="card-img-top" alt="">
           <div class="card-body">
               <h5 style="color: #44d62c; background-color: black;" class="card-title">Unleashed Zip Hoodie</h5>
               <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>Everyday apparel thats bold in style and big on comfort</i></p>
               <p class="card-text" style="font-size: 17px;">$69.99</p>
               <button id = "products-add-cart-button" class="btn btn-primary">Add to Cart</button>
           </div>
       </div>
   </div>


   <div class="col-md-4 my-5 d-flex justify-content-center">
       <div class="card h-100" style="width: 18rem;">
           <img src="https://cdn-images.imagevenue.com/26/c1/b4/ME17QI1W_o.jpg" class="card-img-top" alt="">
           <div class="card-body">
               <h5 style="color: #44d62c;; background-color: black;" class="card-title">Rogue 14 Backpack</h5>
               <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>Lightweight all-weather toploader backpack</i></p>
               <p class="card-text" style="font-size: 17px;">$59.99</p>
               <button id = "products-add-cart-button" class="btn btn-primary">Add to Cart</button>
           </div>
       </div>
   </div>
</div>
</div>


<footer id = "footer-con" class="container py-3 my-5" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Copyright © 2023 | All Rights Reserved</p>
    </footer>

  </body>
</template>
<script>
import navbar from '../components/navbar.vue'
import footer from '../components/footer.vue'
export default {
   name: 'HomeView',
   components:{
    navbar,
    footer
   }
}
</script>
<style scoped>

body{
   background-color: black;
   min-height: 10vh;
}

.card-body{
   text-align: center;
}

.card{
   box-shadow: 0 0 28px #44d62c;
   transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover{
   transform:scale(105%);
   box-shadow: 0 0 45px #44d62c;
}


#products-add-cart-button {
 width: 150px;
 height: 60px;
 color: black;
 font-family: "Roboto";
 font-size: 18px;
 font-weight: bold;
 background-color: #44d62c;
 border: solid 3px black;
 border-radius: 50px;
 cursor: pointer;
 transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

#products-add-cart-button:hover {
 background-color: black;
 color: #44d62c;
 border-color: white;

}

#products-add-cart-button:active {
 box-shadow: 0 5px #666;
 transform: translatex(4px);
}

#product-cards {
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 text-align: center;

}





#products-head {
 background-color: black;
 color: white;
 border: 4px solid #44d62c;
 border-radius: 55px;
 font-family: "DM Serif Display";
 font-size: 50px;



}


#footer-con{
    border-top: 2px solid #44d62c;
}

#footer{
  color: #44d62c;
}
   
</style>