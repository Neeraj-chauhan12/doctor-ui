import React from 'react'

const About2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Telemedicine Services</h2>
            <p className="text-gray-600">Connect with doctors online from the comfort of your home.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Appointment Booking</h2>
            <p className="text-gray-600">Easy and quick appointment scheduling with your preferred doctor.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">Medical Records</h2>
            <p className="text-gray-600">Secure storage and easy access to your medical history.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Emergency Services</h2>
            <p className="text-gray-600">Immediate access to emergency medical assistance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About2
