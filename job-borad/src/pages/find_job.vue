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

    <div class="row">
      <div
      v-for="job in filteredJobs"
      :key="job.id"
      class="col-md-6 col-lg-4 mb-4"
    >
      <div class="card h-100 shadow-sm rounded-4 border-type">
        <div class="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 class="card-title fw-semibold mb-1">{{ job.title }}</h5>
            <p class="text-muted mb-1">{{ job.company }}</p>
    
            <div class="d-flex align-items-center small text-secondary mb-2">
              <i class="bi bi-geo-alt-fill me-1"></i> {{ job.location }}
            </div>
    
            <!-- Job type badge with dynamic class -->
            <div class="mb-2">
              <span :class="['badge', badgeClass(job.type)]">{{ job.type }}</span>
              <span class="ms-3 small text-secondary">
                <i class="bi bi-currency-dollar me-1"></i> {{ job.salary_range || 'Not specified' }}
              </span>
            </div>
    
            <div class="small text-secondary mb-2">
              <i class="bi bi-calendar-event me-1"></i>
              Deadline: {{ new Date(job.application_deadline).toLocaleDateString() }}
            </div>
    
            <div v-if="job.benefits" class="small text-success mb-3">
              <i class="bi bi-gift me-1"></i> {{ job.benefits }}
            </div>
          </div>
    
          <router-link
            :to="{ name: 'SingleJob', params: { id: job.id } }"
            class="btn btn-outline-primary btn-sm rounded-pill px-3 mt-2 align-self-start"
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
import { ref, computed, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import apiClient from "../Interceptor/getaxiox";

const route = useRoute();
const router = useRouter();


const searchQuery = ref(route.query.search || "");
const category = ref("");
const jobs = ref([]);
const categories = ref([]);


watch(searchQuery, (newVal) => {
  if (newVal !== route.query.search) {
    router.replace({ query: { ...route.query, search: newVal } });
  }
});


watch(
  () => route.query.search,
  (newVal) => {
    if (newVal !== searchQuery.value) {
      searchQuery.value = newVal || "";
    }
  }
);


const setCategoryFromQuery = () => {
  const categoryName = route.query.category;
  if (categoryName) {
    const matchedCategory = categories.value.find(
      (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
    );
    category.value = matchedCategory ? matchedCategory.id : "";
  } else {
    category.value = "";
  }
};


const countapplications = async () =>{
  const response = await apiClient.get('/countApplication');
  console.log(response.data);
}

const fetchJobs = async () => {
  try {
    const response = await apiClient.get("/jobs");
    jobs.value = Array.isArray(response.data.data) ? response.data.data : [];
  } catch (err) {
    console.error("Failed to load jobs:", err);
    jobs.value = [];
  }
};

const fetchCategories = async () => {
  try {
    const response = await apiClient.get("/categories");
    categories.value = Array.isArray(response.data) ? response.data : [];
    setCategoryFromQuery();
  } catch (err) {
    console.error("Failed to load categories:", err);
    categories.value = [];
  }
};


const filteredJobs = computed(() => {
  return jobs.value.filter((job) => {
    const search = searchQuery.value.toLowerCase();
    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      (job.company && job.company.toLowerCase().includes(search));

    const matchesCategory =
      !category.value || job.category_id == category.value;

    return matchesSearch && matchesCategory;
  });
});


onMounted(() => {
  fetchJobs();
  fetchCategories();
  countapplications();
});

const badgeClass = (type) => {
  switch (type.toLowerCase()) {
    case 'full-time':
      return 'bg-success';
    case 'part-time':
      return 'bg-warning text-dark'; 
    case 'contract':
      return 'bg-info text-dark';    
    case 'internship':
      return 'bg-primary';    
    case 'freelance':
      return 'bg-secondary'; 
    default:
      return 'bg-dark';       
  }
};

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
  transition: transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.25rem;
  color: #222;
  margin-bottom: 0.25rem;
}

.text-muted {
  font-size: 0.9rem;
  color: #666 !important;
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

.bi {
  font-size: 1rem;
  vertical-align: middle;
  margin-right: 0.25rem;
}

</style>
