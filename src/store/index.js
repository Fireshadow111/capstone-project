import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
axios.defaults.withCredentials = true
const baseUrl = 'https://capstone-project-mthn.onrender.com'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
   user: null,
   cart: null,
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

    setUser(state,data){
      state.user = data;
    },

    setCart(state, data) {
      state.cart = data;
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
    async getUser({commit},prod_ID){
      const {data} =  await axios.get(baseUrl+'/users/'+prod_ID)
      console.log(data);
      commit("setUser", data);
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

    
     async loginUser({commit}, currentUser){
      let {data} = await axios.post(baseUrl + '/login', currentUser)
      $cookies.set('jwt', data.token)
      alert(data.msg)
      router.push('/')
      // window.location.reload()
      commit('setLogin', true)
    },
    async logOut(context){
      let cookies = cookies.keys()
      console.log(cookies)
      cookies.remove('jwt')
      window.location.reload()
      let { data } = await axios.delete(baseUrl + '/logout')
      alert(data.msg)
    },
    //cart
    async addCart({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/cart',newProduct)
      commit("setCart",alert(data.msg));
     },
     async getCarts({commit}){
      const {data} =  await axios.get(baseUrl+'/cart')
      commit("setCart",data);
     },
     async editCart({commit},update){
      const {data} = await axios.patch(baseUrl+'/cart/'+update.id,update)
      commit("setCart", data);
    },
    async deleteCart({commit},user_ID){
      const {data} = await axios.delete(baseUrl+'/cart/'+user_ID)
      commit("setCart", data);
    }
  },

  modules: {
  }
})