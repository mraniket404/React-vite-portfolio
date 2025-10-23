import React, { useState } from 'react'

const Projects = () => {
  const [activeModal, setActiveModal] = useState(null)

  const projects = [
    {
      id: 1,
      title: "EcoCart",
      description: "Sustainable shopping assistant.",
      fullDescription: "Sustainable shopping assistant for eco-friendly products.",
      image: "/assets/eco.jpeg",
      github: "https://github.com/mraniket404/Ecocart-project",
      live: "#"
    },
    {
      id: 2,
      title: "HeartWise",
      description: "Heart health monitoring system.",
      fullDescription: "Heart health monitoring system with reminders and alerts.",
      image: "/assets/healthcare.png",
      github: "https://github.com/mraniket404/healthcare_project",
      live: "https://healthcare-sgihunters.netlify.app/"
    },
    {
      id: 3,
      title: "Chessboard",
      description: "Real time game",
      fullDescription: "Real time game in two players and 3rd player are spectator.",
      image: "/assets/chessboard.png",
      github: "https://github.com/mraniket404/chess-Board-game",
      live: "#"
    },
    {
      id: 4,
      title: "Time Table",
      description: "Time Table auto generate",
      fullDescription: "Time Table auto generate system",
      image: "/assets/timetable.png",
      github: "https://github.com/mraniket404/TimeTable_SGI",
      live: "#"
    },
    {
      id: 5,
      title: "AI-Powered Chatbot",
      description: "OpenAI GPT API → Powers chatbot conversations.",
      fullDescription: "Most small businesses don't have a proper online presence or customer support. We provide a MERN-based platform that adds an AI chatbot to existing websites and builds new websites with chatbot integration.",
      image: "/assets/chat gpt.png",
      github: "https://github.com/mraniket404/TimeTable_SGI",
      live: "#"
    }
  ]

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-cyan-400 mb-12">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id}>
              <button
                onClick={() => setActiveModal(project.id)}
                className="w-full cursor-pointer backdrop-blur-lg bg-cyan-500/10 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 text-left"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
                  <p className="text-cyan-200">{project.description}</p>
                </div>
              </button>

              {/* Modal */}
              {activeModal === project.id && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl shadow-2xl p-6 max-w-lg w-full text-center text-white relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-52 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-3xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                    <p className="text-cyan-200 mb-4">{project.fullDescription}</p>
                    <div className="flex justify-center gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-900 rounded-lg hover:bg-cyan-800 transition-colors text-cyan-200"
                      >
                        GitHub
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-700 rounded-lg hover:bg-cyan-600 transition-colors text-cyan-200"
                      >
                        Live Demo
                      </a>
                    </div>
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-3 right-3 text-cyan-300 hover:text-cyan-500 text-2xl cursor-pointer"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects