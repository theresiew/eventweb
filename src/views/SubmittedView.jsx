import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SubmittedView({ setIsRegistered }) {
  const navigate = useNavigate()
  const [registration, setRegistration] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem('registration')
    if (saved) {
      setRegistration(JSON.parse(saved))
    } else {
      navigate('/')
    }
  }, [])

  function editRegistration() {
    navigate('/register')
  }

  function cancelRegistration() {
    if (window.confirm('Are you sure you want to cancel your registration?')) {
      localStorage.removeItem('registration')
      setIsRegistered(false)
      navigate('/')
    }
  }

  function goHome() {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <div className="text-7xl mb-4">👋</div>
          <h1 className="text-4xl font-extrabold text-white mb-2">Welcome Back!</h1>
          <p className="text-gray-400 text-lg">You have already registered for the conference</p>
        </div>

        <div className="bg-green-900 border border-green-600 rounded-xl p-4 mb-8 text-center">
          <p className="text-green-300 font-semibold">✅ Your registration is confirmed and your seat is reserved!</p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <h2 className="text-xl font-bold text-blue-400 mb-6 text-center">📋 Your Registration Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Full Name</span>
              <span className="text-white font-semibold">{registration.fullName}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Email</span>
              <span className="text-white font-semibold">{registration.email}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Phone</span>
              <span className="text-white font-semibold">{registration.phone}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Organization</span>
              <span className="text-white font-semibold">{registration.organization || 'Not provided'}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Ticket Type</span>
              <span className="text-blue-400 font-bold text-lg">{registration.ticketType}</span>
            </div>
            <div className="flex justify-between border-b border-gray-700 pb-3">
              <span className="text-gray-400">Dietary Requirements</span>
              <span className="text-white font-semibold">{registration.dietary || 'None'}</span>
            </div>
            <div className="flex justify-between pb-3">
              <span className="text-gray-400">Additional Notes</span>
              <span className="text-white font-semibold">{registration.notes || 'None'}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={goHome}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition duration-200">
            🏠 Back to Home
          </button>
          <button
            onClick={editRegistration}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-200">
            ✏️ Edit My Registration
          </button>
          <button
            onClick={cancelRegistration}
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl transition duration-200">
            ❌ Cancel My Registration
          </button>
        </div>

      </div>
    </div>
  )
}

export default SubmittedView