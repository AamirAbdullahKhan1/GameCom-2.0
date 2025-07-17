import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MemberDashboard from "./pages/MemberDashboard"
import DomainLeadDashboard from "./pages/DomainLeadDashboard"
import PresidentDashboard from "./pages/PresidentDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import EventRegistrationPage from "./Pages/EventRegistrationPage"
import LandingPage from "./Pages/LandingPage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import DomainsPage from "./Pages/DomainsPage"
import ComingSoonPage from "./Pages/ComingSoonPage"

function App() {
  return (
    <Router> 
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Routes>
            <Route path="/" element= {<LandingPage/>} />
            <Route path="/login" element= {<LoginPage/>} />
            <Route path="/register" element= {<RegisterPage/>} />
            <Route path="/domains" element= {<DomainsPage/>}/>
            <Route path="/dashboard/member" element={<MemberDashboard />} />
            <Route path="/dashboard/domain-lead" element={<DomainLeadDashboard />} />
            <Route path="/dashboard/president" element={<PresidentDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/register-event" element={<EventRegistrationPage/>} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
