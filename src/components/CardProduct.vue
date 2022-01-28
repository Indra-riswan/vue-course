<template>
  <div class="cardproduct">
    <div class="card mb-4 shadow card-cus" style="width: 18rem">
      <img :src=" 'img/' + menu.gambar"  class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ menu.harga }}</h5>
        <p class="card-text">
          {{ menu.nama }}
        </p>
            <router-link class="btn btn-primary" :to="'/makanan/'+ menu.id" style="background-color: #4eb883; border: 0;" ><b-icon icon="cart"></b-icon> Pesan!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["menu"],
};
</script>

<style>
</style>