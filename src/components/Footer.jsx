import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white/5 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-white/80">
        
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Aniket Gosavi</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Full-Stack Web Developer passionate about building scalable web apps, APIs, and stunning UIs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
            <li><a href="#hackathons" className="hover:text-accent transition-colors">Hackathons</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Connect</h3>
          <div className="flex space-x-4 text-lg">
            <a 
              href="https://www.linkedin.com/in/aniketgosavi404/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/mraniket404" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.instagram.com/mr_aniket_404_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Aniket Gosavi. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer