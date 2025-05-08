<template>
    <section class="hero-section py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left: Text & Search -->
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h1 class="fw-bold mb-4">
            Find a job that suits <br />
            your interest & skills.
          </h1>
          <p class="text-muted fs-5 mb-4">
            Aliquam vitae turpis in diam convallis finibus in at risus.
            Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
          </p>

          <!-- Search Form -->
          <div
            class="bg-white p-3 rounded-3 shadow-sm d-flex flex-column flex-md-row align-items-stretch gap-2"
          >
            <div class="position-relative flex-grow-1">
              <i class="fas fa-search position-absolute top-50 start-0 translate-middle-y text-primary ms-3 fs-4"></i>
              <input
                type="text"
                class="form-control form-control-lg ps-5 border-0"
                placeholder="Job title, Keyword..."
              />
            </div>

            <div class="position-relative flex-grow-1">
              <i class="fas fa-map-marker-alt position-absolute top-50 start-0 translate-middle-y text-primary ms-3 fs-4"></i>
              <input
                type="text"
                class="form-control form-control-lg ps-5 border-0"
                placeholder="Your Location"
              />
            </div>

            <button class="btn btn-primary px-4 text-nowrap">Find Jobs</button>
          </div>

          <!-- Suggestions -->
          <div class="mt-4 text-muted small">
            <span class="text-muted fw-bold">Suggestion:</span>
            <span class="text-dark-emphasis"> Designer, Programing, </span>
            <span class="text-primary"> Digital Marketing, </span>
            <span class="text-dark-emphasis"> Video, Animation. </span>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="col-lg-6 text-center">
          <img
            src="../../assets/forsa-illustration.png"
            alt="Hero illustration"
            class="img-fluid"
            style="max-height: 450px"
          />
        </div>
      </div>
      <div class="row text-center mt-5 g-4">
        <!-- Stat 1 -->
        <div class="col-6 col-md-3">
          <div class="row stat-box align-items-center gx-2">
            <div class="col-3 text-center stat-icon">
              <i class="fas fa-briefcase fs-4"></i>
            </div>
            <div class=" offset-1 col-8 text-start">
              <h5 class="stat-value">1,75,324</h5>
              <p class="stat-label">Live Job</p>
            </div>
          </div>
        </div>

        <!-- Stat 2 -->
        <div class="col-6 col-md-3">
          <div class="row stat-box align-items-center gx-2">
            <div class="col-3 text-center stat-icon">
              <i class="fas fa-building fs-4"></i>
            </div>
            <div class="offset-1 col-8 text-start">
              <h5 class="stat-value fs-4">97,354</h5>
              <p class="stat-label">Companies</p>
            </div>
          </div>
        </div>

        <!-- Stat 3 -->
        <div class="col-6 col-md-3">
          <div class="row stat-box align-items-center gx-2">
            <div class="col-3 text-center stat-icon">
              <i class="fas fa-users fs-4"></i>
            </div>
            <div class="offset-1 col-8 text-start">
              <h5 class="stat-value fs-4">38,47,154</h5>
              <p class="stat-label">Candidates</p>
            </div>
          </div>
        </div>

        <!-- Stat 4 -->
        <div class="col-6 col-md-3">
          <div class="row stat-box align-items-center gx-2">
            <div class="col-3 text-center stat-icon">
              <i class="fas fa-briefcase fs-4"></i>
            </div>
            <div class="offset-1 col-8 text-start">
              <h5 class="stat-value fs-4">7,532</h5>
              <p class="stat-label">New Jobs</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

</template>

<script setup>
</script>

<style>

/* Hero Section */
.hero-section {
  background: rgba(241, 242, 244, 0.6);
  min-height: 794px;
}

.btn {
  white-space: nowrap;
}
.stat-box {
  padding: 1.5rem; /* same as p-4 */
  background-color: white;
  border-radius: 1rem; /* same as rounded-3 */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); /* same as shadow-sm */
}

.stat-icon {
  border: 1px solid #dee2e6; /* same as border-1 */
  padding: 1rem; /* same as p-3 */
  border-radius: 0.5rem; /* same as rounded-3 */
  background-color: rgba(13, 110, 253, 0.1); /* light blue background */
}

.stat-value {
  font-weight: 700;
}

.stat-label {
  margin-bottom: 0;
  color: #6c757d;
  font-size: 0.875rem;
}


.stat-icon{
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.stat-icon i{
  color: var(--bs-primary);
  transition: color 0.1s ease-in-out;
}

.stat-icon:hover i{
  color: white;
}

.stat-icon:hover{
  background-color: var(--bs-primary) !important;
  transform: scale(1.009);
}

/* Popular Vacancies Section */
.popular-vacancies-section {
  background-color: #ffffff;
  box-shadow: inset 0 -1px 0 #e4e5e8;
  padding: 100px 0; /* vertical */
}

@media (min-width: 1400px) {
  .popular-vacancies-section .container {
    padding-left: 300px;
    padding-right: 300px;
  }
}

</style>