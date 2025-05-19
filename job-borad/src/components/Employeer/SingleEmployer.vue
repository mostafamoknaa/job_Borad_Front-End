<template>
    <div class="container my-5">
      <!-- <MainNavbar /> -->
      <h2 class="mb-4">Employer Details</h2>
  
      <div v-if="employer" class="card shadow-sm">
        <div class="card-body">
          <div class="d-flex align-items-center mb-4">
            <img
              :src="`http://localhost:8000/storage/${employer.logo}`"
              alt="Employer Logo"
              class="img-thumbnail me-4"
              style="width: 120px; height: 120px; object-fit: cover;"
            />
            <div>
              <h4>{{ employer.company_name }}</h4>
              <p class="text-muted">{{ employer.industry }}</p>
              <span class="badge bg-primary">{{ employer.country }}</span>
            </div>
          </div>
  
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th>Email</th>
                <td>{{ employer.email || 'N/A' }}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{{ employer.phone || 'N/A' }}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td>
                  <a v-if="employer.website" :href="employer.website" target="_blank">
                    {{ employer.website }}
                  </a>
                  <span v-else>N/A</span>
                </td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{{ employer.address || 'N/A' }}</td>
              </tr>
              <tr>
                <th>Joined At</th>
                <td>{{ formatDate(employer.created_at) }}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <span class="badge" :class="employer.is_verified ? 'bg-success' : 'bg-warning'">
                    {{ employer.is_verified ? 'Verified' : 'Not Verified' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      <div v-else class="text-center my-5">
        <div class="spinner-border text-primary" role="status"></div>
        <p class="mt-3">Loading employer data...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import MainNavbar from './MainNavbar.vue'
import interceptor from '../../Interceptor/getaxiox'
  
  
  const route = useRoute()
  const employer = ref(null)
  
  const fetchEmployer = async () => {
    try {
      const id = route.params.id
      const res = await interceptor.get(`/employers/${id}`)
      employer.value = res.data
    } catch (error) {
      console.error('Failed to fetch employer:', error)
    }
  }
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }
  
  onMounted(() => {
    fetchEmployer()
  })
  </script>
  
  <style scoped>
  .img-thumbnail {
    border-radius: 8px;
  }
  </style>
  