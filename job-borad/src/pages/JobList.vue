<script setup>
import axios from 'axios'
import JobCard from '@/components/JobCard.vue'
import FilterSidebar from '@/components/FilterSidebar.vue'
import Pagination from '@/components/Pagination.vue'
import { ref, computed, onMounted } from 'vue'

const jobs = ref([])
const selectedType = ref('All')
const searchQuery = ref('')
const sortKey = ref('title')

const filteredJobs = computed(() => {
  return jobs.value
    .filter(job => selectedType.value === 'All' || job.type === selectedType.value)
    .filter(job => job.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    .sort((a, b) => a[sortKey.value].localeCompare(b[sortKey.value]))
})

function onTypeChange(type) {
  selectedType.value = type
}

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/jobs')
  jobs.value = res.data
})
</script>

<template>
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-md-4">
        <input
          v-model="searchQuery"
          class="form-control"
          placeholder="Search job titles..."
        />
      </div>
      <div class="col-md-4">
        <select class="form-select" v-model="sortKey">
          <option value="title">Sort by Title</option>
          <option value="company">Sort by Company</option>
        </select>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-3">
        <FilterSidebar @type-change="onTypeChange" />
      </div>
      <div class="col-lg-9">
        <JobCard
          v-for="job in filteredJobs"
          :key="job.id"
          :job="job"
        />
        <Pagination />
      </div>
    </div>
  </div>
</template>
