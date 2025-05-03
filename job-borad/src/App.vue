<template>
  <div class="container-fluid p-0">
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script setup>
import HeaderComponent from "./components/header.vue";
import FooterComponent from "./components/footer.vue";
</script>
