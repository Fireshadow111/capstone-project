<template>
    <div>

        <div class="container text-center">
      <div class="row align-items-center">
        <div id="checkout-div">

          <h1 id="checkout-head" class = " mt-4 mb-4">Checkout</h1>

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
</template>
<script>
export default {
    
}
</script>
<style>

#checkout-head {
  background-color: black;
  color: white;
  border: 4px solid #44d62c;
  border-radius: 55px;
  font-family: "DM Serif Display";
  font-size: 50px;
}

.table th{
    color: #44d62c;
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
  color: #44d62c;
  margin-top: 8px;
  margin-right: 10px;
  font-weight: bold;
}
    

</style>