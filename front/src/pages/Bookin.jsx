import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Bookin = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    reason: ''
  })

  const [booked, setBooked] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setBooked(true)
    console.log('Appointment booked:', formData)
    toast.success("Booking successfully !")
  }

  const doctors = [
    'Dr. Smith - Cardiologist',
    'Dr. Johnson - Dermatologist',
    'Dr. Williams - Neurologist',
    'Dr. Brown - Pediatrician',
    'Dr. Davis - Orthopedic'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Book Appointment</h1>

        {!booked ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Select Doctor</label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              >
                <option value="">Choose a doctor</option>
                {doctors.map((doc, idx) => (
                  <option key={idx} value={doc}>{doc}</option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Reason for Visit</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                placeholder="Describe your symptoms or reason for visit"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Confirm Booking
            </button>
          </form>
        ) : (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">✓</div>
              <h2 className="text-3xl font-bold text-green-600 mb-4">Appointment Confirmed!</h2>
              <div className="bg-white p-6 rounded-lg mb-4">
                <p className="text-gray-700"><span className="font-semibold">Doctor:</span> {formData.doctor}</p>
                <p className="text-gray-700"><span className="font-semibold">Date:</span> {formData.date}</p>
                <p className="text-gray-700"><span className="font-semibold">Time:</span> {formData.time}</p>
              </div>
              <button
                onClick={() => setBooked(false)}
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bookin
