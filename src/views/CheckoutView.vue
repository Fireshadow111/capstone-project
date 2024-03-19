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
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1, Col 1</td>
                <td>Row 1, Col 2</td>
                <td>Row 1, Col 3</td>
                <td>Row 1, Col 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  </div>

  <div id = "total-con" class="container-fluid d-flex justify-content-center">

<h5 id="total">Total</h5>
<input id="cart-total" type="text" readonly>

</div>

  <div class="container-fluid d-flex justify-content-center">

<button id="checkout-button" type="button" class="btn btn-light mx-2">Checkout</button>

<button id="clear-button" type="button" class="btn btn-dark">Clear</button>

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

</style>