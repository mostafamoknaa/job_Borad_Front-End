<template>
  <div class="container my-5">
    <h2 class="mb-4 fs-1">Most Popular Vacancies</h2>
    <div class="row g-4">
      <div class="col-md-3" v-for="vacancy in vacancies" :key="vacancy.title">
        <div class="vacancy-item p-3 rounded">
          <h5 class="mb-1">{{ vacancy.title }}</h5>
          <p class="text-muted mb-0">{{ vacancy.positions }} Open Positions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const vacancies = ref([
  { title: "Anesthesiologists", positions: "45,904" },
  { title: "Surgeons", positions: "50,364" },
  { title: "Obstetricians-Gynecologists", positions: "4,339" },
  { title: "Orthodontists", positions: "20,079" },
  { title: "Maxillofacial Surgeons", positions: "74,875" },
  { title: "Software Developer", positions: "143,359" },
  { title: "Psychiatrists", positions: "18,596" },
  { title: "Data Scientist", positions: "28,200" },
  { title: "Financial Manager", positions: "61,391" },
  { title: "Management Analysis", positions: "93,046" },
  { title: "IT Manager", positions: "50,863" },
  { title: "Operations Research Analysis", positions: "16,627" }
]);
</script>

<style scoped>
.vacancy-item {
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;
}

.vacancy-item:hover {
  background-color: #e9ecef;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
}

h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

p {
  font-size: 0.9rem;
}
</style>