<template>
  <section class="popular-category py-5">
    <div class="container">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h2 class="fw-bold">Popular category</h2>
        <RouterLink
          to="find-job"
          class="btn btn-outline-primary d-flex align-items-center gap-2"
        >
          View All <i class="fas fa-arrow-right"></i>
        </RouterLink>
      </div>

      <!-- Category Grid -->
      <div class="row g-4">
        <div
          v-for="category in categories"
          :key="category.name"
          class="col-12 col-sm-6 col-lg-3"
          @click="goToFindJob(category.name)"
        >
          <div
            class="category-card p-4 rounded-3 h-100"
            :class="{ active: category.active }"
          >
            <div class="icon-box mb-3">
              <i :class="category.icon"></i>
            </div>
            <h6 class="fw-semibold mb-1">{{ category.name }}</h6>
            <p class="text-muted small mb-0">
              {{ category.positions }} Open position
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '../../Interceptor/getaxiox';

// Reactive state for categories
const categories = ref([]);
const router = useRouter(); // Initialize router

// Fetch categories on component mount
onMounted(async () => {
  try {
    const res = await apiClient.get('/categories');
    categories.value = res.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }
});

// Navigate to find-job with category filter
const goToFindJob = (categoryName) => {
  router.push({
    path: '/find-job',
    query: { category: categoryName },
  });
};
</script>

<style>
/* Popular Category Section */
.popular-category {
  background-color: #fff;
}

.category-card {
  background-color: #f1f5f9;
  transition: all 0.3s ease-in-out;
}

.category-card.active {
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.category-card:hover {
  transform: translateY(-5px);
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.icon-box {
  width: 50px;
  height: 50px;
  background-color: #e8f0ff;
  color: #0d6efd;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
}
</style>