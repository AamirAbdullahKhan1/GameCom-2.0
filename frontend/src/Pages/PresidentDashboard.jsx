"use client"

import { useState, useEffect } from "react"
import { Crown, Users, BarChart3, Calendar, Trophy, TrendingUp, Activity, LogOut, Eye, Plus, Bell } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const PresidentDashboard = () => {
  const [overallStats, setOverallStats] = useState({
    totalMembers: 45,
    totalXP: 52750,
    avgAttendance: 87,
    activeProjects: 12,
    completedEvents: 8,
    upcomingEvents: 3,
    monthlyGrowth: 12,
    satisfaction: 94,
  })

  const [domainStats, setDomainStats] = useState([
    {
      name: "Technical",
      members: 15,
      avgXP: 1250,
      attendance: 89,
      lead: "Alex Johnson",
      growth: "+15%",
      activeProjects: 8,
      completedAssignments: 24,
    },
    {
      name: "Media",
      members: 8,
      avgXP: 980,
      attendance: 92,
      lead: "Sarah Chen",
      growth: "+8%",
      activeProjects: 5,
      completedAssignments: 18,
    },
    {
      name: "Design",
      members: 10,
      avgXP: 1100,
      attendance: 85,
      lead: "Mike Rodriguez",
      growth: "+12%",
      activeProjects: 6,
      completedAssignments: 21,
    },
    {
      name: "Game Dev",
      members: 7,
      avgXP: 1350,
      attendance: 88,
      lead: "Emma Wilson",
      growth: "+20%",
      activeProjects: 4,
      completedAssignments: 15,
    },
    {
      name: "PR",
      members: 5,
      avgXP: 890,
      attendance: 90,
      lead: "David Kim",
      growth: "+5%",
      activeProjects: 3,
      completedAssignments: 12,
    },
  ])

  const [recentActivities, setRecentActivities] = useState([
    {
      id: 1,
      type: "assignment",
      message: "New assignment submitted by John Doe",
      time: "2 hours ago",
      domain: "Technical",
      priority: "normal",
    },
    {
      id: 2,
      type: "event",
      message: "GameJam 2024 registration opened",
      time: "5 hours ago",
      domain: "General",
      priority: "high",
    },
    {
      id: 3,
      type: "member",
      message: "New member joined Design Domain",
      time: "1 day ago",
      domain: "Design",
      priority: "normal",
    },
    {
      id: 4,
      type: "achievement",
      message: "Technical Domain reached 15,000 total XP",
      time: "2 days ago",
      domain: "Technical",
      priority: "high",
    },
    {
      id: 5,
      type: "alert",
      message: "Low attendance in Media Domain this week",
      time: "3 days ago",
      domain: "Media",
      priority: "urgent",
    },
  ])

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: 1,
      name: "GameJam 2024",
      date: "2024-03-15",
      participants: 32,
      status: "confirmed",
      budget: "₹25,000",
      venue: "Main Auditorium",
    },
    {
      id: 2,
      name: "Tech Talk Series",
      date: "2024-03-22",
      participants: 25,
      status: "planning",
      budget: "₹15,000",
      venue: "Conference Hall",
    },
    {
      id: 3,
      name: "Design Workshop",
      date: "2024-03-28",
      participants: 18,
      status: "confirmed",
      budget: "₹10,000",
      venue: "Design Lab",
    },
  ])

  const [notifications, setNotifications] = useState([
    { id: 1, message: "Budget approval needed for GameJam 2024", type: "urgent", unread: true },
    { id: 2, message: "Monthly report due in 3 days", type: "reminder", unread: true },
    { id: 3, message: "New partnership proposal from TechCorp", type: "info", unread: false },
  ])

  const [activeTab, setActiveTab] = useState("overview")
  const navigate = useNavigate()

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    if (userRole !== "president") {
      navigate("/login")
      return
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "assignment":
        return <Trophy className="w-4 h-4 text-blue-400" />
      case "event":
        return <Calendar className="w-4 h-4 text-purple-400" />
      case "member":
        return <Users className="w-4 h-4 text-green-400" />
      case "achievement":
        return <Activity className="w-4 h-4 text-orange-400" />
      case "alert":
        return <Bell className="w-4 h-4 text-red-400" />
      default:
        return <Activity className="w-4 h-4 text-gray-400" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "border-l-red-500 bg-red-500/5"
      case "high":
        return "border-l-orange-500 bg-orange-500/5"
      case "normal":
        return "border-l-blue-500 bg-blue-500/5"
      default:
        return "border-l-gray-500 bg-gray-500/5"
    }
  }

  const createNewEvent = () => {
    const name = prompt("Event Name:")
    const date = prompt("Event Date (YYYY-MM-DD):")
    const budget = prompt("Budget:")
    const venue = prompt("Venue:")

    if (name && date && budget && venue) {
      const newEvent = {
        id: upcomingEvents.length + 1,
        name,
        date,
        budget,
        venue,
        participants: 0,
        status: "planning",
      }
      setUpcomingEvents((prev) => [...prev, newEvent])
    }
  }

  const markNotificationRead = (id) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, unread: false } : notif)))
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
              <span className="text-gray-300">President Dashboard</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-white transition-colors relative">
                  <Bell className="w-5 h-5" />
                  {notifications.filter((n) => n.unread).length > 0 && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">
                      {notifications.filter((n) => n.unread).length}
                    </span>
                  )}
                </button>
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
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-3">
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            President Dashboard
          </h1>
          <p className="text-gray-400">Overview of GameCom's performance and activities</p>
        </div>

        {/* Enhanced Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Members</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-400">{overallStats.totalMembers}</p>
                <p className="text-xs text-green-400">+{overallStats.monthlyGrowth}% this month</p>
              </div>
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total XP</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-400">{overallStats.totalXP.toLocaleString()}</p>
                <p className="text-xs text-gray-500">Collective progress</p>
              </div>
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-green-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg Attendance</p>
                <p className="text-xl sm:text-2xl font-bold text-green-400">{overallStats.avgAttendance}%</p>
                <p className="text-xs text-green-400">+3% from last month</p>
              </div>
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-orange-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Projects</p>
                <p className="text-xl sm:text-2xl font-bold text-orange-400">{overallStats.activeProjects}</p>
                <p className="text-xs text-gray-500">Across all domains</p>
              </div>
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-pink-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Events Done</p>
                <p className="text-xl sm:text-2xl font-bold text-pink-400">{overallStats.completedEvents}</p>
                <p className="text-xs text-gray-500">This academic year</p>
              </div>
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400" />
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-cyan-500/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Satisfaction</p>
                <p className="text-xl sm:text-2xl font-bold text-cyan-400">{overallStats.satisfaction}%</p>
                <p className="text-xs text-cyan-400">Member feedback</p>
              </div>
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-gray-800/50 rounded-lg p-1 overflow-x-auto">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "domains", label: "Domains", icon: Users },
            { id: "events", label: "Events", icon: Calendar },
            { id: "activities", label: "Activities", icon: Activity },
            { id: "notifications", label: "Notifications", icon: Bell },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-yellow-500 to-orange-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              {tab.id === "notifications" && notifications.filter((n) => n.unread).length > 0 && (
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {/* Domain Performance */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Domain Performance
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  {domainStats.map((domain, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/30 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                        <div>
                          <h4 className="font-semibold text-lg">{domain.name}</h4>
                          <p className="text-sm text-gray-400">Lead: {domain.lead}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-400 text-sm font-medium">{domain.growth}</span>
                          <div className="text-right">
                            <div className="text-sm text-blue-400">{domain.members} members</div>
                            <div className="text-sm text-gray-400">{domain.avgXP} avg XP</div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="text-purple-400 font-medium">{domain.activeProjects}</div>
                          <div className="text-gray-500 text-xs">Active Projects</div>
                        </div>
                        <div>
                          <div className="text-orange-400 font-medium">{domain.completedAssignments}</div>
                          <div className="text-gray-500 text-xs">Assignments</div>
                        </div>
                        <div>
                          <div
                            className={`font-medium ${domain.attendance >= 90 ? "text-green-400" : domain.attendance >= 80 ? "text-yellow-400" : "text-red-400"}`}
                          >
                            {domain.attendance}%
                          </div>
                          <div className="text-gray-500 text-xs">Attendance</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activities
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border-l-4 ${getPriorityColor(activity.priority)}`}
                    >
                      <div className="mt-1">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-300">{activity.message}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{activity.time}</span>
                          <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                            {activity.domain}
                          </span>
                          {activity.priority === "urgent" && (
                            <span className="text-xs px-2 py-1 bg-red-500/20 text-red-400 rounded-full">Urgent</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Domains Tab */}
        {activeTab === "domains" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="w-5 h-5" />
                Domain Management
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid gap-6">
                {domainStats.map((domain, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-lg p-6 border border-gray-600">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold mb-1">{domain.name} Domain</h4>
                        <p className="text-gray-400">Lead: {domain.lead}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            domain.attendance >= 90
                              ? "bg-green-500/20 text-green-400"
                              : domain.attendance >= 80
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {domain.attendance}% Attendance
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                          {domain.growth} Growth
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{domain.members}</div>
                        <div className="text-sm text-gray-400">Members</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{domain.avgXP}</div>
                        <div className="text-sm text-gray-400">Avg XP</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-400">{domain.activeProjects}</div>
                        <div className="text-sm text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{domain.completedAssignments}</div>
                        <div className="text-sm text-gray-400">Assignments</div>
                      </div>
                    </div>
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
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Events
                </h3>
                <button
                  onClick={createNewEvent}
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 px-4 py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-700 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Create Event
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-gray-700/30 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg">{event.name}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          event.status === "confirmed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400 mb-4">
                      <div>Date: {event.date}</div>
                      <div>Participants: {event.participants}</div>
                      <div>Budget: {event.budget}</div>
                      <div>Venue: {event.venue}</div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Activities Tab */}
        {activeTab === "activities" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5" />
                All Activities
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className={`flex items-start gap-3 p-4 rounded-lg border-l-4 ${getPriorityColor(activity.priority)} hover:bg-gray-700/20 transition-colors`}
                  >
                    <div className="mt-1">{getActivityIcon(activity.type)}</div>
                    <div className="flex-1">
                      <p className="text-gray-300 mb-1">{activity.message}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-gray-500">{activity.time}</span>
                        <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                          {activity.domain}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            activity.priority === "urgent"
                              ? "bg-red-500/20 text-red-400"
                              : activity.priority === "high"
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {activity.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === "notifications" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                      notification.unread ? "border-blue-500/50 bg-blue-500/5" : "border-gray-600 bg-gray-700/30"
                    }`}
                    onClick={() => markNotificationRead(notification.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className={`${notification.unread ? "font-medium text-white" : "text-gray-300"}`}>
                          {notification.message}
                        </p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                            notification.type === "urgent"
                              ? "bg-red-500/20 text-red-400"
                              : notification.type === "reminder"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {notification.type}
                        </span>
                      </div>
                      {notification.unread && (
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PresidentDashboard
