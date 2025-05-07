<template>
  <div class="container my-5" v-if="job">
    <div class="card p-4 shadow-sm rounded-4">
      <h2 class="mb-2">{{ job.title }}</h2>
      <h5 class="text-muted">{{ job.company }}</h5>

      <div class="d-flex align-items-center text-secondary mb-3">
        <i class="bi bi-geo-alt-fill me-1"></i> {{ job.location }}
        <span class="mx-2">·</span>
        <i class="bi bi-clock-fill me-1"></i> {{ job.type }}
      </div>

      <hr />
      <p><strong>Category:</strong> {{ job.category }}</p>
      <p><strong>Description:</strong></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae orci at orci...</p>

      <router-link to="/find-job" class="btn btn-outline-secondary mt-3 rounded-pill px-4">
        ← Back to Jobs
      </router-link>
    </div>
  </div>

  <div v-else class="text-center mt-5">
    <div class="spinner-border" role="status"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const job = ref(null)

onMounted(async () => {
  const res = await axios.get(`http://localhost:3000/jobs/${route.params.id}`)
  job.value = res.data
})
</script>
