<template>
      <section class="popular-category py-5">
    <div class="container">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center mb-5">
        <h2 class="fw-bold">Popular category</h2>
        <a href="#" class="btn btn-outline-primary d-flex align-items-center gap-2">
          View All <i class="fas fa-arrow-right"></i>
        </a>
      </div>

      <!-- Category Grid -->
      <div class="row g-4">
        <div
          v-for="category in categories"
          :key="category.name"
          class="col-12 col-sm-6 col-lg-3"
        >
          <div
            class="category-card p-4 rounded-3 h-100"
            :class="{ active: category.active }"
          >
            <div class="icon-box mb-3">
              <i :class="category.icon"></i>
            </div>
            <h6 class="fw-semibold mb-1">{{ category.name }}</h6>
            <p class="text-muted small mb-0">{{ category.positions }} Open position</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>

const categories = [
  { name: "Graphics & Design", positions: 357, icon: "fas fa-pen-nib" },
  { name: "Code & Programing", positions: 312, icon: "fas fa-code" },
  { name: "Digital Marketing", positions: 297, icon: "fas fa-bullhorn" },
  { name: "Video & Animation", positions: 247, icon: "fas fa-video" },
  { name: "Music & Audio", positions: 204, icon: "fas fa-music" },
  { name: "Account & Finance", positions: 167, icon: "fas fa-chart-line" },
  { name: "Health & Care", positions: 125, icon: "fas fa-briefcase-medical" },
  {
    name: "Data & Science",
    positions: 57,
    icon: "fas fa-database",
    active: true,
  },
];

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