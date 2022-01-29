<template>
  <div class="keranjang">
    <Navbar />
    <br />
    <div class="container">
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