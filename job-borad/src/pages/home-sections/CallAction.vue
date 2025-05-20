<template>
  <div class="container my-5 py-4">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-6 mb-3 py-4">
        <div class="card border-0 p-3 bg-image-candidate rounded-3">
          <div class="card-body p-4 w-75 text-dark py-5">
            <h2 class="card-title">Become a Candidate</h2>
            <p class="card-text">
              Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi
              sed efficitur dolor. Pellentesque augue risus, aliquet.
            </p>
            <a
              href="/employeer/register"
              class="btn btn-light btn-lg text-primary rounded-1"
              >Register Now <i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-6 mb-3 py-4">
        <div class="card border-0 p-3 bg-image-employers rounded-3">
          <div class="card-body p-4 w-75 text-white py-5">
            <h2 class="card-title">Become an Employers</h2>
            <p class="card-text">
              Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi
              sed efficitur dolor. Pellentesque augue risus, aliquet.
            </p>
            <a
              href="/employeer/register"
              class="btn btn-light btn-lg text-primary rounded-1"
              >Register Now <i class="bi bi-arrow-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.bg-employers {
  background: linear-gradient(
    98.83deg,
    rgba(0, 43, 108, 0.5) 19.55%,
    rgba(0, 43, 108, 0) 56.31%
  );
}
.btn-light {
  background-color: snow;
  color: #007bff;
}
.bg-image-employers {
  background-image: url("../../assets/employer.png"); /* Replace with your path */
  background-size: cover; /* Or use 'contain' */
  background-position: center; /* Controls what part is visible */
  background-repeat: no-repeat;
  height: 100vh; /* Or any desired height */
}

.bg-image-candidate {
  position: relative;
  overflow: hidden;
  z-index: 0; /* make sure stacking context exists */
  height: 100vh;
}

.bg-image-candidate::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: url("../../assets/candidate.png"); /* Your path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transform: scaleX(-1); /* Only flips the background */
  z-index: -1; /* Keeps it behind the content */
}
</style>
