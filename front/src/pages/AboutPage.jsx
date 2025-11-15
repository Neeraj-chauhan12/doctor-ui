import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Our Platform</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Founded</h3>
            <p className="text-gray-700">2020 - Established with a vision to transform healthcare delivery</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Users</h3>
            <p className="text-gray-700">100,000+ Active users across multiple countries</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Doctors</h3>
            <p className="text-gray-700">5,000+ Healthcare professionals on our platform</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To create a world where quality healthcare is accessible to everyone, regardless of their location or economic status. We believe that technology should bridge the gap between patients and healthcare providers.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
