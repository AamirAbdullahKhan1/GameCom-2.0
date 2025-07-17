"use client"

import { useState } from "react"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    memberId: "",
    password: "",
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mock authentication logic
    const { memberId, password } = formData

    // Admin login
    if (memberId === "admin" && password === "admin123") {
      localStorage.setItem("userRole", "admin")
      localStorage.setItem("userId", "admin")
      navigate("/dashboard/admin")
      return
    }

    // President login
    if (memberId === "PRES001" && password === "president123") {
      localStorage.setItem("userRole", "president")
      localStorage.setItem("userId", "PRES001")
      navigate("/dashboard/president")
      return
    }

    // Domain lead login (example for technical lead)
    if (memberId === "TECH001" && password === "tech123") {
      localStorage.setItem("userRole", "domain-lead")
      localStorage.setItem("userId", "TECH001")
      localStorage.setItem("domain", "technical")
      navigate("/dashboard/domain-lead")
      return
    }

    // Regular member login
    if (memberId.startsWith("MEM") && password === "member123") {
      localStorage.setItem("userRole", "member")
      localStorage.setItem("userId", memberId)
      navigate("/dashboard/member")
      return
    }

    alert("Invalid credentials")
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Login Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <img src="/gamecom-logo.png" alt="GameCom Logo" className="w-12 h-12 object-contain" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-400">Sign in to your GameCom account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Member ID</label>
              <input
                type="text"
                value={formData.memberId}
                onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Enter your member ID"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
            <h3 className="text-sm font-semibold text-gray-300 mb-2">Demo Credentials:</h3>
            <div className="text-xs text-gray-400 space-y-1">
              <div>Admin: admin / admin123</div>
              <div>President: PRES001 / president123</div>
              <div>Tech Lead: TECH001 / tech123</div>
              <div>Member: MEM001 / member123</div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-400 hover:text-blue-300 transition-colors">
                Contact Admin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
