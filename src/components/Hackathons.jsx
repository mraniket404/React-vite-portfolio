import React, { useState } from 'react'

const Hackathons = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const hackathons = [
    {
      title: "Smart India Hackathon (SIH) Internal Round 2025 - First Prize Winner",
      subtitle: "Sanjeevan Engineering and Technology Institute, Panhala | Team SGI Hunters",
      description: "Won First Prize in the Smart India Hackathon (SIH) Internal Round 2025 at Sanjeevan Engineering and Technology Institute, Panhala. The journey was filled with brainstorming, teamwork, and innovation — transforming creative ideas into impactful solutions. Grateful to Prof. Rahul Nejkar (HOD, CSE Department) for his continuous support and mentorship throughout the event.",
      certificate: "/assets/SIH.jpg",
      technologies: ["MERN Stack", "AI Integration", "IoT", "Problem Solving", "Innovation"]
    },    
    {
      title: "BuildVerse 2025",
      subtitle: "Scaler School of Technology | 24-hour Hackathon",
      description: "Built a smart healthcare web app in 24 hours implementing OCR for report scanning and AI for hospital recommendations.",
      certificate: "/assets/buildverse.jpg",
      technologies: ["MERN Stack", "JavaScript", "Firestore", "Bootstrap 5"]
    },
    
    {
      title: "EcoCart - Sustainable Shopping Assistant",
      subtitle: "Prabal National Hackathon 2025 | Finalist Round",
      description: "Developed a green product recommendation web app with eco-badge ratings and Firebase authentication.",
      certificate: "/assets/prabal.jpg",
      technologies: ["React", "Node.js", "Firebase Auth", "Bootstrap", "UI/UX"]
    },
    {
      title: "Algoverse 2025",
      subtitle: "HackWithIndia IGDTUW | National-Level Hackathon",
      description: "Participated enthusiastically in Algoverse 2025, an innovative hackathon organized by HackWithIndia IGDTUW, showcasing creativity, dedication, and collaborative spirit in building tech-driven solutions.",
      certificate: "/assets/Algoverse.jpg",
      technologies: ["MERN Stack", "AI Integration", "Cloud Deployment", "Bootstrap 5"]
    },
    {
      title: "Adobe India Hackathon 2025",
      subtitle: "Team SGI Hunters | Sanjeevan Group of Institutes, Panhala",
      description: "Participated in Round 1 (Online MCQ + Coding) of the Adobe India Hackathon 2025. Gained valuable experience in problem-solving, coding, and real-time challenge environments while representing Team SGI Hunters. The event enhanced my confidence and passion for continuous learning in technology.",
      certificate: "/assets/adobe.jpg",
      technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      title: "Bharatiya Antariksh Hackathon 2025",
      subtitle: "ISRO (Indian Space Research Organisation) | Hack2Skill Platform",
      description: "Received a Certificate of Acknowledgement from ISRO for successfully submitting an innovative idea to the Bharatiya Antariksh Hackathon 2025. Explored real-world challenges in space and technology, contributing towards India’s vision in space innovation and advanced research.",
      certificate: "/assets/isro.jpg",
      technologies: ["Satellite Imaging", "AI-based Analysis", "Python", "Remote Sensing"]
    },
    {
      title: "Code Cubicle 5.0 Hackathon 2025",
      subtitle: "Organized by Geek Room | Online Round (14th September 2025)",
      description: "Participated in the Code Cubicle 5.0 Hackathon organized by Geek Room and received a Certificate of Participation for presenting innovative ideas during the online round. The event provided an incredible opportunity to brainstorm, collaborate, and explore creative tech solutions alongside passionate developers. Each challenge enhanced my problem-solving abilities and inspired me to keep building impactful projects. Special thanks to the organizers — Pratham Batra, Arnav Gupta, and Manas Chopra — for hosting such an inspiring hackathon experience.",
      certificate: "/assets/cubic.jpg",
      technologies: ["MERN Stack", "Innovation", "Problem Solving", "Collaboration", "Creative Thinking"]
    },
    
  ]

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate)
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  return (
    <>
      <section id="hackathons" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Hackathons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col hover:scale-105 transition-transform duration-300"
              >
                {/* Certificate Image - Clickable */}
                <div 
                  className="mb-4 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => openCertificate(hackathon.certificate)}
                >
                  <img 
                    src={hackathon.certificate} 
                    alt={`${hackathon.title} Certificate`}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Hackathon Details */}
                <h3 className="text-xl font-bold text-white mb-1">{hackathon.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{hackathon.subtitle}</p>
                <p className="text-gray-300 text-sm mb-4 flex-1">{hackathon.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, idx) => (
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
        </div>
      </section>

      {/* Certificate Popup Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCertificate}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeCertificate}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 text-2xl"
            >
              ✕
            </button>
            
            {/* Certificate Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={selectedCertificate} 
                alt="Certificate"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hackathons