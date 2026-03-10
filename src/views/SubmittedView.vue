<template>
  <div class="min-h-screen bg-gray-950 text-white py-16 px-6">
    <div class="max-w-2xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-10">
        <div class="text-7xl mb-4">👋</div>
        <h1 class="text-4xl font-extrabold text-white mb-2">Welcome Back!</h1>
        <p class="text-gray-400 text-lg">You have already registered for the conference</p>
      </div>

      <!-- Already Registered Banner -->
      <div class="bg-green-900 border border-green-600 rounded-xl p-4 mb-8 text-center">
        <p class="text-green-300 font-semibold">✅ Your registration is confirmed and your seat is reserved!</p>
      </div>

      <!-- Registration Details -->
      <div class="bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
        <h2 class="text-xl font-bold text-blue-400 mb-6 text-center">📋 Your Registration Details</h2>
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

      <!-- Action Buttons -->
      <div class="grid grid-cols-1 gap-4">
        <button
          @click="editRegistration"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-200">
          ✏️ Edit My Registration
        </button>
        <button
          @click="cancelRegistration"
          class="bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl transition duration-200">
          ❌ Cancel My Registration
        </button>
      </div>

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
  } else {
    router.push('/')
  }
})

function editRegistration() {
  router.push('/register')
}

function cancelRegistration() {
  if (confirm('Are you sure you want to cancel your registration?')) {
    localStorage.removeItem('registration')
    router.push('/')
  }
}
</script>