"use client"

import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Code,
  Camera,
  Palette,
  Gamepad2,
  Megaphone,
  Users,
  Calendar,
  Trophy,
  Target,
  Briefcase,
  BookOpen,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react"

import Navigation from "../components/Navigation"
import TiltCard from "../components/ReactBits/TiltCard"
import AnimatedButton from "../components/ReactBits/AnimatedButton"
import GlowingCard from "../components/ReactBits/GlowingCard"
import CountUpAnimation from "../components/ReactBits/CountUpAnimation"
import EnhancedFloatingElements from "../Components/ReactBits/EnhancedFloatingElements"

const DomainsPage = () => {
  const domains = [
    {
      id: "technical",
      icon: Code,
      name: "Technical Domain",
      description: "Master cutting-edge technologies and build the future of software development",
      color: "from-blue-500 to-cyan-500",
      glowColor: "blue",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: 14,
      projects: 5,
      events: 2,
      skills: [
        "Full-Stack Web Development",
        "Mobile App Development",
        "Machine Learning & AI",
        "Cloud Computing & DevOps",
        "Blockchain Technology",
        "Data Science & Analytics",
        "Cybersecurity",
        "API Development",
      ],
      technologies: [
        "React",
        "Node.js",
        "Python",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes",
        "TensorFlow",
        "PyTorch",
        "Flutter",
        "React Native",
      ],
      careers: [
        "Software Engineer",
        "Full-Stack Developer",
        "Data Scientist",
        "ML Engineer",
        "DevOps Engineer",
        "Cloud Architect",
        "Product Manager",
        "Technical Lead",
      ],
      achievements: ["SIH'23 Runner Ups", "Published 2 Research Papers", "Deployed 16+ Production Applications"],
      upcomingEvents: [{ name: "Coming Soon", date: "Tentative", type: "Workshop" }],
    },
    {
      id: "media",
      icon: Camera,
      name: "Media Domain",
      description: "Create stunning visual content and tell compelling stories through multimedia",
      color: "from-purple-500 to-pink-500",
      glowColor: "purple",
      image:
        "https://images.unsplash.com/photo-1543242594-c8bae8b9e708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: 8,
      projects: 10,
      events: 0,
      skills: [
        "Professional Videography",
        "Photography & Photo Editing",
        "Motion Graphics & Animation",
        "Video Editing & Post-Production",
        "Live Streaming & Broadcasting",
        "Drone Photography",
        "Documentary Production",
        "Social Media Content Creation",
      ],
      technologies: [
        "Adobe Premiere Pro",
        "After Effects",
        "Photoshop",
        "Lightroom",
        "Final Cut Pro",
        "DaVinci Resolve",
        "Cinema 4D",
        "Blender",
        "OBS Studio",
        "Canva",
        "Figma",
      ],
      careers: [
        "Video Editor",
        "Content Creator",
        "Cinematographer",
        "Motion Graphics Designer",
        "Social Media Manager",
        "Documentary Filmmaker",
        "Brand Photographer",
        "Creative Director",
      ],
      achievements: ["Created Content for 3+ Brands"],
      upcomingEvents: [{ name: "Coming Soon", date: "Tentative", type: "Workshop" }],
    },
    {
      id: "design",
      icon: Palette,
      name: "Design Domain",
      description: "Craft beautiful digital experiences and innovative design solutions",
      color: "from-green-500 to-teal-500",
      glowColor: "green",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: 5,
      projects: 20,
      events: 0,
      skills: [
        "UI/UX Design",
        "Graphic Design",
        "Brand Identity Design",
        "Web Design",
        "Mobile App Design",
        "Prototyping & Wireframing",
        "User Research",
        "Design Systems",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Principle",
        "Framer",
        "Webflow",
        "Canva",
      ],
      careers: [
        "UI/UX Designer",
        "Product Designer",
        "Graphic Designer",
        "Brand Designer",
        "Web Designer",
        "Design Lead",
        "Creative Director",
        "Design Researcher",
      ],
      achievements: ["Designed 2 Mobile Applications", "Created Brand Identity for 2 Startups"],
      upcomingEvents: [{ name: "Coming Soon", date: "Tentative", type: "Mentorship" }],
    },
    {
      id: "gamedev",
      icon: Gamepad2,
      name: "Game Development",
      description: "Build immersive games and interactive experiences across multiple platforms",
      color: "from-orange-500 to-red-500",
      glowColor: "red",
      image:
        "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: 8,
      projects: 5,
      events: 2,
      skills: [
        "Game Programming",
        "3D Modeling & Animation",
        "Game Design & Mechanics",
        "Level Design",
        "VR/AR Development",
        "Mobile Game Development",
        "Game Engine Development",
        "Game Testing & QA",
      ],
      technologies: [
        "Unity",
        "Unreal Engine",
        "C#",
        "C++",
        "Blender",
        "Maya",
        "Substance Painter",
        "Photoshop",
        "Godot",
        "GameMaker Studio",
        "Construct 3",
      ],
      careers: [
        "Game Developer",
        "Game Designer",
        "3D Artist",
        "Game Programmer",
        "Level Designer",
        "VR/AR Developer",
        "Game Producer",
        "Technical Artist",
      ],
      achievements: [
        "Published 2 Games on App Stores",
        "Won 2 Game Jam Competitions",
        "Developed VR Experience for Education",
      ],
      upcomingEvents: [{ name: "Coming Soon", date: "Tentative", type: "Seminar" }],
    },
    {
      id: "pr",
      icon: Megaphone,
      name: "Public Relations",
      description: "Connect with industry leaders and amplify our club's impact through strategic communication",
      color: "from-indigo-500 to-purple-500",
      glowColor: "purple",
      image:
        "https://images.unsplash.com/photo-1709715357549-f2d587846ee1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      members: 7,
      projects: 3,
      events: 1,
      skills: [
        "Event Management",
        "Partnership Development",
        "Social Media Strategy",
        "Content Marketing",
        "Public Speaking",
        "Networking",
        "Brand Management",
        "Community Building",
      ],
      technologies: [
        "LinkedIn",
        "Twitter",
        "Instagram",
        "Facebook",
        "Mailchimp",
        "Hootsuite",
        "Canva",
        "Google Analytics",
        "Eventbrite",
        "Zoom",
        "Discord",
      ],
      careers: [
        "Public Relations Manager",
        "Event Coordinator",
        "Social Media Manager",
        "Marketing Specialist",
        "Community Manager",
        "Brand Manager",
        "Communications Lead",
        "Partnership Manager",
      ],
      achievements: ["Organized 5+ Successful Events", "Built Network of 3+ Industry Partners"],
      upcomingEvents: [{ name: "Coming Soon", date: "Tentative", type: "Networking" }],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <EnhancedFloatingElements count={20} />
      <Navigation />

      {/* Header Section */}
      <section className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <AnimatedButton variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </AnimatedButton>
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Domains
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover your passion and build expertise in cutting-edge technologies. Each domain offers specialized
              training, real-world projects, and direct pathways to exciting career opportunities.
            </p>
          </div>

          {/* Domain Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <TiltCard className="text-center cursor-pointer">
              <GlowingCard
                glowColor="blue"
                className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border cursor-pointer border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  <CountUpAnimation end={35} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-400 text-sm">Active Members</div>
              </GlowingCard>
            </TiltCard>

            <TiltCard className="text-center cursor-pointer">
              <GlowingCard
                glowColor="green"
                className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  <CountUpAnimation end={12} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </GlowingCard>
            </TiltCard>

            <TiltCard className="text-center cursor-pointer">
              <GlowingCard
                glowColor="purple"
                className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  <CountUpAnimation end={6} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-400 text-sm">Events Organized</div>
              </GlowingCard>
            </TiltCard>

            <TiltCard className="text-center cursor-pointer">
              <GlowingCard
                glowColor="yellow"
                className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  <CountUpAnimation end={5} suffix="+" duration={2000} />
                </div>
                <div className="text-gray-400 text-sm">Awards Won</div>
              </GlowingCard>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Domains Detail Section */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {domains.map((domain, index) => (
            <div
              key={domain.id}
              className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex gap-12 items-center`}
            >
              {/* Domain Image */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <TiltCard>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={domain.image || "/placeholder.svg"}
                      alt={domain.name}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-xl flex items-center justify-center`}
                      >
                        <domain.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{domain.name}</h3>
                        <p className="text-gray-300">
                          <CountUpAnimation end={domain.members} /> Members • <CountUpAnimation end={domain.projects} />{" "}
                          Projects
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Domain Content */}
              <div className="lg:w-1/2">
                <GlowingCard
                  glowColor={domain.glowColor}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8"
                >
                  <h2 className="text-3xl font-bold mb-4 text-white">{domain.name}</h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{domain.description}</p>

                  {/* Skills Section */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      Skills You'll Learn
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {domain.skills.slice(0, 6).map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {domain.technologies.slice(0, 8).map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Career Opportunities */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-green-400" />
                      Career Opportunities
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {domain.careers.slice(0, 6).map((career, careerIndex) => (
                        <div key={careerIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {career}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      Recent Achievements
                    </h4>
                    <div className="space-y-2">
                      {domain.achievements.slice(0, 3).map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <Trophy className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      Upcoming Events
                    </h4>
                    <div className="space-y-2">
                      {domain.upcomingEvents.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className="flex items-center justify-between bg-gray-700/30 rounded-lg p-3"
                        >
                          <div>
                            <div className="text-white font-medium">{event.name}</div>
                            <div className="text-gray-400 text-sm">{event.type}</div>
                          </div>
                          <div className="text-blue-400 text-sm font-medium">{event.date}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/register">
                    <AnimatedButton className="w-full">
                      <Heart className="w-5 h-5" />
                      Join {domain.name}
                      <ArrowRight className="w-5 h-5" />
                    </AnimatedButton>
                  </Link>
                </GlowingCard>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Choose your domain and begin building the skills that will define your future. Join a community of
            passionate learners and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/register" onClick={() => window.scrollTo(0,0)}>
              <AnimatedButton size="lg">
                <Heart className="w-6 h-6" />
                Join GameCom Today
              </AnimatedButton>
            </Link>
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <AnimatedButton variant="secondary" size="lg">
                <ArrowLeft className="w-6 h-6" />
                Back to Home
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <Linkedin className="w-5 h-5" />
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
                  <span className="text-sm">contact@gamecom.srm.edu</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="text-sm">SRM Institute, Kattankulathur</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 GameCom - SRM Institute. All rights reserved.</p>
            <p className="text-gray-600 text-xs mt-2">Built with ❤️ by GameCom Technical Team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DomainsPage
