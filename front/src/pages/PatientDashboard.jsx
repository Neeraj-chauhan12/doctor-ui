import React, { useState } from 'react'

const PatientDashboard = () => {
  const [appointments] = useState([
    { id: 1, doctor: 'Dr. Smith', date: '2025-11-20', time: '10:00 AM', status: 'Scheduled' },
    { id: 2, doctor: 'Dr. Johnson', date: '2025-11-15', time: '2:00 PM', status: 'Completed' }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Patient Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-blue-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-600">2</h3>
            <p className="text-gray-600">Appointments</p>
          </div>
          <div className="bg-green-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-600">5</h3>
            <p className="text-gray-600">Medical Records</p>
          </div>
          <div className="bg-purple-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-purple-600">3</h3>
            <p className="text-gray-600">Prescriptions</p>
          </div>
          <div className="bg-orange-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-orange-600">4</h3>
            <p className="text-gray-600">Family Members</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Upcoming Appointments</h2>
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700">
              + Book Appointment
            </button>
          </div>
          <div className="space-y-4">
            {appointments.map((apt) => (
              <div key={apt.id} className="border-l-4 border-green-600 bg-green-50 p-4 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-800">{apt.doctor}</h3>
                    <p className="text-gray-600">{apt.date} at {apt.time}</p>
                  </div>
                  <span className={`font-bold px-4 py-1 rounded ${apt.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'}`}>
                    {apt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-3 rounded transition">
                📋 View Medical Records
              </button>
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-3 rounded transition">
                💊 View Prescriptions
              </button>
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-3 rounded transition">
                👥 View Family Members
              </button>
              <button className="w-full text-left bg-blue-50 hover:bg-blue-100 p-3 rounded transition">
                📞 Contact Support
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Health Tips</h2>
            <ul className="space-y-3">
              <li className="text-gray-700">🚶 Stay active: Aim for 30 minutes of exercise daily</li>
              <li className="text-gray-700">💧 Drink plenty of water throughout the day</li>
              <li className="text-gray-700">😴 Get 7-9 hours of quality sleep</li>
              <li className="text-gray-700">🥗 Eat a balanced diet with fruits and vegetables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard
