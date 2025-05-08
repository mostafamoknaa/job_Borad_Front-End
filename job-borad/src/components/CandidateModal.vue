<!-- <template>
  <div
    class="modal fade"
    id="candidateModal"
    tabindex="-1"
    aria-labelledby="candidateModalLabel"
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content p-4">
        <button
          type="button"
          class="btn-close ms-auto"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
        <div class="text-center">
          <img
            :src="candidate?.avatar"
            alt="Avatar"
            class="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h4 class="fw-bold">{{ candidate?.name }}</h4>
          <p class="text-muted">{{ candidate?.job_title }}</p>
        </div>
        <div class="my-3 text-center">
          <span
            v-for="skill in candidate?.skills || []"
            :key="skill"
            class="badge bg-primary me-2"
          >
            {{ skill }}
          </span>
        </div>
        <p class="text-muted">{{ candidate?.bio }}</p>
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="modal fade" id="candidateModal" tabindex="-1" aria-labelledby="candidateModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="candidateModalLabel">Candidate Profile</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body">
          <div class="text-center">
          <img
            :src="candidate?.avatar"
            alt="Avatar"
            class="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h4 class="fw-bold">{{ candidate?.name }}</h4>
          <p class="text-muted">{{ candidate?.job_title }}</p>
        </div>
        <div class="my-3 text-center">
          <span
            v-for="skill in candidate?.skills || []"
            :key="skill"
            class="badge bg-primary me-2"
          >
            {{ skill }}
          </span>
        </div>
        <p class="text-muted">{{ candidate?.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  candidate: Object,
});

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
