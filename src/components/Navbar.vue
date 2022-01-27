<template>
  <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
  <div class="container-fluid">
    <img src="../assets/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
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
           <span class="badge badge-success ml-2" style="background-color: #4eb883">0</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

</style>