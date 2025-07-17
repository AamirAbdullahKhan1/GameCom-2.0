"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, Users, Trophy, Clock, MapPin, Star, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

const EventRegistrationPage = () => {
  const [selectedEvent, setSelectedEvent] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    studentId: "",
    year: "",
    branch: "",
    teamName: "",
    teamMembers: "",
    experience: "",
    expectations: "",
    dietaryRestrictions: "",
    emergencyContact: "",
  })

  const events = [
    {
      id: "gamejam2024",
      name: "GameJam 2024",
      date: "March 15-17, 2024",
      duration: "48 hours",
      location: "SRM Main Campus",
      description: "48-hour game development marathon where teams compete to create innovative games from scratch.",
      maxTeamSize: 4,
      registrationFee: "Free",
      prizes: "₹50,000 total prize pool",
      difficulty: "Intermediate",
      requirements: ["Basic programming knowledge", "Game development interest", "Team collaboration skills"],
      schedule: [
        { time: "Day 1 - 6:00 PM", activity: "Opening Ceremony & Theme Reveal" },
        { time: "Day 1 - 7:00 PM", activity: "Development Begins" },
        { time: "Day 2 - 12:00 PM", activity: "Mid-point Check-in" },
        { time: "Day 3 - 6:00 PM", activity: "Submission Deadline" },
        { time: "Day 3 - 8:00 PM", activity: "Judging & Awards" },
      ],
      featured: true,
    },
    {
      id: "techseries",
      name: "Tech Talk Series",
      date: "Every Friday",
      duration: "2 hours",
      location: "Virtual/Hybrid",
      description: "Weekly sessions featuring industry experts sharing insights on latest technologies and trends.",
      maxTeamSize: 1,
      registrationFee: "Free",
      prizes: "Certificates & Networking",
      difficulty: "Beginner",
      requirements: ["Interest in technology", "Basic understanding of programming"],
      schedule: [
        { time: "6:00 PM", activity: "Welcome & Introductions" },
        { time: "6:15 PM", activity: "Expert Talk" },
        { time: "7:15 PM", activity: "Q&A Session" },
        { time: "7:45 PM", activity: "Networking" },
      ],
      featured: false,
    },
    {
      id: "designworkshop",
      name: "Design Workshop",
      date: "March 28, 2024",
      duration: "6 hours",
      location: "Design Lab, SRM",
      description: "Hands-on workshop covering UI/UX design principles and tools for game development.",
      maxTeamSize: 1,
      registrationFee: "₹200",
      prizes: "Design Tools License",
      difficulty: "Beginner",
      requirements: ["Interest in design", "Laptop with design software"],
      schedule: [
        { time: "9:00 AM", activity: "Registration & Welcome" },
        { time: "9:30 AM", activity: "UI/UX Fundamentals" },
        { time: "12:00 PM", activity: "Lunch Break" },
        { time: "1:00 PM", activity: "Hands-on Design Session" },
        { time: "4:00 PM", activity: "Project Presentations" },
      ],
      featured: true,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!selectedEvent) {
      alert("Please select an event to register for")
      return
    }

    // Here you would typically send the data to your backend
    alert("Event registration submitted successfully! You will receive a confirmation email soon.")
    console.log("Event registration data:", { event: selectedEvent, ...formData })
  }

  const selectedEventData = events.find((event) => event.id === selectedEvent)

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400"
      case "Advanced":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mr-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/gamecom-logo.png" alt="GameCom Logo" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-xl font-bold">GameCom</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-300">Event Registration</span>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Register for Events</h1>
          <p className="text-gray-400 text-lg">Join our exciting events and enhance your skills</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Event Selection */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Available Events
              </h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedEvent === event.id
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-gray-600 bg-gray-700/30 hover:border-gray-500"
                    }`}
                    onClick={() => setSelectedEvent(event.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">{event.name}</h3>
                      {event.featured && <Star className="w-4 h-4 text-yellow-400 fill-current" />}
                    </div>
                    <div className="space-y-1 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {event.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {event.location}
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}
                      >
                        {event.difficulty}
                      </span>
                      <span className="text-xs text-green-400 font-medium">{event.registrationFee}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Details & Registration Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Details */}
            {selectedEventData && (
              <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedEventData.name}</h2>
                    <p className="text-gray-400">{selectedEventData.description}</p>
                  </div>
                  {selectedEventData.featured && (
                    <div className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <div>
                        <div className="font-medium">Date & Duration</div>
                        <div className="text-sm text-gray-400">
                          {selectedEventData.date} • {selectedEventData.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="font-medium">Location</div>
                        <div className="text-sm text-gray-400">{selectedEventData.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-400" />
                      <div>
                        <div className="font-medium">Team Size</div>
                        <div className="text-sm text-gray-400">
                          Max {selectedEventData.maxTeamSize} member{selectedEventData.maxTeamSize > 1 ? "s" : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-orange-400" />
                      <div>
                        <div className="font-medium">Prizes</div>
                        <div className="text-sm text-gray-400">{selectedEventData.prizes}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="font-medium">Registration Fee</div>
                        <div className="text-sm text-gray-400">{selectedEventData.registrationFee}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedEventData.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule */}
                <div>
                  <h3 className="font-semibold mb-3">Event Schedule</h3>
                  <div className="space-y-3">
                    {selectedEventData.schedule.map((item, index) => (
                      <div key={index} className="flex gap-4 p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-sm font-medium text-blue-400 min-w-[120px]">{item.time}</div>
                        <div className="text-sm text-gray-300">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Registration Form */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6">
              <h2 className="text-xl font-semibold mb-6">Registration Form</h2>

              {!selectedEvent && (
                <div className="text-center py-8 text-gray-400">
                  <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Please select an event to register</p>
                </div>
              )}

              {selectedEvent && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-semibold mb-4 text-blue-400">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                      />
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Student ID *"
                        value={formData.studentId}
                        onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                        className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                      />
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                      >
                        <option value="">Select Year *</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                      <input
                        type="text"
                        placeholder="Branch/Department *"
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Team Information (if team event) */}
                  {selectedEventData && selectedEventData.maxTeamSize > 1 && (
                    <div>
                      <h3 className="font-semibold mb-4 text-purple-400">Team Information</h3>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Team Name"
                          value={formData.teamName}
                          onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                        <textarea
                          placeholder={`Team Members (List names and contact info, max ${selectedEventData.maxTeamSize} members including you)`}
                          value={formData.teamMembers}
                          onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  )}

                  {/* Additional Information */}
                  <div>
                    <h3 className="font-semibold mb-4 text-green-400">Additional Information</h3>
                    <div className="space-y-4">
                      <textarea
                        placeholder="Previous Experience (Optional)"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <textarea
                        placeholder="What do you expect to learn from this event? (Optional)"
                        value={formData.expectations}
                        onChange={(e) => setFormData({ ...formData, expectations: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Dietary Restrictions/Allergies (Optional)"
                        value={formData.dietaryRestrictions}
                        onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Emergency Contact (Name & Phone) *"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Register for {selectedEventData?.name}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventRegistrationPage
