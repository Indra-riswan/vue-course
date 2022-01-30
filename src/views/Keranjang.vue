<template>
  <div class="keranjang">
    <Navbar />
    <br />
    <div class="container">
      <!-- tabel -->
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Gambar</th>
                <th scope="col">Nama</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Total</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjangs, index) in keranjang" :key="keranjangs.id">
                <td>{{ index + 1 }}</td>
                <td align="center">
                  <img
                    :src="'../img/' + keranjangs.produk.gambar"
                    width="200"
                    class="rounded float-start"
                    alt=""
                  />
                </td>
                <td>{{ keranjangs.produk.nama }}</td>
                <td>{{ keranjangs.comments ? keranjangs.comments : "-" }}</td>
                <td align="center">{{ keranjangs.jumlah }}</td>
                <td>{{ keranjangs.produk.harga }}</td>
                <td>{{ keranjangs.jumlah * keranjangs.produk.harga }}</td>
                <td align="center" class="text-success">
                  <button
                    @click="hapusKeranjang(keranjangs.id)"
                    class="btn btn-success"
                    style="background-color: #4eb883; color: #e9f9f4; border: 0"
                  >
                    <b-icon-trash></b-icon-trash> Hapus
                  </button>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Total Harga : {{ totalHarga }}</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- end tabel -->

      <!-- checkout -->
      <div class="row justify-content-end mb-4">
        <div class="col-md-4">
          <form v-on:submit.prevent class="row g-3">
            <label for="validationDefault02" class="form-label"
              >Nama Pemesan</label
            >
            <input
              v-model="checkout.nama"
              type="text"
              class="form-control"
              id="validationDefault02"
              required
            />
            <label for="validationDefault02" class="form-label">No Meja</label>
            <input
              v-model="checkout.noMeja"
              type="number"
              class="form-control"
              id="validationDefault02"
              required
            />
            <button @click="checkoutPesanan"
            type="submit"
            class="btn btn-success mt-2"
            style="background-color: #4eb883; color: #e9f9f4; border: 0">
            <b-icon icon="cart"></b-icon> Checkout
          </button>
          </form>
        </div>
      </div>
      <!-- end checkout -->

    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  name: "Keranjang",
  components: {
    Navbar,
  },

  data() {
    return {
      keranjang: [],
      checkout: {},
    };
  },

  methods: {
    setKeranjang(data) {
      this.keranjang = data;
    },

    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          alert("sukses hapus pesanan");
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjang(response.data))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },

    checkoutPesanan(){
     if(this.checkout.nama && this.checkout.noMeja){
        this.checkout.keranjang = this.keranjang
      axios
      .post("http://localhost:3000/pesanans",this.checkout)
      .then(() => {
        alert("sukses Checkout Barang")
      this.$router.push({path: "/checkout"})

      this.keranjang.map(function(item){
        return axios
        .delete("http://localhost:3000/keranjangs/" + item.id)
        .catch((err) => console.log(err))
      })
      })
      .catch((err) => console.log(err))
     }else {
       alert("Lengkapi Kolom Checkout")
     }
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setKeranjang(response.data))
      .catch((err) => console.log(err));
  },

  computed: {
    totalHarga() {
      return this.keranjang.reduce(function (items, data) {
        return items + data.produk.harga * data.jumlah;
      }, 0);
    },
  },
};
</script>

<style>
</style>