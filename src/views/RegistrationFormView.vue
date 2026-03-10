<template>
  <div class="min-h-screen bg-gray-950 text-white py-16 px-6">

    <div class="max-w-2xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-white mb-2">📝 Register for the Conference</h1>
      <p class="text-gray-400">Fill in your details below to secure your seat</p>
    </div>

    <div class="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-xl">

      <div class="mb-6">
        <label class="block text-sm font-semibold text-blue-400 mb-2">Full Name *</label>
        <input
          type="text"
          :value="formData.fullName"
          @input="handleInput('fullName', $event.target.value)"
          placeholder="Enter your full name"
          class="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-blue-400 mb-2">Email Address *</label>
        <input
          type="email"
          :value="formData.email"
          @input="handleInput('email', $event.target.value)"
          placeholder="Enter your email address"
          class="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-blue-400 mb-2">Phone Number *</label>
        <input
          type="tel"
          :value="formData.phone"
          @input="handleInput('phone', $event.target.value)"
          placeholder="Enter your phone number"
          class="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-blue-400 mb-2">Organization / Institution</label>
        <input
          type="text"
          :value="formData.organization"
          @input="handleInput('organization', $event.target.value)"
          placeholder="Enter your organization or institution"
          class="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-blue-400 mb-2">Ticket Type *</label>
        <div class="grid grid-cols-3 gap-4">
          <button
            v-for="ticket in ['Standard', 'VIP', 'Student']"
            :key="ticket"
            @click="handleInput('ticketType', ticket)"
            :class="formData.ticketType === ticket
              ? 'bg-blue-600 text-white border-blue-500'
              : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'"
            class="border-2 rounded-xl py-3 font-semibold transition duration-200">
            {{ ticket }}
          </button>
        </div>
      </div>

      <div class="mb-6">
        <label class="block text-sm font-semibold text-blue-400 mb-2">Dietary Requirements</label>
        <select
          :value="formData.dietary"
          @change="handleInput('dietary', $event.target.value)"
          class="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">No special requirements</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Halal">Halal</option>
          <option value="Gluten-Free">Gluten-Free</option>
          <option value="Kosher">Kosher</option>
        </select>
      </div>

      <div class="mb-8">
        <label class="block text-sm font-semibold text-blue-400 mb-2">Additional Notes</label>
        <textarea
          :value="formData.notes"
          @input="handleInput('notes', $event.target.value)"
          placeholder="Any additional comments or requests..."
          rows="4"
          class="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none">
        </textarea>
      </div>

      <div class="flex gap-4">
        <button
          @click="goBack"
          class="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition duration-200">
          ← Back
        </button>
        <button
          @click="goToReview"
          class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-200">
          Review Registration →
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

const emit = defineEmits(['update-form'])
const router = useRouter()

function handleInput(field, value) {
  emit('update-form', { [field]: value })
}

function goBack() {
  router.push('/')
}

function goToReview() {
  if (!props.formData.fullName || !props.formData.email || !props.formData.phone) {
    alert('Please fill in all required fields (Name, Email, Phone)')
    return
  }
  router.push('/review')
}
</script>