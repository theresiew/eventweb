import { useNavigate } from 'react-router-dom'

function RegistrationFormView({ formData, updateForm }) {
  const navigate = useNavigate()

  function handleInput(field, value) {
    updateForm({ [field]: value })
  }

  function goToReview() {
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields (Name, Email, Phone)')
      return
    }
    navigate('/review')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16 px-6">

      <div className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white mb-2">📝 Register for the Conference</h1>
        <p className="text-gray-400">Fill in your details below to secure your seat</p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-xl">

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-400 mb-2">Full Name *</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={e => handleInput('fullName', e.target.value)}
            placeholder="Enter your full name"
            className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-400 mb-2">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => handleInput('email', e.target.value)}
            placeholder="Enter your email address"
            className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-400 mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => handleInput('phone', e.target.value)}
            placeholder="Enter your phone number"
            className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-400 mb-2">Organization / Institution</label>
          <input
            type="text"
            value={formData.organization}
            onChange={e => handleInput('organization', e.target.value)}
            placeholder="Enter your organization or institution"
            className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-400 mb-2">Ticket Type *</label>
          <div className="grid grid-cols-3 gap-4">
            {['Standard', 'VIP', 'Student'].map(ticket => (
              <button
                key={ticket}
                onClick={() => handleInput('ticketType', ticket)}
                className={`border-2 rounded-xl py-3 font-semibold transition duration-200 ${
                  formData.ticketType === ticket
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600'
                }`}>
                {ticket}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-blue-400 mb-2">Dietary Requirements</label>
          <select
            value={formData.dietary}
            onChange={e => handleInput('dietary', e.target.value)}
            className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">No special requirements</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Halal">Halal</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Kosher">Kosher</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-blue-400 mb-2">Additional Notes</label>
          <textarea
            value={formData.notes}
            onChange={e => handleInput('notes', e.target.value)}
            placeholder="Any additional comments or requests..."
            rows="4"
            className="w-full bg-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none">
          </textarea>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 rounded-xl transition duration-200">
            ← Back
          </button>
          <button
            onClick={goToReview}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-200">
            Review Registration →
          </button>
        </div>

      </div>
    </div>
  )
}

export default RegistrationFormView