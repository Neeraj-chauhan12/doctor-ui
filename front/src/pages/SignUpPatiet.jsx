import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const SignUpPatient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    bloodType: '',
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
    console.log('Patient signup:', formData)
    toast.success("Patient signup succussfully !")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Patient Registration</h1>
        <p className="text-center text-gray-600 mb-8">Create your account and access healthcare services</p>

        {!registered ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
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
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
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
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Create a strong password"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Your age"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Blood Type</label>
              <select
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              >
                <option value="">Select your blood type</option>
                <option>O+</option>
                <option>O-</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition mb-4"
            >
              Create Account
            </button>

            <p className="text-center text-gray-600">
              Already have an account? <Link to={"/login-patient"} className="text-green-600 font-semibold hover:underline">Login</Link>
            </p>
          </form>
        ) : (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-green-600 mb-2">Welcome {formData.name}!</h2>
              <p className="text-gray-600 mb-4">Your account has been created successfully</p>
              <p className="text-gray-600 mb-6">You can now log in and access all healthcare services.</p>
              <button
                onClick={() => setRegistered(false)}
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700"
              >
                Register Another Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignUpPatient
