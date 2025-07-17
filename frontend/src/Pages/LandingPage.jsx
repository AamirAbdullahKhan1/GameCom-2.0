"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ChevronDown,
  Play,
  Users,
  Code,
  Camera,
  Palette,
  Gamepad2,
  Megaphone,
  Star,
  Calendar,
  ArrowRight,
  Trophy,
  Target,
  Zap,
  Heart,
  Award,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

import Navigation from "../components/Navigation"
import AnimatedBackground from "../components/AnimatedBackground"
import TestimonialCarousel from "../Components/TestimonialCarousel"
import TeamSection from "../Components/TeamSection"

// React Bits Components
import CountUpAnimation from "../components/ReactBits/CountUpAnimation"
import TiltCard from "../components/ReactBits/TiltCard"
import AnimatedButton from "../components/ReactBits/AnimatedButton"
import DecryptedText from "../Components/ReactBits/DecryptedText"
import GlowingCard from "../components/ReactBits/GlowingCard"
import FloatingElements from "../components/ReactBits/FloatingElements"

const LandingPage = () => {
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0)

  const domains = [
    {
      icon: Code,
      name: "Technical Domain",
      description:
        "Master cutting-edge technologies including React, Node.js, Python, AI/ML, and cloud computing through hands-on projects and industry collaborations.",
      color: "from-blue-500 to-cyan-500",
      projects: ["Web Applications", "Mobile Apps", "AI Solutions", "Cloud Systems"],
      members: 14,
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      glowColor: "blue",
    },
    {
      icon: Camera,
      name: "Media Domain",
      description:
        "Create stunning visual content with professional videography, photography, motion graphics, and post-production techniques using industry-standard tools.",
      color: "from-purple-500 to-pink-500",
      projects: ["Event Coverage", "Promotional Videos", "Motion Graphics", "Photography"],
      members: 8,
      image:
        "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      glowColor: "purple",
    },
    {
      icon: Palette,
      name: "Design Domain",
      description:
        "Craft beautiful digital experiences using UI/UX principles, graphic design, branding, and interactive prototyping with tools like Figma, Adobe Creative Suite.",
      color: "from-green-500 to-teal-500",
      projects: ["UI/UX Design", "Brand Identity", "Digital Art", "Prototypes"],
      members: 4,
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      glowColor: "green",
    },
    {
      icon: Gamepad2,
      name: "Game Development",
      description:
        "Build immersive games and interactive experiences using Unity, Unreal Engine, and custom game engines. From concept to publication on multiple platforms.",
      color: "from-orange-500 to-red-500",
      projects: ["Mobile Games", "PC Games", "VR Experiences", "Game Engines"],
      members: 7,
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      glowColor: "red",
    },
    {
      icon: Megaphone,
      name: "Public Relations",
      description:
        "Connect with industry leaders, secure partnerships, organize events, and amplify our club's impact through strategic communication and networking.",
      color: "from-indigo-500 to-purple-500",
      projects: ["Industry Events", "Partnerships", "Social Media", "Networking"],
      members: 7,
      image:
        "https://images.unsplash.com/photo-1709715357549-f2d587846ee1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      glowColor: "purple",
    },
  ]

  const featuredProjects = [
    {
      title: "Quantum Quest",
      description:
        "An immersive 3D puzzle-adventure game built with Unity, featuring quantum physics mechanics and stunning visuals.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Unity", "C#", "Blender", "Photoshop"],
      team: "Game Dev Team",
      status: "Published",
      link: "#",
    },
    {
      title: "EcoTracker App",
      description:
        "Mobile application for tracking carbon footprint with AI-powered recommendations and social features.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React Native", "Node.js", "MongoDB", "TensorFlow"],
      team: "Technical Team",
      status: "In Development",
      link: "#",
    },
    {
      title: "Campus Connect",
      description:
        "Social platform connecting SRM students with features for study groups, events, and academic resources.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Next.js", "PostgreSQL", "Redis", "AWS"],
      team: "Full Stack Team",
      status: "Beta Testing",
      link: "#",
    },
    {
      title: "AR Learning Lab",
      description:
        "Augmented reality educational platform making complex concepts interactive and engaging for students.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["ARCore", "Unity", "Firebase", "3D Modeling"],
      team: "AR/VR Team",
      status: "Prototype",
      link: "#",
    },
  ]

  const eventGallery = [
    {
      title: "GameJam 2023 Winners",
      image: "/placeholder.svg?height=300&width=400",
      description: "48-hour coding marathon with 50+ participants",
      date: "Dec 2023",
    },
    {
      title: "Tech Talk with Google",
      image: "/placeholder.svg?height=300&width=400",
      description: "Industry experts sharing latest tech trends",
      date: "Nov 2023",
    },
    {
      title: "Design Workshop",
      image: "/placeholder.svg?height=300&width=400",
      description: "Hands-on UI/UX design masterclass",
      date: "Oct 2023",
    },
    {
      title: "Hackathon Victory",
      image: "/placeholder.svg?height=300&width=400",
      description: "First place in Inter-college Hackathon",
      date: "Sep 2023",
    },
    {
      title: "Industry Visit",
      image: "/placeholder.svg?height=300&width=400",
      description: "Behind-the-scenes at leading tech companies",
      date: "Aug 2023",
    },
    {
      title: "Annual Fest",
      image: "/placeholder.svg?height=300&width=400",
      description: "GameCom's biggest celebration of the year",
      date: "Jul 2023",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Software Engineer at Google",
      year: "Alumni 2023",
      content:
        "GameCom transformed my college experience. The technical projects and mentorship I received here directly led to my dream job at Google. The community is incredible!",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Game Designer at Ubisoft",
      year: "Alumni 2022",
      content:
        "The Game Development domain at GameCom gave me hands-on experience with industry tools. I published 3 games during my time here and now work at my dream company!",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      name: "Aamir Abdullah Khan",
      role: "Current President",
      year: "3rd Year CSE-GT",
      content:
        "Leading GameCom has been the most rewarding experience. Seeing juniors grow, organizing events, and building lasting friendships - this club is truly special.",
      image: "https://imgur.com/jQrK2Nf.jpg",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "UI/UX Designer at Flipkart",
      year: "Alumni 2023",
      content:
        "The Design domain helped me build an amazing portfolio. The weekly assignments and real client projects prepared me perfectly for the industry.",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  const achievements = [
    { icon: Trophy, title: "5+ Hackathon Wins", description: "National and international recognition" },
    { icon: Star, title: "50+ Alumni Network", description: "Working in top tech companies globally" },
    { icon: Award, title: "Game Club Award", description: "SRM's interactive gaming and tech club" },
    { icon: Target, title: "40+ Projects", description: "Real-world applications and games published" },
  ]

  const stats = [
    { number: 40, label: "Active Members", icon: Users, suffix: "+" },
    { number: 30, label: "Projects Completed", icon: Code, suffix: "+" },
    { number: 3, label: "Industry Partners", icon: Zap, suffix: "+" },
    { number: 2, label: "Events This Year", icon: Calendar, suffix: "+" },
  ]

  const handleProjectNavigation = (direction, event) => {
    event.preventDefault()
    event.stopPropagation()

    if (direction === "prev") {
      setCurrentProjectSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
    } else {
      setCurrentProjectSlide((prev) => (prev + 1) % featuredProjects.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <AnimatedBackground />
      <FloatingElements count={30} />
      <Navigation />

      {/* Enhanced Hero Section with React Bits */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <TiltCard className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-6 cursor-pointer">
              <div className="w-full h-full flex items-center justify-center group">
                <img
                  src="/gamecom-logo.png"
                  alt="GameCom Logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain cursor-pointer drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </TiltCard>
          </div>

          {/* Enhanced Decrypted Title Animation - Faster */}
          <div className="relative mb-6">
            <DecryptedText
              text="GameCom"
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              delay={500}
              duration={1200}
              repeatInterval={15000}
              scrambleSpeed={40}
            />
          </div>

          <div className="text-xl sm:text-2xl md:text-3xl mb-4 text-gray-300">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              SRM's Premier
            </span>{" "}
            Game Development Club
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto px-4">
            Where Innovation Meets Gaming Excellence • Building Tomorrow's Tech Leaders
          </p>

          <p className="text-base sm:text-lg mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
            Join India's most dynamic student-led technology community. Master cutting-edge skills, build incredible
            projects, and connect with industry leaders while creating the future of interactive entertainment and
            technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4">
            <Link to="/register">
              <AnimatedButton size="lg" className="w-full sm:w-auto">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                Join Our Community
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </AnimatedButton>
            </Link>

            <AnimatedButton variant="secondary" size="lg" className="w-full sm:w-auto">
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              Watch Our Story
            </AnimatedButton>
          </div>

          {/* Enhanced Stats with Count Up Animation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
            {stats.map((stat, index) => (
              <TiltCard key={index} className="text-center group cursor-pointer">
                <GlowingCard
                  glowColor="blue"
                  className="p-4 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    <CountUpAnimation end={stat.number} suffix={stat.suffix} duration={2000} />
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Enhanced Domains Section */}
      <section id="domains" className="relative z-10 py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Domains
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your path and master the skills that will define your future in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <TiltCard key={index} className="group cursor-pointer">
                <GlowingCard
                  glowColor={domain.glowColor}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={domain.image || "/placeholder.svg"}
                      alt={domain.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${domain.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <domain.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-medium">
                          <CountUpAnimation end={domain.members} /> Members
                        </span>
                        <span className="text-sm">Active Projects</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {domain.name}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{domain.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Projects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {domain.projects.map((project, projectIndex) => (
                          <span
                            key={projectIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/domains" onClick={() => window.scrollTo(0,0)}>
                      <AnimatedButton variant="secondary" className="w-full group-hover:bg-blue-600 transition-colors">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </AnimatedButton>
                    </Link>
                  </div>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/domains" onClick={() => window.scrollTo(0,0)}>
              <AnimatedButton size="lg">
                <Target className="w-6 h-6" />
                Explore All Domains
                <ArrowRight className="w-6 h-6" />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the innovative solutions and creative projects built by our talented community
            </p>
          </div>

          <div className="relative">
            <TiltCard className="group cursor-pointer">
              <GlowingCard
                glowColor="purple"
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="relative">
                    <img
                      src={featuredProjects[currentProjectSlide].image || "/placeholder.svg"}
                      alt={featuredProjects[currentProjectSlide].title}
                      className="w-full h-64 sm:h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          featuredProjects[currentProjectSlide].status === "Published"
                            ? "bg-green-500/20 text-green-400"
                            : featuredProjects[currentProjectSlide].status === "Beta Testing"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {featuredProjects[currentProjectSlide].status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-blue-400 text-sm font-medium">
                        {featuredProjects[currentProjectSlide].team}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      {featuredProjects[currentProjectSlide].title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                      {featuredProjects[currentProjectSlide].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredProjects[currentProjectSlide].tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <AnimatedButton
                    variant="ghost"
                    size="sm"
                    onClick={(e) => handleProjectNavigation("prev", e)}
                    className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </AnimatedButton>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <AnimatedButton
                    variant="ghost"
                    size="sm"
                    onClick={(e) => handleProjectNavigation("next", e)}
                    className="bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </AnimatedButton>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {featuredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentProjectSlide ? "bg-blue-400" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </GlowingCard>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <TiltCard key={index} className="text-center group cursor-pointer">
                <GlowingCard
                  glowColor="purple"
                  className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 h-full"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Event Gallery Section */}
      {/**<section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Event Gallery
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Capturing moments from our workshops, competitions, and community gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventGallery.map((event, index) => (
              <TiltCard key={index} className="group cursor-pointer">
                <GlowingCard
                  glowColor="blue"
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                        {event.date}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold mb-1">{event.title}</h3>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                  </div>
                </GlowingCard>
              </TiltCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/coming-soon">
              <AnimatedButton size="lg">
                <Calendar className="w-6 h-6" />
                Join Our Events
                <ArrowRight className="w-6 h-6" />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>}

      {/* Enhanced Testimonials Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-green-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our members and alumni about their transformative experiences at GameCom
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Enhanced Team Section */}
      <TeamSection />

      {/* Enhanced Call to Action */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <TiltCard>
            <GlowingCard
              glowColor="blue"
              className="p-12 rounded-3xl bg-gray-800/30 backdrop-blur-sm border border-gray-700"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Level Up?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Join GameCom today and become part of SRM's most innovative tech community. Build amazing projects,
                learn cutting-edge skills, and connect with like-minded creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/register">
                  <AnimatedButton size="lg">
                    <Heart className="w-6 h-6" />
                    Join GameCom
                    <ArrowRight className="w-6 h-6" />
                  </AnimatedButton>
                </Link>
                <Link to="/coming-soon">
                  <AnimatedButton variant="secondary" size="lg">
                    <Target className="w-6 h-6" />
                    Join Our Events
                  </AnimatedButton>
                </Link>
              </div>
            </GlowingCard>
          </TiltCard>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
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
              <p className="text-gray-400 mb-4 leading-relaxed">
                Empowering the next generation of tech innovators through hands-on learning, collaborative projects, and
                industry connections.
              </p>
              <div className="flex space-x-4">
                <AnimatedButton variant="ghost" size="sm">
                  <Github className="w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton variant="ghost" size="sm">
                  <Instagram className="w-5 h-5" />
                </AnimatedButton>
                <AnimatedButton variant="ghost" size="sm">
                  <Twitter className="w-5 h-5" />
                </AnimatedButton>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/#domains" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Our Domains
                </Link>
                <Link to="/#projects" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Projects
                </Link>
                <Link to="/#team" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Team
                </Link>
                <Link to="/register" className="block text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Join Us
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">gamecomsrm25@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+91 7397711345</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">SRM Institute, Ramapuram</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 GameCom - SRM Institute. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2">Built with ❤️ by GameCom's President</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
