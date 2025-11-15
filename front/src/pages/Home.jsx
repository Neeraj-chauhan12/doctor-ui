import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to MedicalHub</h1>
          <p className="text-xl mb-8">Your trusted platform for healthcare services and medical consultations</p>
          <div className="space-x-4">
            <Link to="/login-patient" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition inline-block">
              Patient Login
            </Link>
            <Link to="/login-doctor" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-900 transition inline-block">
              Doctor Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Appointments</h3>
              <p className="text-gray-600">Schedule appointments with qualified doctors at your convenience</p>
              <Link to="/booking" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                Book Now →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Doctors</h3>
              <p className="text-gray-600">Browse and connect with experienced healthcare professionals</p>
              <Link to="/doctor-profile" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                View Doctors →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Health Records</h3>
              <p className="text-gray-600">Securely store and access your medical history anytime</p>
              <Link to="/medical-form" className="text-blue-600 font-semibold mt-4 inline-block hover:underline">
                View Records →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get Started Today</h2>
          <p className="text-gray-700 text-lg mb-8">Join thousands of patients and doctors using MedicalHub</p>
          <div className="space-x-4">
            <Link to="/signup-patient" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition inline-block">
              Sign Up as Patient
            </Link>
            <Link to="/signup-doctor" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition inline-block">
              Sign Up as Doctor
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Emergency Services</h2>
          <p className="text-gray-700 text-lg mb-8">Need immediate assistance? We're here 24/7</p>
          <Link to="/ambulance" className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition inline-block">
            Request Emergency Ambulance
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">About MedicalHub</h3>
              <p className="text-gray-400">Your trusted healthcare platform connecting patients with doctors.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/settings" className="hover:text-white">Settings</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Emergency</h3>
              <p className="text-gray-400">24/7 Emergency Support</p>
              <p className="text-gray-400 font-bold">Call: 911</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MedicalHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
