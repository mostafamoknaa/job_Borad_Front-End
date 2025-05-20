<template>
  <div class="modal-overlay" v-if="visible">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">×</button>

      <div class="row">
        <div class="col-md-12 text-center mb-4">
          <img
            :src="candidate.image || defaultImage"
            class="rounded-circle"
            width="100"
            height="100"
          />
          <h4 class="mt-2">{{ candidate.user.name }}</h4>
          <p class="text-muted">{{ candidate.experience_level }}</p>
        </div>

        <div class="col-md-12 mb-3">
          <h5>Biography</h5>
          <p>{{ candidate.bio || 'No bio available.' }}</p>

          <h5>Cover Letter</h5>
          <p>{{ candidate.cover_letter || 'No cover letter provided.' }}</p>
        </div>

        <div class="col-md-12">
          <ul class="list-unstyled">
            <li><strong>Email:</strong> {{ candidate.user.email }}</li>
            <li><strong>Date of Birth:</strong> {{ candidate.date_of_birth }}</li>
            <li><strong>Nationality:</strong> {{ candidate.Nationality }}</li>
            <li><strong>Gender:</strong> {{ candidate.gender }}</li>
            <li><strong>Marital Status:</strong> {{ candidate.marital_status }}</li>
            <li><strong>Education:</strong> {{ candidate.education }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import defaultImage from '../assets/candidate.png'

defineProps({
  visible: Boolean,
  candidate: Object
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
  position: relative;
  overflow-y: auto;
  max-height: 90vh;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
