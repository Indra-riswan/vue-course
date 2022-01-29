<template>
  <div class="makanan">
    <Navbar />
    <div class="container">
      <!-- Makanan -->
      <div class="row mt-4">
        <div class="col">
          <h2>Menu <strong>Makanan</strong></h2>
        </div>
      </div>
      <!-- Serach input -->
      <div class="row">
        <div class="col">
          <div class="input-group mb-3">
            <!-- model serach -->
            <input v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari Makanan"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              @keyup="searchfood"
              />
              <!-- end model serach -->
            <span class="input-group-text" id="basic-addon2"
              ><b-icon icon="search"></b-icon> Search</span
            >
          </div>
        </div>
      </div>
      <!-- Card Product -->
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 mt-4"
            v-for="product in products"
            :key="product.id">
            <CardProduct :menu="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Makanan",
  components: {
    Navbar,
    CardProduct,
  },

  data() {
    return {
      products: [],
      search: '',
    };
  },

  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchfood() {
    axios
    .get("http://localhost:3000/products?q="+this.search)
    .then((response) => this.setProduct(response.data))
    .catch((Error) => console.log(Error))
  },
  },

  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch((Error) => console.log(Error));
  },
};
</script>

<style>
</style>