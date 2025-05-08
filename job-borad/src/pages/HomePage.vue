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
            src="../assets/jobpilot-illustration.png"
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
  <section class="popular-vacancies-section py-5">
    <div class="container">
      <!-- Title -->
      <div class="text-start mb-5">
        <h2 class="fw-bold">Most Popular Vacancies</h2>
      </div>

      <!-- Jobs Grid -->
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="job in jobs" :key="job.id">
          <div class="p-4 bg-white rounded shadow-sm border h-100">
            <h5 class="fw-bold">{{ job.title }}</h5>
            <p class="text-muted mb-1">{{ job.company }}</p>
            <p class="text-muted small">{{ job.location }}</p>
            <button class="btn btn-outline-primary btn-sm mt-3">View Job</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Steps Section -->
  <section class="steps-section py-5">
    <div class="text-center my-5">
      <h2 class="fw-bold text-muted fs-1">How Forsa work</h2>
    </div>

    <div class="container position-relative">
    
      <!-- Steps -->
      <div class="row justify-content-between text-center text-md-start align-items-start">

        <!-- Step 1 -->
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <div class="step-box">
            <div class="step-icon">
              <i class="fas fa-user-plus"></i>
            </div>
            <h5 class="fw-bold mt-3">Create account</h5>
            <p class="text-muted">Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <div class="step-box">
            <div class="step-icon">
              <i class="fas fa-cloud-upload-alt"></i>
            </div>
            <h5 class="fw-bold mt-3">Upload CV/Resume</h5>
            <p class="text-muted">Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales.</p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="col-12 col-md-3 mb-4 mb-md-0">
          <div class="step-box">
            <div class="step-icon">
              <i class="fas fa-search-plus"></i>
            </div>
            <h5 class="fw-bold mt-3">Find suitable job</h5>
            <p class="text-muted">Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="col-12 col-md-3">
          <div class="step-box">
            <div class="step-icon">
              <i class="fas fa-light fa-circle-check"></i>            </div>
            <h5 class="fw-bold mt-3">Apply job</h5>
            <p class="text-muted">Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.</p>
          </div>
        </div>
      </div>

      <!-- SVG arrows -->
      <svg class="step-arrow arrow-1 d-none d-md-block" width="200" height="80">
        <path d="M0,40 Q100,-25 200,40" stroke="#0d6efd" stroke-width="2" stroke-dasharray="5,5" fill="none" marker-end="url(#arrowhead)"/>
      </svg>

      <svg class="step-arrow arrow-2 d-none d-md-block" width="220" height="80">
        <path d="M10,70 Q110,80 220,60" stroke="#0d6efd" stroke-width="2" stroke-dasharray="5,5" fill="none" marker-end="url(#arrowhead)"/>
      </svg>

      <svg class="step-arrow arrow-3 d-none d-md-block" width="220" height="80">
        <path d="M0,20 Q110,-25 220,40" stroke="#0d6efd" stroke-width="2" stroke-dasharray="5,5" fill="none" marker-end="url(#arrowhead)"/>
      </svg>

      <svg width="0" height="0">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#0d6efd" />
          </marker>
        </defs>
      </svg>
    </div>
  </section>

</template>

<script setup>
const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Remote' },
  { id: 2, title: 'UI/UX Designer', company: 'Meta', location: 'USA' },
  { id: 3, title: 'Backend Engineer', company: 'Amazon', location: 'Germany' },
  { id: 4, title: 'Project Manager', company: 'Apple', location: 'Remote' },
  { id: 5, title: 'Marketing Specialist', company: 'Netflix', location: 'France' },
  { id: 6, title: 'QA Tester', company: 'Spotify', location: 'UK' }
]
</script>

<style scoped>

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

/* Steps Section */
.steps-section {
  background-color: #f1f2f4;
  position: relative;
}

.step-box {
  text-align: center;
  padding: 20px;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
}



.step-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e5ecfa;
  color: #0d6efd;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease-in-out;
}
.step-icon i{
  color: #0d6efd;
  transition: color 0.1s ease-in-out;
}

.step-box.active-step .step-icon {
  background: #0d6efd;
  color: #fff;
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(13, 110, 253, 0.3);
}

.step-icon:hover {
  background: #0d6efd;
  color: #fff;
  transform: scale(1.1);
}
.step-icon:hover i{
  color: white;
}

.step-box:hover {
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 0.375rem; /* rounded-2 */
}

.step-icon:hover {
  transform: scale(1.1);
}

.step-box h5 {
  color: #333;
  margin-top: 1rem;
}

.step-box p {
  font-size: 14px;
}

.step-arrow {
  position: absolute;
  top: 20px;
}

.arrow-1 {
  left: 18%;
}
.arrow-2 {
  left: 41%;
}
.arrow-3 {
  left: 67%;
}
</style>
