<template>
  <div class="card candidate-card">
    <div class="card-body d-flex align-items-center">
      <img :src="candidate.avatar" alt="Avatar" class="rounded-circle me-3" width="60" height="60" />
      <div>
        <h5 class="card-title mb-1">{{ candidate.name }}</h5>
        <p class="card-subtitle text-muted mb-2">{{ candidate.job_title }}</p>
        <p class="text-muted mb-2"><i class="bi bi-geo-alt-fill"></i> {{ candidate.location }}</p>
        <div>
          <span v-for="skill in candidate.skills" :key="skill" class="badge bg-light text-dark me-1">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
    <div class="card-footer d-flex justify-content-between">
    
      <button class="btn btn-sm btn-outline-primary mt-3" @click="$emit('view', candidate)">View Profile</button>

      <button class="btn btn-primary btn-sm">Contact</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['candidate']);
//defineProps({
//  candidate: Object
//});
</script>

<style scoped>
.candidate-card {
  margin-bottom: 1rem;
}
</style>
