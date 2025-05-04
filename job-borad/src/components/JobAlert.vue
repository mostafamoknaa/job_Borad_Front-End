<template>
    <div class="container-fluid p-0 mt-5">
      <div class="row">
        <div class="col-md-3">
          <Sidebar />
        </div>
        <div class="col-md-9">
          <div class="container-fluid p-0">
            <div class="row">
              <div class="col-md-12">
                <span class="page-title">Job Alerts</span>
                <span class="ms-2">(most new job)</span>
                <div class="job-list">
                  <div v-for="job in paginatedJobs" :key="job.id" class="job-card">
                    <div class="d-flex justify-content-between">
                        <div class="job-info">
                            <img :src="job.logo" alt="Company Logo" class="company-logo" />
                            <div>
                              <div class="job-title-kind">
                                <h3 class="job-title">{{ job.title }}</h3>
                                <p :class="['job-kind', getKindClass(job.kind)]">{{ job.kind }}</p>
                              </div>
                              <p class="job-location">
                                <i class="fa fa-location-dot"></i>
                                {{ job.location }} •
                                <span class="job-salary ms-2">${{ job.salary }}</span>
                                <span>
                                    <i class="fa-regular fa-calendar ms-3 me-1"></i>
                                    {{ job.daysRemaining }} Days Remaining
                                </span>
                              </p>
                            </div>
                        </div>
                        <div>
                            <div class="job-action">
                                <i class="fa-solid fa-bookmark me-5"></i> 
                                  <button class="apply-button">
                                    Apply Now <i class="fa-solid fa-arrow-right ms-2"></i>
                                  </button>
                            </div>
                        </div>

                      </div> 

                  </div>
  
                  <div class="pagination">
                    <button 
                      @click="prevPage"
                      :disabled="currentPage === 1"
                      class="pagination-button"
                    >
                      Previous
                    </button>
                    <button 
                      @click="nextPage"
                      :disabled="currentPage === totalPages"
                      class="pagination-button"
                    >
                      Next
                    </button>
                  </div>
  
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>   
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue';
  import { ref, computed } from 'vue';
  
  export default {
    components: {
      Sidebar,
    },
    
    setup() {

      const jobs = ref([
        {
          id: 1,
          title: 'Software Engineer',
          kind:'Full-time',
          location: 'New York, NY',
          salary: 120000,
          logo: "https://cdn-icons-png.flaticon.com/512/732/732201.png",
          status: 'Active',
          daysRemaining: 30,
        },
        {
          id: 2,
          title: 'Data Scientist',
          kind:'Part-time',
          location: 'San Francisco, CA',
          salary: 130000,
          logo: "https://cdn-icons-png.flaticon.com/512/732/732202.png",
          status: 'Expired',
          daysRemaining: 0,
        },
        {
                    id: 3,
                    title: 'Product Manager',
                    location: 'Seattle, WA',
                    kind:'Full-time',
                    salary: 140000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
                    status: 'Active',
                    daysRemaining: 15,
                },
                {
                    id: 4,
                    title: 'UX Designer',
                    kind:'Internship',
                    location: 'Austin, TX',
                    salary: 110000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732203.png",
                    status: 'Active',
                    daysRemaining: 20,
                },
                {
                    id: 5,
                    title: 'Marketing Manager',
                    location: 'Boston, MA',
                    kind:'Contract',
                    salary: 125000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732204.png",
                    status: 'Expired',
                    daysRemaining: 0,
                },
                {
                    id: 6,
                    title: 'Sales Representative',
                    location: 'Chicago, IL',
                    kind:'Full-time',
                    salary: 90000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732205.png",
                    status: 'Active',
                    daysRemaining: 10,
                },
                {
                    id: 7,
                    title: 'Web Developer',
                    location: 'Los Angeles, CA',
                    kind:'Part-time',
                    salary: 115000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732206.png",
                    status: 'Active',
                    daysRemaining: 5,
                },
                {
                    id: 8,
                    title: 'Graphic Designer',
                    kind:'Internship',
                    location: 'Miami, FL',
                    salary: 95000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732207.png",
                    status: 'Expired',
                    daysRemaining: 0,
                },
                {
                    id: 9,
                    title: 'DevOps Engineer',
                    kind:'Contract',
                    location: 'Denver, CO',
                    salary: 135000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732208.png",
                    status: 'Active',
                    daysRemaining: 25,
                },
                {
                    id: 10,
                    title: 'Business Analyst',
                    kind:'Full-time',
                    location: 'Phoenix, AZ',
                    salary: 105000,
                    logo: "https://cdn-icons-png.flaticon.com/512/732/732209.png",
                    status: 'Active',
                    daysRemaining: 12,
                }
      ]);
      const getKindClass = (kind) => {
  switch (kind) {
    case 'Full-time':
      return 'kind-fulltime';
    case 'Part-time':
      return 'kind-parttime';
    case 'Internship':
      return 'kind-internship';
    case 'Contract':
      return 'kind-contract';
    default:
      return 'kind-other';
  }
};

      const currentPage = ref(1);
      const pageSize = 5;
  
      const totalPages = computed(() => Math.ceil(jobs.value.length / pageSize));
  
      const paginatedJobs = computed(() => {
        const startIndex = (currentPage.value - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return jobs.value.slice(startIndex, endIndex);
      });
  
      const nextPage = () => {
        if (currentPage.value < totalPages.value) {
          currentPage.value++;
        }
      };
  
      const prevPage = () => {
        if (currentPage.value > 1) {
          currentPage.value--;
        }
      };
  
      return {
        paginatedJobs,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        getKindClass,
      };
    }
  };
  </script>
  
  <style scoped>
  .container-fluid {
    padding: 0;
  }
  
  .sidebar {
    background-color: #f8f9fa;
    padding: 20px;
    border-right: 1px solid #dee2e6;
    height: 100vh;
  }
  
  .sidebar-heading {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .sidebar-item {
    margin-bottom: 10px;
  }
  
  .sidebar-item a {
    text-decoration: none;
    color: #343a40;
    font-size: 1.2rem;
  }
  
  .sidebar-item a:hover {
    color: #007bff;
  }
  
  .main-content {
    padding: 20px;
  }
  
  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343a40;
  }
  
  .job-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .job-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  
  .job-info {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .company-logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .job-title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .job-location {
    font-size: 1rem;
    color: #6c757d;
  }
  
  .job-salary {
    font-size: 1rem;
    color: #28a745;
  }
  
  .job-action {
    margin-top: 15px;
    display: flex;
    float: right;
    align-items: center;
    justify-content: space-between;
  }
  
  .expired-text {
    color: #dc3545;
    font-weight: bold;
  }
  
  .active-text {
    color: #28a745;
    font-weight: bold;
  }
  
  .apply-button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .apply-button:hover {
    background-color: #0056b3;
  }
  
  .pagination {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .pagination-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .pagination-button:hover {
    background-color: #0056b3;
  }
  
  .pagination-button:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
  .job-title-kind {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .job-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .job-kind {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 12px;
  }
  
  /* Different colors */
  .kind-fulltime {
    background-color: #e0f7fa;
    color: #00796b;
  }
  
  .kind-parttime {
    background-color: #fce4ec;
    color: #c2185b;
  }
  
  .kind-internship {
    background-color: #f3e5f5;
    color: #6a1b9a;
  }
  
  .kind-contract {
    background-color: #fff3e0;
    color: #e65100;
  }
  
  .kind-other {
    background-color: #e0e0e0;
    color: #424242;
  }
  
  </style>
  