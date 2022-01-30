<template>
<!-- navbar -->
  <div>
    <b-navbar toggleable="lg" type="light" variant="transparent">
      <div class="container">
        <b-navbar-brand href="#">
          <img
            src="../assets/logo.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
        /></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Halaman Utama</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/makanan">Makanan</router-link>
            </li>
          </ul>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <ul class="navbar-nav ml-auto nav-cus">
              <li class="nav-item">
                <router-link class="nav-link" to="/keranjang">
                  Keranjang
                  <b-icon icon="handbag" class="" variant="success"></b-icon>
                  <span
                    class="badge badge-success ml-2"
                    style="background-color: #4eb883"
                    >{{ total.length }}
                  </span>
                </router-link>
              </li>
            </ul>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
  <!-- end navbar -->
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",

  data() {
    return {
      total: [],
    };
  },

  methods: {
    setJumlah(data) {
      this.total = data;
    },

    mounted() {
      axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setJumlah(response.data))
        .catch((Error) => console.log(Error));
    },
  },
};
</script>

<style>
</style>