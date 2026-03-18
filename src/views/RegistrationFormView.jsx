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
    <div className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Registration</p>
        <h1 className="mt-3 text-4xl font-extrabold text-white">Register for the Conference</h1>
        <p className="mt-3 text-slate-300">Fill in your details below to secure your seat.</p>
      </div>

      <div className="glass-panel mx-auto max-w-2xl rounded-[2rem] p-8 shadow-xl">
        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-sky-300">Full Name *</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={e => handleInput('fullName', e.target.value)}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-sky-300">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => handleInput('email', e.target.value)}
            placeholder="Enter your email address"
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-sky-300">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => handleInput('phone', e.target.value)}
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-sky-300">Organization / Institution</label>
          <input
            type="text"
            value={formData.organization}
            onChange={e => handleInput('organization', e.target.value)}
            placeholder="Enter your organization or institution"
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-sky-300">Ticket Type *</label>
          <div className="grid grid-cols-3 gap-4">
            {['Standard', 'VIP', 'Student'].map(ticket => (
              <button
                key={ticket}
                type="button"
                onClick={() => handleInput('ticketType', ticket)}
                className={`rounded-xl border-2 py-3 font-semibold transition duration-200 ${
                  formData.ticketType === ticket
                    ? 'border-sky-400 bg-sky-500 text-slate-950'
                    : 'border-white/10 bg-slate-900/60 text-slate-200 hover:bg-slate-800'
                }`}
              >
                {ticket}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-sky-300">Dietary Requirements</label>
          <select
            value={formData.dietary}
            onChange={e => handleInput('dietary', e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="">No special requirements</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Halal">Halal</option>
            <option value="Gluten-Free">Gluten-Free</option>
            <option value="Kosher">Kosher</option>
          </select>
        </div>

        <div className="mb-8">
          <label className="mb-2 block text-sm font-semibold text-sky-300">Additional Notes</label>
          <textarea
            value={formData.notes}
            onChange={e => handleInput('notes', e.target.value)}
            placeholder="Any additional comments or requests..."
            rows="4"
            className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => navigate('/')}
            className="flex-1 rounded-xl border border-white/10 bg-slate-900/70 py-4 font-bold text-white transition duration-200 hover:bg-slate-800"
          >
            Back
          </button>
          <button
            onClick={goToReview}
            className="flex-1 rounded-xl bg-sky-500 py-4 font-bold text-slate-950 transition duration-200 hover:bg-sky-400"
          >
            Review Registration
          </button>
        </div>
      </div>
    </div>
  )
}

export default RegistrationFormView
