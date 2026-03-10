<template>
  <div>
    <RouterView :formData="formData" @update-form="updateForm" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()

const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  ticketType: 'Standard',
  dietary: '',
  notes: ''
})

function updateForm(newData) {
  formData.value = { ...formData.value, ...newData }
}

onMounted(() => {
  const saved = localStorage.getItem('registration')
  if (saved) {
    router.push('/submitted')
  }
})
</script>