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
        <div v-if="showSuccess" class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Success!</strong> Job posted successfully.
          <button type="button" class="btn-close" @click="showSuccess = false" aria-label="Close"></button>
        </div>

        <form @submit.prevent="handleSubmit" class="job-form">
          <div class="form-group">
            <label for="category_id">Category</label>
            <select
              id="category_id"
              v-model="form.category_id"
              class="form-control"
              :class="{ 'is-invalid': errors.category_id }"
              @change="clearError('category_id')"
            >
              <option value="">Select a category</option>
              <option v-for="category in categories" :value="category.id" :key="category.id">
                {{ category.name }}
              </option>
            </select>
            <div v-if="errors.category_id" class="invalid-feedback">
              {{ errors.category_id[0] }}
            </div>
          </div>

          <div class="form-group">
            <label>Job Type</label>
            <div class="form-check" v-for="type in jobTypes" :key="type">
              <input
                class="form-check-input"
                type="radio"
                :id="`type-${type}`"
                v-model="form.type"
                :value="type"
                :class="{ 'is-invalid': errors.type }"
              >
              <label class="form-check-label" :for="`type-${type}`">
                {{ type }}
              </label>
            </div>
            <div v-if="errors.type" class="invalid-feedback">
              {{ errors.type[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="title">Job Title</label>
            <input
              type="text"
              id="title"
              v-model="form.title"
              class="form-control"
              :class="{ 'is-invalid': errors.title }"
            >
            <div v-if="errors.title" class="invalid-feedback">
              {{ errors.title[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="description">Job Description</label>
            <textarea
              id="description"
              v-model="form.description"
              rows="5"
              class="form-control"
              :class="{ 'is-invalid': errors.description }"
            ></textarea>
            <div v-if="errors.description" class="invalid-feedback">
              {{ errors.description[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="responsibilities">Responsibilities</label>
            <textarea
              id="responsibilities"
              v-model="form.responsibilities"
              rows="5"
              class="form-control"
              :class="{ 'is-invalid': errors.responsibilities }"
            ></textarea>
            <div v-if="errors.responsibilities" class="invalid-feedback">
              {{ errors.responsibilities[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="qualifications">Qualifications</label>
            <textarea
              id="qualifications"
              v-model="form.qualifications"
              rows="5"
              class="form-control"
              :class="{ 'is-invalid': errors.qualifications }"
            ></textarea>
            <div v-if="errors.qualifications" class="invalid-feedback">
              {{ errors.qualifications[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="salary_range">Salary Range (optional)</label>
            <input
              type="text"
              id="salary_range"
              v-model="form.salary_range"
              class="form-control"
              :class="{ 'is-invalid': errors.salary_range }"
              placeholder="e.g. $50,000 - $70,000 per year"
            >
            <div v-if="errors.salary_range" class="invalid-feedback">
              {{ errors.salary_range[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="benefits">Benefits (optional)</label>
            <textarea
              id="benefits"
              v-model="form.benefits"
              rows="3"
              class="form-control"
              :class="{ 'is-invalid': errors.benefits }"
              placeholder="List any benefits offered with this position"
            ></textarea>
            <div v-if="errors.benefits" class="invalid-feedback">
              {{ errors.benefits[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="location">Location</label>
            <input
              type="text"
              id="location"
              v-model="form.location"
              class="form-control"
              :class="{ 'is-invalid': errors.location }"
              placeholder="e.g. New York, NY or Remote"
            >
            <div v-if="errors.location" class="invalid-feedback">
              {{ errors.location[0] }}
            </div>
          </div>

          <div class="form-group">
            <label for="application_deadline">Application Deadline</label>
            <input
              type="date"
              id="application_deadline"
              v-model="form.application_deadline"
              class="form-control"
              :class="{ 'is-invalid': errors.application_deadline }"
            >
            <div v-if="errors.application_deadline" class="invalid-feedback">
              {{ errors.application_deadline[0] }}
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary" :disabled="loading">
              <span v-if="loading">Submitting...</span>
              <span v-else>Submit Job</span>
            </button>
            <button type="button" class="btn btn-secondary" @click="resetForm">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import EmpSidebar from './EmpSidebar.vue'
import MainNavbar from './MainNavbar.vue'
import axios from 'axios'

export default {
  components: {
    MainNavbar,
    EmpSidebar
  },
  setup() {
    const showSuccess = ref(false);
    const form = ref({
      employer_id: localStorage.getItem('employer_id'),
      category_id: '',
      type: 'full-time',
      title: '',
      description: '',
      responsibilities: '',
      qualifications: '',
      salary_range: '',
      benefits: '',
      location: '',
      application_deadline: '',
      status: 'pending',
    });

    const categories = ref([]);
    const jobTypes = ref(['full-time', 'part-time', 'contract', 'internship', 'temporary', 'freelance']);
    const errors = ref({});
    const loading = ref(false);
    const isAdmin = ref(true);

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/categories', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('employeer_token')}`,
          },
        });
        categories.value = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const clearError = (field) => {
      if (errors.value[field]) {
        delete errors.value[field];
      }
    };

    const handleSubmit = async () => {
      loading.value = true;
      errors.value = {};
      showSuccess.value = false;

      try {
        const formData = new FormData();
        Object.entries(form.value).forEach(([key, value]) => {
          formData.append(key, value);
        });

        formData.append('employer_id', localStorage.getItem('employer_id'));

        const response = await axios.post('http://localhost:8000/api/jobs', formData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
          }
        });

        console.log('Job created successfully:', response.data);
        showSuccess.value = true;
        setTimeout(() => {
          showSuccess.value = false;
        }, 5000);

        resetForm();

      } catch (error) {
        if (error.response && error.response.status === 422) {
          errors.value = error.response.data.errors || {};
        } else {
          console.error('Error submitting form:', error);
        }
      } finally {
        loading.value = false;
      }
    };

    const resetForm = () => {
      form.value = {
        category_id: '',
        type: 'full-time',
        title: '',
        description: '',
        responsibilities: '',
        qualifications: '',
        salary_range: '',
        benefits: '',
        location: '',
        application_deadline: '',
        status: 'pending',
      };
      errors.value = {};
    };

    onMounted(fetchCategories);

    return {
      form,
      categories,
      jobTypes,
      errors,
      loading,
      handleSubmit,
      resetForm,
      clearError,
      showSuccess,
      isAdmin
    };
  }
};
</script>

<style scoped>
.job-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-control.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
}

.form-check {
  margin-bottom: 8px;
}

.form-check-input {
  margin-right: 8px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 30px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.btn-primary:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.alert {
  margin-bottom: 20px;
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
