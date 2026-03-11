import { useNavigate } from 'react-router-dom'

function ReviewView({ formData, resetForm, setIsRegistered }) {
  const navigate = useNavigate()

  function confirmRegistration() {
    localStorage.setItem('registration', JSON.stringify(formData))
    setIsRegistered(true)
    resetForm()
    navigate('/confirmation')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">

      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-2">🔍 Review Your Registration</h1>
        <p className="text-gray-400">Please confirm your details before submitting</p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-xl">

        <div className="space-y-4 mb-8">
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400 font-medium">Full Name</span>
            <span className="text-white font-semibold">{formData.fullName}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400 font-medium">Email Address</span>
            <span className="text-white font-semibold">{formData.email}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400 font-medium">Phone Number</span>
            <span className="text-white font-semibold">{formData.phone}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400 font-medium">Organization</span>
            <span className="text-white font-semibold">{formData.organization || 'Not provided'}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400 font-medium">Ticket Type</span>
            <span className="text-blue-400 font-bold">{formData.ticketType}</span>
          </div>
          <div className="flex justify-between border-b border-gray-700 pb-3">
            <span className="text-gray-400 font-medium">Dietary Requirements</span>
            <span className="text-white font-semibold">{formData.dietary || 'None'}</span>
          </div>
          <div className="flex justify-between pb-3">
            <span className="text-gray-400 font-medium">Additional Notes</span>
            <span className="text-white font-semibold">{formData.notes || 'None'}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/register')}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition duration-200">
            ← Edit Info
          </button>
          <button
            onClick={confirmRegistration}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition duration-200">
            ✅ Confirm Registration
          </button>
        </div>

      </div>
    </div>
  )
}

export default ReviewView