import { useNavigate } from 'react-router-dom'

function EventInfoView() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-950 text-white">

    
      <div className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">
          🚀 Tech Innovation Conference 2026
        </h1>
        <p className="text-xl text-blue-200 mb-2">📅 April 15–16, 2026</p>
        <p className="text-xl text-blue-200 mb-2">📍 Kigali Convention Centre, Rwanda</p>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4">
          Join thousands of developers, designers, entrepreneurs and tech enthusiasts
          for two days of innovation, learning, and networking.
        </p>
        <button
          onClick={() => navigate('/register')}
          className="mt-10 bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 shadow-lg">
          Register Now →
        </button>
      </div>

     
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-10">📸 Event Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" alt="Conference audience" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600" alt="Tech speaker" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600" alt="Networking event" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600" alt="Conference hall" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600" alt="Tech presentation" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600" alt="Team collaboration" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
        </div>
      </div>

  
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md">
          <div className="text-4xl mb-3">📅</div>
          <h3 className="text-lg font-bold text-blue-400 mb-1">Date & Time</h3>
          <p className="text-gray-300">April 15–16, 2026</p>
          <p className="text-gray-400 text-sm">9:00 AM – 6:00 PM EAT</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md">
          <div className="text-4xl mb-3">📍</div>
          <h3 className="text-lg font-bold text-blue-400 mb-1">Venue</h3>
          <p className="text-gray-300">Kigali Convention Centre</p>
          <p className="text-gray-400 text-sm">Kigali, Rwanda</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-md">
          <div className="text-4xl mb-3">🎟️</div>
          <h3 className="text-lg font-bold text-blue-400 mb-1">Tickets</h3>
          <p className="text-gray-300">Standard, VIP & Student</p>
          <p className="text-gray-400 text-sm">Limited seats available</p>
        </div>
      </div>

     
      <div className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-10">🎤 Key Speakers</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">👨‍💻</div>
            <h3 className="text-lg font-bold text-white">Dr. James Okafor</h3>
            <p className="text-blue-400 text-sm">AI & Machine Learning</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">👩‍💼</div>
            <h3 className="text-lg font-bold text-white">Sarah Kimani</h3>
            <p className="text-blue-400 text-sm">Startup & Entrepreneurship</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-5xl mb-3">👨‍🔬</div>
            <h3 className="text-lg font-bold text-white">Prof. Li Wei</h3>
            <p className="text-blue-400 text-sm">Blockchain & Web3</p>
          </div>
        </div>
      </div>

      
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-10">🔥 Topics Covered</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-blue-900 rounded-xl p-4 text-center text-blue-200 font-medium">Artificial Intelligence</div>
          <div className="bg-purple-900 rounded-xl p-4 text-center text-purple-200 font-medium">Web Development</div>
          <div className="bg-green-900 rounded-xl p-4 text-center text-green-200 font-medium">Cybersecurity</div>
          <div className="bg-pink-900 rounded-xl p-4 text-center text-pink-200 font-medium">Cloud Computing</div>
          <div className="bg-yellow-900 rounded-xl p-4 text-center text-yellow-200 font-medium">Blockchain</div>
          <div className="bg-red-900 rounded-xl p-4 text-center text-red-200 font-medium">UX & Design</div>
          <div className="bg-indigo-900 rounded-xl p-4 text-center text-indigo-200 font-medium">Startups</div>
          <div className="bg-teal-900 rounded-xl p-4 text-center text-teal-200 font-medium">Open Source</div>
        </div>
      </div>

      {/* CTA Bottom */}
      <div className="bg-gradient-to-r from-blue-800 to-purple-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to join us?</h2>
        <p className="text-blue-200 mb-8">Secure your seat today before tickets run out!</p>
        <button
          onClick={() => navigate('/register')}
          className="bg-white text-blue-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-100 transition duration-300 shadow-lg">
          Register Now →
        </button>
      </div>

    </div>
  )
}

export default EventInfoView