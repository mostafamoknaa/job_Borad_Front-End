<template>
  <div class="container fluid p-0 mt-5">
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
      <div class="col-md-9">
        <h1 class="page-title">Setting</h1>
        <div class="card">
          <div class="tabs">
            <router-link 
              to="/Settings" 
              class="tab" 
              :class="{ active: $route.path === '/Settings' }"
            >
              <i class="fa-solid fa-user me-1"></i> Personal
            </router-link>
          
            <router-link 
              to="/SettingProfile" 
              class="tab" 
              :class="{ active: $route.path === '/SettingProfile' }"
            >
              <i class="fa-solid fa-id-card me-1"></i> Profile
            </router-link>
          </div>
          
          <form @submit.prevent="saveChanges">
            <div class="form-grid">
              <div class="upload-box">
                <div class="upload-preview">
                  <img v-if="imagePreview" :src="imagePreview" class="preview-image">
                  <i v-else class="fas fa-user"></i>
                </div>
                <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload" accept="image/*">
                <button type="button" class="upload-button" @click="$refs.fileInput.click()">
                  Browse photo or drop here
                </button>
                <p class="upload-note">A photo larger than 400px works best. Max photo size is 5MB.</p>
                <div v-if="errors?.image" class="invalid-feedback">{{ errors.image[0] }}</div>
              </div>

              <div class="info-fields">
                <div class="input-wrapper">
                  <input 
                    v-model="form.title" 
                    type="text" 
                    placeholder="Title/headline" 
                    class="input me-3 mt-3 w-100"
                    :class="{ 'is-invalid': errors?.title }"
                  >
                  <div v-if="errors?.title" class="invalid-feedback">{{ errors.title[0] }}</div>
                </div>

                <div class="input-wrapper">
                  <select 
                    v-model="form.experience_level" 
                    class="input mt-5 me-3 w-100"
                    :class="{ 'is-invalid': errors?.experience_level }"
                  >
                    <option disabled value="">Select experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="2-5 years">2-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                  <div v-if="errors?.experience_level" class="invalid-feedback">{{ errors.experience_level[0] }}</div>
                </div>

                <div class="input-wrapper">
                  <select 
                    v-model="form.education" 
                    class="input mt-5 me-3 w-100"
                    :class="{ 'is-invalid': errors?.education }"
                  >
                    <option disabled value="">Select education</option>
                    <option>High School</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </select>
                  <div v-if="errors?.education" class="invalid-feedback">{{ errors.education[0] }}</div>
                </div>
              </div>
            </div>

            <div class="save-btn-container">
              <button type="submit" class="save-btn" :disabled="isLoading">
                {{ isLoading ? 'Saving...' : 'Save Changes' }}
              </button>
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
                :class="{ 'is-invalid': cvErrors?.name }"
              >
              <div v-if="cvErrors?.name" class="invalid-feedback">{{ cvErrors.name[0] }}</div>
              
              <div class="upload-box mt-3">
                <div class="upload-preview">
                  <i v-if="!newCVPreview" class="fas fa-file-alt"></i>
                  <img v-else :src="newCVPreview" class="preview-image">
                </div>
                <input 
                  type="file" 
                  ref="cvFileInput" 
                  class="hidden" 
                  @change="handleCVUpload"
                  accept=".pdf,.doc,.docx"
                >
                <button type="button" class="upload-button" @click="$refs.cvFileInput.click()">
                  Browse File or drop here
                </button>
                <p class="upload-note">Accept pdf, doc, docx files only.</p>
                <div v-if="cvErrors?.file" class="invalid-feedback">{{ cvErrors.file[0] }}</div>
              </div>
          
              <div class="modal-buttons mt-4">
                <button @click="submitNewCV" class="save-btn" :disabled="isAddingCV">
                  {{ isAddingCV ? 'Adding...' : 'Add' }}
                </button>
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
import interceptor from '../../Interceptor/getaxiox'

export default {
  components: {
    Sidebar
  },
  name: "SettingPage",
  data() {
    return {
      activeTab: 'Settings',
      activeDropdown: null,
      showModal: false,
      isLoading: false,
      isAddingCV: false,
      imagePreview: null,
      newCVPreview: null,
      form: {
        title: '',
        experience_level: '',
        education: '',
        website: '',
        profilePicture: null
      },
      newCVName: '',
      newCVFile: null,
      cvs: [
        { name: "Professional Resume", size: "3.5 MB" },
        { name: "Product Designer", size: "4.7 MB" },
        { name: "Visual Designer", size: "1.3 MB" }
      ],
      errors: {},
      cvErrors: {}
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          this.errors.image = ['File size must be less than 5MB'];
          return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
        
        this.form.profilePicture = file;
        this.errors.image = null;
      }
    },
    handleCVUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!validTypes.includes(file.type)) {
          this.cvErrors.file = ['Only PDF and Word documents are allowed'];
          return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
          this.cvErrors.file = ['File size must be less than 5MB'];
          return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
          this.newCVPreview = e.target.result;
        };
        reader.readAsDataURL(file);
        
        this.newCVFile = file;
        this.cvErrors.file = null;
      }
    },
    async submitNewCV() {
      this.cvErrors = {};
      
      if (!this.newCVName) {
        this.cvErrors.name = ['CV name is required'];
        return;
      }
      
      if (!this.newCVFile) {
        this.cvErrors.file = ['Please select a file'];
        return;
      }
      
      this.isAddingCV = true;
      
      try {
        const formData = new FormData();
        formData.append('cv', this.newCVFile);
        formData.append('name', this.newCVName);
        
        
        const response = await interceptor.post('/candidates/cv', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        this.cvs.push({
          name: this.newCVName,
          size: (this.newCVFile.size / (1024 * 1024)).toFixed(2) + " MB",
          id: response.data.id
        });
        
        this.closeModal();
      } catch (error) {
        if (error.response?.status === 422) {
          this.cvErrors = error.response.data.errors;
        } else {
          console.error('Error adding CV:', error);
          
        }
      } finally {
        this.isAddingCV = false;
      }
    },
    closeModal() {
      this.showModal = false;
      this.newCVName = '';
      this.newCVFile = null;
      this.newCVPreview = null;
      this.cvErrors = {};
      if (this.$refs.cvFileInput) {
        this.$refs.cvFileInput.value = null;
      }
    },
    toggleDropdown(index) {
      this.activeDropdown = this.activeDropdown === index ? null : index;
    },
    editCV(index) {
      
      const cv = this.cvs[index];
      this.newCVName = cv.name;
      this.showModal = true;
      this.activeDropdown = null;
    },
    async deleteCV(index) {
      if (confirm('Are you sure you want to delete this CV?')) {
        try {
          
          await interceptor.delete(`/candidates/cv/${this.cvs[index].id}`);
          this.cvs.splice(index, 1);
        } catch (error) {
          console.error('Error deleting CV:', error);
          alert('Failed to delete CV. Please try again.');
        }
      }
      this.activeDropdown = null;
    },
    async saveChanges() {
      this.errors = {};
      this.isLoading = true;
      
      try {
        const formData = new FormData();
        
        
        formData.append('title', this.form.title);
        formData.append('experience_level', this.form.experience_level);
        formData.append('education', this.form.education);
        
        
        if (this.form.profilePicture) {
          formData.append('image', this.form.profilePicture);
        }
        
        const response = await interceptor.post('/candidates', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        console.log('Profile updated successfully:', response.data);
        
      } catch (error) {
        if (error.response?.status === 422) {
          this.errors = error.response.data.errors;
        } else {
          console.error('Error updating profile:', error);
          alert('Failed to update profile. Please try again.');
        }
      } finally {
        this.isLoading = false;
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
  position: relative;
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
  overflow: hidden;
}
.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
.upload-button:hover {
  text-decoration: underline;
}
.upload-note {
  font-size: 0.75rem;
  color: gray;
  margin-top: 0.5rem;
}
.info-fields {
  display: flex;
  flex-direction: column;
}
.input {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
}
.input:focus {
  outline: none;
  border-color: #1d4ed8;
}
.input-wrapper {
  margin-bottom: 1rem;
  position: relative;
}
.is-invalid {
  border-color: #dc3545;
}
.invalid-feedback {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
.save-btn-container {
  margin-top: 2rem;
  text-align: right;
}
.save-btn {
  background: #1d4ed8;
  color: white;
  padding: 10px 30px;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}
.save-btn:hover {
  background: #1a3fb6;
}
.save-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}
.cv-section {
  margin-top: 3rem;
  border-top: 1px solid #eee;
  padding-top: 2rem;
}
.section-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.cv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
.cv-card {
  background: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  position: relative;
  transition: box-shadow 0.3s;
}
.cv-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
}
.cv-text-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cv-name {
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  padding: 5px;
}
.action-icon:hover {
  color: #1d4ed8;
}
.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 10px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 100;
}
.dropdown-menu button {
  display: block;
  width: 100%;
  padding: 8px 15px;
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
  color: #1d4ed8;
  border: 1px dashed #1d4ed8;
}
.add-cv:hover {
  background: #f0f7ff;
}
.add-cv i {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
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
  width: 100%;
  max-width: 500px;
}
.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.modal-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
.cancel-btn {
  background: #6c757d;
}
.cancel-btn:hover {
  background: #5a6268;
}
</style>