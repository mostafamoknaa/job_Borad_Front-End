<template>
  <div class="col-md-6 col-lg-4">
    <div class="card shadow-sm rounded-4 h-100 p-3">
      <div class="d-flex align-items-center gap-3 mb-3">
        <img
          :src="employer.company_logo"
          alt="Logo"
          class="rounded"
          style="width: 60px; height: 60px; object-fit: cover"
        />
        <div>
          <h5 class="mb-1">{{ employer.company_name }}</h5>
          <p class="text-muted mb-0 small">
            <i class="bi bi-geo-alt"></i> {{ employer.industry }}
          </p>
        </div>
      </div>
      <div class="mb-2">
        <!-- <span
          v-for="tag in employer.tags"
          :key="tag"
          class="badge bg-light text-dark border me-1 mb-1"
        >
          {{ tag }}
        </span> -->
      </div>
      <div class="d-flex justify-content-between align-items-center mt-auto">
        <span class="text-primary fw-bold">
          {{ employer.company_description }} Open Jobs
        </span>
        <button class="btn btn-outline-primary btn-sm">View</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['employer'])
</script>
