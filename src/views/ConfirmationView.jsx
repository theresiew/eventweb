import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DetailList from '../components/DetailList'
import { loadRegistration } from '../utils/registrationStorage'

function ConfirmationView() {
  const navigate = useNavigate()
  const [registration] = useState(() => loadRegistration() || {})

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
    <div className="flex min-h-screen items-center justify-center px-6 py-16 text-white">
      <div className="w-full max-w-2xl text-center">
        <div className="glass-panel rounded-[2rem] px-6 py-10 sm:px-8">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-3xl font-black text-emerald-300">
            OK
          </div>

          <h1 className="mt-6 text-4xl font-extrabold text-white">Registration Successful</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Thank you for registering. Your seat for <span className="font-semibold text-sky-300">Tech Innovation Conference 2026</span> has been reserved.
          </p>

          <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4 text-left">
            <p className="text-sm leading-7 text-sky-100">
              A confirmation has been saved locally so you can come back and review your registration details anytime on this device.
            </p>
          </div>

          <div className="mt-8 rounded-[1.75rem] bg-slate-950/55 p-6 text-left">
            <h2 className="mb-5 text-center text-xl font-bold text-white">Registration Summary</h2>
            <DetailList items={registrationItems} />
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-8 rounded-full bg-sky-500 px-10 py-4 text-lg font-bold text-slate-950 transition duration-300 hover:bg-sky-400"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationView
