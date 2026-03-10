<template>
  <div class="min-h-screen bg-gray-950 text-white py-16 px-6">

    <div class="max-w-2xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-white mb-2">🔍 Review Your Registration</h1>
      <p class="text-gray-400">Please confirm your details before submitting</p>
    </div>

    <div class="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-xl">

      <div class="space-y-4 mb-8">
        <div class="flex justify-between border-b border-gray-700 pb-3">
          <span class="text-gray-400 font-medium">Full Name</span>
          <span class="text-white font-semibold">{{ formData.fullName }}</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-3">
          <span class="text-gray-400 font-medium">Email Address</span>
          <span class="text-white font-semibold">{{ formData.email }}</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-3">
          <span class="text-gray-400 font-medium">Phone Number</span>
          <span class="text-white font-semibold">{{ formData.phone }}</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-3">
          <span class="text-gray-400 font-medium">Organization</span>
          <span class="text-white font-semibold">{{ formData.organization || 'Not provided' }}</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-3">
          <span class="text-gray-400 font-medium">Ticket Type</span>
          <span class="text-blue-400 font-bold">{{ formData.ticketType }}</span>
        </div>
        <div class="flex justify-between border-b border-gray-700 pb-3">
          <span class="text-gray-400 font-medium">Dietary Requirements</span>
          <span class="text-white font-semibold">{{ formData.dietary || 'None' }}</span>
        </div>
        <div class="flex justify-between pb-3">
          <span class="text-gray-400 font-medium">Additional Notes</span>
          <span class="text-white font-semibold">{{ formData.notes || 'None' }}</span>
        </div>
      </div>

      <div class="flex gap-4">
        <button
          @click="goBack"
          class="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition duration-200">
          ← Edit Info
        </button>
        <button
          @click="confirmRegistration"
          class="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition duration-200">
          ✅ Confirm Registration
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  formData: Object
})

const router = useRouter()

function goBack() {
  router.push('/register')
}

function confirmRegistration() {
  localStorage.setItem('registration', JSON.stringify(props.formData))
  router.push('/confirmation')
}
</script>