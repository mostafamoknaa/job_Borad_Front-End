<template>
  <div class="container-fluid p-0">
    <header-component />
    <router-view />
  </div>
</template>

<script setup>
import HeaderComponent from "./components/header.vue";
</script>
