import { createRouter, createWebHistory } from 'vue-router'
import EventInfoView from '../views/EventInfoView.vue'
import RegistrationFormView from '../views/RegistrationFormView.vue'
import ReviewView from '../views/ReviewView.vue'
import ConfirmationView from '../views/ConfirmationView.vue'
import SubmittedView from '../views/SubmittedView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'EventInfo',
      component: EventInfoView
    },
    {
      path: '/register',
      name: 'Register',
      component: RegistrationFormView
    },
    {
      path: '/review',
      name: 'Review',
      component: ReviewView
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: ConfirmationView
    },
    {
      path: '/submitted',
      name: 'Submitted',
      component: SubmittedView
    }
  ]
})

export default router