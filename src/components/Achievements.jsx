import React, { useState } from 'react'

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const achievements = [
    {
        title: "DevFest Goa 2025",
        subtitle: "Google Developer Groups (GDG) Goa | Tech Community Event",
        achievements: [
          "Participated in DevFest Goa 2025 organized by Google Developer Groups (GDG) Goa",
          "Attended inspiring tech talks, hands-on workshops, and interactive networking sessions with developers and industry experts",
          "Explored cutting-edge topics in AI, Cloud Computing, and Web Development",
          "Gained valuable insights into emerging technologies and their practical applications in the modern tech landscape"
        ],
        technologies: ["Google Cloud", "AI", "Web Development", "Networking", "Innovation", "Technology Trends"],
        certificate: "/assets/Devfest.jpg"
      },      
   
    {
        title: "Google Cloud Agentic AI Day 2025",
        subtitle: "Powered by Hack2Skill | AI Innovation Event",
        achievements: [
          "Successfully participated in the Google Cloud Agentic AI Day powered by Hack2Skill",
          "Explored the next generation of intelligent AI agents and their real-world applications",
          "Contributed innovative ideas and connected with a community of changemakers focused on impactful AI-driven solutions",
          "Gained valuable insights into building and deploying AI systems for future technological advancements"
        ],
        technologies: ["Google Cloud", "Artificial Intelligence", "Agentic AI", "Machine Learning", "Innovation"],
        certificate: "/assets/Agentic.jpg"
      },      
    
    {
        title: "JavaScript Certification",
        subtitle: "CodinGame by CoderPad | Technical Assessment Platform",
        achievements: [
          "Successfully earned the JavaScript Certification from CodinGame by CoderPad, validating proficiency in modern JavaScript development and problem-solving",
          "Demonstrated mastery over core JavaScript concepts including syntax, data structures, and control flow",
          "Applied knowledge to real-world coding challenges involving asynchronous programming, DOM manipulation, and algorithm optimization",
          "Recognized for strong analytical, debugging, and coding skills essential for front-end and back-end web development"
        ],
        technologies: ["JavaScript", "Node.js", "Async Programming", "Problem Solving", "Web Development", "Front-End", "Back-End"],
        certificate: "/assets/js.jpg"
      },      
    {
        title: "Full Stack Development Internship",
        subtitle: "Yhills | Minor and Major Project Completion",
        achievements: [
          "Successfully completed an internship in Full Stack Development at Yhills",
          "Developed and deployed both minor and major projects using the MERN stack",
          "Gained practical experience in building dynamic and responsive web applications",
          "Enhanced coding, debugging, and project management skills through real-world projects"
        ],
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack", "JavaScript", "Web Development"],
        certificate: "/assets/yhills.jpg"
      },      
    {
        title: "Cybersecurity Awareness: Cybersecurity Terminology",
        subtitle: "LinkedIn Learning | Information Security Awareness",
        achievements: [
          "Successfully completed the LinkedIn Learning course on Cybersecurity Awareness: Cybersecurity Terminology",
          "Gained foundational understanding of key cybersecurity concepts, terms, and best practices",
          "Enhanced awareness of information security principles and real-world applications",
          "Developed a strong base for pursuing advanced cybersecurity and ethical hacking courses"
        ],
        technologies: ["Cybersecurity", "Information Security Awareness", "Network Security", "Data Protection", "Risk Management"],
        certificate: "/assets/cyber.jpg"
      },      
    {
        title: "Ethical Hacking Essentials (EHE) Certification",
        subtitle: "EC-Council | Cybersecurity Fundamentals Program",
        achievements: [
          "Successfully earned the Ethical Hacking Essentials (EHE) certification from EC-Council",
          "Developed a solid understanding of ethical hacking concepts, tools, and frameworks",
          "Learned techniques for identifying vulnerabilities and securing network infrastructures",
          "Enhanced practical skills in cybersecurity awareness and ethical penetration testing"
        ],
        technologies: ["Ethical Hacking", "Cybersecurity", "Penetration Testing", "Network Security", "Information Security"],
        certificate: "/assets/ec.jpg"
      },      
      {
        title: "Introduction to Ethical Hacking",
        subtitle: "Great Learning | Online Certification Course",
        achievements: [
          "Successfully completed the Introduction to Ethical Hacking course offered by Great Learning",
          "Gained foundational knowledge of cybersecurity principles and ethical hacking methodologies",
          "Explored various security threats, vulnerabilities, and preventive techniques",
          "Enhanced understanding of real-world applications in ethical hacking and network defense"
        ],
        technologies: ["Ethical Hacking", "Cybersecurity", "Network Security", "Information Protection", "Vulnerability Analysis"],
        certificate: "/assets/ethical.jpg"
      }, 
      {
        title: "3-Day Student Development Program",
        subtitle: "Sanjeevan Engineering and Technology Institute, Panhala",
        achievements: [
          "Successfully completed a 3-day Student Development Program focused on skill enhancement and career growth",
          "Gained hands-on exposure to technical and professional development sessions",
          "Learned essential communication, teamwork, and leadership skills for future career opportunities",
          "Engaged in interactive workshops and activities promoting holistic student development"
        ],
        technologies: ["Leadership", "Communication", "Teamwork", "Professional Development", "Skill Enhancement"],
        certificate: "/assets/math.jpg"
      },
  ]

  const stats = [
    { number: "10+", label: "Hackathons" },
    { number: "3", label: "Wins" },
    { number: "200+", label: "Hours" },
    { number: "15+", label: "Projects" }
  ]

  const openCertificate = (certificateUrl) => {
    setSelectedCertificate(certificateUrl)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  return (
    <>
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col hover:scale-105 transition-transform duration-300"
              >
                {/* Certificate Image */}
                {achievement.certificate && (
                  <div 
                    className="mb-4 rounded-lg overflow-hidden cursor-pointer group"
                    onClick={() => openCertificate(achievement.certificate)}
                  >
                    <div className="relative">
                      <img 
                        src={achievement.certificate} 
                        alt={`${achievement.title} Certificate`}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                          Click to View Certificate
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-1">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{achievement.subtitle}</p>
                <ul className="text-gray-300 mb-4 space-y-2 list-none flex-1">
                  {achievement.achievements.map((item, idx) => (
                    <li key={idx}>➔ {item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Popup Modal - Centered Certificate Image */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertificate}
        >
          <div 
            className="relative flex items-center justify-center w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Cross) */}
            <button
              onClick={closeCertificate}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 text-2xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
            >
              ✕
            </button>
            
            {/* Centered Certificate Image */}
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src={selectedCertificate} 
                alt="Certificate"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Achievements