<template>
  <body>
    <navbar/>
    <center>
      <div class="container text-center">
        <div class="row align-items-center">
          <div id="prod-head" class="mt-5">
            <h1 id="prodDrag">Products</h1>
          </div>
        </div>
      </div>
      <spinner v-if="!product"></spinner>
      <div class="col-md-4 my-5  d-flex justify-content-center animate__animated animate__fadeIn">
        <div class="card h-100" style="width: 21rem;" v-for="item in product" :key="item.prod_ID">
          <img :src="item.prod_URL" class="card-img-top" alt="" style="background-color: black;">
          <div class="card-body">
            <h5 style="color: #e10800; font-size:22px; background-color: black; font-weight: bold;" class="card-title">{{ item.prod_Name }}</h5>
            <p class="card-text" style="font-size: 20px; font-weight: bold;">{{ item.category }}</p>
            <p class="card-text" style="font-size: 20px;font-weight: bold">${{ item.price }}</p>
            <button @click="addCart(item.prod_ID)" class="btn btn-primary products-add-cart-button mx-1">Add to Cart</button>
            <router-link to="/home"><button class="products-add-cart-button">Go Back</button></router-link>
          </div>
        </div>
      </div>
    </center>
    <footer id="footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id="footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
  </body>
</template>

<script>
import navbar from '../components/navbar.vue'
import spinner from '../components/spinner.vue'

export default {
  components: {
    navbar,
    spinner
  },

  data() {
    return {
      quantity: 1
    }
  },

  methods: {
    addCart(prod_ID) {
      let add = {
        prod_ID: prod_ID,
        quantity: this.quantity
      }
      this.$store.dispatch("addCart", add)
    }
  },

  computed: {
    product() {
      return this.$store.state.product
    }
  },

  mounted() {
    this.$store.dispatch('getProduct', this.$route.params.id)
  }
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
  height: 50px;
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


@media (max-width: 1080px) {
  .container.text-center {
    padding: 0 20px;
  }

  .card {
    width: 30%; 
    margin: 0 auto;
  }

  #prod-head {
    font-size: 50px; 
    border-radius: 50px; 
  }

  .card-title {
    font-size: 22px; 
  }

  .card-text {
    font-size: 20px; 
  }

  .products-add-cart-button {
    width: 140px; 
    height: 50px; 
    font-size: 18px; 
  }

  #footer {
    font-size: 18px; 
  }
}

@media (max-width: 964px) {
  .container.text-center {
    padding: 0 15px; 
  }

  .card {
    width: 40%; 
    margin: 0 auto; 
  }

  #prod-head {
    font-size: 45px; 
    border-radius: 45px; 
  }

  .card-title {
    font-size: 20px; 
  }

  .card-text {
    font-size: 18px; 
  }

  .products-add-cart-button {
    width: 160px;
    height: 50px; 
    font-size: 18px; 
  }

  #footer {
    font-size: 16px; 
  }
}

@media (max-width: 764px) {
  .container.text-center {
    padding: 0 10px; 
  }

  .card {
    width: 80%; 
    margin: 0 auto; 
  }

  #prod-head {
    font-size: 40px; 
    border-radius: 40px; 
  }

  .card-title {
    font-size: 18px; 
  }

  .card-text {
    font-size: 16px; 
  }

  .products-add-cart-button {
    width: 140px; 
    height: 45px; 
    font-size: 16px; 
  }

  #footer {
    font-size: 14px; 
  }
}




@media (max-width: 720px) {
  .card {
    width: 45%; 
    margin: 0 auto; 
  }

  #prod-head {
    font-size: 40px; 
    border-radius: 45px;
  }

  .card-title {
    font-size: 20px; 
  }

  .card-text {
    font-size: 18px; 
  }

  .products-add-cart-button {
    width: 130px;
    height: 50px;
    font-size: 18px; 
  }

  #footer {
    font-size: 16px; 
  }
}






@media (max-width: 300px) {
  .card {
    width: 90%; 
    margin: 0 auto; 
  }

  .container.text-center {
    padding: 0; 
  }

  #prod-head {
    font-size: 30px;
    border-radius: 35px;
  }

  .card-title {
    font-size: 18px;
  }

  .card-text {
    font-size: 16px; 
  }

  .products-add-cart-button {
    width: 120px; 
    height: 40px; 
    font-size: 16px; 
  }

  #footer {
    font-size: 14px; 
  }
}


</style>