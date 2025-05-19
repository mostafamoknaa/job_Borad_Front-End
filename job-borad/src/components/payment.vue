<template>
    <div class="container my-5">
      <h2 class="mb-4">Complete Your Payment</h2>
      <div v-if="loading" class="text-center">
        <div class="spinner-border" role="status"></div>
        <p class="mt-2">Redirecting to secure payment page...</p>
      </div>
      <div v-if="error" class="alert alert-danger">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import interceptor from '../Interceptor/getaxiox'
  import { loadStripe } from '@stripe/stripe-js'
  const route = useRoute()
  const applicationId = route.params.applicationId
  
  const loading = ref(true)
  const error = ref(null)
  
  const createCheckoutSession = async () => {
    try {
      const response = await interceptor.post('/create-checkout-session', {
        application_id: applicationId
      })
  
      const { sessionId } = response.data
  
      const stripe = await loadStripe('pk_test_51Oa1apC2Y3Ne3oUhz8quAdzU0O1aAgoTSP0wwiEMbUqZDd0knNgOnMSyU3Us4s05QjCdwvqmxA2EDGAT3Mj9a3kj00BKiR5q83')
      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      error.value = 'Payment failed to initialize. Please try again later.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }
  

  onMounted(() => {
    createCheckoutSession()
  })
  </script>
  