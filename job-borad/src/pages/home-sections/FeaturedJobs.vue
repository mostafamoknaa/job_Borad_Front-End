<template>
  <section class="container my-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="fw-bold">Featured job</h2>
      <a href="/find-job" class="btn btn-outline-primary">
        View All <i class="bi bi-arrow-right ms-1"></i>
      </a>
    </div>

    <div class="row g-4">
      <div v-for="(job, index) in jobs" :key="index" class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0 job-card">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <RouterLink
                class="card-title fs-5 link"
                :to="`/job/${encodeURIComponent(job.id)}`"
              >
                {{ job.title }}
              </RouterLink>

              <span class="badge" :class="badgeClass(job.type)">
                {{ job.type }}
              </span>
            </div>
            <p class="text-muted mb-2">Salary: {{ job.salary_range }}</p>
            <div class="d-flex align-items-center">
              <img
                :src="job.employer?.company_logo"
                alt="logo"
                class="me-2"
                style="width: 32px"
              />
              <div>
                <div class="fw-semibold">{{ job.employer?.company_name }}</div>
                <div class="text-muted small">
                  <i class="bi bi-geo-alt me-1"></i>{{ job.location }}
                </div>
              </div>
              <i
                class="bi ms-auto"
                :class="
                  jobs[index].bookmarked
                    ? 'bi-bookmark-fill text-warning'
                    : 'bi-bookmark'
                "
                role="button"
                @click="toggleBookmark(index)"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import apiClient from "../../Interceptor/getaxiox";

const jobs = ref([]);

onMounted(async () => {
  try {
    const res = await apiClient.get("/jobs");
    console.log(res.data.data);
    jobs.value = res.data.data;
  } catch (error) {
    console.log("Failed to fetch jobs", error);
  }
});

function toggleBookmark(index) {
  jobs.value[index].bookmarked = !jobs.value[index].bookmarked;
}

function badgeClass(type) {
  switch (type) {
    case "full-time":
      return "bg-success text-white";
    case "part-time":
      return "bg-warning text-dark";
    case "internship":
      return "bg-info text-white";
    case "freelance":
      return "bg-primary text-white";
    case "contract":
      return "bg-danger text-white";
    default:
      return "bg-secondary text-white";
  }
}
</script>

<style>
.card {
  border-radius: 12px;
}

.badge {
  font-size: 0.75rem;
  padding: 0.4em 0.6em;
  border-radius: 6px;
}
/* Featured Jobs Section */
.card-title {
  font-weight: 600;
}

.job-card {
  background-color: #f1f5f9;
  transition: all 0.3s ease-in-out;
}

.job-card.active {
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.01);
}

.job-card:hover {
  transform: translateY(-5px);
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}
.link{
  font-size: 1.08rem;
  text-decoration: none;
  color: black;
}
.link:hover{
  font-size: 1.11rem;
  color: #0a88ca;
}
</style>
