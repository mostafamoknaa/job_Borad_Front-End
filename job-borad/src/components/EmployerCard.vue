<template>
  <div class="col-md-6 col-lg-4 mb-4">
    <div class="card border rounded-4 h-100 shadow-sm p-3 d-flex flex-column justify-content-between">
      <div class="d-flex align-items-center mb-3">
        <img
          :src="employer.logo_url || require('@/assets/logo.jpg')"
          alt="Employer Logo"
          class="rounded-circle me-3"
          style="width: 50px; height: 50px; object-fit: cover;"
        />
        <div class="flex-grow-1">
          <h6 class="fw-bold mb-0 text-truncate">{{ employer.name }}</h6>
          <small class="text-muted">{{ employer.country || 'Not specified' }}</small>
        </div>
        <span class="badge bg-danger bg-opacity-25 text-danger fw-semibold">Featured</span>
      </div>

      <div class="mb-3">
        <span class="text-muted small d-block mb-1">
          <i class="bi bi-geo-alt-fill me-1"></i> {{ employer.city || 'Location not specified' }}
        </span>
        <span class="text-muted small d-block">
          <i class="bi bi-briefcase-fill me-1"></i> {{ employer.industry || 'Industry not set' }}
        </span>
        <span class="text-muted small d-block">
          <i class="bi bi-calendar me-1"></i>
          {{ new Date(employer.created_at).toLocaleDateString() }}
        </span>
      </div>

      <router-link
        :to="`/employer/${employer.id}`"
        class="btn btn-outline-primary fw-semibold"
      >
        Open Position ({{ employer.open_jobs || 0 }})
      </router-link>
    </div>
  </div>
</template>

<script setup>
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
    })
  }
})
</script>

<style scoped>
.card:hover {
  border-color: #007bff;
  transition: 0.2s ease-in-out;
}
</style>
