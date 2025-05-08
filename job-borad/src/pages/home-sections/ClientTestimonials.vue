<template>
    <div class="py-5 bg-background">
      <!-- Section Title -->
      <h2 class="testimonial-title">Clients Testimonial</h2>
  
      <!-- Carousel Wrapper -->
      <div class="carousel-wrapper position-relative mt-5 px-5 w-75 mx-auto">
        <!-- Testimonials Row -->
        <div class="d-flex transition" :style="{ transform: `translateX(-${currentSlide * (100 / visibleCards)}%)` }">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="card p-4 mx-3 flex-shrink-0 testimonial-card"
          >
            <div class="mb-3">
              <span v-for="n in 5" :key="n" class="text-warning fs-5">★</span>
            </div>
            <p class="text-muted mb-4">“{{ testimonial.text }}”</p>
            <div class="d-flex align-items-center justify-content-between">
             <div class="d-flex align-items-center ">
                <img :src="testimonial.image" class="rounded-circle me-3" width="50" height="50" />
                <div>
                    <h6 class="mb-0">{{ testimonial.name }}</h6>
                    <small class="text-secondary">{{ testimonial.role }}</small>
                </div>
             </div>
             <div>
                <i class="bi bi-quote text-secondary fw-bold fs-1"></i>
             </div>
            </div>
          </div>
        </div>
  
        <!-- Arrows -->
        <button class="carousel-arrow left mx-3" @click="prevSlide"><i class="bi bi-chevron-left"></i></button>
        <button class="carousel-arrow right mx-3" @click="nextSlide"><i class="bi bi-chevron-right"></i></button>
      </div>
  
      <!-- Pagination Dots -->
      <div class="d-flex justify-content-center gap-2 mt-4">
        <span
          v-for="(dot, index) in totalPages"
          :key="index"
          class="pagination-dot"
          :class="{ active: currentSlide === index }"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const testimonials = ref([
    {
      text: "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.",
      name: "Robert Fox",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/50?img=1"
    },
    {
      text: "Mauris eget lorem odio. Mauris convallis justo.",
      name: "Bessie Cooper",
      role: "Creative Director",
      image: "https://i.pravatar.cc/50?img=2"
    },
    {
      text: "Class aptent taciti sociosqu ad litora torquent.",
      name: "Jane Cooper",
      role: "Photographer",
      image: "https://i.pravatar.cc/50?img=3"
    },
    {
      text: "Pellentesque habitant morbi tristique senectus et netus.",
      name: "Jenny Wilson",
      role: "Product Manager",
      image: "https://i.pravatar.cc/50?img=4"
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error.",
      name: "Albert Flores",
      role: "Engineer",
      image: "https://i.pravatar.cc/50?img=5"
    }
  ])
  
  const visibleCards = 3
  const currentSlide = ref(0)
  
  const totalPages = computed(() =>
    Math.ceil(testimonials.value.length / visibleCards)
  )
  
  function nextSlide() {
    if (currentSlide.value < totalPages.value-1) {
      currentSlide.value+=1
    }
  }
  
  function prevSlide() {
    if (currentSlide.value > 0) {
      currentSlide.value--
    }
  }
  </script>
  
  <style>
    /* Background */
    .bg-background {
        background-color: #f1f2f4;
        }
  .testimonial-title {
    width: 1320px;
    height: 48px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    color: #191F33;
    margin: 0 auto;
  }
  
  /* Carousel Container */
  .carousel-wrapper {
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  
  /* Row transition */
  .transition {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: max-content;
  }
  
  /* Card Width */
  .testimonial-card {
    width: 420px;
    min-width: 420px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
  }
  
  /* Arrows */
  .carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 32px;
    background: #fff;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
  }
  .carousel-arrow.left {
    left: -20px;
  }
  .carousel-arrow.right {
    right: -20px;
  }
  
  /* Pagination Dots */
  .pagination-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #d1d5db;
    transition: background-color 0.3s ease;
  }
  .pagination-dot.active {
    background-color: #6366f1;
  }
  </style>
  