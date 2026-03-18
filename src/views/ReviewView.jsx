import { useNavigate } from 'react-router-dom'
import DetailList from '../components/DetailList'
import { saveRegistration } from '../utils/registrationStorage'

function ReviewView({ formData, resetForm, setIsRegistered }) {
  const navigate = useNavigate()

  function confirmRegistration() {
    saveRegistration(formData)
    setIsRegistered(true)
    resetForm()
    navigate('/confirmation')
  }

  const reviewItems = [
    { label: 'Full Name', value: formData.fullName },
    { label: 'Email Address', value: formData.email },
    { label: 'Phone Number', value: formData.phone },
    { label: 'Organization', value: formData.organization },
    { label: 'Ticket Type', value: formData.ticketType, valueClassName: 'text-sky-300' },
    { label: 'Dietary Requirements', value: formData.dietary, fallback: 'None' },
    { label: 'Additional Notes', value: formData.notes, fallback: 'None' },
  ]

  return (
    <div className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Final Check</p>
        <h1 className="mt-3 text-4xl font-extrabold text-white">Review Your Registration</h1>
        <p className="mt-3 text-slate-300">Please confirm your details before submitting.</p>
      </div>

      <div className="glass-panel mx-auto max-w-2xl rounded-[2rem] p-8 shadow-xl">
        <DetailList items={reviewItems} />

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => navigate('/register')}
            className="flex-1 rounded-xl border border-white/10 bg-slate-900/70 py-4 font-bold text-white transition duration-200 hover:bg-slate-800"
          >
            Edit Info
          </button>
          <button
            onClick={confirmRegistration}
            className="flex-1 rounded-xl bg-emerald-500 py-4 font-bold text-slate-950 transition duration-200 hover:bg-emerald-400"
          >
            Confirm Registration
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewView
