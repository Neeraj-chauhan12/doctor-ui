import React, { useState } from 'react'

const SignUpDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    license: '',
    phone: ''
  })

  const [registered, setRegistered] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRegistered(true)
    console.log('Doctor signup:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Doctor Registration</h1>
        <p className="text-center text-gray-600 mb-8">Join our network of healthcare professionals</p>

        {!registered ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Create a strong password"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Specialization</label>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select your specialization</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
                <option>Orthopedics</option>
                <option>General Practice</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Medical License</label>
              <input
                type="text"
                name="license"
                value={formData.license}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Your medical license number"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition mb-4"
            >
              Register as Doctor
            </button>

            <p className="text-center text-gray-600">
              Already have an account? <a href="#" className="text-blue-600 font-semibold hover:underline">Login</a>
            </p>
          </form>
        ) : (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-green-600 mb-2">Registration Successful!</h2>
              <p className="text-gray-600 mb-4">Welcome to our healthcare network, Dr. {formData.name}</p>
              <p className="text-gray-600 mb-6">Your account is under verification. You'll receive a confirmation email shortly.</p>
              <button
                onClick={() => setRegistered(false)}
                className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700"
              >
                Register Another Doctor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUpDoctor
