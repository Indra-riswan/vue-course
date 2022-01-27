<template>
  <div class="container">
      <div class="row hero-row">
          <div class="col hero-col">
              <h2><strong>Menu Makanan Favorit</strong><br>di warung ini</h2>
              <p>Pilih dan Pesan Makanan Favorit Anda</p>
              <router-link class="btn btn-lg btn-success cus-btn" to="/"><b-icon icon="arrow-right"></b-icon> Pesan</router-link>
          </div>
          <div class="col">
              <img src="../assets/img/ilustrasi.png" width="100%" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Hero'
}
</script>

<style>

</style>