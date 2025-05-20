<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold">Browse Candidates</h2>

    <!-- Search and Filters -->
    <div class="row mb-4 g-3">
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Search by name..."
          v-model="searchQuery"
          @input="fetchCandidates"
        />
      </div>
      <div class="col-md-3">
        <select class="form-select" v-model="experienceFilter" @change="fetchCandidates">
          <option value="">All Experience</option>
          <option value="Junior">Junior</option>
          <option value="Mid-Level">Mid-Level</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Candidates List -->
    <div v-else class="row g-4">
      <CandidateCard
        v-for="candidate in candidates"
        :key="candidate.id"
        :candidate="candidate"
      />
    </div>

    <!-- No Results -->
    <div v-if="!loading && candidates.length === 0" class="text-center py-5">
      <p class="text-muted">No candidates found</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import apiClient from '../Interceptor/getaxiox'

import CandidateCard from '../components/CandidateCard.vue';

const candidates = ref([]);
const loading = ref(true);
const searchQuery = ref('');
const experienceFilter = ref('');

const fetchCandidates = async () => {
  try {
    loading.value = true;
    const response = await apiClient.get('/candidates', {
      params: {
        search: searchQuery.value,
        experience_level: experienceFilter.value
      }
    });
    
    console.log('API response:', response.data);

     candidates.value = Array.isArray(response.data.data)
      ? response.data.data
      : [];
  } catch (error) {
    console.error('Error fetching candidates:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchCandidates();
});
</script>