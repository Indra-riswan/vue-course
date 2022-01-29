<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
      <div class="container-fluid">
        <img
          src="../assets/logo.png"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-4" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Halaman Utama</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/makanan">Makanan</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto nav-cus">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang">
                Keranjang
                <b-icon icon="handbag" class="" variant="success"></b-icon>
                <span
                  class="badge badge-success ml-2"
                  style="background-color: #4eb883"
                  >{{ total.length }} </span
                >
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name: "Navbar",

   data() {
    return {
      total: [],
    };
  },

  methods: {
    setJumlah(data){
      this.total = data
    },

    mounted(){
      axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((Error) => console.log(Error))
    }
  }

};
</script>

<style>
</style>