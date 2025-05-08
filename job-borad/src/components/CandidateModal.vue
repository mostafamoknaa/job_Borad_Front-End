<template>
  <div class="modal fade" tabindex="-1" id="candidateModal" ref="modalRef">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content p-4">
        <div class="text-center">
          <img :src="candidate?.avatar" alt="Avatar" class="rounded-circle mb-3" width="120" height="120">
          <h4 class="fw-bold">{{ candidate?.name }}</h4>
          <p class="text-muted">{{ candidate?.job_title }}</p>
        </div>

        <div class="my-3 text-center">
          <span v-for="skill in candidate?.skills || []" :key="skill" class="badge bg-primary text-white me-2">{{ skill }}</span>
        </div>

        <div class="text-center text-muted mb-3">
          <i class="bi bi-geo-alt"></i> {{ candidate?.location }} • {{ candidate?.work_type }}
        </div>

        <p class="text-muted">
          {{ candidate?.bio || "This candidate has not added a bio yet." }}
        </p>

        <div class="text-center mt-4">
          <a v-if="candidate?.linkedin" :href="candidate.linkedin" target="_blank" class="btn btn-outline-primary btn-sm me-2">
            <i class="bi bi-linkedin"></i> LinkedIn
          </a>
          <a v-if="candidate?.portfolio" :href="candidate.portfolio" target="_blank" class="btn btn-outline-secondary btn-sm">
            <i class="bi bi-globe"></i> Portfolio
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['candidate']);
const modalRef = ref(null);

watch(
  () => props.candidate,
  (newVal) => {
    if (newVal && modalRef.value) {
      const modal = new bootstrap.Modal(modalRef.value);
      modal.show();
    }
  }
);
</script>

<style scoped>
.modal-content {
  border-radius: 1rem;
}
</style>
