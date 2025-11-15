import React, { useState } from 'react'

const FamilyMembers = () => {
  const [members] = useState([
    { id: 1, name: 'John Doe', relationship: 'Self', age: 35, bloodType: 'O+' },
    { id: 2, name: 'Jane Doe', relationship: 'Spouse', age: 33, bloodType: 'B+' },
    { id: 3, name: 'Tom Doe', relationship: 'Son', age: 8, bloodType: 'O+' },
    { id: 4, name: 'Emma Doe', relationship: 'Daughter', age: 6, bloodType: 'O+' }
  ])

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Family Members</h1>

        <div className="mb-6">
          <button className="bg-purple-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-700">
            + Add Family Member
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="text-5xl mr-4">👤</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.relationship}</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <p className="text-gray-700 mb-2"><span className="font-semibold">Age:</span> {member.age} years</p>
                <p className="text-gray-700 mb-4"><span className="font-semibold">Blood Type:</span> {member.bloodType}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-1 px-2 rounded hover:bg-blue-700">
                    View Records
                  </button>
                  <button className="flex-1 bg-gray-600 text-white py-1 px-2 rounded hover:bg-gray-700">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FamilyMembers
