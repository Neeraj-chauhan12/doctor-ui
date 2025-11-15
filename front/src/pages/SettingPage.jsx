import React, { useState } from 'react'

const SettingPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    smsAlerts: false,
    darkMode: false,
    privateProfile: true
  })

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Settings</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Preferences</h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <h3 className="font-semibold text-gray-800">Notifications</h3>
                <p className="text-sm text-gray-600">Receive app notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={() => handleToggle('notifications')}
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <h3 className="font-semibold text-gray-800">Email Alerts</h3>
                <p className="text-sm text-gray-600">Receive email notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailAlerts}
                onChange={() => handleToggle('emailAlerts')}
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <h3 className="font-semibold text-gray-800">SMS Alerts</h3>
                <p className="text-sm text-gray-600">Receive SMS notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.smsAlerts}
                onChange={() => handleToggle('smsAlerts')}
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <h3 className="font-semibold text-gray-800">Dark Mode</h3>
                <p className="text-sm text-gray-600">Enable dark theme</p>
              </div>
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            <div className="flex justify-between items-center p-4">
              <div>
                <h3 className="font-semibold text-gray-800">Private Profile</h3>
                <p className="text-sm text-gray-600">Make your profile private</p>
              </div>
              <input
                type="checkbox"
                checked={settings.privateProfile}
                onChange={() => handleToggle('privateProfile')}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Account</h2>
            <div className="space-y-2">
              <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded transition font-semibold text-gray-800">
                Change Password
              </button>
              <button className="w-full text-left bg-gray-50 hover:bg-gray-100 p-3 rounded transition font-semibold text-gray-800">
                Two-Factor Authentication
              </button>
              <button className="w-full text-left bg-red-50 hover:bg-red-100 p-3 rounded transition font-semibold text-red-800">
                Delete Account
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingPage
