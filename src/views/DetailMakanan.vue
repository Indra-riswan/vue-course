<template>
  <div class="detailmakanan">
    <Navbar />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-4 mb-4">
        <div class="col">
          <nav
            style="
              --bs-breadcrumb-divider: url(
                &#34;data:image/svg + xml,
                %3Csvgxmlns='http://www.w3.org/2000/svg'width='8'height='8'%3E%3Cpathd='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z'fill='currentColor'/%3E%3C/svg%3E&#34;
              );
            "
            aria-label="breadcrumb"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link class="item" to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link class="item" to="/makanan">Makanan</router-link>
              </li>
              <li class="breadcrumb-item link active" aria-current="page">
                Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Detail makanan -->
      <div class="row">
        <div class="col-md-6 mb-4">
          <img
            :src="'../img/' + product.gambar"
            class="img-thumbnail"
            alt="..."
          />
        </div>
        <div class="col-md-6 mb-4">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ product.kode }}</li>
            <li class="list-group-item">{{ product.nama }}</li>
            <li class="list-group-item">Rp. {{ product.harga }}</li>
          </ul>
          <br />
          <!-- form validation -->
          <form v-on:submit.prevent class="row g-3">
            <div class="col">
              <label for="validationDefault02" class="form-label"
                >Jumlah Pesanan</label
              >
              <input v-model="pesan.jumlah"
                type="number"
                class="form-control"
                id="validationDefault02"
                required
              />
            </div>
          </form>
          <br />
          <!-- text area -->
          <div class="form-floating">
            <textarea v-model="pesan.comments"
              class="form-control"
              placeholder="Tinggalkan Pesan disini"
              id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
          </div>
          <button @click="pesanan"
            type="submit"
            class="btn btn-success"
            style="background-color: #4eb883; color: #e9f9f4; border: 0">
            <b-icon icon="cart"></b-icon> Pesan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "DetailMakanan",
  components: {
    Navbar,
  },

  data() {
    return {
      product: {},
      pesan: {},
      pemesan: {},
    };
  },

  methods: {
    setProduct(data) {
      this.product = data;
    },
    setPemesan(data){
      this.pemesan = data;
    },
    pesanan() {
      if (this.pesan.jumlah) {
        // this.pesan.produk = [
        //   this.product.nama,
        //   this.product.harga,
        // ]
        this.pesan.produk = this.product
        axios
        .post("http://localhost:3000/keranjangs", this.pesan)
        .then(() => alert('berhasil memesan'))
        .catch((err) => console.log(err))
        this.$router.push({path: '/makanan'})
      } else {
        alert('silahkan masukan jumlah pesanan')
      }
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((Error) => console.log(Error));
  },
};
</script>

<style></style>
