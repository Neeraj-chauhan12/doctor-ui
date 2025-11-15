import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-blue-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-2xl">
              🏥 MedicalHub
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Home
            </Link>
            <Link to="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              About
            </Link>
            <Link to="/contact" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Contact
            </Link>

            {/* Patient Links */}
            <div className="relative group">
              <button className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                Patient ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link to="/login-patient" className="block px-4 py-2 hover:bg-blue-50">
                  Patient Login
                </Link>
                <Link to="/signup-patient" className="block px-4 py-2 hover:bg-blue-50">
                  Patient Sign Up
                </Link>
                <Link to="/patient-dashboard" className="block px-4 py-2 hover:bg-blue-50">
                  Patient Dashboard
                </Link>
                <Link to="/patient-profile" className="block px-4 py-2 hover:bg-blue-50">
                  Patient Profile
                </Link>
              </div>
            </div>

            {/* Doctor Links */}
            <div className="relative group">
              <button className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                Doctor ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link to="/login-doctor" className="block px-4 py-2 hover:bg-blue-50">
                  Doctor Login
                </Link>
                <Link to="/signup-doctor" className="block px-4 py-2 hover:bg-blue-50">
                  Doctor Sign Up
                </Link>
                <Link to="/doctor-dashboard" className="block px-4 py-2 hover:bg-blue-50">
                  Doctor Dashboard
                </Link>
                <Link to="/doctor-profile" className="block px-4 py-2 hover:bg-blue-50">
                  Doctor Profile
                </Link>
              </div>
            </div>

            {/* Services Links */}
            <div className="relative group">
              <button className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
                Services ▼
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                <Link to="/booking" className="block px-4 py-2 hover:bg-blue-50">
                  Book Appointment
                </Link>
                <Link to="/ambulance" className="block px-4 py-2 hover:bg-blue-50">
                  Emergency Ambulance
                </Link>
                <Link to="/medical-form" className="block px-4 py-2 hover:bg-blue-50">
                  Medical Form
                </Link>
                <Link to="/family-members" className="block px-4 py-2 hover:bg-blue-50">
                  Family Members
                </Link>
              </div>
            </div>

            <Link to="/settings" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Settings
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link to="/" className="block text-white px-4 py-2 hover:bg-blue-800">
            Home
          </Link>
          <Link to="/about" className="block text-white px-4 py-2 hover:bg-blue-800">
            About
          </Link>
          <Link to="/contact" className="block text-white px-4 py-2 hover:bg-blue-800">
            Contact
          </Link>
          <hr className="bg-blue-600 my-2" />

          <div className="px-4 py-2 text-white font-semibold">Patient</div>
          <Link to="/login-patient" className="block text-white px-6 py-1 hover:bg-blue-800">
            Login
          </Link>
          <Link to="/signup-patient" className="block text-white px-6 py-1 hover:bg-blue-800">
            Sign Up
          </Link>
          <Link to="/patient-dashboard" className="block text-white px-6 py-1 hover:bg-blue-800">
            Dashboard
          </Link>

          <hr className="bg-blue-600 my-2" />

          <div className="px-4 py-2 text-white font-semibold">Doctor</div>
          <Link to="/login-doctor" className="block text-white px-6 py-1 hover:bg-blue-800">
            Login
          </Link>
          <Link to="/signup-doctor" className="block text-white px-6 py-1 hover:bg-blue-800">
            Sign Up
          </Link>
          <Link to="/doctor-dashboard" className="block text-white px-6 py-1 hover:bg-blue-800">
            Dashboard
          </Link>

          <hr className="bg-blue-600 my-2" />

          <div className="px-4 py-2 text-white font-semibold">Services</div>
          <Link to="/booking" className="block text-white px-6 py-1 hover:bg-blue-800">
            Book Appointment
          </Link>
          <Link to="/ambulance" className="block text-white px-6 py-1 hover:bg-blue-800">
            Ambulance
          </Link>
          <Link to="/settings" className="block text-white px-6 py-1 hover:bg-blue-800">
            Settings
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
