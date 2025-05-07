<template>
  <div class="container my-5" v-if="job">
    <h2 class="mb-4">Apply for {{ job.title }} at {{ job.company }}</h2>

    <form @submit.prevent="submitApplication" class="card p-4 shadow-sm rounded-4">
      <div class="mb-3">
        <label class="form-label">Full Name</label>
        <input v-model="form.name" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="form.email" type="email" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Cover Letter</label>
        <textarea v-model="form.message" rows="4" class="form-control" required></textarea>
      </div>

      <button type="submit" class="btn btn-success rounded-pill px-4">Submit Application</button>
    </form>

    <router-link to="/find-job" class="btn btn-outline-secondary mt-4 rounded-pill px-4">
      ← Back to Job Listings
    </router-link>
  </div>

  <div v-else class="text-center mt-5">
    <div class="spinner-border" role="status"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const job = ref(null)

const form = ref({
  name: '',
  email: '',
  message: '',
})

onMounted(async () => {
  const res = await axios.get(`http://localhost:3000/jobs/${route.params.id}`)
  job.value = res.data
})

function submitApplication() {
  console.log('Application submitted:', form.value)
  alert('✅ Application submitted successfully!')
  form.value = { name: '', email: '', message: '' }
}
</script>
