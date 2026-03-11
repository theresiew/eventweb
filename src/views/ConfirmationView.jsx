import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ConfirmationView() {
  const navigate = useNavigate()
  const [registration, setRegistration] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem('registration')
    if (saved) {
      setRegistration(JSON.parse(saved))
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">

        <div className="text-8xl mb-6">🎉</div>

        <h1 className="text-4xl font-extrabold text-white mb-4">Registration Successful!</h1>
        <p className="text-gray-400 text-lg mb-8">
          Thank you for registering! Your seat for the{' '}
          <span className="text-blue-400 font-semibold">Tech Innovation Conference 2026</span>{' '}
          has been reserved.
        </p>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl mb-8 text-left">
          <h2 className="text-xl font-bold text-blue-400 mb-6 text-center">📋 Registration Summary</h2>
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

        <div className="bg-blue-900 border border-blue-700 rounded-xl p-4 mb-8">
          <p className="text-blue-200 text-sm">
            📧 A confirmation has been saved. You can return to this site anytime to view your registration details.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300">
          🏠 Back to Home
        </button>

      </div>
    </div>
  )
}

export default ConfirmationView