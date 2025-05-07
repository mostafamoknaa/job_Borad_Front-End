<template>
  <div class="job-card border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
    <div class="flex items-center gap-4">
      <img :src="logo" alt="Company Logo" class="w-12 h-12 rounded" />
      <div>
        <h3 class="font-semibold text-lg">{{ title }}</h3>
        <p class="text-sm text-gray-500">{{ company }} · {{ location }}</p>
      </div>
    </div>
    <div class="mt-2 text-sm text-gray-600">{{ description }}</div>
    <div class="mt-3 flex flex-wrap gap-2">
      <span v-for="tag in tags" :key="tag" class="bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  company: String,
  location: String,
  description: String,
  tags: Array,
  logo: String
});
</script>
