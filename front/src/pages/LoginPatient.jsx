import React, { useState } from 'react'

const LoginPatient = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loggedIn, setLoggedIn] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoggedIn(true)
    console.log('Patient login:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-6xl text-center mb-4">🏥</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Patient Login</h1>
          <p className="text-gray-600 text-center mb-8">Access your health records and appointments</p>

          {!loggedIn ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="patient@email.com"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition mb-4"
              >
                Login
              </button>

              <p className="text-center text-gray-600">
                Don't have an account? <a href="#" className="text-green-600 font-semibold hover:underline">Sign Up</a>
              </p>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-green-600 mb-4">Welcome Back!</h2>
              <p className="text-gray-600 mb-6">You are successfully logged in as a patient.</p>
              <button
                onClick={() => setLoggedIn(false)}
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700"
              >
                Login Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPatient
