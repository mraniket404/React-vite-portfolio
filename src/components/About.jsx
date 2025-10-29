import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Transparent Container */}
      <div className="max-w-6xl mx-auto relative z-10 p-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-8">About Me</h2>
          
          <div className="space-y-6 text-cyan-200/80 leading-relaxed max-w-4xl">
            <p>
              Hi! I'm <span className="font-semibold text-cyan-300">Aniket Gosavi</span> — a passionate Full Stack Developer 
              with expertise in building modern, scalable web applications. I specialize in creating seamless user experiences 
              combined with robust backend systems.
            </p>

            <p>
              With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean code, 
              innovative solutions, and attention to detail. My journey in web development started with curiosity and has evolved 
              into a passion for creating digital solutions that make an impact.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-300">Frontend Expertise</h3>
                <p>
                  I craft responsive, accessible interfaces using modern technologies like 
                  <span className="text-cyan-400"> React</span>, 
                  <span className="text-cyan-400"> JavaScript</span>, and 
                  <span className="text-cyan-400"> Tailwind CSS</span>. 
                  Focused on performance, user experience, and pixel-perfect designs.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-cyan-300">Backend Development</h3>
                <p>
                  Building robust APIs and server-side logic with 
                  <span className="text-cyan-400"> Node.js</span>, 
                  <span className="text-cyan-400"> Express</span>, and 
                  <span className="text-cyan-400"> MongoDB</span>. 
                  Experienced in database design and cloud deployment.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-cyan-400/10 border border-cyan-400/20 rounded-xl">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">What Drives Me</h3>
              <p>
                I thrive on solving complex problems and continuously learning new technologies. 
                Whether it's participating in hackathons, contributing to open-source projects, 
                or building personal projects, I'm always pushing my boundaries to grow as a developer 
                and create meaningful digital experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-2 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-300">
                🚀 Passionate Coder
              </div>
              <div className="px-4 py-2 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-300">
                💡 Problem Solver
              </div>
              <div className="px-4 py-2 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-300">
                🌱 Continuous Learner
              </div>
              <div className="px-4 py-2 bg-cyan-400/20 border border-cyan-400/30 rounded-full text-cyan-300">
                🤝 Team Player
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About