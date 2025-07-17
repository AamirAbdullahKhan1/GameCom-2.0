"use client"
import { Crown, Linkedin } from "lucide-react"

const TeamSection = () => {
  const executiveTeam = [
    {
      name: "Aamir Abdullah Khan",
      role: "President",
      image: "https://imgur.com/jQrK2Nf.jpg",
      domain: "Leadership",
      linkedin: "https://www.linkedin.com/in/aamir-abdullah-khan/",
      bio: "Visionary leader driving GameCom's mission to innovate, empower, and revolutionize the intersection of gaming and technology.",
    },
    {
      name: "Swethaa",
      role: "Vice President",
      image: "https://imgur.com/mpqlDzy.jpg",
      domain: "Leadership",
      linkedin: "https://www.linkedin.com/in/j-s-4819682b0/",
      bio: "Strategic collaborator and dynamic leader, ensuring the smooth execution of GameCom's initiatives and fostering a culture of growth and excellence.",
      position: "center calc(0% - 0px)",
    },
    {
      name: "Adityanshu Padhy",
      role: "Director",
      image: "https://imgur.com/b2h3VU4.jpg",
      domain: "Management",
      linkedin: "https://www.linkedin.com/in/adityanshu-padhy-672945293/",
      bio: "The guiding force behind GameCom's strategic direction, bridging creative vision with operational execution for impactful outcomes.",
      position: "center calc(0% - 0px)",
    },
    {
      name: "Rajeev Suri Anand",
      role: "Administrator",
      image: "https://imgur.com/tCkd7Jw.jpg",
      domain: "Management",
      linkedin: "https://www.linkedin.com/in/rajeev-suri-anand-73b3a3296/",
      bio: "The organizational backbone, ensuring efficiency, coordination, and a seamless foundation for the club's operations and success.",
    },
  ]

  const domainLeads = [
    {
      name: "Kanishak Bishnoi",
      role: "Technical Lead",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Technical",
      linkedin: "https://linkedin.com/in/vikram-shah",
      bio: "Innovative problem solver and tech guru, spearheading GameCom's technical endeavors and empowering members with cutting-edge knowledge.",
    },
    {
      name: "Abhinav Pillai",
      role: "Design Lead",
      image: "https://live.staticflickr.com/65535/54652218178_cc3d0b73b0_z.jpg",
      domain: "Design",
      linkedin: "https://www.linkedin.com/in/abhinav-pillai-137a52295/",
      bio: "Creative visionary crafting GameCom's identity through impactful designs, blending aesthetics with purpose to captivate and inspire.",
    },
    {
      name: "Vignesh AS",
      role: "Head Of Media",
      image: "https://live.staticflickr.com/65535/54652216224_28033fba00_z.jpg",
      domain: "Media",
      linkedin: "https://www.linkedin.com/in/a-s-vignesh-2083172a6/",
      bio: "Storyteller extraordinaire, capturing and curating GameCom's journey through compelling media that resonates and inspires.",
    },
    {
      name: "Vansh Jain",
      role: "Game Dev Lead",
      image: "/placeholder.svg?height=150&width=150",
      domain: "Game Dev",
      linkedin: "https://www.linkedin.com/in/vansh-jain-645b67292/",
      bio: "Passionate innovator and gaming expert, leading GameCom's efforts in creating immersive gaming experiences and empowering future developers.",
    },
    {
      name: "Hemantheshwar Reddy",
      role: "Creative Videographer",
      image: "https://live.staticflickr.com/65535/54652301060_537fdf91c2_z.jpg",
      domain: "Media",
      linkedin: "https://www.linkedin.com/in/hemantheswar-reddy-nagella-6b98162a5/",
      bio: "Visual storyteller, translating ideas into dynamic videos that showcase the creativity and innovation driving GameCom forward.",
    },
    {
      name: "Somebody",
      role: "Public Relations Lead",
      image: "/placeholder.svg?height=150&width=150",
      domain: "PR",
      linkedin: "https://linkedin.com/in/divya-sharma",
      bio: "Master communicator and strategist, building GameCom's public image, fostering connections, and amplifying its voice across communities.",
    },
  ]

  const handleLinkedInClick = (linkedinUrl) => {
    window.open(linkedinUrl, "_blank", "noopener,noreferrer")
  }

  const TeamMemberCard = ({ member, index }) => (
    <div
      key={index}
      className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 text-center border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
    >
      <div className="relative mb-4">
        <div className="relative cursor-pointer" onClick={() => handleLinkedInClick(member.linkedin)}>
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 border-blue-400/50 group-hover:border-blue-400 transition-all duration-300 object-cover"
            style={{ objectPosition: member.position }}
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">
        {member.name}
      </h3>
      <p className="text-blue-400 font-medium mb-2 text-sm sm:text-base">{member.role}</p>
      <span className="inline-block px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs sm:text-sm mb-3">
        {member.domain}
      </span>

      {/* Bio text */}
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed opacity-100 transition-opacity duration-300">
        {member.bio}
      </p>

      {/* LinkedIn button */}
      <button
        onClick={() => handleLinkedInClick(member.linkedin)}
        className="mt-3 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-[16px] opacity-100 duration-300"
      >
        <Linkedin className="w-4 h-4" />
        Connect
      </button>
    </div>
  )

  return (
    <section id="team" className="relative z-10 py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            The passionate leaders and innovators driving GameCom's mission forward
          </p>
        </div>

        {/* Executive Team */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Executive Leadership</h3>
            <p className="text-gray-400">The core leadership team steering GameCom's vision and strategy</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {executiveTeam.map((member, index) => (
              <TeamMemberCard key={`exec-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Domain Leads */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Domain Leaders</h3>
            <p className="text-gray-400">
              Specialized leads driving excellence across all technical and creative domains
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {domainLeads.map((member, index) => (
              <TeamMemberCard key={`domain-${index}`} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
