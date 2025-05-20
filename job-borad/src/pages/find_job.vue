<template>
  <div class="container my-5">
    <h2 class="mb-4">Find Jobs</h2>

    <!-- Filters Section -->
    <div class="row mb-4">
      <div class="col-md-4 mb-2">
        <input
          type="text"
          class="form-control"
          v-model="searchQuery"
          placeholder="Search by title or company"
        />
      </div>
      <div class="col-md-3 mb-2">
        <select class="form-select" v-model="category">
          <option value="">All Categories</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>
      <div class="col-md-2 mb-2">
        <button class="btn btn-primary w-100" @click="fetchJobs">Search</button>
      </div>
    </div>

    <!-- Job Cards -->
    <div class="row">
      <div
        v-for="job in filteredJobs"
        :key="job.id"
        class="col-md-6 col-lg-4 mb-4"
      >
        <div class="card h-100 shadow-sm rounded-4 border-0">
          <div class="card-body">
            <h5 class="card-title fw-semibold mb-1">{{ job.title }}</h5>
            <p class="text-muted mb-1">{{ job.company }}</p>
            <div class="d-flex align-items-center small text-secondary mb-3">
              <i class="bi bi-geo-alt-fill me-1"></i> {{ job.location }}
              <span class="mx-2">·</span>
              <i class="bi bi-clock-fill me-1"></i> {{ job.type }}
            </div>
            <router-link
              :to="{ name: 'SingleJob', params: { id: job.id } }"
              class="btn btn-outline-primary btn-sm rounded-pill px-3"
            >
              View Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import apiClient from '../Interceptor/getaxiox';

const route = useRoute();
const searchQuery = ref('');
const category = ref('');
const jobs = ref([]);
const categories = ref([]);

const fetchJobs = async () => {
  try {
    const response = await apiClient.get('/jobs');
    jobs.value = Array.isArray(response.data.data) ? response.data.data : [];
  } catch (err) {
    console.error('Failed to load jobs:', err);
    jobs.value = [];
  }
};

const fetchCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    categories.value = Array.isArray(response.data) ? response.data : [];
    // Set category filter based on URL query
    setCategoryFromQuery();
  } catch (err) {
    console.error('Failed to load categories:', err);
    categories.value = [];
  }
};

const setCategoryFromQuery = () => {
  const categoryName = route.query.category;
  if (categoryName) {
    const matchedCategory = categories.value.find(
      (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
    );
    if (matchedCategory) {
      category.value = matchedCategory.id;
    } else {
      category.value = ''; // Reset if category not found
    }
  } else {
    category.value = ''; // Reset if no category query
  }
};

const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      (job.company &&
        job.company.toLowerCase().includes(searchQuery.value.toLowerCase()));

    const matchesCategory = !category.value || job.category_id == category.value;

    return matchesSearch && matchesCategory;
  });
});

onMounted(() => {
  fetchJobs();
  fetchCategories();
});

// Watch for changes in the route query
watch(
  () => route.query.category,
  () => {
    setCategoryFromQuery();
  }
);
</script>

<style scoped>
.card {
  border-radius: 1rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  background-color: #fff;
  border: 1px solid #222;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  color: #333;
}

.text-muted {
  color: #777 !important;
}

.btn-outline-primary {
  border-color: #0d6efd;
  color: #0d6efd;
  transition: all 0.2s ease;
}

.btn-outline-primary:hover {
  background-color: #0d6efd;
  color: #fff;
}

input.form-control,
select.form-select {
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.95rem;
}

input.form-control:focus,
select.form-select:focus {
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  border-color: #0d6efd;
}

.btn-primary {
  border-radius: 0.5rem;
  font-weight: 500;
}

.container h2 {
  font-weight: 600;
  color: #222;
}
</style>