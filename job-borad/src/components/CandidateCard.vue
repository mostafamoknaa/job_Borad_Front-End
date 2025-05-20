<template>
  <div class="col-md-6 col-lg-4 mb-4">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <div class="d-flex align-items-center mb-3">
          <img
            :src="candidate.image || candidateImage"
            alt="Candidate"
            class="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h5 class="mb-0">{{ candidate.user.name }}</h5>
            <span class="badge bg-info text-dark" v-if="candidate.experience_level">
              {{ candidate.experience_level }}
            </span>
          </div>
        </div>

        <div class="mb-3">
          <p class="text-muted mb-1" v-if="candidate.education">
            <i class="bi bi-mortarboard me-1"></i>
            {{ candidate.education.substring(0, 50) }}...
          </p>
          <p class="text-muted mb-1" v-if="candidate.user.email">
            <i class="bi bi-envelope me-1"></i>
            {{ candidate.user.email }}
          </p>
        </div>

        <button class="btn btn-outline-primary" @click="$emit('view-details', candidate)">
  View Details
</button>

      </div>
    </div>
  </div>
</template>

<script setup>
import candidateImage from '../assets/candidate.png';
defineProps({
  candidate: {
    type: Object,
    required: true,
    validator: (value) => {
      return value && value.user;
    }
  }
});
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
</style>