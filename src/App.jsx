import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EventInfoView from './views/EventInfoView'
import RegistrationFormView from './views/RegistrationFormView'
import ReviewView from './views/ReviewView'
import ConfirmationView from './views/ConfirmationView'
import SubmittedView from './views/SubmittedView'

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
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('registration')
    if (saved) {
      setIsRegistered(true)
    }
  }, [])

  function updateForm(newData) {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  function resetForm() {
    setFormData({ ...defaultForm })
  }

  return (
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
  )
}

export default App