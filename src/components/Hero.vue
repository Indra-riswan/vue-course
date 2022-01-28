<template>
  <div class="container">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row hero-row">
        <div class="col-md-6 hero-col">
          <h2><strong>Menu Makanan Favorit</strong><br />di warung ini</h2>
          <p>Pilih dan Pesan Makanan Favorit Anda</p>
          <router-link class="btn btn-lg btn-success cus-btn" to="/makanan"
            ><b-icon icon="arrow-right"></b-icon> Pesan</router-link
          >
        </div>
        <div class="col-md-6">
          <img src="../assets/img/ilustrasi.png" width="100%" alt="" />
        </div>
      </div>
    </div>
    <!-- mobile -->
    <div class="d-md-none d-sm-block">
      <div class="row mt-4 hero-row">
        <div class="col-md-6">
          <img src="../assets/img/ilustrasi.png" width="100%" alt="" />
        </div>
        <div class="col-md-6 hero-col">
          <h2><strong>Menu Makanan Favorit</strong><br />di warung ini</h2>
          <p>Pilih dan Pesan Makanan Favorit Anda</p>
          <router-link class="btn btn-lg btn-success cus-btn" to="/makanan"
            ><b-icon icon="arrow-right"></b-icon> Pesan</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
