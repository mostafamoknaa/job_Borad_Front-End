<template>
  <div class="container my-5">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb" class="mb-4">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li class="breadcrumb-item">
      <router-link :to="{ name: 'Employers' }">Find Employers</router-link>
    </li>
    <li class="breadcrumb-item active" aria-current="page">
      Single Employers
    </li>
  </ol>
</nav>


    <div v-if="employer" class="card shadow-sm border-0 rounded-4">
      <div class="card-body p-5">
        <!-- Header Section -->
        <div class="row mb-5">
          <div class="col-md-8">
            <div class="d-flex align-items-center mb-4">
              <img
                :src="employer.logo_url || logoimage"
                alt="Employer Logo"
                class="img-thumbnail me-4 rounded-circle"
                style="width: 80px; height: 80px; object-fit: cover;"
              />
              <div>
                <h2 class="mb-1">{{ employer.company_name }}</h2>
                <p class="text-muted mb-2">{{ employer.industry }}</p>
                <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-outline-primary">
                    <i class="bi bi-instagram me-1"></i> Instagram
                  </button>
                  <button class="btn btn-sm btn-outline-info">
                    <i class="bi bi-twitter me-1"></i> Twitter
                  </button>
                </div>
              </div>
            </div>
            
            <router-link to="/jobs" class="btn btn-primary">
              View Open Position
            </router-link>
          </div>
          <div class="col-md-4">
            <div class="d-flex flex-column gap-2">
              <div class="d-flex justify-content-between">
                <span class="text-muted">FOUNDED IN:</span>
                <span>{{ formatDate(employer.created_at) }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted">FORCE OF:</span>
                <span>{{ employer.company_size || 'Not specified' }}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted">ORGANIZATION TYPE:</span>
                <span>Private Company</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted">INDUSTRY TYPES:</span>
                <span>{{ employer.industry || 'Not specified' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Description Section -->
        <div class="mb-5">
          <h4 class="mb-3">Description</h4>
          <p class="text-muted">{{ employer.company_description || 'No description provided.' }}</p>
        </div>

        <!-- Company Benefits Section -->
        <div class="mb-5">
          <h4 class="mb-3">Company Benefits</h4>
          <p class="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul class="text-muted">
            <li>Comprehensive health insurance</li>
            <li>401(k) matching</li>
            <li>Flexible work arrangements</li>
            <li>Professional development budget</li>
            <li>Generous vacation policy</li>
          </ul>
        </div>

        <!-- Company Vision Section -->
        <div class="mb-5">
          <h4 class="mb-3">Company Vision</h4>
          <p class="text-muted">{{ employer.company_vision || 'No vision statement provided.' }}</p>
        </div>

        <!-- Share Buttons -->
        <div class="mb-5">
          <h6 class="mb-3">Share profile:</h6>
          <div class="d-flex gap-2">
            <button class="btn btn-sm btn-outline-secondary">
              <i class="bi bi-facebook me-1"></i> Facebook
            </button>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="bi bi-facebook me-1"></i> Facebook
            </button>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="bi bi-pinterest me-1"></i> Pinterest
            </button>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="border-top pt-4">
          <h4 class="mb-3">Contact Information</h4>
          <div class="row">
            <div class="col-md-4 mb-3">
              <h6 class="text-muted">WEBSITE:</h6>
              <a :href="employer.website" target="_blank" v-if="employer.website">{{ employer.website }}</a>
              <span v-else class="text-muted">Not specified</span>
            </div>
            <div class="col-md-4 mb-3">
              <h6 class="text-muted">PHONE:</h6>
              <span>{{ employer.phone_number || 'Not specified' }}</span>
            </div>
            <div class="col-md-4 mb-3">
              <h6 class="text-muted">EMAIL ADDRESS:</h6>
              <span>{{ employer.user?.email || 'Not specified' }}</span>
            </div>
          </div>
          
          <div class="mt-3">
            <h6 class="text-muted">Follow us on:</h6>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-facebook"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-twitter"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-linkedin"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="bi bi-instagram"></i>
              </button>
            </div>
          </div>
        </div>
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
import logoimage from '../../assets/logo.jpg'
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
  if (!dateString) return 'Not specified'
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

onMounted(() => {
  fetchEmployer()
})
</script>

<style scoped>
.card {
  border-radius: 16px;
}

.img-thumbnail {
  border: 1px solid #dee2e6;
}

.breadcrumb {
  background-color: transparent;
  padding: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}

.btn-outline-secondary {
  border-color: #dee2e6;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa;
}
</style>