import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import About2 from './pages/About2'
import AboutPage from './pages/AboutPage'
import AddNewMedicalForm from './pages/AddNewMedicalForm'
import AmbulanceScreen from './pages/AmbulanceScreen'
import Bookin from './pages/Bookin'
import ContactPage from './pages/ContactPage'
import DoctorDashboard from './pages/DoctorDashboard'
import DoctorProfile from './pages/DoctorProfile'
import FamilyMembers from './pages/FamilyMembers'
import LoginDocotr from './pages/LoginDocotr'
import LoginPatient from './pages/LoginPatient'
import PatientDashboard from './pages/PatientDashboard'
import PatientProfile from './pages/PatientProfile'
import SettingPage from './pages/SettingPage'
import SignUpDoctor from './pages/SignUpDoctor'
import SignUpPatiet from './pages/SignUpPatiet'
import  { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/medical-form" element={<AddNewMedicalForm />} />
        <Route path="/ambulance" element={<AmbulanceScreen />} />
        <Route path="/booking" element={<Bookin />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/family-members" element={<FamilyMembers />} />
        <Route path="/login-doctor" element={<LoginDocotr />} />
        <Route path="/login-patient" element={<LoginPatient />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/signup-doctor" element={<SignUpDoctor />} />
        <Route path="/signup-patient" element={<SignUpPatiet />} />
      </Routes>
   
      <Toaster />
    </Router>
    
  )
}

export default App
