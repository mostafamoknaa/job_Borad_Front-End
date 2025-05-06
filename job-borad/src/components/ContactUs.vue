<template>
    <div class="container contact-container">
      <div class="row">
        <div class="col-md-6">
          <div class="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, feel free to reach out to us.</p>
            <div class="contact-details">
              <div class="contact-item">
                <i class="fa-solid fa-map-marker-alt"></i>
                <div>
                  <span>123 Main Street, City, Country</span>
                  <p>Our office address</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fa-solid fa-phone"></i>
                <div>
                  <span>+123 456 7890</span>
                  <p>Our phone number</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fa-solid fa-envelope"></i>
                <div>
                  <span>info@example.com</span>
                  <p>Our email address</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fa-solid fa-clock"></i>
                <div>
                  <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
                  <p>Our working hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required />
              </div>
              <div class="form-group">
                <label for="email">Your Email</label>
                <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" placeholder="Type your message here..." required></textarea>
              </div>
              <button type="submit" class="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
         <div class="col-md-12">
            <div class="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099994!2d144.9537353153165!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11b8b7%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1633031234567"
                    width="100%"
                    height="300"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const form = reactive({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    console.log('Form submitted', form);
  };
  </script>
  
  <style scoped>
  .contact-container {
    padding: 4rem 0;
  }
  
  .contact-info, .contact-form {
    background: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .contact-info h2, .contact-form h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #1d4ed8;
  }
  
  .contact-info p {
    margin-bottom: 2rem;
    color: #555;
  }
  
  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .contact-item i {
    font-size: 1.5rem;
    color: #1d4ed8;
  }
  
  .contact-item span {
    font-weight: 600;
  }
  
  .contact-item p {
    margin: 0;
    font-size: 0.9rem;
    color: #777;
  }
  
  .contact-form form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
  
  .form-group label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    background: #f9fafb;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #1d4ed8;
    background: #ffffff;
  }
  
  .btn-submit {
    padding: 0.8rem 1.5rem;
    background-color: #1d4ed8;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn-submit:hover {
    background-color: #2563eb;
  }
  </style>
  