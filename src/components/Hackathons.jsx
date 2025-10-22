import React from 'react'

const Hackathons = () => {
  const hackathons = [
    {
      title: "Algoverse 2025",
      subtitle: "HackWithIndia IGDTUW | National-Level Hackathon",
      achievements: [
        "Led a team through intense problem-solving and brainstorming",
        "Managed technical architecture and development strategy",
        "Delivered a fully working solution under high-pressure",
        "Recognized for leadership and collaboration"
      ],
      technologies: ["Leadership", "React", "Team Management", "Firebase Auth", "JavaScript", "Express.js", "MongoDB", "Netlify", "HTML5", "CSS3"]
    },
    {
      title: "BuildVerse 2025",
      subtitle: "Scaler School of Technology | 24-hour Hackathon",
      achievements: [
        "Built a smart healthcare web app in 24 hours",
        "Implemented OCR for report scanning and disease detection",
        "Used AI for hospital recommendations and diagnosis support",
        "One of 126 teams selected from 1900+ registrations"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML5", "CSS3", "Bootstrap 5", "Firestore", "Netlify", "Vercel", "JWT"]
    },
    {
      title: "EcoCart - Sustainable Shopping Assistant",
      subtitle: "Prabal National Hackathon 2025 | Finalist Round",
      achievements: [
        "Developed a green product recommendation web app",
        "Integrated eco-badge ratings and Firebase authentication",
        "Designed fully responsive UI with smooth user experience",
        "Built with Bootstrap, JS, Firebase, and modern UI/UX tools"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "HTML5", "CSS3", "Bootstrap 5", "Firebase Auth", "Firestore", "UI/UX", "Netlify", "Vercel"]
    }
  ]

  const stats = [
    { number: "10+", label: "Hackathons" },
    { number: "3", label: "Wins" },
    { number: "200+", label: "Hours" },
    { number: "15+", label: "Projects" }
  ]

  return (
    <section id="hackathons" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Hackathons & Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-1">{hackathon.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{hackathon.subtitle}</p>
              <ul className="text-gray-300 mb-4 space-y-2 list-none flex-1">
                {hackathon.achievements.map((achievement, idx) => (
                  <li key={idx}>➔ {achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {hackathon.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="bg-white-600 text-blue-300 text-md font-semibold px-3 py-1 rounded-full text-xs"
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
            <div key={index} className="text-center p-6 bg-dark rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hackathons