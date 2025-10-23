import React from 'react'

const Footer = () => {
  return (
    <footer className="backdrop-blur-md border-t border-cyan-400/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-cyan-300/80">
        
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Aniket Gosavi</h3>
          <p className="text-sm text-cyan-300/60 leading-relaxed">
            Full-Stack Web Developer passionate about building modern web applications and user experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#hackathons" className="hover:text-cyan-400 transition-colors">Hackathons</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Connect With Me</h3>
          <div className="flex space-x-4 text-xl">
            <a 
              href="https://www.linkedin.com/in/aniketgosavi404/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/mraniket404" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors transform hover:scale-110 duration-300"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.instagram.com/mr_aniket_404_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-500 transition-colors transform hover:scale-110 duration-300"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-cyan-400/20 py-4 text-center text-cyan-300/60 text-sm">
        © {new Date().getFullYear()} Aniket Gosavi. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer