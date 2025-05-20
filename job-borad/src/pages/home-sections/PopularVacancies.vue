<template>
  <section class="container my-5 gap-2">
    <h2 class="fw-bold mt-5 fs-1">Most Popular Vacancies</h2>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 my-5"
    >
      <div v-for="(vacancy, index) in vacancies" :key="index" class="col">
        <div class="card p-4 h-100">
          <h6 class="fw-semibold mb-1">
            <RouterLink
              :to="`/job/${encodeURIComponent(vacancy.id)}`"
              class="link"
            >
              {{ vacancy.title }}
            </RouterLink>
          </h6>
          <p class="text-muted small mb-0">
            {{ vacancy.positions.toLocaleString() }} Open Positions
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiClient from "../../Interceptor/getaxiox";

const vacancies = ref([]);

onMounted(async () => {
  try {
    const res = await apiClient.get("/popular-vacancies");
    console.log(res.data);
    vacancies.value = res.data;
  } catch (error) {
    console.log(error);
    console.error("Error fetching vacancies:", error);
  }
});

// const vacancies = [
//   { title: "Anesthesiologists", positions: 45904 },
//   { title: "Surgeons", positions: 50364 },
//   { title: "Obstetricians-Gynecologists", positions: 4339 },
//   { title: "Orthodontists", positions: 20079 },
//   { title: "Maxillofacial Surgeons", positions: 74875 },
//   { title: "Software Developer", positions: 43359 },
//   { title: "Psychiatrists", positions: 18599 },
//   { title: "Data Scientist", positions: 28200, link: "#" },
//   { title: "Financial Manager", positions: 61391 },
//   { title: "Management Analysis", positions: 93046 },
//   { title: "IT Manager", positions: 50963 },
//   { title: "Operations Research Analysis", positions: 16627 },
// ];
</script>

<style scoped>
.card {
  background-color: #f1f5f9;
  transition: all 0.3s ease-in-out;
}

.card.active {
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.card:hover {
  transform: translateY(-5px);
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.link {
  font-size: 1.08rem;
  text-decoration: none;
  color: black;
}
.link:hover {
  font-size: 1.15rem;
  text-decoration: underline;
  color: #0a88ca;
  cursor: pointer;
}
</style>
