<template>
  <div class="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
    <div class="max-w-2xl w-full text-center">

      <!-- Success Icon -->
      <div class="text-8xl mb-6">🎉</div>

      <!-- Title -->
      <h1 class="text-4xl font-extrabold text-white mb-4">Registration Successful!</h1>
      <p class="text-gray-400 text-lg mb-8">
        Thank you for registering! Your seat for the <span class="text-blue-400 font-semibold">Tech Innovation Conference 2026</span> has been reserved.
      </p>

      <!-- Confirmation Card -->
      <div class="bg-gray-800 rounded-2xl p-8 shadow-xl mb-8 text-left">
        <h2 class="text-xl font-bold text-blue-400 mb-6 text-center">📋 Registration Summary</h2>
        <div class="space-y-4">
          <div class="flex justify-between border-b border-gray-700 pb-3">
            <span class="text-gray-400">Full Name</span>
            <span class="text-white font-semibold">{{ registration.fullName }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-700 pb-3">
            <span class="text-gray-400">Email</span>
            <span class="text-white font-semibold">{{ registration.email }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-700 pb-3">
            <span class="text-gray-400">Phone</span>
            <span class="text-white font-semibold">{{ registration.phone }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-700 pb-3">
            <span class="text-gray-400">Organization</span>
            <span class="text-white font-semibold">{{ registration.organization || 'Not provided' }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-700 pb-3">
            <span class="text-gray-400">Ticket Type</span>
            <span class="text-blue-400 font-bold text-lg">{{ registration.ticketType }}</span>
          </div>
          <div class="flex justify-between border-b border-gray-700 pb-3">
            <span class="text-gray-400">Dietary Requirements</span>
            <span class="text-white font-semibold">{{ registration.dietary || 'None' }}</span>
          </div>
          <div class="flex justify-between pb-3">
            <span class="text-gray-400">Additional Notes</span>
            <span class="text-white font-semibold">{{ registration.notes || 'None' }}</span>
          </div>
        </div>
      </div>

      <!-- Info Message -->
      <div class="bg-blue-900 border border-blue-700 rounded-xl p-4 mb-8">
        <p class="text-blue-200 text-sm">
          📧 A confirmation has been saved. You can return to this site anytime to view your registration details.
        </p>
      </div>

      <!-- Button -->
      <button
        @click="goHome"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300">
        🏠 Back to Home
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const registration = ref({})

onMounted(() => {
  const saved = localStorage.getItem('registration')
  if (saved) {
    registration.value = JSON.parse(saved)
  }
})

function goHome() {
  router.push('/')
}
</script>