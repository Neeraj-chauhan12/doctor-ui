import React, { useState } from 'react'

const DoctorDashboard = () => {
  const [patients] = useState([
    { id: 1, name: 'John Doe', appointment: '2025-11-15 10:00 AM', condition: 'Headache' },
    { id: 2, name: 'Jane Smith', appointment: '2025-11-15 11:00 AM', condition: 'Flu' },
    { id: 3, name: 'Mike Johnson', appointment: '2025-11-15 2:00 PM', condition: 'Back Pain' }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Doctor Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-600">24</h3>
            <p className="text-gray-600">Total Patients</p>
          </div>
          <div className="bg-green-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-green-600">3</h3>
            <p className="text-gray-600">Today's Appointments</p>
          </div>
          <div className="bg-purple-100 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-purple-600">12</h3>
            <p className="text-gray-600">Reports Pending</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Today's Appointments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-50">
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Patient Name</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Appointment Time</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Condition</th>
                  <th className="px-4 py-2 text-left font-semibold text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{patient.name}</td>
                    <td className="px-4 py-3">{patient.appointment}</td>
                    <td className="px-4 py-3">{patient.condition}</td>
                    <td className="px-4 py-3">
                      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
