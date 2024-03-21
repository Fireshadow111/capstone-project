import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router'
axios.defaults.withCredentials = true
const baseUrl = 'http://localhost:9001'

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
   user: null,
   cart: null,
    login: false,
    admin: null

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

    async addProduct({commit}, add) {
      try {
        const {data} = await axios.post(baseUrl+'/products', add);
        commit("setProducts", data);
        setTimeout(() => {
          window.location.reload();
        }, 1000); 
      } catch (error) {
        console.error('Error adding product:', error);
      }
    },
    
    


    async deleteProd({commit},prod_ID){
      try {
        await axios.delete(baseUrl+'/products/'+prod_ID)
        setTimeout(() => {
          window.location.reload();
        }, 1000); 
      } catch (error) {
        console.error('Error deleting product:', error);
      }
       
    },

    async editProd({commit},update){
      try {
         await axios.patch(baseUrl+'/products/'+update.id,update)
         setTimeout(() => {
          window.location.reload();
        }, 1000); 
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

    async getUserRole({ commit }) {
      try {
        const response = await axios.get(baseUrl + '/users/admin');
        const {isAdmin} = response.data; 
        console.log(isAdmin);
        commit("setLogin", isAdmin); 
      } catch (error) {
        console.error('Error fetching user role:', error);
        commit("setLogin", false); 
      }
    },

    async editUserProfile({commit},edit){
      const {data} = await axios.patch(baseUrl+'/users/user',edit)
      commit("setUser", data);
    },

    async addUser({commit},add) {
      try {
         const {data} = await axios.post(baseUrl+'/users',add)
     commit("setUsers", data);
     setTimeout(() => {
      window.location.reload();
    }, 1000); 
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    async deleteUser({commit},user_ID){
      try {
          await axios.delete(baseUrl+'/users/'+user_ID)
          setTimeout(() => {
            window.location.reload();
          }, 1000); 
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    },
    async editUser({commit},update){
      try {
       await axios.patch(baseUrl+'/users/'+update.id,update)
       setTimeout(() => {
        window.location.reload();
      }, 1000);   
      } catch (error) {
        console.error('Error edit user:', error);
      }
    },


    async register({ commit }, newUser) {
      try {
          let { data } = await axios.post(baseUrl + '/register', newUser);
          commit('setUsers', data); 
          return { success: true, message: 'Registration successful' };
      } catch (error) {
          console.error('Error adding user:', error);
          return { success: false, message: 'Registration failed. Please try again.' };
      }
  },

    
    async loginUser({commit}, currentUser){
      let {data} = await axios.post(baseUrl + '/login', currentUser)
      $cookies.set('jwt', data.token)
      alert(data.msg)
      router.push('/')
      commit('setLogin', true)
      setTimeout(()=> {
        window.location.reload()
      },1000)
    },


    async logOut(context){
      let cookies = cookies.keys()
      console.log(cookies)
      cookies.remove('jwt')
      window.location.reload()
      let { data } = await axios.delete(baseUrl + '/logout')
      alert(data.msg)
    },
    

    async addCart({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/cart/user',newProduct)
      commit("setCart",alert(data.msg));
     },


    async addCartByAdmin({commit},newProduct){
      const {data} = await axios.post(baseUrl+'/cart',newProduct)
      commit("setCart",alert(data.msg));
     },


     async getUserCart({commit}){
      const {data} =  await axios.get(baseUrl+'/cart/user')
      commit("setCart",data);
     },async getCarts({ commit }) {
      try {
        const response = await axios.get(baseUrl + '/cart');
        const data = response.data;
        commit("setCart", data);
      } catch (error) {
        console.error('Error fetching carts:', error);
        commit("setCart", []);
      }
    },    


     async editCart({commit},update){
      const {data} = await axios.patch(baseUrl+'/cart/'+update.id,update)
      commit("setCart", data);
    },


    async deleteCart({commit},user_ID){
      const {data} = await axios.delete(baseUrl+'/cart/'+user_ID)
      commit("setCart", data);
    },


    async deleteCartItem({commit},prod_ID){
      const {data} = await axios.delete(baseUrl+'/cart/user/'+prod_ID)
      commit("setCart", data);
    },

    
    async checkout({commit}){
      const {data} = await axios.delete(baseUrl+'/cart')
      commit("setCart", alert(data.msg))
      router.push('/products');
    }
  },

  modules: {
  }
})