"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, Star, Zap, Heart, Bell, Mail, CheckCircle, Sparkles, Rocket, Users } from "lucide-react"

import Navigation from "../components/Navigation"
import TiltCard from "../components/ReactBits/TiltCard"
import AnimatedButton from "../components/ReactBits/AnimatedButton"
import GlowingCard from "../components/ReactBits/GlowingCard"
import CountUpAnimation from "../components/ReactBits/CountUpAnimation"
import FloatingElements from "../components/ReactBits/FloatingElements"

const ComingSoonPage = () => {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Countdown timer (example: 30 days from now)
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const upcomingFeatures = [
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with industry professionals and fellow students",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Hackathons",
      description: "48-hour coding marathons with exciting prizes",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Tech Talks",
      description: "Learn from experts at leading tech companies",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Workshops",
      description: "Hands-on learning sessions across all domains",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <FloatingElements count={25} />
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="absolute top-24 left-4">
            <Link to="/">
              <AnimatedButton variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </AnimatedButton>
            </Link>
          </div>

          {/* Main Content */}
          <TiltCard className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <div className="relative">
                <Calendar className="w-24 h-24 text-blue-400 animate-pulse" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </TiltCard>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Events Coming Soon
          </h1>

          <p className="text-xl sm:text-2xl mb-4 text-gray-300">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              GameCom Events
            </span>{" "}
            are currently on hold
          </p>

          <p className="text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're working hard to bring you amazing events, workshops, and networking opportunities. Stay tuned for
            updates on our upcoming tech talks, hackathons, and hands-on learning sessions!
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">Expected Launch In</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <TiltCard key={index} className="text-center">
                  <GlowingCard
                    glowColor="blue"
                    className="p-4 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700"
                  >
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                      <CountUpAnimation end={item.value} duration={1000} />
                    </div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </GlowingCard>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Email Subscription */}
          <div className="mb-12">
            <TiltCard>
              <GlowingCard
                glowColor="purple"
                className="p-8 rounded-3xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 max-w-md mx-auto"
              >
                <div className="flex items-center justify-center mb-4">
                  <Bell className="w-8 h-8 text-purple-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Get Notified</h3>
                </div>
                <p className="text-gray-400 mb-6 text-sm">Be the first to know when our events go live!</p>

                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                        required
                      />
                    </div>
                    <AnimatedButton type="submit" className="w-full">
                      <Bell className="w-5 h-5" />
                      Notify Me
                    </AnimatedButton>
                  </form>
                ) : (
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <p className="text-green-400 font-medium">Thanks! We'll notify you soon.</p>
                  </div>
                )}
              </GlowingCard>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What to Expect
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              When our events launch, you'll have access to incredible learning and networking opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <TiltCard key={index} className="group cursor-pointer">
                <GlowingCard
                  glowColor={
                    feature.color.includes("blue")
                      ? "blue"
                      : feature.color.includes("purple")
                        ? "purple"
                        : feature.color.includes("green")
                          ? "green"
                          : "red"
                  }
                  className="p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 h-full"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stay Connected
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            While you wait for events, join our community and start building your skills in our various domains
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register">
              <AnimatedButton size="lg">
                <Heart className="w-6 h-6" />
                Join GameCom
              </AnimatedButton>
            </Link>
            <Link to="/domains">
              <AnimatedButton variant="secondary" size="lg">
                <Rocket className="w-6 h-6" />
                Explore Domains
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TiltCard className="w-12 h-12">
                <div className="w-full h-full flex items-center justify-center">
                  <img src="/gamecom-logo.png" alt="GameCom Logo" className="w-10 h-10 object-contain" />
                </div>
              </TiltCard>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  GameCom
                </span>
                <div className="text-xs text-gray-400">SRM Institute of Science and Technology</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">© 2024 GameCom - SRM Institute. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2">Built with ❤️ by GameCom Technical Team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ComingSoonPage
