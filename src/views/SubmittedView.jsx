import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DetailList from '../components/DetailList'
import { clearRegistration, loadRegistration } from '../utils/registrationStorage'

function SubmittedView({ setIsRegistered }) {
  const navigate = useNavigate()
  const [registration] = useState(() => loadRegistration() || {})

  useEffect(() => {
    if (!registration.fullName && !registration.email && !registration.phone) {
      navigate('/')
    }
  }, [navigate, registration])

  function editRegistration() {
    navigate('/register')
  }

  function cancelRegistration() {
    if (window.confirm('Are you sure you want to cancel your registration?')) {
      clearRegistration()
      setIsRegistered(false)
      navigate('/')
    }
  }

  function goHome() {
    navigate('/')
  }

  const registrationItems = [
    { label: 'Full Name', value: registration.fullName },
    { label: 'Email', value: registration.email },
    { label: 'Phone', value: registration.phone },
    { label: 'Organization', value: registration.organization },
    { label: 'Ticket Type', value: registration.ticketType, valueClassName: 'text-sky-300' },
    { label: 'Dietary Requirements', value: registration.dietary, fallback: 'None' },
    { label: 'Additional Notes', value: registration.notes, fallback: 'None' },
  ]

  return (
    <div className="min-h-screen px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Registered</p>
          <h1 className="mt-3 text-4xl font-extrabold text-white">Welcome Back</h1>
          <p className="mt-3 text-lg text-slate-300">You have already registered for the conference.</p>
        </div>

        <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-center">
          <p className="font-semibold text-emerald-200">Your registration is confirmed and your seat is reserved.</p>
        </div>

        <div className="glass-panel mt-8 rounded-[2rem] p-8 shadow-xl">
          <h2 className="mb-6 text-center text-xl font-bold text-white">Your Registration Details</h2>
          <DetailList items={registrationItems} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <button
            onClick={goHome}
            className="rounded-xl border border-white/10 bg-slate-900/70 py-4 font-bold text-white transition duration-200 hover:bg-slate-800"
          >
            Back to Home
          </button>
          <button
            onClick={editRegistration}
            className="rounded-xl bg-sky-500 py-4 font-bold text-slate-950 transition duration-200 hover:bg-sky-400"
          >
            Edit My Registration
          </button>
          <button
            onClick={cancelRegistration}
            className="rounded-xl bg-rose-600 py-4 font-bold text-white transition duration-200 hover:bg-rose-500"
          >
            Cancel My Registration
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubmittedView
