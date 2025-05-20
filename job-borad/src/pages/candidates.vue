<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold">Browse Candidates</h2>

    <!-- Search and Filters -->
    <div class="row mb-4 g-3">
      <div class="col-md-6">
        <input
          type="text"
          class="form-control"
          placeholder="Search by name or education..."
          v-model="searchQuery"
          @input="handleSearch"
        />
      </div>
      <div class="col-md-3">
        <select class="form-select" v-model="experienceFilter" @change="fetchCandidates">
          <option value="">All Experience Levels</option>
          <option value="Junior">Junior</option>
          <option value="Mid-Level">Mid-Level</option>
          <option value="Senior">Senior</option>
        </select>
      </div>
      <div class="col-md-3">
        <select class="form-select" v-model="genderFilter" @change="fetchCandidates">
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading candidates...</p>
    </div>

    <!-- Candidates List -->
    <div v-else class="row g-4">
      <CandidateCard
        v-for="candidate in candidates"
        :key="candidate.id"
        :candidate="candidate"
        @view-details="openModal"
      />
    </div>

    <!-- Candidate Modal -->
    <SingleCandidate
      v-if="selectedCandidate"
      :visible="!!selectedCandidate"
      :candidate="selectedCandidate"
      @close="selectedCandidate = null"
    />

    <!-- No Results -->
    <div v-if="!loading && candidates.length === 0" class="text-center py-5">
      <p class="text-muted">No candidates found matching your criteria</p>
      <button @click="resetFilters" class="btn btn-outline-primary mt-2">
        Reset Filters
      </button>
    </div>

    <!-- Pagination -->
    <div class="row mt-4" v-if="!loading && meta.total > meta.per_page">
      <div class="col-12">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: meta.current_page === 1 }">
              <button class="page-link" @click="changePage(meta.current_page - 1)">
                Previous
              </button>
            </li>
            <li
              v-for="page in meta.last_page"
              :key="page"
              class="page-item"
              :class="{ active: page === meta.current_page }"
            >
              <button class="page-link" @click="changePage(page)">
                {{ page }}
              </button>
            </li>
            <li class="page-item" :class="{ disabled: meta.current_page === meta.last_page }">
              <button class="page-link" @click="changePage(meta.current_page + 1)">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { debounce } from 'lodash'
import apiClient from '../Interceptor/getaxiox'
import SingleCandidate from '../components/SingleCandidate.vue'
import CandidateCard from '../components/CandidateCard.vue'

// Reactive data
const candidates = ref([])
const loading = ref(false)
const searchQuery = ref('')
const experienceFilter = ref('')
const genderFilter = ref('')
const selectedCandidate = ref(null)
const meta = ref({
  current_page: 1,
  last_page: 1,
  per_page: 12,
  total: 0
})

// Debounced search handler
const handleSearch = debounce(() => {
  meta.value.current_page = 1
  fetchCandidates()
}, 500)

// Fetch candidates with filters
const fetchCandidates = async () => {
  try {
    loading.value = true
    const response = await apiClient.get('/candidates', {
      params: {
        page: meta.value.current_page,
        per_page: meta.value.per_page,
        search: searchQuery.value,
        experience_level: experienceFilter.value,
        gender: genderFilter.value
      }
    })

    candidates.value = response.data.data
    meta.value = {
      current_page: response.data.meta.current_page,
      last_page: response.data.meta.last_page,
      per_page: response.data.meta.per_page,
      total: response.data.meta.total
    }
  } catch (error) {
    console.error('Error fetching candidates:', {
      message: error.message,
      config: error.config,
      response: error.response?.data
    })
  } finally {
    loading.value = false
  }
}

// Change page
const changePage = (page) => {
  if (page >= 1 && page <= meta.value.last_page) {
    meta.value.current_page = page
    fetchCandidates()
  }
}

// Reset all filters
const resetFilters = () => {
  searchQuery.value = ''
  experienceFilter.value = ''
  genderFilter.value = ''
  meta.value.current_page = 1
  fetchCandidates()
}

// Open candidate modal
const openModal = (candidate) => {
  selectedCandidate.value = candidate
}

// Initial fetch
onMounted(fetchCandidates)
</script>

<style scoped>
.pagination .page-item .page-link {
  cursor: pointer;
}
</style>