<template>
  <div class="col-12 col-sm-6 col-lg-4 mb-4">
    <div class="card border rounded-4 h-100 shadow-sm p-3 d-flex flex-column justify-content-between">
      <!-- Header with Featured badge -->
      <div class="d-flex flex-wrap align-items-center justify-content-between mb-3">
        <div class="d-flex align-items-center">
          <img
          :src="employer.logo_url || logoimage"
            alt="Employer Logo"
            class="rounded-circle me-3 flex-shrink-0"
            style="width: 50px; height: 50px; object-fit: cover;"
          />
          <div class="flex-grow-1">
            <h6 class="fw-bold mb-0 text-truncate" :title="employer.name">
              {{ employer.name }}
            </h6>
            <small class="text-muted text-truncate d-block" :title="employer.country">
              {{ employer.country || 'Not specified' }}
            </small>
          </div>
        </div>
        <span
          class="badge bg-danger bg-opacity-25 text-danger fw-semibold mt-2 mt-sm-0"
          style="white-space: nowrap;"
        >
          Featured
        </span>
      </div>

      <!-- Info -->
      <div class="mb-3 small">
        <div class="text-muted d-flex align-items-center mb-1">
          <i class="bi bi-geo-alt-fill me-2"></i>
          <span class="text-truncate" :title="employer.city">
            {{ employer.city || 'Location not specified' }}
          </span>
        </div>
        <div class="text-muted d-flex align-items-center mb-1">
          <i class="bi bi-briefcase-fill me-2"></i>
          <span class="text-truncate" :title="employer.industry">
            {{ employer.industry || 'Industry not set' }}
          </span>
        </div>
        <div class="text-muted d-flex align-items-center">
          <i class="bi bi-calendar me-2"></i>
          <span>
            {{ new Date(employer.created_at).toLocaleDateString() }}
          </span>
        </div>
      </div>

      <!-- Open Position Button -->
      <router-link
        :to="`/employers/${employer.id}`"
        class="btn btn-outline-primary fw-semibold mt-auto"
      >
        Open Position ({{ employer.open_jobs || 0 }})
      </router-link>
    </div>
  </div>
</template>

<script setup>
import logoimage from '../assets/logo.jpg'


defineProps({
  employer: {
    type: Object,
    default: () => ({
      id: null,
      name: '',
      logo_url: null,
      country: '',
      city: '',
      open_jobs: 0,
      industry: '',
      created_at: '',
      is_verified: false,
      featured: true
    })
  }
});
</script>

<style scoped>
.card:hover {
  border-color: #007bff;
  transition: 0.2s ease-in-out;
}
.text-truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
