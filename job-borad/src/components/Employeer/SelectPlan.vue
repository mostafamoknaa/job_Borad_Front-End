<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <MainNavbar />
        </div>
        <div class="col-md-4">
          <EmpSidebar />
        </div>
        <div class="col-md-8">
            <div class="row mt-5">
                <div class="col-md-6">
                    <h4 class="mb-4">Buy Premium Subscriotion to post a Job</h4>
                    <p>
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae mollitia eveniet dolores enim doloribus consectetur maiores culpa voluptate perspiciatis aut modi, quis sit similique earum sequi dicta harum, sunt autem.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQUyYVyScBv5NUMVchJcnPjxwN639cvVaNQ&s" alt="Plan Image" class="img-fluid rounded-3" />
                </div>    
            </div>
            <div class="row mt-5">
                <div class="col-md-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Basic</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            <h3 class="text-center">$10</h3>
                            <p class="text-center">per month</p>
                            <hr>
                            <p><i class="fa-solid fa-check text-info me-2"></i>post one job</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>Highlight job</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>Access 2 Candidate</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>10 Days view CV</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>24 Critical Support</p>
                            <p class="text-center"><span class="status-active">Active</span></p>
                            <button class="btn btn-primary w-100" @click="openModal">Select</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Standard</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            <h3 class="text-center">$15</h3>
                            <p class="text-center">per month</p>
                            <hr>
                            <p><i class="fa-solid fa-check text-info me-2"></i>post one job</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>Highlight job</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>Access 2 Candidate</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>10 Days view CV</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>24 Critical Support</p>
                            <p class="text-center"><span class="status-active">Active</span></p>
                            <button class="btn btn-primary w-100" @click="openModal">Select</button>
                        </div>
                     </div>
                </div>
                <div class="col-md-4">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h5 class="card-title">Premium</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
                            <h3 class="text-center">$20</h3>
                            <p class="text-center">per month</p>
                            <hr>
                            <p><i class="fa-solid fa-check text-info me-2"></i>post one job</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>Highlight job</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>Access 2 Candidate</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>10 Days view CV</p>
                            <p><i class="fa-solid fa-check text-info me-2"></i>24 Critical Support</p>
                            <p class="text-center"><span class="status-active">Active</span></p>
                            <button class="btn btn-primary w-100" @click="openModal">Select</button>
                        </div>
                     </div>
                </div>
            </div>    
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                ref="modal"
                >
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal Title</h5>
                        <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <div class="container mt-4">
                              <h2 class="text-center mb-4">Stripe Payment</h2>
                              <p class="text-center">Enter your payment details below:</p>
                              <form id="payment-form" @submit.prevent="handleSubmit">
                                <div id="card-element" class="form-control mb-3"></div>
                                <button id="submit" class="checkout-btn" type="submit">Pay with Card</button>
                                <p id="payment-message">{{ paymentMessage }}</p>
                              </form>
                            </div>
                        
                            <!-- Success Modal -->
                            <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true" ref="successModal">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Success</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                  <div class="modal-body">
                                    <p>The Product will be delivered to your address.</p>
                                  </div>
                                  <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            <p class="text-center text-muted small mt-5">© 2025 Forsa - Job Board. All rights reserved.</p>
        </div>
      </div>
    </div>
</template>
  
  <script>
  import { ref } from 'vue'
  import EmpSidebar from './EmpSidebar.vue'
  import MainNavbar from './MainNavbar.vue'
  import { Modal } from 'bootstrap';
  export default {
        components: {
            EmpSidebar,
            MainNavbar
        },
        setup() {
            
        },
        methods: {
            openModal() {
            const modal = new Modal(this.$refs.modal);
            modal.show();
            }
        }
        
}
</script>
<style scoped>
.status-active {
  color: #28a745;
  font-weight: bold;
}
.status-expired {
  color: #dc3545;
  font-weight: bold;
}

.page-wrapper {
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  padding: 30px 0;
}

.section-title {
  font-weight: bold;
  margin-bottom: 20px;
}

.container {
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
}

.pricing-card {
  border: none;
  border-radius: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
  background: #f9f9f9;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.price {
  color: #28a745;
  font-size: 2rem;
}

.per-month {
  color: #777;
}

/* Checkout Button */
.checkout-btn {
  background: #6772e5;
  color: white;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  transition: background 0.3s;
  border: none;
}

.checkout-btn:hover {
  background: #5469d4;
}

/* Modal Improvements */
.modal-content {
  border-radius: 20px;
  overflow: hidden;
  animation: fadeIn 0.5s;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
}

.modal-header {
  background: #6772e5;
  color: #fff;
  border-bottom: none;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.modal-body {
  padding: 30px;
}

#card-element {
  padding: 15px;
  border: 2px solid #6772e5;
  border-radius: 10px;
  background: #f8f9fa;
  min-height: 50px;
}

#payment-message {
  margin-top: 10px;
  color: #28a745;
  text-align: center;
}

/* Success Modal */
#myModal .modal-content {
  border-radius: 20px;
}

#myModal .modal-header {
  background: #28a745;
  color: white;
}

#myModal .modal-body p {
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
  
