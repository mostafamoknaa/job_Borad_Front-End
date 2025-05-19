<template>
  <div class="col-md-6 col-lg-4 mb-4">
    <div class="border rounded-4 p-3 d-flex gap-3 align-items-center shadow-sm h-100">
      <!-- Logo -->
      <img
        :src="employer.logo_url || defaultLogo"
        alt="Logo"
        class="rounded"
        style="width: 60px; height: 60px; object-fit: cover"
      />

      <!-- Info -->
      <div class="flex-grow-1">
        <!-- Name + Badge -->
        <div class="d-flex align-items-center gap-2 mb-1">
          <h6 class="fw-semibold mb-0 text-truncate">{{ employer.name }}</h6>
          <span class="badge bg-danger bg-opacity-25 text-danger small">Featured</span>
        </div>

        <!-- Location -->
        <p class="text-muted mb-2 small">
          <i class="bi bi-geo-alt"></i>
          {{ employer.city || 'Unknown City' }}, {{ employer.country || 'Unknown Country' }}
        </p>

        <!-- Button -->
        <router-link
          :to="`/employers/${employer.id}`"
          class="btn btn-outline-primary btn-sm fw-semibold"
        >
          Open Position ({{ employer.open_jobs || 0 }})
        </router-link>
      </div>
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
      city: '',
      country: '',
      open_jobs: 0
    })
  }
})

const defaultLogo = new URL('../assets/logo.jpg', import.meta.url).href
</script>
