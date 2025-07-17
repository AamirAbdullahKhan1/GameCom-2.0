"use client"

import { useState, useEffect } from "react"
import { Trophy, Upload, Calendar, BarChart3, Target, Clock, Award, FileText, LogOut, Download } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const MemberDashboard = () => {
  const [user, setUser] = useState({
    id: "",
    name: "John Doe",
    domain: "Technical",
    xp: 1250,
    level: 5,
    joinDate: "Jan 2024",
    completedProjects: 8,
    rank: 15,
  })

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React Component Library",
      deadline: "2024-03-20",
      status: "pending",
      xp: 100,
      description: "Build a reusable component library with TypeScript",
      difficulty: "Medium",
    },
    {
      id: 2,
      title: "API Integration Project",
      deadline: "2024-03-15",
      status: "submitted",
      xp: 150,
      grade: 85,
      submittedAt: "2024-03-14",
      feedback: "Great work on the error handling!",
    },
    {
      id: 3,
      title: "Database Design Challenge",
      deadline: "2024-03-25",
      status: "graded",
      xp: 120,
      grade: 92,
      feedback: "Excellent schema design and optimization techniques.",
    },
  ])

  const [events, setEvents] = useState([
    { id: 1, name: "GameJam 2024", date: "2024-03-15", registered: true, status: "upcoming" },
    { id: 2, name: "Tech Talk Series", date: "2024-03-22", registered: false, status: "open" },
    { id: 3, name: "Design Workshop", date: "2024-03-28", registered: true, status: "upcoming" },
  ])

  const [selectedFile, setSelectedFile] = useState(null)
  const [uploadingId, setUploadingId] = useState(null)
  const [activeTab, setActiveTab] = useState("assignments")
  const navigate = useNavigate()

  useEffect(() => {
    const userId = localStorage.getItem("userId")
    const userRole = localStorage.getItem("userRole")
    if (!userId || userRole !== "member") {
      navigate("/login")
      return
    }
    setUser((prev) => ({ ...prev, id: userId }))
  }, [navigate])

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const handleFileUpload = (assignmentId) => {
    if (!selectedFile) return

    setUploadingId(assignmentId)

    // Simulate upload
    setTimeout(() => {
      setAssignments((prev) =>
        prev.map((assignment) =>
          assignment.id === assignmentId
            ? { ...assignment, status: "submitted", submittedAt: new Date().toISOString().split("T")[0] }
            : assignment,
        ),
      )
      setUploadingId(null)
      setSelectedFile(null)

      // Update XP
      const assignment = assignments.find((a) => a.id === assignmentId)
      if (assignment) {
        setUser((prev) => ({ ...prev, xp: prev.xp + assignment.xp }))
      }
    }, 2000)
  }

  const registerForEvent = (eventId) => {
    setEvents((prev) => prev.map((event) => (event.id === eventId ? { ...event, registered: true } : event)))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20"
      case "submitted":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20"
      case "graded":
        return "text-green-400 bg-green-400/10 border-green-400/20"
      default:
        return "text-gray-400 bg-gray-400/10 border-gray-400/20"
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-400/10"
      case "Medium":
        return "text-yellow-400 bg-yellow-400/10"
      case "Hard":
        return "text-red-400 bg-red-400/10"
      default:
        return "text-gray-400 bg-gray-400/10"
    }
  }

  const getNextLevelXP = () => {
    return (user.level + 1) * 300
  }

  const getCurrentLevelProgress = () => {
    const currentLevelXP = user.level * 300
    const nextLevelXP = getNextLevelXP()
    const progress = ((user.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100
    return Math.max(0, Math.min(100, progress))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src="/gamecom-logo.png" alt="GameCom Logo" className="w-6 h-6 object-contain" />
                </div>
                <span className="text-xl font-bold">GameCom</span>
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">Member Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-400">Track your progress and manage your assignments</p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total XP</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-400">{user.xp}</p>
                <p className="text-xs text-gray-500">
                  +{assignments.filter((a) => a.status === "graded").reduce((sum, a) => sum + a.xp, 0)} this month
                </p>
              </div>
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Level</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-400">{user.level}</p>
                <p className="text-xs text-gray-500">Rank #{user.rank}</p>
              </div>
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-green-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Domain</p>
                <p className="text-sm sm:text-lg font-semibold">{user.domain}</p>
                <p className="text-xs text-gray-500">Since {user.joinDate}</p>
              </div>
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-orange-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Projects</p>
                <p className="text-xl sm:text-2xl font-bold text-orange-400">{user.completedProjects}</p>
                <p className="text-xs text-gray-500">{assignments.length} active</p>
              </div>
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            </div>
          </div>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <h3 className="text-lg sm:text-xl font-semibold">Level Progress</h3>
            <div className="text-sm text-gray-400">
              <span className="text-blue-400 font-medium">{user.xp}</span> / {getNextLevelXP()} XP to level{" "}
              {user.level + 1}
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 relative overflow-hidden"
              style={{ width: `${getCurrentLevelProgress()}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          <p className="text-xs text-gray-500">{Math.round(getCurrentLevelProgress())}% complete</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-gray-800/50 rounded-lg p-1 overflow-x-auto">
          <button
            onClick={() => setActiveTab("assignments")}
            className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
              activeTab === "assignments"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            Assignments
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
              activeTab === "events"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Events
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap ${
              activeTab === "achievements"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Trophy className="w-4 h-4 inline mr-2" />
            Achievements
          </button>
        </div>

        {/* Assignments Tab */}
        {activeTab === "assignments" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="w-5 h-5" />
                My Assignments
              </h3>
            </div>

            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="bg-gray-700/30 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{assignment.title}</h4>
                        {assignment.description && (
                          <p className="text-sm text-gray-400 mt-1">{assignment.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {assignment.difficulty && (
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(assignment.difficulty)}`}
                          >
                            {assignment.difficulty}
                          </span>
                        )}
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(assignment.status)}`}
                        >
                          {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Due: {assignment.deadline}
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        {assignment.xp} XP
                      </div>
                      {assignment.grade && (
                        <div className="flex items-center gap-1">
                          <BarChart3 className="w-4 h-4" />
                          Grade: {assignment.grade}%
                        </div>
                      )}
                      {assignment.submittedAt && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Submitted: {assignment.submittedAt}
                        </div>
                      )}
                    </div>

                    {assignment.feedback && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                        <p className="text-sm text-green-400">
                          <strong>Feedback:</strong> {assignment.feedback}
                        </p>
                      </div>
                    )}

                    {assignment.status === "pending" && (
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <input
                          type="file"
                          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                          className="flex-1 text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                        />
                        <button
                          onClick={() => handleFileUpload(assignment.id)}
                          disabled={!selectedFile || uploadingId === assignment.id}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
                        >
                          {uploadingId === assignment.id ? (
                            <>
                              <Clock className="w-4 h-4 animate-spin" />
                              Uploading...
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4" />
                              Submit
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {assignment.status === "graded" && (
                      <div className="flex items-center gap-2">
                        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
                          <Download className="w-4 h-4" />
                          Download Certificate
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </h3>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid gap-4">
                {events.map((event) => (
                  <div key={event.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-lg">{event.name}</h4>
                        <p className="text-gray-400 text-sm">Date: {event.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {event.registered ? (
                          <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
                            Registered
                          </span>
                        ) : (
                          <button
                            onClick={() => registerForEvent(event.id)}
                            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
                          >
                            Register Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                My Achievements
              </h3>
            </div>

            <div className="p-4 sm:p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                    <h4 className="font-semibold">First Assignment</h4>
                  </div>
                  <p className="text-sm text-gray-400">Completed your first assignment</p>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-blue-400" />
                    <h4 className="font-semibold">Level 5 Reached</h4>
                  </div>
                  <p className="text-sm text-gray-400">Reached level 5 in your domain</p>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="w-6 h-6 text-green-400" />
                    <h4 className="font-semibold">High Achiever</h4>
                  </div>
                  <p className="text-sm text-gray-400">Scored 90+ on 3 assignments</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MemberDashboard
