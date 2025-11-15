import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Welcome to our Medical Healthcare Platform. We are committed to providing you with the best healthcare services and making healthcare accessible to everyone.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Our mission is to revolutionize the way people access medical services by creating a seamless and user-friendly platform that connects patients with healthcare professionals.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            With years of experience in the healthcare industry, we understand the needs of both patients and doctors, and we strive to bridge the gap between them.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
