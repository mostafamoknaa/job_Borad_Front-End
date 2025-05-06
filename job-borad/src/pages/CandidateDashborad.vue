<template>
    <div class="container-fluid p-0 mt-5">
        <div class="row">
            <div class="col-md-3">
                <Sidebar />
            </div>    
            <div class="col-md-9">
                <div class="container-fluid p-0">
                    <div class="row">
                        <div class="col-md-12">
                            <candidateDashborad />
                        </div>
                    </div>
                </div>
            </div>    
        </div>        
    </div>
  </template>
  
  <script setup>
  import candidateDashborad from '../components/Candidate/candidateDashborad.vue';
  import Sidebar from '../components/Candidate/Sidebar.vue';
  </script>
  