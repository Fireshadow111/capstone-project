<template>

  <navbar/>
    <div>

      <div class="container text-center">
      <div class="row align-items-center">
        <div id="checkout-head" class = "mb-5 mt-4">
          <h1 id = "checkoutDrag">Checkout</h1>
          </div>

          </div>
          </div>

    <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-dark table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price per Unit</th>
                <th scope="col">Total Price</th>
                <th scope="col">Remove Item</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cart in $store.state.cart" :key="cart.orderID">
                <td><img :src="cart.prod_URL" style="height: 150px;width: 200px;"></td>
                <td>{{cart.prod_Name}}</td>
                <td>{{cart.sold_quantity}}</td>
                <td>{{cart.price_per_unit}}</td>
                <td>{{cart.total_price}}</td>
                <td><button id = "checkBut" @click="deleteCartItem(cart.prod_ID)">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  </div> 

  <div id = "total-con" class="container-fluid d-flex justify-content-center">



</div>

  <div class="container-fluid d-flex justify-content-center">

<button @click="checkout" id="checkout-button" type="button" class="btn btn-light mx-2">Checkout</button>


</div>


        
    </div>
    <footer id = "footer-con" class="container py-3 my-1" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
    components:{
      navbar
    },

    data(){
        return{
        }
    },
    computed:{
        getUserCart(){
            this.$store.dispatch('getUserCart')
        },
        checkout(){
            this.$store.dispatch('checkout')
        }
    },
    methods: {
        deleteCartItem(prod_ID){
            console.log(prod_ID);
            this.$store.dispatch('deleteCartItem',prod_ID)
        }
    },
    mounted(){
        this.getUserCart
    }
 }
    

</script>
<style>
#checkoutDrag{

color: #e10800;
font-weight: bolder;
font-family: "Montserrat";
font-size: 60px;

}

#checkout-head {
  background-color: black;
  color: white;
  border: 5px solid #e10800;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;

}

.table th{
    color: #e10800;
    font-weight: bolder;
}

.table td{
    color: white;
    font-weight: bold;
}

#checkout-button {
  width: 150px;
  height: 50px;

  font-family: "Roboto";
  font-size: 18px;
  font-weight: bold;

  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

#checkout-button:hover {
  background-color: black;
  color: white;
}

#checkout-button:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

#clear-button {
  width: 150px;
  height: 50px;

  font-family: "Roboto";
  font-size: 18px;
  font-weight: bold;

  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
}

#clear-button:hover {
  background-color: white;
  color: black;
}

#clear-button:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

#cart-total {
  width: 300px;
  height: 30px;
}

#total {
  color: #e10800;
  margin-top: 8px;
  margin-right: 10px;
  font-weight: bold;
}
    
#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}


#checkBut {
  width: 130px;
  height: 50px;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  background-color: #e10800;
  border: solid 3px black !important;
  border-radius: 50px;
  cursor: pointer;
}

#checkBut:hover {
  background-color: black;
  color: #e10800;
  border-color: white !important;
}

#checkBut:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

</style>