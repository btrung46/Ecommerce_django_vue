<template>
  <div class="HomeView">
    <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Beegs_phone
            </p>
            <p class="subtitle">
                The best Phone store online
            </p>
        </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">New Phone</h2>
      </div>
      <br>
      <div class="column is-3"
        v-for="product in products"
        v-bind:key="product.id"
        v-bind:product="product"
      >
        <div class="box">
          <figure class="image mb-4">
            <img :src="product.get_thumbnail">
          </figure>
          <h3 class="is-size-4">{{ product.name }}</h3>
          <p class="is-size-6 has-text-gray">${{ product.price }}</p>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data(){
    return{
      products:[]
    }
  },
  components: {
  },
  mounted(){
    this.getproducts()
  },
  methods:{
    getproducts(){
      axios
          .get('/api/v1/products/')
          .then(response =>{
            this.products = response.data
          })
          .catch(error =>{
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
.image{
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>
