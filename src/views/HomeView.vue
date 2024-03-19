<template>
  <body>
    
    <navbar/>


    <div class="container text-center">
      <div class="row align-items-center">
        <div id="prod-head" class = "mt-5">
          <h1 id = "prodDrag">Products</h1>
          </div>

          </div>
          </div>

    <div class="container">
    <div class="row justify-content-center text-center">
     
   
  

    <div class="col-md-4 mt-5" v-for="item in products" :key="item">
                <div class="card homeCard">
                  <img :src="item.prod_URL" alt="" class="card-img-top w-100" style="height: 300px;">
                  <div class="card-body" style = "background-color:white;  border-radius: 10px;">
                    <h3 style = "color:#e10800; font-weight: bold; background-color: black;  border-radius: 10px;" class="card-title mb-4">{{ item.prod_Name }}</h3>
                      <div>
                        <div class="d-flex justify-content-between deats">
                        <router-link :to="{name: 'product', params: {id:item.prod_ID}}">
                      <button type="button" class="btn btn-sm view" style = " font-weight: bold;">View More</button>
                  </router-link>
                        <p style = "color: black;" class="my-1 price">${{ item.price }}</p>
                      </div>
                      </div>
                  </div>
                </div>
                </div>

              </div>
              </div>
  
              
  
        
  


<footer id = "footer-con" class="container py-3 my-5" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>

  </body>
</template>
<script>
import spinner from '../components/spinner.vue'
import navbar from '../components/navbar.vue'
import footer from '../components/footer.vue'
export default {
   name: 'HomeView',
   components:{
    navbar,
    footer,
    spinner
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
 
}

.prodHead{
  text-align: center;
}


.homeCard{
  border-radius: 0px;
  height: 420px; 
  max-width: 400px;
  background-color: black;
  border-radius: 10px;

  box-shadow: 0 0 25px #e10800;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

}

.homeCard:hover{
  transform:scale(105%);
    box-shadow: 0 0 40px #e10800;
}

.col{
  justify-content: center;
}

.card img{
  max-width: 510px;
}

.deats{
  align-items: center;
}

.view{
  border-radius: 0px;
  border: 2px solid black;
  color: black;
  border-radius: 10px;
  
}

.view:hover{
  
  background-color: black;
  color:#e10800;

}

.view:active{
  transform: translatex(4px);
 
}

.card-title{
  font-size: 23px;
}
.price{
  font-size: 19px;
  font-weight: bold;
  color: white
}



@media screen and (width <= 375px) {
  .sneaks{
  min-width: 300px;
}
}

#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
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


</style>