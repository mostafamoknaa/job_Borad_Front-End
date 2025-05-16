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
import { fetchEmployers } from '../Interceptor/getaxiox.js'

const employers = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const limit = 12

const loadEmployers = async (page = 1) => {
  try {
    const res = await fetchEmployers(page, limit)

    
    employers.value = res.data.data
    currentPage.value = res.data.current_page
    totalPages.value = res.data.last_page
  } catch (error) {
    console.error('Failed to load employers:', error)
  }
}

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    loadEmployers(page)
  }
}

onMounted(() => {
  loadEmployers(currentPage.value)
})
</script>

