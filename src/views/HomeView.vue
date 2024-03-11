<template>
  <body>
    
    <navbar/>

    <section class="container mt-5">
    <Card  v-for="item in products" :key="item">      
      <div class="card-body">
        <div class="row justify-content-center align-items-center text-center">
          <div class="col-md-6"><img :src="item.prod_URL" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2 class="text-uppercase card-title card-title mt-3">
             {{ item.prod_Name }}
            </h2>
            <h4 class="card-text">
            {{ item.category}}
            </h4>
            <h4 class="card-text">
            {{ item.price}}
            </h4>
            <!-- <router-link :to="{name: 'ProductView', params: {id:item.prod_ID}}"><a class="btn">View Product</a></router-link> -->
          </div>
        </div>
      </div>
    </Card>
    <!-- <div class="card ml-0 mt-5"  v-for="item in products" :key="item">
    </div> -->
  </section>
    


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
    border-top: 2px solid #e10800;;
}

#footer{
  color: #e10800;;
}
   
</style>