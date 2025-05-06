<template>
  <nav>
   
    <div class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container justify-content-between">
        <a
          class="navbar-brand fw-bold d-flex align-items-center me-4 d-lg-none"
          href="#"
        >
          <i class="fas fa-thin fa-briefcase fs-4 text-primary me-2"></i>
          Jobpilot
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
              <a
                class="nav-link"
                :class="{ active: activeLink === 'home' }"
                aria-current="page"
                href="/"
                @click="setActiveLink('home')"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: activeLink === 'jobs' }"
                href="#"
                @click="setActiveLink('jobs')"
                >Jobs</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: activeLink === 'FindJob' }"
                href="/find-job"
                @click="setActiveLink('FindJob')"
                >Find Job</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: activeLink === 'employers' }"
                href="#"
                @click="setActiveLink('employers')"
                >Employers</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: activeLink === 'candidates' }"
                href="/candidatedashbord"
                @click="setActiveLink('candidates')"
                >Dashboard</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: activeLink === 'jobalert' }"
                href="/jobalert"
                @click="setActiveLink('jobalert')"
                >Job Alert</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :class="{ active: activeLink === 'customer' }"
                href="/CustomerService"
                @click="setActiveLink('customer')"
                >Customer Supports</a
              >
            </li>
          </ul>
          <!-- Country Selector as Dropdown -->
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
                    {{
                      countries.find((c) => c.name === selectedCountry)?.phone
                    }}
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
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="#"
                    @click.prevent="selectedCountry = country.name"
                  >
                    <img
                      :src="getFlag(country.name)"
                      :alt="country.name"
                      width="20"
                      height="15"
                      class="me-2"
                    />
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
    <!-- Main Navbar with Search and Buttons  -->
    <div class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div
        class="container justify-content-center justify-content-lg-between w-100"
      >
        <!-- Left Section -->
        <div class="d-flex align-items-center w-md-100">
          <a
            class="navbar-brand fw-bold d-flex align-items-center me-4 d-none d-lg-block"
            href="#"
          >
            <i class="fas fa-thin fa-briefcase fs-4 text-primary me-2"></i>
            Forsa
          </a>

          <form
            action=""
            class="d-flex align-items-center border px-5 ms-2 rounded-2"
          >
            <!-- Country Selector as Dropdown -->
            <div class="d-flex align-items-center">
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle d-flex align-items-center"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style="background: none; border: none; padding: 0"
                >
                  <span class="pe-2">
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
                    <a
                      class="dropdown-item d-flex align-items-center"
                      href="#"
                      @click.prevent="selectedCountry = country.name"
                    >
                      <img
                        :src="getFlag(country.name)"
                        :alt="country.name"
                        width="20"
                        height="15"
                        class="me-2"
                      />
                      {{ country.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <span class="px-3 pb-2 text-light fs-3">|</span>

            <!-- Search Input with Icon Inside -->
            <div class="position-relative w-100 me-lg-3">
              <i
                class="fas fa-search position-absolute top-50 start-0 translate-middle-y text-primary ms-3"
              ></i>
              <input
                type="text"
                v-model="searchQuery"
                class="form-control ps-5 border-0 pe-5 midume-size"
                placeholder="Job title, keyword, company"
              />
            </div>
          </form>
        </div>

        <!-- Right Section -->
        <div class="d-flex mt-3 mt-lg-0">
          <button
            class="btn btn-outline-primary border border-info px-3 me-2 rounded-1"
          >
            Sign In
          </button>
          <button class="btn btn-primary px-3 rounded-1">Post A Jobs</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const activeLink = ref("home");
const setActiveLink = (link) => {
  activeLink.value = link;
};
const selectedCountry = ref("Egypt");
const searchQuery = ref("");

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
/* Hover effects for nav links */
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

/* Remove default Bootstrap underline for active link */
.nav-link.active {
  background-color: transparent !important;
}

/* Adjust spacing */
.nav-item {
  margin: 0 0.5rem;
}

/* Style the dropdown button */
.dropdown-toggle::after {
  margin-left: 0.5em;
  vertical-align: middle;
}

/* Style dropdown items */
.dropdown-item {
  padding: 0.5rem 1rem;
}

/* Remove default button styling */
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
