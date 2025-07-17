"use client"

import { useState, useEffect } from "react"
import { Users, CheckCircle, Trophy, Calendar, BarChart3, FileText, LogOut, Eye, Plus, Search } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const DomainLeadDashboard = () => {
  const [domain, setDomain] = useState("Technical")
  const [members, setMembers] = useState([
    {
      id: "MEM001",
      name: "John Doe",
      xp: 1250,
      attendance: 85,
      status: "active",
      level: 5,
      joinDate: "Jan 2024",
      lastActive: "2 hours ago",
      projects: 8,
    },
    {
      id: "MEM002",
      name: "Jane Smith",
      xp: 980,
      attendance: 92,
      status: "active",
      level: 4,
      joinDate: "Feb 2024",
      lastActive: "1 day ago",
      projects: 6,
    },
    {
      id: "MEM003",
      name: "Mike Johnson",
      xp: 1450,
      attendance: 78,
      status: "active",
      level: 6,
      joinDate: "Dec 2023",
      lastActive: "5 hours ago",
      projects: 12,
    },
    {
      id: "MEM004",
      name: "Sarah Wilson",
      xp: 1120,
      attendance: 88,
      status: "active",
      level: 5,
      joinDate: "Jan 2024",
      lastActive: "30 minutes ago",
      projects: 9,
    },
  ])

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "React Component Library",
      submissions: 3,
      total: 4,
      deadline: "2024-03-20",
      difficulty: "Medium",
      xpReward: 100,
    },
    {
      id: 2,
      title: "API Integration Project",
      submissions: 4,
      total: 4,
      deadline: "2024-03-15",
      difficulty: "Hard",
      xpReward: 150,
    },
    {
      id: 3,
      title: "Database Design Challenge",
      submissions: 2,
      total: 4,
      deadline: "2024-03-25",
      difficulty: "Easy",
      xpReward: 80,
    },
  ])

  const [pendingGrades, setPendingGrades] = useState([
    {
      id: 1,
      studentName: "John Doe",
      studentId: "MEM001",
      assignment: "React Component Library",
      submittedAt: "2024-03-18",
      file: "project.zip",
      assignmentId: 1,
    },
    {
      id: 2,
      studentName: "Jane Smith",
      studentId: "MEM002",
      assignment: "API Integration Project",
      submittedAt: "2024-03-17",
      file: "api-project.zip",
      assignmentId: 2,
    },
  ])

  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split("T")[0])
  const [attendanceData, setAttendanceData] = useState({})
  const [activeTab, setActiveTab] = useState("overview")
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const navigate = useNavigate()

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    const userDomain = localStorage.getItem("domain")
    if (userRole !== "domain-lead") {
      navigate("/login")
      return
    }
    if (userDomain) {
      setDomain(userDomain.charAt(0).toUpperCase() + userDomain.slice(1))
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const markAttendance = (memberId, present) => {
    setAttendanceData((prev) => ({
      ...prev,
      [memberId]: present,
    }))
  }

  const submitAttendance = () => {
    // Here you would typically send the attendance data to your backend
    alert("Attendance marked successfully!")
    setAttendanceData({})
  }

  const gradeAssignment = (gradeId, grade, xp) => {
    const gradedAssignment = pendingGrades.find((g) => g.id === gradeId)
    if (!gradedAssignment) return

    // Remove from pending grades
    setPendingGrades((prev) => prev.filter((g) => g.id !== gradeId))

    // Update member XP
    setMembers((prev) =>
      prev.map((member) =>
        member.name === gradedAssignment.studentName
          ? { ...member, xp: member.xp + xp, level: Math.floor((member.xp + xp) / 300) + 1 }
          : member,
      ),
    )

    alert(`Assignment graded! Grade: ${grade}%, XP awarded: ${xp}`)
  }

  const createNewAssignment = () => {
    const title = prompt("Assignment Title:")
    const deadline = prompt("Deadline (YYYY-MM-DD):")
    const xpReward = prompt("XP Reward:")
    const difficulty = prompt("Difficulty (Easy/Medium/Hard):")

    if (title && deadline && xpReward && difficulty) {
      const newAssignment = {
        id: assignments.length + 1,
        title,
        deadline,
        xpReward: Number.parseInt(xpReward),
        difficulty,
        submissions: 0,
        total: members.length,
      }
      setAssignments((prev) => [...prev, newAssignment])
    }
  }

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || member.status === filterStatus
    return matchesSearch && matchesFilter
  })

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return "text-green-400"
    if (attendance >= 75) return "text-yellow-400"
    return "text-red-400"
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
              <span className="text-gray-300">{domain} Lead Dashboard</span>
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
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{domain} Domain Dashboard</h1>
          <p className="text-gray-400">Manage your domain members and track their progress</p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Members</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-400">{members.length}</p>
                <p className="text-xs text-gray-500">+2 this month</p>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-green-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg Attendance</p>
                <p className="text-xl sm:text-2xl font-bold text-green-400">
                  {Math.round(members.reduce((acc, m) => acc + m.attendance, 0) / members.length)}%
                </p>
                <p className="text-xs text-gray-500">+5% from last month</p>
              </div>
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-orange-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Grades</p>
                <p className="text-xl sm:text-2xl font-bold text-orange-400">{pendingGrades.length}</p>
                <p className="text-xs text-gray-500">Need attention</p>
              </div>
              <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Assignments</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-400">{assignments.length}</p>
                <p className="text-xs text-gray-500">
                  {assignments.filter((a) => new Date(a.deadline) > new Date()).length} upcoming
                </p>
              </div>
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-gray-800/50 rounded-lg p-1 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "members", label: "Members", icon: Users },
            { id: "assignments", label: "Assignments", icon: FileText },
            { id: "attendance", label: "Attendance", icon: Calendar },
            { id: "grading", label: "Grading", icon: Trophy },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Top Performers */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Top Performers
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  {members
                    .sort((a, b) => b.xp - a.xp)
                    .slice(0, 3)
                    .map((member, index) => (
                      <div key={member.id} className="flex items-center gap-4 p-3 bg-gray-700/30 rounded-lg">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            index === 0
                              ? "bg-yellow-500/20 text-yellow-400"
                              : index === 1
                                ? "bg-gray-500/20 text-gray-400"
                                : "bg-orange-500/20 text-orange-400"
                          }`}
                        >
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-gray-400">
                            {member.xp} XP • Level {member.level}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${getAttendanceColor(member.attendance)}`}>
                            {member.attendance}%
                          </div>
                          <div className="text-xs text-gray-500">attendance</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Activity
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div>
                      <p className="text-sm">John Doe submitted React Component Library</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div>
                      <p className="text-sm">Jane Smith joined the domain</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div>
                      <p className="text-sm">New assignment: Database Design Challenge</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === "members" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Domain Members
                </h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search members..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid gap-4">
                {filteredMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-gray-700/30 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-lg">{member.name}</h4>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                            Level {member.level}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-1">ID: {member.id}</p>
                        <p className="text-xs text-gray-500">
                          Joined: {member.joinDate} • Last active: {member.lastActive}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-blue-400">{member.xp}</div>
                          <div className="text-xs text-gray-400">XP</div>
                        </div>
                        <div>
                          <div className={`text-lg font-bold ${getAttendanceColor(member.attendance)}`}>
                            {member.attendance}%
                          </div>
                          <div className="text-xs text-gray-400">Attendance</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-400">{member.projects}</div>
                          <div className="text-xs text-gray-400">Projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Assignments Tab */}
        {activeTab === "assignments" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Assignments
                </h3>
                <button
                  onClick={createNewAssignment}
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Create Assignment
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold text-lg">{assignment.title}</h4>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              assignment.difficulty === "Easy"
                                ? "bg-green-500/20 text-green-400"
                                : assignment.difficulty === "Medium"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {assignment.difficulty}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span>Due: {assignment.deadline}</span>
                          <span>Reward: {assignment.xpReward} XP</span>
                          <span>
                            Submissions: {assignment.submissions}/{assignment.total}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                            style={{ width: `${(assignment.submissions / assignment.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-400 min-w-[3rem]">
                          {Math.round((assignment.submissions / assignment.total) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Attendance Tab */}
        {activeTab === "attendance" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Mark Attendance
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  value={attendanceDate}
                  onChange={(e) => setAttendanceDate(e.target.value)}
                  className="w-full sm:w-auto px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-3 mb-6">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-700/30 rounded-lg p-4 gap-4"
                  >
                    <div>
                      <span className="font-medium">{member.name}</span>
                      <p className="text-sm text-gray-400">ID: {member.id}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => markAttendance(member.id, true)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          attendanceData[member.id] === true
                            ? "bg-green-500 text-white"
                            : "bg-gray-600 text-gray-300 hover:bg-green-500 hover:text-white"
                        }`}
                      >
                        Present
                      </button>
                      <button
                        onClick={() => markAttendance(member.id, false)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          attendanceData[member.id] === false
                            ? "bg-red-500 text-white"
                            : "bg-gray-600 text-gray-300 hover:bg-red-500 hover:text-white"
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={submitAttendance}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
              >
                Submit Attendance
              </button>
            </div>
          </div>
        )}

        {/* Grading Tab */}
        {activeTab === "grading" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Pending Grades
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {pendingGrades.map((grade) => (
                  <div key={grade.id} className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{grade.studentName}</h4>
                        <p className="text-gray-400 mb-1">{grade.assignment}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span>ID: {grade.studentId}</span>
                          <span>Submitted: {grade.submittedAt}</span>
                          <span>File: {grade.file}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            const grade_score = prompt("Enter grade (0-100):")
                            const xp = prompt("Enter XP to award:")
                            if (grade_score && xp) {
                              gradeAssignment(grade.id, Number.parseInt(grade_score), Number.parseInt(xp))
                            }
                          }}
                          className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-sm font-medium hover:from-green-600 hover:to-blue-600 transition-all"
                        >
                          Grade
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                {pendingGrades.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <Trophy className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No pending grades at the moment</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DomainLeadDashboard
