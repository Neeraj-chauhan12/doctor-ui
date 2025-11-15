import React from 'react'

const PatientProfile = () => {
  const patientInfo = {
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    bloodType: 'O+',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, City, State 12345',
    medicalHistory: ['Hypertension', 'Allergies', 'Childhood Asthma']
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Patient Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-8xl mb-4">👤</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{patientInfo.name}</h2>
              <p className="text-lg text-blue-600 font-semibold mb-4">{patientInfo.age} years old</p>
              <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mb-2">
                Edit Profile
              </button>
              <button className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700">
                Download Records
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h3>
              <div className="space-y-3">
                <p><span className="font-semibold text-gray-700">Gender:</span> {patientInfo.gender}</p>
                <p><span className="font-semibold text-gray-700">Blood Type:</span> {patientInfo.bloodType}</p>
                <p><span className="font-semibold text-gray-700">Email:</span> {patientInfo.email}</p>
                <p><span className="font-semibold text-gray-700">Phone:</span> {patientInfo.phone}</p>
                <p><span className="font-semibold text-gray-700">Address:</span> {patientInfo.address}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Medical History</h3>
              <ul className="space-y-2">
                {patientInfo.medicalHistory.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientProfile
