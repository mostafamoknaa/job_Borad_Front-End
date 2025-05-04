<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <Sidebar />
        </div>
        <div class="col-md-9">
          <h1 class="page-title">Setting</h1>
          <div class="card">
            <div class="tabs">
              <button class="tab active"><i class="fa-solid fa-person me-1"></i>Personal</button>
              <button class="tab"><i class="fa-solid fa-person me-1"></i>Profile</button>
              <button class="tab"><i class="fa-solid fa-globe icon me-1"></i>Social Links</button>
              <button class="tab"><i class="fa-solid fa-gear icon"></i>Account Setting</button>
            </div>
  
            <form @submit.prevent="saveChanges">
              <div class="form-grid">
                <div class="upload-box">
                  <div class="upload-preview">
                    <i class="fas fa-user"></i>
                  </div>
                  <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload">
                  <button type="button" class="upload-button" @click="$refs.fileInput.click()">
                    Browse photo or drop here
                  </button>
                  <p class="upload-note">A photo larger than 400px works best. Max photo size is 5MB.</p>
                </div>
  
                <div class="info-fields">
                  <input v-model="form.fullName" type="text" placeholder="Full name" class="input me-3 mt-3">
                  <input v-model="form.title" type="text" placeholder="Title/headline" class="input me-3 mt-3">
                  <select v-model="form.experience" class="input mt-5 me-3">
                    <option disabled value="">Select experience</option>
                    <option>0-1 years</option>
                    <option>2-5 years</option>
                    <option>5+ years</option>
                  </select>
                  <select v-model="form.education" class="input mt-5 me-3">
                    <option disabled value="">Select education</option>
                    <option>High School</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </select>
                  <div class="input-wrapper mt-5">
                    <i class="fa-solid fa-link icon"></i>
                    <input v-model="form.website" type="url" placeholder="Personal Website" class="input">
                  </div>
                </div>
              </div>
  
              <div class="save-btn-container">
                <button type="submit" class="save-btn">Save Changes</button>
              </div>
            </form>
  
            <div class="cv-section">
              <h2 class="section-title">Your CV/Resume</h2>
              <div class="cv-grid">
                <div v-for="(cv, index) in cvs" :key="index" class="cv-card">
                    <div class="cv-info">
                      <span class="cv-icon-wrapper">
                        <i class="fas fa-file-alt cv-icon"></i>
                      </span>
                      <div class="cv-text">
                        <div class="cv-text-header">
                          <p class="cv-name">{{ cv.name }}</p>
                          <i class="fas fa-ellipsis-h action-icon" @click="toggleDropdown(index)"></i>
                        </div>
                        <p class="cv-size">{{ cv.size }}</p>
                      </div>
                    </div>
                    <div v-if="activeDropdown == index" class="dropdown-menu">
                      <button @click="editCV(index)">Edit</button>
                      <button @click="deleteCV(index)">Delete</button>
                    </div>
                  </div>
                  
  
                <div class="cv-card add-cv" @click="addCV">
                  <i class="fas fa-plus"></i>
                  <p>Add CV/Resume</p>
                </div>
              </div>
            </div>
            <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
                <div class="modal-content">
                  <h2>Add New CV/Resume</h2>
              
                  <input 
                    v-model="newCVName" 
                    type="text" 
                    placeholder="Enter CV Name" 
                    class="input-field mt-3"
                  >
                  <div class="upload-box mt-3">
                    <div class="upload-preview">
                      <i class="fas fa-user"></i>
                    </div>
                    <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload">
                    <button type="button" class="upload-button" @click="$refs.fileInput.click()">
                      Browse File or drop here
                    </button>
                    <p class="upload-note">Accept pdf file only.</p>
                  </div>
              
                  <div class="modal-buttons mt-4">
                    <button @click="submitNewCV" class="save-btn">Add</button>
                    <button @click="closeModal" class="save-btn cancel-btn">Cancel</button>
                  </div>
                </div>
              </div>
              
              
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from './Sidebar.vue'
  
  export default {
    components: {
      Sidebar
    },
    name: "SettingPage",
    data() {
      return {
        activeDropdown: null,
        showModal: false,
        form: {
          fullName: '',
          title: '',
          experience: '',
          education: '',
          website: '',
          profilePicture: null
        },
        cvs: [
          { name: "Professional Resume", size: "3.5 MB" },
          { name: "Product Designer", size: "4.7 MB" },
          { name: "Visual Designer", size: "1.3 MB" }
        ]
      };
    },
    methods: {
        handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.newCVFile = file;
        }
        },
        submitNewCV() {
        if (this.newCVName && this.newCVFile) {
            const newCV = {
            name: this.newCVName,
            size: (this.newCVFile.size / (1024 * 1024)).toFixed(2) + " MB"
            };
            this.cvs.push(newCV);
            this.closeModal();
        }
        },
        closeModal() {
        this.showModal = false;
        this.newCVName = '';
        this.newCVFile = null;
        if (this.$refs.cvFile) {
            this.$refs.cvFile.value = null; // Reset file input
        }
        },
      toggleDropdown(index) {
        this.activeDropdown = this.activeDropdown === index ? null : index;
      },
      editCV(index) {
        console.log('Edit CV', index);
      },
      deleteCV(index) {
        this.cvs.splice(index, 1);
        this.activeDropdown = null;
      },
      saveChanges() {
        console.log('Saving...', this.form);
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
          this.form.profilePicture = file;
        }
      },
      addCV() {
        this.showModal = true;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
  }
  .page-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .tabs {
    display: flex;
    gap: 1.5rem;
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
  }
  .tab {
    padding-bottom: 0.5rem;
    font-weight: 500;
    color: gray;
    background: none;
    border: none;
    cursor: pointer;
  }
  .tab.active {
    color: #1d4ed8;
    border-bottom: 2px solid #1d4ed8;
  }
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .upload-box {
    border: 2px dashed #ccc;
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
  }
  .upload-preview {
    width: 96px;
    height: 96px;
    background: #f1f1f1;
    border-radius: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #aaa;
    margin-bottom: 1rem;
  }
  .hidden {
    display: none;
  }
  .upload-button {
    background: none;
    border: none;
    color: #1d4ed8;
    font-weight: 500;
    cursor: pointer;
  }
  .upload-note {
    font-size: 0.75rem;
    color: gray;
    margin-top: 0.5rem;
  }
  .info-fields {
    flex-direction: column;
    gap: 1rem;
  }
  .input {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    width: 45%;
  }
  .input-wrapper {
    position: relative;
  }
  .input-wrapper .icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: gray;
    font-size: 1rem;
  }
  .input-wrapper .input {
    padding-left: 40px;
  }
  .save-btn-container {
    margin-top: 2rem;
  }
  .save-btn {
    background: #1d4ed8;
    color: white;
    padding: 10px 30px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    cursor: pointer;
  }
  .cv-section {
    margin-top: 3rem;
  }
  .section-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .cv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }
  .cv-card {
    background: #fff;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    position: relative;
  }
  .cv-info {
    display: flex;
    align-items: center;
  }
  .cv-icon-wrapper {
    flex-shrink: 0;
    font-size: 2rem;
    color: #3498db;
    margin-right: 15px;
  }
  .cv-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .cv-text-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .cv-name {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
  }
  .cv-size {
    font-size: 0.85rem;
    color: #888;
    margin-top: 5px;
  }
  .action-icon {
    font-size: 1.2rem;
    cursor: pointer;
    color: #555;
  }
  .dropdown-menu {
    position: absolute;
    top: 50px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    z-index: 100;
  }
  .dropdown-menu button {
    display: block;
    width: 100%;
    padding: 10px 15px;
    background: none;
    border: none;
    text-align: left;
    font-size: 0.9rem;
    color: #333;
    cursor: pointer;
  }
  .dropdown-menu button:hover {
    background: #f0f0f0;
  }
  .add-cv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .add-cv:hover {
    background: #eee;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
  }
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    text-align: center;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
  }
  .cancel-btn {
    background: gray;
  }
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 10px;
  }
  </style>
  