import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import EventInfoView from './views/EventInfoView'
import RegistrationFormView from './views/RegistrationFormView'
import ReviewView from './views/ReviewView'
import ConfirmationView from './views/ConfirmationView'
import SubmittedView from './views/SubmittedView'
import { loadRegistration } from './utils/registrationStorage'

const defaultForm = {
  fullName: '',
  email: '',
  phone: '',
  organization: '',
  ticketType: 'Standard',
  dietary: '',
  notes: ''
}

function App() {
  const [formData, setFormData] = useState({ ...defaultForm })
  const [isRegistered, setIsRegistered] = useState(() => Boolean(loadRegistration()))

  function updateForm(newData) {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  function resetForm() {
    setFormData({ ...defaultForm })
  }

  return (
    <div className="site-shell">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            isRegistered ? <Navigate to="/submitted" /> : <EventInfoView />
          } />
          <Route path="/register" element={
            <RegistrationFormView formData={formData} updateForm={updateForm} />
          } />
          <Route path="/review" element={
            <ReviewView formData={formData} resetForm={resetForm} setIsRegistered={setIsRegistered} />
          } />
          <Route path="/confirmation" element={<ConfirmationView />} />
          <Route path="/submitted" element={
            <SubmittedView setIsRegistered={setIsRegistered} />
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
