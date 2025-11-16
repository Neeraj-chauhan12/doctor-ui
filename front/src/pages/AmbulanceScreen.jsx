import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AmbulanceScreen = () => {
  const [isRequested, setIsRequested] = useState(false)

  const handleRequestAmbulance = () => {
    setIsRequested(true)
    toast.success('Ambulance requested! You will be contacted shortly.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-8 text-center">Emergency Ambulance Services</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="text-7xl">🚑</div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Request Emergency Ambulance</h2>
          
          <div className="mb-6 bg-red-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Emergency Contact:</span> Call 911 or use this service to request an ambulance immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-600 mb-2">Response Time</h3>
              <p className="text-gray-700">Average 5-10 minutes</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-600 mb-2">Available 24/7</h3>
              <p className="text-gray-700">Round-the-clock service</p>
            </div>
          </div>

          <button
            onClick={handleRequestAmbulance}
            disabled={isRequested}
            className={`w-full font-bold py-3 px-4 rounded-lg text-white transition ${
              isRequested 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            {isRequested ? 'Ambulance Requested' : 'Request Ambulance Now'}
          </button>

          {isRequested && (
            <div className="mt-6 bg-green-50 p-4 rounded-lg border-2 border-green-500">
              <p className="text-green-700 font-semibold">✓ Ambulance requested successfully!</p>
              <p className="text-gray-600 mt-2">Track your ambulance: Your ambulance will arrive shortly. You can track its location in real-time.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AmbulanceScreen
