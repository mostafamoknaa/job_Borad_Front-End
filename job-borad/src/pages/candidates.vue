<template>
  <div class="container py-5">
    <h2 class="mb-4 fw-bold">Browse Candidates</h2>
    <div class="row">
      <div class="col-md-3">
        <!-- Sidebar Filters -->
        <!-- <div class="mb-4">
          <h6 class="fw-bold mb-3">Category</h6>
          <div class="form-check mb-2" v-for="cat in categories" :key="cat">
            <input class="form-check-input" type="checkbox" :id="cat" v-model="selectedCategories" :value="cat" />
            <label class="form-check-label" :for="cat">{{ cat }}</label>
          </div>
        </div>

        <div class="mb-4">
          <h6 class="fw-bold mb-3">Location</h6>
          <div class="form-check mb-2" v-for="loc in locations" :key="loc">
            <input class="form-check-input" type="checkbox" :id="loc" v-model="selectedLocations" :value="loc" />
            <label class="form-check-label" :for="loc">{{ loc }}</label>
          </div>
        </div>

        <div class="mb-4">
          <h6 class="fw-bold mb-3">Work Type</h6>
          <div class="form-check mb-2" v-for="type in workTypes" :key="type">
            <input class="form-check-input" type="checkbox" :id="type" v-model="selectedWorkTypes" :value="type" />
            <label class="form-check-label" :for="type">{{ type }}</label>
          </div>
        </div> -->

        <!-- Gender Filter -->
        <!-- Gender Filter (Single Select - Radio) -->
        <div class="mb-4">
          <h6 class="fw-bold mb-3">Gender</h6>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="gender" id="genderMale" value="Male" v-model="selectedGender">
            <label class="form-check-label" for="genderMale">Male</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="gender" id="genderFemale" value="Female" v-model="selectedGender">
            <label class="form-check-label" for="genderFemale">Female</label>
          </div>
          <div class="form-check mb-2">
            <input class="form-check-input" type="radio" name="gender" id="genderAll" value="" v-model="selectedGender">
            <label class="form-check-label" for="genderAll">Any</label>
          </div>
        </div>


        <!-- Location Range Filter -->
        <div class="mb-4">
          <h6 class="fw-bold mb-3">Location Range (km)</h6>
          <input type="range" class="form-range" min="0" max="100" step="5" v-model="maxDistance">
          <div>{{ maxDistance }} km</div>
        </div>

      </div>


      <div class="col-md-9">
        <div class="row g-4">
          <div class="col-12 col-md-12 col-lg-12" v-for="candidate in candidates" :key="candidate.id">
            <CandidateCard :candidate="candidate" />
          </div>
        </div>
      </div>

      <!-- Modal for candidate profile -->
      <CandidateModal :candidate="candidate" @view="selectedCandidate = $event" />
      <!-- <CandidateModal :candidate="selectedCandidate" /> -->
      
        <!-- Pagination Controls -->
        <nav aria-label="Candidate pagination" class="mt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <button class="page-link">Previous</button>
            </li>
            <li class="page-item active"><button class="page-link">1</button></li>
            <li class="page-item"><button class="page-link">2</button></li>
            <li class="page-item"><button class="page-link">3</button></li>
            <li class="page-item">
              <button class="page-link">Next</button>
            </li>
          </ul>
        </nav>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CandidateCard from '../components/CandidateCard.vue';
import CandidateModal from '../components/CandidateModal.vue';


const candidates = ref([]);
const selectedCandidate = ref(null);
//const categories = ['UI/UX Designer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
//const locations = ['USA', 'Germany', 'Egypt', 'Remote'];
//const workTypes = ['Full Time', 'Part Time', 'Remote'];

//const selectedCategories = ref([]);
//const selectedLocations = ref([]);
//const selectedWorkTypes = ref([]);

const selectedGender = ref('');
const maxDistance = ref(100);




onMounted(async () => {
  try {
    const response = await fetch('http://localhost:3000/candidates');
    candidates.value = await response.json();
  } catch (error) {
    console.error('Error fetching candidates:', error);
  }
});


const filteredCandidates = computed(() => {
  return candidates.value.filter((candidate) => {
    //const matchCategory = selectedCategories.value.length === 0 || selectedCategories.value.includes(candidate.job_title);
    //const matchLocation = selectedLocations.value.length === 0 || selectedLocations.value.includes(candidate.location);
    //const matchWork = selectedWorkTypes.value.length === 0 || selectedWorkTypes.value.includes(candidate.work_type || '');
    const matchGender = !selectedGender.value || candidate.gender === selectedGender.value;
    const matchDistance = !candidate.location_distance || candidate.location_distance <= maxDistance.value;

    //return matchCategory && matchLocation && matchWork && matchGender && matchDistance;
    return matchGender && matchDistance;
  });
});





</script>

<style scoped>
.page-link {
  border-radius: 0.5rem;
  margin: 0 0.25rem;
}

.card {
  border: 1px solid #eee;
  border-radius: 1rem;
  transition: box-shadow 0.3s ease;
}
.card:hover {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
}

.badge {
  font-size: 0.75rem;
  padding: 0.4em 0.6em;
  border-radius: 0.5rem;
}

.card-footer {
  background: none;
  border-top: 0;
}

.btn-sm {
  font-weight: 500;
}
</style>
