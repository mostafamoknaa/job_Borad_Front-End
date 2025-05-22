<template>
  <div class="container my-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0 text-gradient">{{ job.title }}</h2>
      <span class="badge bg-primary-subtle text-primary fs-6 py-2 px-3 rounded-pill">
        {{ job.status }}
      </span>
    </div>
    
    <div class="card shadow-lg rounded-4 border-0 overflow-hidden">
      <div class="card-header bg-primary bg-opacity-10 py-3 border-0">
        <div class="d-flex justify-content-between align-items-center">
          Company:
          {{ job.employer?.company_name || 'Unknown Company' }}
          <div>
            <span class="badge bg-info bg-opacity-10 text-info me-2">{{ job.type }}</span>
            <span class="badge bg-secondary bg-opacity-10 text-secondary">{{ job.category || 'N/A' }}</span>
          </div>
        </div>
      </div>
      
      <div class="card-body p-4">
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="d-flex align-items-center mb-3">
              <i class="bi bi-geo-alt-fill text-muted me-2 fs-5"></i>
              <span class="text-dark">{{ job.location }}</span>
            </div>
            <div class="d-flex align-items-center mb-3">
              <i class="bi bi-cash-coin text-muted me-2 fs-5"></i>
              <span class="text-dark">{{ job.salary_range || 'Salary not specified' }}</span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="d-flex align-items-center mb-3">
              <i class="bi bi-calendar-check text-muted me-2 fs-5"></i>
              <span class="text-dark">Apply by: {{ formatDate(job.application_deadline) }}</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="bi bi-clock-history text-muted me-2 fs-5"></i>
              <span class="text-dark">{{ job.type }} position</span>
            </div>
          </div>
        </div>

        <hr class="my-4" />

        <div class="mb-4">
          <h5 class="fw-semibold mb-3 text-primary">Job Description</h5>
          <div class="bg-light p-3 rounded-3">
            <p class="mb-0">{{ job.description || 'No description provided' }}</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6 mb-4">
            <h5 class="fw-semibold mb-3 text-primary">Responsibilities</h5>
            <ul class="list-group list-group-flush">
              <li v-if="!job.responsibilities" class="list-group-item bg-light">Not specified</li>
              <li v-else v-for="(item, index) in job.responsibilities.split('\n')" :key="index" 
                  class="list-group-item bg-light d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          
          <div class="col-md-6 mb-4">
            <h5 class="fw-semibold mb-3 text-primary">Qualifications</h5>
            <ul class="list-group list-group-flush">
              <li v-if="!job.qualifications" class="list-group-item bg-light">Not specified</li>
              <li v-else v-for="(item, index) in job.qualifications.split('\n')" :key="index" 
                  class="list-group-item bg-light d-flex align-items-start">
                <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-4" v-if="job.benefits">
          <h5 class="fw-semibold mb-3 text-primary">Benefits & Perks</h5>
          <div class="d-flex flex-wrap gap-2">
            <span v-for="(benefit, index) in job.benefits.split('\n')" :key="index" 
                  class="badge bg-success bg-opacity-10 text-success py-2 px-3">
              <i class="bi bi-gift-fill me-1"></i> {{ benefit }}
            </span>
          </div>
        </div>

        <div class="d-flex justify-content-between mt-5">
          <router-link :to="backLink" class="btn btn-outline-primary px-4 py-2 rounded-pill">
            <i class="bi bi-arrow-left me-2"></i>Back
          </router-link>
          <button 
          v-if="!isEmployerPath" 
          @click="goToapply" 
          class="btn btn-primary px-4 py-2 rounded-pill">
          <i class="bi bi-send-fill me-2"></i>Apply Now
        </button>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import interceptor from '../Interceptor/getaxiox';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isEmployerPath = computed(() => {
  return route.fullPath.toLowerCase().includes('employeer');
});
const job = ref({});

const goToapply = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    window.location.href = '/employeer/login';
    return;  // stop further execution after redirect
  }
  if (job.value.id) {
    router.push(`/apply/${job.value.id}`);
  }
};

const backLink = computed(() => {
  return route.fullPath.includes('employeer') ? '/employeer/dashboard' : '/find-job';
});
const fetchJob = async () => {
  try {
    const response = await interceptor.get(`/jobs/${route.params.id}`);
    job.value = response.data;
    console.log(job.value);
  } catch (err) {
    console.error('Failed to load job:', err);
  }
};

const formatDate = (dateStr) => {
  if (!dateStr) return 'N/A';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

onMounted(fetchJob);

</script>

<style scoped>

.text-gradient {
  background: linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.card {
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.badge {
  font-weight: 500;
}

.list-group-item {
  border-left: 0;
  border-right: 0;
  padding: 0.75rem 1.25rem;
}

.list-group-item:first-child {
  border-top: 0;
}

.list-group-item:last-child {
  border-bottom: 0;
}

.rounded-3 {
  border-radius: 0.75rem !important;
}

.rounded-4 {
  border-radius: 1rem !important;
}
</style>