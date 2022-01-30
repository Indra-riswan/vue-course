<template>
  <div class="checkout">
      <Navbar/>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col text-center">
                  <img src="../assets/img/menunggu.png" width="300" alt="">
                  <h2><strong>Sukses !!</strong></h2>
                  <h4>Makanan Anda Sedang di Proses <br> Mohon Menuggu <br> <strong>Terimakasih!!</strong></h4>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'Checkout',
    components: {
        Navbar
    }
}
</script>

<style>

</style>