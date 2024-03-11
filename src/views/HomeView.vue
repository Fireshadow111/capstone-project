<template>
  <body>
    
    <navbar/>


      
              
  
     <div id = "product-con" class = "justify-content-center">
     
        <div v-for = "item in products" :key = "item" class="card h100" style="width: 18rem;">
          <img :src="item.prod_URL" alt="" class="card-img-top">
            <div class="card-body">
                <h5 style="color: #44d62c; background-color: black;" class="card-title">{{item.prod_Name}}</h5>
                <p class="card-text" style="font-size: 17px; font-weight: bolder;"><i>{{item.category}}</i></p>
                <p class="card-text" style="font-size: 17px;">{{item.price}}</p>
                <button id = "products-add-cart-button" class="btn btn-primary mb-5">Add to Cart</button>
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
   },

   data(){
      return{
        prod_URL: null,
        prod_Name: null,
        category:null,
        price:null
      }
    },
  
    methods:{
      
    },
    computed: {
      products(){
        return this.$store.state.products
      },
      getProducts(){
        return this.$store.dispatch('getProducts')
      },
  
      
    },
    mounted(){
      this.getProducts
    },
    

}
</script>
<style scoped>

body{
   background-color: black;
   min-height: 10vh;
}

#product-con{
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-radius: 20px;
    margin: 100px;
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
  width: 120px;
  height: 50px;
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
    border-top: 2px solid #e10800;;
}

#footer{
  color: #e10800;;
}
   
</style>