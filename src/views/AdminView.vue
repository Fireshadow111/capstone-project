<template>

<div>


  <input type="text" placeholder="url" class="form-control my-2" v-model="prod_URL" required>
          <input type="text"  placeholder="name" class="form-control my-2" v-model="prod_Name" required>
          <input type="text" placeholder="category" class="form-control my-2" v-model="category" required>
          <input type="number" placeholder="price" class="form-control my-2" v-model="price" required>
    <button @click="addProduct()">Add Button</button>

    <h1></h1>

    <table class="table">
      <tr class="thead">
        <th>id</th>
        <th>URL</th>
        <th>name</th>
        <th>category</th>
        <th>price</th>
      </tr>
      <tbody v-for="item in products" :key="item.id" >
        <td>{{item.prod_ID}}</td>
          <td><img :src="item.prod_URL"></td>
          <td>{{item.prod_Name}}</td>
          <td>{{item.category}}</td>
          <td>{{item.price}}</td>
        <button @click="editProd(item.prod_ID)">Edit</button>
        <button @click="deleteProd(item.prod_ID)">Delete</button>
      </tbody>
    </table>





    
  
    <input type="text" placeholder="Name" class="form-control my-2" v-model="user_Name" required>
    <input type="text"  placeholder="Email" class="form-control my-2" v-model="user_Email" required>
    <input type="text" placeholder="Pass" class="form-control my-2" v-model="user_Pass" required>
    <input type="text" placeholder="Role" class="form-control my-2" v-model="user_Role" required>
    <button @click="addUser()">Add Button</button>

    <h1></h1>


    <table class="table">
      <tr class="thead">


        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>pass</th>
        <th>role</th>

      </tr>
      <tbody v-for="item in users" :key="item.id" >
        <td>{{item.user_ID}}</td>
        <td>{{item.user_Name}}</td>
        <td>{{item.user_Email}}</td>
        <td>{{item.user_Pass}}</td>
        <td>{{item.user_Role}}</td>
        <button @click="editUser(item.user_ID)">Edit</button>
        <button @click="deleteUser(item.user_ID)">Delete</button>
      </tbody>
    </table>
    
  </div>


  
  </template>
  <script>
  export default {
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
      addProduct(){
        this.$store.dispatch('addProduct',this.$data)
      },
  
      deleteProd(prod_ID) {
        this.$store.dispatch('deleteProd',prod_ID)
      },
      editProd(prod_ID){
        let edit = {
          id:prod_ID,
          prod_URL: this.prod_URL,
          prod_Name: this.prod_Name,
          category:this.category,
          price:this.price
        }
        this.$store.dispatch('editProd',edit)
      },

      addUser(){
      this.$store.dispatch('addUser',this.$data)
    },
    deleteUser(user_ID) {
      this.$store.dispatch('deleteUser',user_ID)
    },
    editUser(user_ID){
      let edit = {
      id:user_ID,
      user_Name: this.user_Name,
     user_Email: this.user_Email.Email,
      user_Pass: this.user_Pass,
      user_Role: this.user_Role,
      }
      this.$store.dispatch('editUser',edit)

    }
    },
  
    computed: {
      products(){
        return this.$store.state.products
      },
      getProducts(){
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
  <style>
  .table {
    width: 96%;
    border-collapse: collapse;
    margin-top: 20px;
    align-content: center;
    /* margin: 2.3rem; */
    
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 1px;
    text-align: left;
  }
  
  .thead {
    background-color:inherit;
    color: white;
  }
  
  .table img {
    max-width:400px;
    max-height: 50px;
    border-radius: 5px;
    background-color: inherit;
  }
  
  #edit, #delete {
    color: white;
   background-color: inherit;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 2px;
    cursor: pointer;
    border-radius: 3px;
    margin-top: 10px;
  }
  
  .table #edit:hover {
    background-color: #39983d;
  }
  .table #delete:hover {
    background-color: #dc5957;
  }
  
  #add{
    margin-left: 2.5rem;
    display: grid;
  }

  .d-flex{
  justify-content: space-between
}

@media screen and (max-width: 1080px) {
    .container-fluid {
      padding: 0 15px; 
    }

    .table {
      width: 100%;
    }

    .d-flex {
      flex-direction: column;
    }

    #add {
      margin-left: 0; 
    }
  }

  @media screen and (max-width: 720px) {
    .container-fluid {
      padding: 0 10px; 
    }

    .table {
      width: 100%;
    }

    .d-flex {
      flex-direction: column;
    }

    #add {
      margin-left: 0; 
    }

    .modal-dialog {
      max-width: 100%;
    }
  }

  @media screen and (max-width: 300px) {
    .container-fluid {
      padding: 0 5px; 
    }

    .table {
      width: 100%;
    }

    .d-flex {
      flex-direction: column;
    }

    #add {
      margin-left: 0; 
    }

    .modal-dialog {
      max-width: 100%;
    }

    .modal-body input {
      width: 100%;
    }

  }


  </style>
