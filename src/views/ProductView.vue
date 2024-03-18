<template>
<body>
  

<navbar/>
<center>


  <div class="container text-center">
      <div class="row align-items-center">
        <div id="prod-head" class = "mt-5">
          <h1 id = "prodDrag">Products</h1>
          </div>

          </div>
          </div>


<div class="col-md-4 my-5  d-flex justify-content-center">
        <div class="card h-100" style="width: 21rem;" v-for="item in product" :key="item.prod_ID">
            <img :src="item.prod_URL" class="card-img-top" alt="" style = "background-color: black
            ;">
            <div class="card-body" style = "background-color: ">
                <h5 style="color: #e10800; font-size:22px; background-color: black; font-weight: bold;" class="card-title">{{ item.prod_Name }}</h5>
                <p class="card-text" style="font-size: 20px; font-weight: bold;">{{ item.category }}</p>
                <p class="card-text" style="font-size: 20px;font-weight: bold">${{ item.price }}</p>
              
                <button class="btn btn-primary products-add-cart-button mx-1">Add to Cart</button>
                <router-link to = "/"><button class = "products-add-cart-button">Go Back</button></router-link>
            </div>
        </div>
    </div>
  
  </center>





    <footer id = "footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
  </body>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
  components:{
    navbar
  },

    data(){
        return{
            prod_URL:null,
          prod_Name: null,
          category:null,
          price:null
          
        }
      },

      methods: {
    purchaseClicked() {
 
      alert('Thank you for your purchase!'); 
    },
  },
    
      computed: {
        product(){
          return this.$store.state.product
        },
        getProduct(){
            console.log(this.$route.params.id);
          return this.$store.dispatch('getProduct', this.$route.params.id)
        },
    
        
      },
      mounted(){
        return this.getProduct

      },
    
}
</script>
<style scoped>

h1{
  color:#e10800;

  font-weight: bold;

}



.card-body{
    text-align: center;
}

.card{
    box-shadow: 0 0 28px #e10800;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover{
    transform:scale(105%);
    box-shadow: 0 0 45px #e10800;
}


.products-add-cart-button {
  width: 140px;
  height: 60px;
  color: black;
  font-family: "Roboto";
  font-size: 20px;
  font-weight: bold;
  background-color: #e10800;
  border: solid 3px black;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

.products-add-cart-button:hover {
  background-color: black;
  color: #e10800;
  border-color: white;

}

.products-add-cart-button:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

#product-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

}


#prodDrag{

color: #e10800;
font-weight: bolder;
font-family: "Montserrat";
font-size: 60px;

}



#prod-head {
background-color: black;
color: white;
border: 4px solid  #e10800;
border-radius: 55px;
font-family: "DM Serif Display";
font-size: 50px;



}



    #footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}

</style>