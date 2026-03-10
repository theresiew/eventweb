<template>
  <div class="min-h-screen bg-gray-950 text-white">

    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 py-24 px-6 text-center">
      <h1 class="text-5xl font-extrabold tracking-tight text-white mb-4">
        🚀 Tech Innovation Conference 2026
      </h1>
      <p class="text-xl text-blue-200 mb-2">📅 April 15–16, 2026</p>
      <p class="text-xl text-blue-200 mb-2">📍 Kigali Convention Centre, Rwanda</p>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
        Join thousands of developers, designers, entrepreneurs and tech enthusiasts
        for two days of innovation, learning, and networking.
      </p>
      <button
        @click="goToRegister"
        class="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg">
        Register Now →
      </button>
    </div>

    <!-- Event Images -->
    <div class="max-w-5xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-center text-white mb-10">📸 Event Gallery</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" alt="Conference audience" class="rounded-2xl w-full h-56 object-cover shadow-lg" />
        <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600" alt="Tech speaker" class="rounded-2xl w-full h-56 object-cover shadow-lg" />
        <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600" alt="Networking event" class="rounded-2xl w-full h-56 object-cover shadow-lg" />
        <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600" alt="Conference hall" class="rounded-2xl w-full h-56 object-cover shadow-lg" />
        <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600" alt="Tech presentation" class="rounded-2xl w-full h-56 object-cover shadow-lg" />
        <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600" alt="Team collaboration" class="rounded-2xl w-full h-56 object-cover shadow-lg" />
      </div>
    </div>

    <!-- Conference Details -->
    <div class="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-gray-800 rounded-2xl p-6 text-center shadow-md">
        <div class="text-4xl mb-3">📅</div>
        <h3 class="text-lg font-bold text-blue-400 mb-1">Date & Time</h3>
        <p class="text-gray-300">April 15–16, 2026</p>
        <p class="text-gray-400 text-sm">9:00 AM – 6:00 PM EAT</p>
      </div>
      <div class="bg-gray-800 rounded-2xl p-6 text-center shadow-md">
        <div class="text-4xl mb-3">📍</div>
        <h3 class="text-lg font-bold text-blue-400 mb-1">Venue</h3>
        <p class="text-gray-300">Kigali Convention Centre</p>
        <p class="text-gray-400 text-sm">Kigali, Rwanda</p>
      </div>
      <div class="bg-gray-800 rounded-2xl p-6 text-center shadow-md">
        <div class="text-4xl mb-3">🎟️</div>
        <h3 class="text-lg font-bold text-blue-400 mb-1">Tickets</h3>
        <p class="text-gray-300">Standard, VIP & Student</p>
        <p class="text-gray-400 text-sm">Limited seats available</p>
      </div>
    </div>

    <!-- Key Speakers -->
    <div class="bg-gray-900 py-16 px-6">
      <h2 class="text-3xl font-bold text-center text-white mb-10">🎤 Key Speakers</h2>
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-gray-800 rounded-2xl p-6 text-center">
          <div class="text-5xl mb-3">👨‍💻</div>
          <h3 class="text-lg font-bold text-white">Dr. James Okafor</h3>
          <p class="text-blue-400 text-sm">AI & Machine Learning</p>
        </div>
        <div class="bg-gray-800 rounded-2xl p-6 text-center">
          <div class="text-5xl mb-3">👩‍💼</div>
          <h3 class="text-lg font-bold text-white">Sarah Kimani</h3>
          <p class="text-blue-400 text-sm">Startup & Entrepreneurship</p>
        </div>
        <div class="bg-gray-800 rounded-2xl p-6 text-center">
          <div class="text-5xl mb-3">👨‍🔬</div>
          <h3 class="text-lg font-bold text-white">Prof. Li Wei</h3>
          <p class="text-blue-400 text-sm">Blockchain & Web3</p>
        </div>
      </div>
    </div>

    <!-- Topics -->
    <div class="max-w-5xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-bold text-center text-white mb-10">🔥 Topics Covered</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-blue-900 rounded-xl p-4 text-center text-blue-200 font-medium">Artificial Intelligence</div>
        <div class="bg-purple-900 rounded-xl p-4 text-center text-purple-200 font-medium">Web Development</div>
        <div class="bg-green-900 rounded-xl p-4 text-center text-green-200 font-medium">Cybersecurity</div>
        <div class="bg-pink-900 rounded-xl p-4 text-center text-pink-200 font-medium">Cloud Computing</div>
        <div class="bg-yellow-900 rounded-xl p-4 text-center text-yellow-200 font-medium">Blockchain</div>
        <div class="bg-red-900 rounded-xl p-4 text-center text-red-200 font-medium">UX & Design</div>
        <div class="bg-indigo-900 rounded-xl p-4 text-center text-indigo-200 font-medium">Startups</div>
        <div class="bg-teal-900 rounded-xl p-4 text-center text-teal-200 font-medium">Open Source</div>
      </div>
    </div>

    <!-- CTA Bottom -->
    <div class="bg-gradient-to-r from-blue-800 to-purple-800 py-16 px-6 text-center">
      <h2 class="text-3xl font-bold text-white mb-4">Ready to join us?</h2>
      <p class="text-blue-200 mb-8">Secure your seat today before tickets run out!</p>
      <button
        @click="goToRegister"
        class="bg-white text-blue-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-100 transition duration-300 shadow-lg">
        Register Now →
      </button>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToRegister() {
  router.push('/register')
}
</script>