<template>
    <div>

        <Card class="card ml-0 mt-5"  v-for="item in product" :key="item.prod_ID">
        <div class="card-body">
          <div class="row justify-content-center align-items-center text-center">
            <div class="md-6"><img :src="item.prod_URL" class="img-fluid w-50 mt-5">
              <!-- <img
                src="https://i.ibb.co/QNW9Hj1/634970c7cbeed5644711b937-62fd57ccd6890f25796f92f9-Adobe-Stock-295461823-removebg-preview.png"
                alt="Code-Image"
                loading="lazy"
                class="img-fluid"
              /> -->
            </div>
            <div class="md-6 ">
              <h2 class="text-uppercase card-title card-title mt-5">
               {{ item.prod_Name }}
              </h2>
              <h4 class="card-text">
              {{ item.category}}
              </h4>
              <h5>{{ item.amount }}</h5>
              <router-link :to="{name: 'products', params: {id:item.prod_ID}}"><a class="btn">Go back to Products</a></router-link>
              <a class="btn " @click="purchaseClicked">Purchase</a>
            </div>
          </div>
        </div>
      </Card>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>