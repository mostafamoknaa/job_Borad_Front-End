<template>
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
            <a href="/employeer/login" style="text-decoration: none;"><h5 class="fw-bold mt-3">Create account</h5></a>
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
            <a href="/find-job" style="text-decoration: none;"><h5 class="fw-bold mt-3">Find suitable job</h5></a>
            <p class="text-muted">Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="col-12 col-md-3">
          <div class="step-box">
            <div class="step-icon">
              <i class="fas fa-light fa-circle-check"></i>            </div>
            <a href="/employers" style="text-decoration: none;"><h5 class="fw-bold mt-3">Apply job</h5></a>
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

<script setup>  </script>

<style >  
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