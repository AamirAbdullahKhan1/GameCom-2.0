"use client"

import { useState, useEffect } from "react"
import {
  Shield,
  Users,
  Settings,
  Database,
  UserPlus,
  Edit,
  Trash2,
  LogOut,
  Save,
  Plus,
  Search,
  Download,
  Upload,
} from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("members")
  const [members, setMembers] = useState([
    {
      id: "MEM001",
      name: "John Doe",
      email: "john@example.com",
      domain: "Technical",
      role: "Member",
      status: "Active",
      joinDate: "2024-01-15",
      lastLogin: "2024-03-18",
    },
    {
      id: "MEM002",
      name: "Jane Smith",
      email: "jane@example.com",
      domain: "Media",
      role: "Member",
      status: "Active",
      joinDate: "2024-02-01",
      lastLogin: "2024-03-17",
    },
    {
      id: "TECH001",
      name: "Alex Johnson",
      email: "alex@example.com",
      domain: "Technical",
      role: "Domain Lead",
      status: "Active",
      joinDate: "2023-12-01",
      lastLogin: "2024-03-18",
    },
    {
      id: "PRES001",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      domain: "General",
      role: "President",
      status: "Active",
      joinDate: "2023-11-01",
      lastLogin: "2024-03-18",
    },
  ])

  const [clubSettings, setClubSettings] = useState({
    clubName: "GameCom",
    description: "Premier game development club at SRM College",
    maxMembers: 100,
    currentMembers: 45,
    registrationOpen: true,
    eventRegistrationOpen: true,
    emailNotifications: true,
    autoApproval: false,
    maintenanceMode: false,
  })

  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    domain: "Technical",
    role: "Member",
  })

  const [editingMember, setEditingMember] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterRole, setFilterRole] = useState("all")
  const [filterDomain, setFilterDomain] = useState("all")
  const [systemStats, setSystemStats] = useState({
    totalUsers: 45,
    activeUsers: 42,
    totalEvents: 12,
    totalProjects: 28,
    storageUsed: "2.4 GB",
    lastBackup: "2024-03-17",
  })
  const navigate = useNavigate()

  useEffect(() => {
    const userRole = localStorage.getItem("userRole")
    if (userRole !== "admin") {
      navigate("/login")
      return
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const addMember = () => {
    if (!newMember.name || !newMember.email) {
      alert("Please fill all required fields")
      return
    }

    const memberId = `${newMember.role === "Member" ? "MEM" : newMember.domain.substring(0, 4).toUpperCase()}${String(members.length + 1).padStart(3, "0")}`

    const member = {
      id: memberId,
      name: newMember.name,
      email: newMember.email,
      domain: newMember.domain,
      role: newMember.role,
      status: "Active",
      joinDate: new Date().toISOString().split("T")[0],
      lastLogin: "Never",
    }

    setMembers([...members, member])
    setNewMember({ name: "", email: "", domain: "Technical", role: "Member" })
    alert("Member added successfully!")
  }

  const deleteMember = (id) => {
    if (confirm("Are you sure you want to delete this member?")) {
      setMembers(members.filter((m) => m.id !== id))
    }
  }

  const updateMember = () => {
    if (!editingMember) return

    setMembers(members.map((m) => (m.id === editingMember.id ? editingMember : m)))
    setEditingMember(null)
    alert("Member updated successfully!")
  }

  const updateClubSettings = () => {
    alert("Club settings updated successfully!")
  }

  const exportData = (type) => {
    alert(`Exporting ${type} data...`)
  }

  const importData = () => {
    alert("Import functionality would be implemented here")
  }

  const createBackup = () => {
    alert("Creating backup...")
    setSystemStats((prev) => ({
      ...prev,
      lastBackup: new Date().toISOString().split("T")[0],
    }))
  }

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = filterRole === "all" || member.role === filterRole
    const matchesDomain = filterDomain === "all" || member.domain === filterDomain
    return matchesSearch && matchesRole && matchesDomain
  })

  const domains = ["Technical", "Media", "Design", "Game Development", "Public Relations"]
  const roles = ["Member", "Domain Lead", "President", "Vice-President", "Director", "Administrator", "Treasurer"]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/10 to-orange-900/10"></div>
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
              <span className="text-gray-300">Admin Dashboard</span>
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
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-3">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
            Admin Dashboard
          </h1>
          <p className="text-gray-400">Manage club members, settings, and overall administration</p>
        </div>

        {/* System Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-red-400">{systemStats.totalUsers}</div>
              <div className="text-xs text-gray-400">Total Users</div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-green-500/50 transition-colors">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400">{systemStats.activeUsers}</div>
              <div className="text-xs text-gray-400">Active Users</div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">{systemStats.totalEvents}</div>
              <div className="text-xs text-gray-400">Total Events</div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-400">{systemStats.totalProjects}</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-yellow-500/50 transition-colors">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-yellow-400">{systemStats.storageUsed}</div>
              <div className="text-xs text-gray-400">Storage Used</div>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-colors">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">{systemStats.lastBackup}</div>
              <div className="text-xs text-gray-400">Last Backup</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-800/50 rounded-lg p-1 overflow-x-auto">
          {[
            { id: "members", label: "Members", icon: Users },
            { id: "settings", label: "Settings", icon: Settings },
            { id: "database", label: "Database", icon: Database },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-red-500 to-orange-600 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Members Tab */}
        {activeTab === "members" && (
          <div className="space-y-8">
            {/* Add New Member */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Add New Member
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={newMember.email}
                    onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                  />
                  <select
                    value={newMember.domain}
                    onChange={(e) => setNewMember({ ...newMember, domain: e.target.value })}
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                  >
                    {domains.map((domain) => (
                      <option key={domain} value={domain}>
                        {domain}
                      </option>
                    ))}
                  </select>
                  <select
                    value={newMember.role}
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                    className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={addMember}
                  className="bg-gradient-to-r from-red-500 to-orange-600 px-6 py-2 rounded-lg font-medium hover:from-red-600 hover:to-orange-700 transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Member
                </button>
              </div>
            </div>

            {/* Members List */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    All Members ({filteredMembers.length})
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search members..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-sm"
                      />
                    </div>
                    <select
                      value={filterRole}
                      onChange={(e) => setFilterRole(e.target.value)}
                      className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-sm"
                    >
                      <option value="all">All Roles</option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    <select
                      value={filterDomain}
                      onChange={(e) => setFilterDomain(e.target.value)}
                      className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500 text-sm"
                    >
                      <option value="all">All Domains</option>
                      {domains.map((domain) => (
                        <option key={domain} value={domain}>
                          {domain}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-4 font-medium">ID</th>
                        <th className="text-left py-3 px-4 font-medium">Name</th>
                        <th className="text-left py-3 px-4 font-medium">Email</th>
                        <th className="text-left py-3 px-4 font-medium">Domain</th>
                        <th className="text-left py-3 px-4 font-medium">Role</th>
                        <th className="text-left py-3 px-4 font-medium">Status</th>
                        <th className="text-left py-3 px-4 font-medium">Join Date</th>
                        <th className="text-left py-3 px-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMembers.map((member) => (
                        <tr
                          key={member.id}
                          className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors"
                        >
                          <td className="py-3 px-4 font-mono text-sm">{member.id}</td>
                          <td className="py-3 px-4 font-medium">{member.name}</td>
                          <td className="py-3 px-4 text-gray-400 text-sm">{member.email}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                              {member.domain}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                member.role === "President"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : member.role === "Domain Lead"
                                    ? "bg-purple-500/20 text-purple-400"
                                    : "bg-gray-500/20 text-gray-400"
                              }`}
                            >
                              {member.role}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                              {member.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-400">{member.joinDate}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => setEditingMember(member)}
                                className="p-1 text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => deleteMember(member.id)}
                                className="p-1 text-red-400 hover:text-red-300 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Club Settings
              </h3>
            </div>
            <div className="p-4 sm:p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Club Name</label>
                  <input
                    type="text"
                    value={clubSettings.clubName}
                    onChange={(e) => setClubSettings({ ...clubSettings, clubName: e.target.value })}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Max Members</label>
                  <input
                    type="number"
                    value={clubSettings.maxMembers}
                    onChange={(e) => setClubSettings({ ...clubSettings, maxMembers: Number.parseInt(e.target.value) })}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  value={clubSettings.description}
                  onChange={(e) => setClubSettings({ ...clubSettings, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { key: "registrationOpen", label: "Registration Open" },
                  { key: "eventRegistrationOpen", label: "Event Registration Open" },
                  { key: "emailNotifications", label: "Email Notifications" },
                  { key: "autoApproval", label: "Auto Approval" },
                  { key: "maintenanceMode", label: "Maintenance Mode" },
                ].map((setting) => (
                  <div key={setting.key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                    <span className="text-sm font-medium">{setting.label}</span>
                    <button
                      onClick={() => setClubSettings({ ...clubSettings, [setting.key]: !clubSettings[setting.key] })}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        clubSettings[setting.key] ? "bg-green-500" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          clubSettings[setting.key] ? "translate-x-6" : "translate-x-1"
                        }`}
                      ></div>
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={updateClubSettings}
                className="bg-gradient-to-r from-red-500 to-orange-600 px-6 py-2 rounded-lg font-medium hover:from-red-600 hover:to-orange-700 transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Settings
              </button>
            </div>
          </div>
        )}

        {/* Database Tab */}
        {activeTab === "database" && (
          <div className="bg-gray-800/50 rounded-xl border border-gray-700">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Database className="w-5 h-5" />
                Database Management
              </h3>
            </div>
            <div className="p-4 sm:p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-blue-500/50 transition-colors">
                  <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Backup Database</h4>
                  <p className="text-gray-400 text-sm mb-4">Create a backup of all club data</p>
                  <button
                    onClick={createBackup}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full"
                  >
                    Create Backup
                  </button>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-green-500/50 transition-colors">
                  <Download className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Export Data</h4>
                  <p className="text-gray-400 text-sm mb-4">Export member data to CSV</p>
                  <div className="space-y-2">
                    <button
                      onClick={() => exportData("members")}
                      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full"
                    >
                      Export Members
                    </button>
                    <button
                      onClick={() => exportData("events")}
                      className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full"
                    >
                      Export Events
                    </button>
                  </div>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-purple-500/50 transition-colors">
                  <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Import Data</h4>
                  <p className="text-gray-400 text-sm mb-4">Import data from CSV files</p>
                  <button
                    onClick={importData}
                    className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full"
                  >
                    Import Data
                  </button>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-orange-500/50 transition-colors">
                  <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">System Logs</h4>
                  <p className="text-gray-400 text-sm mb-4">View system activity logs</p>
                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
                    View Logs
                  </button>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-yellow-500/50 transition-colors">
                  <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Security Audit</h4>
                  <p className="text-gray-400 text-sm mb-4">Run security checks</p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
                    Run Audit
                  </button>
                </div>

                <div className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-red-500/50 transition-colors">
                  <Trash2 className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">Cleanup Data</h4>
                  <p className="text-gray-400 text-sm mb-4">Remove old or unused data</p>
                  <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
                    Cleanup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Member Modal */}
        {editingMember && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Edit Member</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={editingMember.name}
                  onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={editingMember.email}
                  onChange={(e) => setEditingMember({ ...editingMember, email: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                />
                <select
                  value={editingMember.domain}
                  onChange={(e) => setEditingMember({ ...editingMember, domain: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                >
                  {domains.map((domain) => (
                    <option key={domain} value={domain}>
                      {domain}
                    </option>
                  ))}
                </select>
                <select
                  value={editingMember.role}
                  onChange={(e) => setEditingMember({ ...editingMember, role: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <select
                  value={editingMember.status}
                  onChange={(e) => setEditingMember({ ...editingMember, status: e.target.value })}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-red-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={updateMember}
                  className="flex-1 bg-gradient-to-r from-red-500 to-orange-600 py-2 rounded-lg font-medium hover:from-red-600 hover:to-orange-700 transition-all"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditingMember(null)}
                  className="flex-1 bg-gray-600 py-2 rounded-lg font-medium hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard
