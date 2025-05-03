<template>
  <footer class="bg-black text-white pt-5 pb-4 mt-5">
    <div class="container">
      <div class="row gy-4">
        <!-- Logo + Info -->
        <div class="col-md-3">
          <h5 class="mb-4"><i class="fas fa-briefcase me-2"></i>Jobpilot</h5>
          <p class="text-secondary mb-1">
            Call now: <strong class="text-white"> (319) 555-0115 </strong>
          </p>
          <p class="text-secondary my-2 small">
            6391 Elgin St. Celina, Delaware 10299, New York, United States of
            America
          </p>
        </div>

        <!-- Quick Link -->
        <div class="col-md-2">
          <h6 class="fw-bold mb-3">Quick Link</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-secondary">About</a></li>
            <li><a href="#" class="text-secondary">Contact</a></li>
            <li><a href="#" class="text-secondary">Pricing</a></li>
            <li><a href="#" class="text-secondary">Blog</a></li>
          </ul>
        </div>

        <!-- Candidate -->
        <div class="col-md-2">
          <h6 class="fw-bold mb-3">Candidate</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-secondary">Browse Jobs</a></li>
            <li><a href="#" class="text-secondary">Browse Employers</a></li>
            <li><a href="#" class="text-secondary">Candidate Dashboard</a></li>
            <li><a href="#" class="text-secondary">Saved Jobs</a></li>
          </ul>
        </div>

        <!-- Employers -->
        <div class="col-md-2">
          <h6 class="fw-bold mb-3">Employers</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-secondary">Post a Job</a></li>
            <li><a href="#" class="text-secondary">Browse Candidates</a></li>
            <li><a href="#" class="text-secondary">Employers Dashboard</a></li>
            <li><a href="#" class="text-secondary">Applications</a></li>
          </ul>
        </div>

        <!-- Support -->
        <div class="col-md-3">
          <h6 class="fw-bold mb-3">Support</h6>
          <ul class="list-unstyled">
            <li><a href="#" class="text-secondary">FAQs</a></li>
            <li><a href="#" class="text-secondary">Privacy Policy</a></li>
            <li><a href="#" class="text-secondary">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom section -->
      <div
        class="d-flex justify-content-between align-items-center pt-4 mt-4 border-top border-secondary"
      >
        <p class="mb-0 text-secondary small p-hover">
          &copy; 2025 Jobpilot - Job Portal. All Rights Reserved
        </p>
        <div class="d-flex gap-3">
          <a href="#" class="text-secondary"
            ><i class="fab fa-facebook-f fs-5"></i
          ></a>
          <a href="#" class="text-secondary"
            ><i class="fab fa-youtube fs-5"></i
          ></a>
          <a href="#" class="text-secondary"
            ><i class="fab fa-instagram fs-5"></i
          ></a>
          <a href="#" class="text-secondary"
            ><i class="fab fa-twitter fs-5"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// لا يوجد سكربت هنا حاليًا
</script>

<style scoped>
footer {
  font-size: 14px;
}
.bg-black {
  background-color: rgb(23, 23, 29) !important;
}

.list-unstyled li a {
  text-decoration: none !important;
  position: relative;
  padding-left: 20px;
  display: inline-block;
  transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.list-unstyled li a::before {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  content: "\f061"; /* fas fa-arrow-right */
  position: absolute;
  left: 0;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.2s ease-in-out;
}

.list-unstyled li a:hover {
  color: white !important;
  transform: translateX(25px);
}

.list-unstyled li a:hover::before {
  opacity: 1;
  transform: translateX();
}

.text-secondary {
  color: #6c757d !important;
}

div a i:hover {
  transform: scale(1.2);
  color: var(--bs-primary) !important;
  transition: all 0.2s ease-in-out;
}
.p-hover:hover {
  color: white !important;
  transform: scale(1.009);
  transition: all 0.2s ease-in-out;
}
</style>
