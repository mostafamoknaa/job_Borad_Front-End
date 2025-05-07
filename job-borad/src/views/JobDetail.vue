<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const job = ref(null)

onMounted(() => {
  // You can fetch from API instead
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Google',
      location: 'Remote',
      description: 'Full job description for frontend dev.',
      type: 'Full-time',
      tags: ['Vue.js', 'Bootstrap'],
      logo: 'https://placehold.co/64x64'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Meta',
      location: 'NYC',
      description: 'Full job description for backend dev.',
      type: 'Part-time',
      tags: ['Node.js', 'MongoDB'],
      logo: 'https://placehold.co/64x64'
    }
  ]

  job.value = jobs.find(j => j.id === Number(route.params.id))
})
</script>

<template>
  <div class="container py-5">
    <div v-if="job" class="card p-4 shadow-sm">
      <div class="d-flex align-items-center mb-3">
        <img :src="job.logo" alt="logo" class="rounded me-3" width="64" height="64" />
        <div>
          <h3>{{ job.title }}</h3>
          <p class="text-muted">{{ job.company }} · {{ job.location }}</p>
        </div>
      </div>
      <p class="mb-3">{{ job.description }}</p>
      <div>
        <span v-for="tag in job.tags" :key="tag" class="badge bg-primary me-2">{{ tag }}</span>
      </div>
    </div>
    <div v-else class="alert alert-warning">Job not found.</div>
  </div>
</template>
