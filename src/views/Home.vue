<template>
  <div class="home">
    <Navbar />
    <Hero />
    <div class="container">

    </div>
     <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h3>Best <strong>Food</strong></h3>
        </div>
        <div class="col ml-auto">
          <router-link
            class="btn btn-success"
            style="background-color: #4eb883; color: #e9f9f4; border: 0"
            to="/"
            ><b-icon icon="eye"></b-icon> Lihat Detail</router-link
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
          <CardProduct :menu="product"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },

  data() {
    return {
      products: [],
    };
  },

  methods: {
    setProduct(data) {
      this.products = data;
    },
  },

  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((Error) => console.log(Error))
  },
};
</script>
