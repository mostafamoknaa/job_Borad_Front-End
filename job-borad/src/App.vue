<template>
  <div class="container-fluid p-0">
    <HeaderComponent v-if="!isEmployeerPage" />
    <router-view />
    <FooterComponent v-if="!isEmployeerPage" />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from "./components/header.vue";
import FooterComponent from "./components/footer.vue";

const route = useRoute()

const isEmployeerPage = computed(() => route.path.includes('employeer'))
</script>
