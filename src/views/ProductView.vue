<template>

<!-- <section class="container mt-5">
      <Card class="card ml-0 mt-5"  v-for="item in product" :key="item.prod_ID">
        <div class="card-body">
          <div class="row justify-content-center align-items-center text-center">
            <div class="md-6"><img :src="item.prod_URL" class="img-fluid w-50 mt-5">
            </div>
            <div class="md-6 ">
              <h2 class="text-uppercase card-title card-title mt-5">
               {{ item.prod_Name }}
              </h2>
              <h4 class="card-text">
              {{ item.category}}
              </h4>
              <h5>{{ item.price }}</h5>
              <router-link :to="{name: 'products', params: {id:item.prod_ID}}"><a class="btn">Go back to Products</a></router-link>
              <a class="btn " @click="purchaseClicked">Purchase</a>
            </div>
          </div>
        </div>
      </Card>

    </section> -->
   
</template>
<script>
export default {

    data(){
        return{
            prod_URL:null,
          prod_Name: null,
          category:null,
          price:null
          
        }
      },

      methods: {
    purchaseClicked() {
 
      alert('Thank you for your purchase!'); 
    },
  },
    
      computed: {
        product(){
          return this.$store.state.product
        },
        getProduct(){
            console.log(this.$route.params.id);
          return this.$store.dispatch('getProduct', this.$route.params.id)
        },
    
        
      },
      mounted(){
        return this.getProduct

      },
    
}
</script>
<style>
    
</style>