<template>
  <nav>
    <div class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container justify-content-between">
        <a
          class="navbar-brand fw-bold d-flex align-items-center me-4 d-lg-none"
          href="#"
        >
          <i class="fas fa-thin fa-briefcase fs-4 text-primary me-2"></i>
          Forsa
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeLink === '/employeer/home' }" href="/employeer/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeLink === '/find-candidate' }" href="/find-candidate">Find Candidate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeLink === '/employeer/dashboard' }" href="/employeer/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeLink === '/employeer/jobs' }" href="/employeer/jobs">My Jobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeLink === '/employeer/all-jobs' }" href="/employeer/all-jobs">All Job</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeLink === '/employeer/contactus' }" href="/employeer/contactus">Customer Supports</a>
            </li>
          </ul>

          <div class="d-flex align-items-center">
            <div class="dropdown">
              <button
                class="btn dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="background: none; border: none; padding: 0"
              >
                <span class="d-flex align-items-center pe-3">
                  <i class="fas fa-thin fa-phone-volume me-1"></i>
                  <span class="mx-1">
                    {{ countries.find((c) => c.name === selectedCountry)?.phone }}
                  </span>
                </span>
                <span class="pe-3">
                  <img
                    :src="getFlag(selectedCountry)"
                    :alt="selectedCountry"
                    width="40"
                    style="object-fit: contain"
                  />
                </span>
                <span>{{ selectedCountry }}</span>
              </button>
              <ul class="dropdown-menu">
                <li v-for="country in countries" :key="country.name">
                  <a class="dropdown-item d-flex align-items-center" href="#" @click.prevent="selectedCountry = country.name">
                    <img :src="getFlag(country.name)" :alt="country.name" width="20" height="15" class="me-2" />
                    <div class="d-flex flex-column">
                      <span>{{ country.name }}</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div class="container justify-content-center justify-content-lg-between w-100">
        <div class="d-flex align-items-center w-md-100">
          <a class="navbar-brand fw-bold d-flex align-items-center me-4 d-none d-lg-block" href="#">
            <i class="fas fa-thin fa-briefcase fs-4 text-primary me-2"></i>
            Forsa
          </a>
        </div>

        <div class="d-flex mt-3 mt-lg-0">
          <i class="fa-thin fa-bell"></i>
          <button class="btn btn-primary px-3 rounded-1" @click="gotojob">Post A Job</button>
          <i class="fa-thin fa-bell"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const storedUser = localStorage.getItem('user')
const parsedUser = JSON.parse(storedUser)

const gotojob = () => {
  router.push("/employeer/postjob");
};

const activeLink = computed(() => route.path);

const selectedCountry = ref("Egypt");

const countries = ref([
  { name: "India", code: "IN", phone: "+91 011 2727 2667" },
  { name: "USA", code: "US", phone: "+1 011 2727 2667" },
  { name: "UK", code: "GB", phone: "+44 011 2727 2667" },
  { name: "UAE", code: "AE", phone: "+971 011 2727 2667" },
  { name: "Saudi Arabia", code: "SA", phone: "+966 011 2727 2667" },
  { name: "Egypt", code: "EG", phone: "+20 011 2727 2667" },
]);

const getFlag = (countryName) => {
  const country = countries.value.find((c) => c.name === countryName);
  return country
    ? `https://flagsapi.com/${country.code}/flat/64.png`
    : "https://flagsapi.com/IN/flat/64.png";
};
</script>

<style scoped>
.nav-link {
  position: relative;
  color: var(--bs-dark) !important;
  transition: all 0.3s ease;
  padding-bottom: 5px;
}
.nav-link:hover,
.nav-link.active {
  color: var(--bs-primary) !important;
}
.nav-link:hover::after,
.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--bs-primary);
  transform: scaleX(1);
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--bs-primary);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.nav-link.active {
  background-color: transparent !important;
}
.nav-item {
  margin: 0 0.5rem;
}
.dropdown-toggle::after {
  margin-left: 0.5em;
  vertical-align: middle;
}
.dropdown-item {
  padding: 0.5rem 1rem;
}
.btn.dropdown-toggle {
  box-shadow: none;
}
@media (max-width: 992px) {
  .navbar-collapse {
    padding-top: 1rem;
  }
  .navbar-nav {
    margin-bottom: 1rem;
  }
  form.d-flex {
    width: 100%;
  }
  .form-control {
    width: 100% !important;
  }
  .d-flex.mt-3 {
    justify-content: center;
    width: 100%;
  }
}
</style>
