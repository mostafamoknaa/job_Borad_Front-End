<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold">Browse Employers</h2>

    <!-- 🔍 Search input -->
    <div class="mb-4">
      <input
        type="text"
        class="form-control"
        placeholder="Search by employer name..."
        v-model="searchQuery"
      />
    </div>

    <!-- 🔁 Cards -->
    <div class="row g-4 mb-4">
      <EmployerCard
        v-for="employer in employers"
        :key="employer.id"
        :employer="employer"
      />
    </div>

    <!-- 📄 Pagination -->
    <nav aria-label="Employer pagination" v-if="totalPages > 1">
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
import { ref, watch, onMounted } from 'vue'
import EmployerCard from '../components/EmployerCard.vue'

const employers = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const limit = 6
const searchQuery = ref('')

const fetchEmployers = async (page = 1, search = '') => {
  try {
    const url = new URL('http://127.0.0.1:8000/api/employers')
    url.searchParams.set('per_page', limit)
    url.searchParams.set('page', page)
    if (search) url.searchParams.set('search', search)

    const res = await fetch(url)
    const data = await res.json()

    employers.value = data.data
    totalPages.value = data.meta?.last_page || 1
  } catch (error) {
    console.error('Failed to fetch employers:', error)
  }
}

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    fetchEmployers(page, searchQuery.value)
  }
}

// 🔍 search listener
watch(searchQuery, (newValue) => {
  currentPage.value = 1
  fetchEmployers(1, newValue)
})

// on page load
onMounted(() => {
  fetchEmployers()
})
</script>
