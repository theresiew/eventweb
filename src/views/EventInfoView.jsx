import { useNavigate } from 'react-router-dom'

const highlights = [
  {
    title: 'Date and Time',
    body: 'April 15-16, 2026',
    note: '9:00 AM to 6:00 PM EAT',
  },
  {
    title: 'Venue',
    body: 'Kigali Convention Centre',
    note: 'Kigali, Rwanda',
  },
  {
    title: 'Tickets',
    body: 'Standard, VIP and Student',
    note: 'Limited seats available',
  },
]

const speakers = [
  { name: 'Dr. James Okafor', topic: 'AI and Machine Learning' },
  { name: 'Sarah Kimani', topic: 'Startup and Entrepreneurship' },
  { name: 'Prof. Li Wei', topic: 'Blockchain and Web3' },
]

const topics = [
  'Artificial Intelligence',
  'Web Development',
  'Cybersecurity',
  'Cloud Computing',
  'Blockchain',
  'UX and Design',
  'Startups',
  'Open Source',
]

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop',
    alt: 'Conference audience watching a keynote',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=900&auto=format&fit=crop',
    alt: 'Speaker presenting on stage',
  },
  {
    src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&auto=format&fit=crop',
    alt: 'Attendees networking after a session',
  },
]

function EventInfoView() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen text-white">
      <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.16),_transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="glass-panel rounded-[2rem] border border-white/10 px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
                Kigali 2026
              </p>
              <h1 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Tech Innovation Conference built for bold ideas and real connections.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Join developers, designers, founders, and technology leaders for two
                days of practical sessions, product demos, and community-driven networking.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate('/register')}
                  className="rounded-full bg-sky-500 px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-sky-400"
                >
                  Register Now
                </button>
                <a
                  href="#program"
                  className="rounded-full border border-white/15 bg-slate-950/40 px-8 py-4 text-lg font-semibold text-white transition hover:border-sky-400/70 hover:bg-slate-900/70"
                >
                  Explore Program
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">When</p>
                  <p className="mt-2 text-xl font-bold">April 15-16</p>
                  <p className="text-sm text-slate-300">2026</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Where</p>
                  <p className="mt-2 text-xl font-bold">Kigali</p>
                  <p className="text-sm text-slate-300">Convention Centre</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Audience</p>
                  <p className="mt-2 text-xl font-bold">Builders</p>
                  <p className="text-sm text-slate-300">Across Africa and beyond</p>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {gallery.map(image => (
                  <img
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    className="h-56 w-full rounded-[1.75rem] object-cover shadow-2xl shadow-slate-950/40"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="px-6 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {highlights.map(item => (
            <article
              key={item.title}
              className="glass-panel rounded-[1.75rem] p-6 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                {item.title}
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white">{item.body}</h2>
              <p className="mt-2 text-slate-300">{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-slate-950/55 p-8">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Featured Speakers
            </p>
            <h2 className="text-3xl font-black sm:text-4xl">
              Learn from leaders shaping the next wave of technology.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {speakers.map(speaker => (
              <article
                key={speaker.name}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6"
              >
                <div className="mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-200" />
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="mt-2 text-slate-300">{speaker.topic}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              Topics Covered
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Sessions designed around the questions teams are asking right now.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {topics.map(topic => (
              <div
                key={topic}
                className="rounded-[1.25rem] border border-white/10 bg-slate-900/55 px-4 py-5 text-center font-semibold text-slate-100"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center rounded-[2rem] border border-sky-400/20 bg-gradient-to-r from-sky-500/18 to-fuchsia-500/12 px-8 py-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200">
            Final Call
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Secure your seat before the next price tier opens.</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-200">
            Registration takes only a minute, and your details stay available when you return.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="mt-8 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Start Registration
          </button>
        </div>
      </section>
    </div>
  )
}

export default EventInfoView
