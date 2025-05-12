<template>
  <div class="container-fluid p-0">
    <HeaderComponent v-if="!isEmployeerPage && !isAdminPage" />
    
    <!-- Main Content -->
    <router-view />
    
    <FooterComponent v-if="!isEmployeerPage && !isAdminPage" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from "./components/header.vue";
import FooterComponent from "./components/footer.vue";

const route = useRoute()

const isEmployeerPage = computed(() => route.path.startsWith('/employeer'))
const isAdminPage = computed(() => route.path.startsWith('/admin'))
</script>
