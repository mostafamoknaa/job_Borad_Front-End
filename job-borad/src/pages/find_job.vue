<template>
  <div class="container my-5">
    <h2 class="mb-4">Find Jobs</h2>

    <!-- Filters Section -->
    <div class="row mb-4">
      <div class="col-md-4 mb-2">
        <input type="text" class="form-control" v-model="searchQuery" placeholder="Search by title or company" />
      </div>
      <div class="col-md-3 mb-2">
        <select class="form-select" v-model="category">
          <option value="">All Categories</option>
          <option value="development">Development</option>
          <option value="design">Design</option>
          <option value="marketing">Marketing</option>
        </select>
      </div>
      <div class="col-md-2 mb-2">
        <button class="btn btn-primary w-100" @click="filterJobs">Search</button>
      </div>
    </div>

    <!-- Job Cards -->
    <div class="row">
    <div
        v-for="job in filteredJobs"
        :key="job.id"
        class="col-md-6 col-lg-4 mb-4"
    >
        <div class="card h-100 shadow-sm rounded-4 border-0">
        <div class="card-body">
            <h5 class="card-title fw-semibold mb-1">{{ job.title }}</h5>
            <p class="text-muted mb-1">{{ job.company }}</p>
            <div class="d-flex align-items-center small text-secondary mb-3">
            <i class="bi bi-geo-alt-fill me-1"></i> {{ job.location }}
            <span class="mx-2">·</span>
            <i class="bi bi-clock-fill me-1"></i> {{ job.type }}
            </div>
            <router-link
            :to="`/single`"
            class="btn btn-outline-primary btn-sm rounded-pill px-3"
            >
            View Details
            </router-link>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  transition: transform 0.2s ease-in-out;
}
.card:hover {
  transform: translateY(-3px);
}
</style>


<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const searchQuery = ref('')
const category = ref('')
const jobs = ref([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3001/jobs')
    console.log('Fetched jobs:', res.data)
    jobs.value = res.data
  } catch (err) {
    console.error('Failed to load jobs:', err)
  }
})


const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = category.value === '' || job.category === category.value

    return matchesSearch && matchesCategory
  })
})


function filterJobs() {
  // This just triggers computed logic
}
</script>


<style scoped>
.card {
  border-radius: 1rem;
}
</style>
