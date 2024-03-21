<template>
 <body>
<navbar/>


 
<div class="container text-center">
      <div class="row align-items-center">
        <div id="admin-head" class = "mb-5">
          <h1 id = "adminDrag">Admin Dashboard</h1>
          </div>

          </div>
          </div>



          <h1 id = "input-head">Messege to all admins!</h1>
          <p id = "input-text">Input your data then click the add or edit button, thank you</p>



          <h1 class = "userControl">Users Control</h1>

          <div id = "user-background">
          <input type="text"  placeholder="Username" class="input" v-model="user_Name" required>
          <input type="text" placeholder="Email" class="input" v-model="user_Email" required>
          <input type="text" placeholder="Password" class="input" v-model="user_Pass" required>
          <input type="text" placeholder="Role" class="input" v-model="user_Role" required>
        </div>

          <div id = "userAddDiv" class = "text-center justify-content-center">
          <button style = "border: solid 3px red"  class = "addButton mb-4 mt-2" @click = "addUser()">Add</button>
        </div>

          <div class="products" ng-app="app" ng-controller="AppCtrl">

<div layout-padding>

  <div class="tables">
    <table class="table table-striped table-bordered table-hover table-checkable order-column dataTable table-dark">
    <thead><tr>
      <th class = "text-center" style = "color:#e10800;">ID</th>
      <th class = "text-center" style = "color:#e10800;">Username</th>
      <th class = "text-center" style = "color:#e10800;">Email</th>
      <th class = "text-center" style = "color:#e10800;">Password</th>
      <th class = "text-center" style = "color:#e10800;">Role</th>
      <th class = "text-center" style = "color:#e10800;">For Admin Use Only</th>
      
      </tr></thead>
      <tbody>
        <tr v-for ="item in users" :key = "item.id">
          <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.user_ID}}</td>
            <td class = "text-center" style="color: white;border: solid 3px #e10800; ">{{item.user_Name}}</td>
            <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.user_Email}}</td>
            <td class = "text-center" style="color: white;border: solid 3px #e10800; ">{{item.user_Pass}}</td>
            <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.user_Role}}</td>
            <td style = "border: solid 3px #e10800;">

                <div id = "userConDiv" class = "d-flex justify-content-center">
              <button  class = "userButtons mx-5" @click = "editUser(item.user_ID)">Edit</button>
              <button  class = "userButtons mx-5" @click = "deleteUser(item.user_ID)">Delete</button>

            </div>
            
            </td>
            
        </tr>
   
      </tbody>
    </table>
  </div>
  </div>
</div>

    

          <h1 class = "prodControl">Products Control</h1>


          <input type="text" placeholder="Image" class="input" v-model="prod_URL" required>
          <input type="text"  placeholder="Product Name" class="input" v-model="prod_Name" required>
          <input type="text" placeholder="Category" class="input" v-model="category" required>
          <input type="number" placeholder="Price" class="input" v-model="price" required>

          <div id = "prodAddDiv" class = "justify-content-center d-flex text-center">
          <button style = "border: solid 3px red"  class = "addButton mb-4 mt-2" @click = "addProduct()">Add</button>

        </div>


          <div class="products" ng-app="app" ng-controller="AppCtrl">

<div layout-padding>

  <div class="tables">
    <table class="table table-striped table-bordered table-hover table-checkable order-column dataTable table-dark">
    <thead><tr>
      <th class = "text-center" style = "color:#e10800;">ID</th>
      <th class = "text-center" style = "color:#e10800;">Product Image</th>
      <th class = "text-center" style = "color:#e10800;">Product Name</th>
      <th class = "text-center" style = "color:#e10800;">Product Category</th>
      <th class = "text-center" style = "color:#e10800;">Product Price</th>
      <th class = "text-center" style = "color:#e10800;">For Admin Use Only</th>
      </tr></thead>
      <tbody>
        <tr v-for ="item in products" :key = "item">
          <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.prod_ID}}</td>
            <td class = "text-center" style="color: white; border: solid 3px #e10800;"><img :src ="item.prod_URL" width="400" height="280"></td> 
            <td class = "text-center" style="color: white;border: solid 3px #e10800; ">{{item.prod_Name}}</td>
            <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.category}}</td>
            <td class = "text-center" style="color: white; border: solid 3px #e10800;">{{item.price}}</td>
            <td style = "border: solid 3px #e10800;">
              
              <div id =  "prodConBut">
                
              <button style = "border: solid 3px red" class = "prodButtons mx-4" @click = "editProd(item.prod_ID)">Edit</button>
              <button style = "border: solid 3px red" class = "prodButtons mx-4" @click = "deleteProd(item.prod_ID)">Delete</button>
            
            </div>
            
            </td>
            
        </tr>
   
      </tbody>
    </table>
  </div>
</div>
</div>  

<footer id = "footer-con" class="container py-3 my-5" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
 
    
  </body>
  </template>

  <script>
  import Swal from 'sweetalert2'
  import navbar from '../components/navbar.vue'
  export default {
    components:{
      navbar
    },
    data(){
      return{
        prod_URL: null,
        prod_Name: null,
        category:null,
        price:null,

        user_Name:null,
      user_Email:null,
      user_Pass:null,
      user_Role:null,
      }
    },
    methods: {
  addProduct() {
    this.$store.dispatch('addProduct', this.$data);
    Swal.fire({
      icon: 'success',
      title: 'Product Added!',
      text: 'Your product has been successfully added.',
    }).then((result) => {
      if (result.isConfirmed) {
        this.prod_URL = '';
        this.prod_Name = '';
        this.category = '';
        this.price = null;
      }
    });
  },
  deleteProd(prod_ID) {
    this.$store.dispatch('deleteProd', prod_ID);
    Swal.fire({
      icon: 'success',
      title: 'Product Deleted!',
      text: 'Your product has been successfully deleted.',
    });
  },
  editProd(prod_ID) {
    let edit = {
      id: prod_ID,
      prod_URL: this.prod_URL,
      prod_Name: this.prod_Name,
      category: this.category,
      price: this.price
    };
    this.$store.dispatch('editProd', edit);
    Swal.fire({
      icon: 'success',
      title: 'Product Edited!',
      text: 'Your product has been successfully edited.',
    });
  },
  addUser() {
    this.$store.dispatch('addUser', this.$data);
    Swal.fire({
      icon: 'success',
      title: 'User Added!',
      text: 'New user has been successfully added.',
    }).then((result) => {
      if (result.isConfirmed) {
        this.user_Name = '';
        this.user_Email = '';
        this.user_Pass = '';
        this.user_Role = '';
      }
    });
  },
  deleteUser(user_ID) {
    this.$store.dispatch('deleteUser', user_ID);
    Swal.fire({
      icon: 'success',
      title: 'User Deleted!',
      text: 'User has been successfully deleted.',
    });
  },
  editUser(user_ID) {
    let edit = {
      id: user_ID,
      user_Name: this.user_Name,
      user_Email: this.user_Email,
      user_Pass: this.user_Pass,
      user_Role: this.user_Role,
    };
    this.$store.dispatch('editUser', edit);
    Swal.fire({
      icon: 'success',
      title: 'User Edited!',
      text: 'User information has been successfully edited.',
    }).then((result) => {
      if (result.isConfirmed) {
        this.user_Name = '';
        this.user_Email = '';
        this.user_Pass = '';
        this.user_Role = '';
      }
    });
  }
},

  
    computed: {
      products(){
        return this.$store.state.products
      },
      getProducts(){
        console.log('hello');
        return this.$store.dispatch('getProducts')
      },
      users(){
      return this.$store.state.users
    },
    getUsers(){
     return this.$store.dispatch('getUsers')
     
    },

  
      
    },
    mounted(){
      this.getProducts
      this.getUsers
    },
    
  }
  </script>
  <style scoped>





#userConBut{
  display: flex;
    justify-content: center;
    

}

  #prodConBut{
    display: flex;
    justify-content: center;
  }

 

#userAddDiv{
  display: flex;
  justify-content: center;
  text-align: center;
}

#prodAddDiv{
  display: flex;
  text-align: center;
  justify-content: center;
}

.userControl{
color:black;
text-align: center;
font-family: "Montserrat";
background-color:#e10800;
font-weight: bolder;

}

.prodControl{
  color:black;
text-align: center;
font-family: "Montserrat";
background-color:#e10800;
font-weight: bolder;


margin-top: 150px;

}

  #input-head{
    color: #e10800;
    font-style: italic;
  }

  #input-text{
    color: white;
    font-style: italic;
    font-size: 20px;
  }

#adminDrag{

color: #e10800;
font-weight: bolder;
font-family: "Montserrat";
font-size: 60px;

}

#admin-head {
  background-color: black;
  color: white;
  border: 5px solid #e10800;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;
  margin-top: 70px;
}
  
.userButtons {
  width: 130px;
  height: 50px;
  font-family: "Roboto";
  font-size: 22px;
  font-weight: bold;
  background-color: #e10800;
  border: solid 3px black;
  border-radius: 50px;
  cursor: pointer;
  

 
}

.userButtons:hover {
  background-color: black;
  color: #e10800;
  border-color: white;
}

.userButtons:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

.addButton {
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

.addButton:hover {
  background-color: black;
  color: #e10800;
  border-color: white !important;
}

.addButton:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}


input.input {
  width: 50%;
  height: 40px;

  margin-bottom: 15px;
  border: 1px solid #e10800;
  border-radius: 5px;
  background: transparent;
  color: white;
  font-size: 16px;
  font-family: Arial, sans-serif;
  border-radius: 30px;
}

.prodButtons{
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

.prodButtons:hover{
  background-color: black;
  color: #e10800;
  border-color: white !important;
}


.prodButtons:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

input[type=text]{
  font-weight: bold;
}



#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}





@media only screen and (max-width: 1080px) {
  .container {
    width: 90%;
  }

  .input {
    width: 80%;
  }

  .prodButtons,
  .userButtons,
  .addButton {
    width: 100px;
    font-size: 18px;
  }
}



@media only screen and (max-width: 720px) {
  .container {
    width: 90%;
  }

  .input {
    width: 100%;
  }

  .prodButtons,
  .userButtons,
  .addButton {
    width: 100px;
    font-size: 16px;
  }

  #admin-head {
    font-size: 30px;
  }

  #footer {
    font-size: 12px;
  }
}


@media only screen and (max-width: 300px) {
  .container {
    width: 95%;
  }

  .input {
    width: 100%;
    font-size: 14px;
  }

  .prodButtons,
  .userButtons,
  .addButton {
    width: 80px;
    font-size: 12px;
  }

  #admin-head {
    font-size: 20px;
  }

  #footer {
    font-size: 10px;
  }
}



</style>













