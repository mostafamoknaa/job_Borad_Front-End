<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold">Browse Employers</h2>

    <div class="row g-4 mb-4">
      <EmployerCard
        v-for="employer in employers"
        :key="employer.id"
        :employer="employer"
      />
    </div>

    <nav aria-label="Employer pagination">
      <ul class="pagination justify-content-center">
        <li
          class="page-item"
          :class="{ disabled: currentPage === 1 }"
          @click="changePage(currentPage - 1)"
        >
          <a class="page-link" href="#">Previous</a>
        </li>

        <li
          v-for="page in totalPages"
          :key="page"
          class="page-item"
          :class="{ active: page === currentPage }"
          @click="changePage(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>

        <li
          class="page-item"
          :class="{ disabled: currentPage === totalPages }"
          @click="changePage(currentPage + 1)"
        >
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EmployerCard from '../components/EmployerCard.vue'
import apiClient from '../Interceptor/getaxiox';


const employers = ref([])

onMounted ( async () => {
  try {
    const res = await apiClient.get('/employers')  
    employers.value = res.data.data  
    console.log(res);
    console.log(res.data);  
  } catch (error) {
    console.error('Failed to load employers:', error)
  }
});

</script>


 