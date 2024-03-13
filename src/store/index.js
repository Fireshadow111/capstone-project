import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = 'https://capstone-project-mthn.onrender.com'

export default createStore({
  state: {
    products: null,
    users: null,
    product: null,
    login: false

  },
  getters: {
  
  },
  mutations: {
    setProducts(state, data){
      state.products = data
    },

    setProduct(state, data){
      state.product = data
    },

    setUsers(state, data){
      state.users = data
    },

    setLogin(state,data){
      state.login = data
    }
  },
  actions: {

    async getProducts({ commit }) {
      try {
        console.log('hello');
        const {data} = await axios.get(baseUrl+'/products');
        console.log('after axios');
        commit("setProducts", data);
        console.log('after setting');
        
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },

    async getProduct({commit},prod_ID){
      try{const {data} = await axios.get(baseUrl+'/products/'+prod_ID)
      commit("setProduct", data);
    }catch(error){
      console.error('Error fetching product:', error);
    } 
    },

    async addProduct({commit},add) {
      try {
         const {data} = await axios.post(baseUrl+'/products',add)
     commit("setProducts", data);
     window.location.reload();
      } catch (error) {
        console.error('Error adding product:', error);
      }
    
     
    },

    async deleteProd({commit},prod_ID){
      try {
        await axios.delete(baseUrl+'/products/'+prod_ID)
      window.location.reload();
      } catch (error) {
        console.error('Error deleting product:', error);
      }
       
    },

    async editProd({commit},update){
      try {
         await axios.patch(baseUrl+'/products/'+update.id,update)
      window.location.reload();
      } catch (error) {
        console.error('Erro editing product:', error);
      }
    },



    async getUsers({ commit }) {
      try {
        const {data} = await axios.get(baseUrl+'/users');
        commit("setUsers", data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async getUser({commit}){
      try {
        await axios.get(baseUrl+'/users')
      } catch (error) {
        console.error('Error getting user:', error);
      }
    },
    async addUser({commit},add) {
      try {
         const {data} = await axios.post(baseUrl+'/users',add)
     commit("setUsers", data);
     window.location.reload();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    async deleteUser({commit},user_ID){
      try {
          await axios.delete(baseUrl+'/users/'+user_ID)
      window.location.reload();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async editUser({commit},update){
      try {
       await axios.patch(baseUrl+'/users/'+update.id,update)
      window.location.reload();  
      } catch (error) {
        console.error('Error edit user:', error);
      }
    },
  },

  modules: {
  }
})