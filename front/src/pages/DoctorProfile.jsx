import React from 'react'

const DoctorProfile = () => {
  const doctorInfo = {
    name: 'Dr. Sarah Anderson',
    specialization: 'Cardiologist',
    experience: '15 years',
    education: 'M.D. from Medical University',
    phone: '+1 (555) 987-6543',
    email: 'dr.anderson@hospital.com',
    qualifications: ['M.D.', 'Board Certified', 'Postdoctoral Fellowship']
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Doctor Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-8xl mb-4">👨‍⚕️</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{doctorInfo.name}</h2>
              <p className="text-lg text-blue-600 font-semibold mb-4">{doctorInfo.specialization}</p>
              <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 mb-2">
                Book Appointment
              </button>
              <button className="w-full bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-700">
                Message Doctor
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About</h3>
              <div className="space-y-3">
                <p><span className="font-semibold text-gray-700">Experience:</span> {doctorInfo.experience}</p>
                <p><span className="font-semibold text-gray-700">Education:</span> {doctorInfo.education}</p>
                <p><span className="font-semibold text-gray-700">Phone:</span> {doctorInfo.phone}</p>
                <p><span className="font-semibold text-gray-700">Email:</span> {doctorInfo.email}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Qualifications</h3>
              <ul className="space-y-2">
                {doctorInfo.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✓</span>
                    <span className="text-gray-700">{qual}</span>
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

export default DoctorProfile
