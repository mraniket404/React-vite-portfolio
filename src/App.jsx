import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white relative bg-mesh noise">
      {/* Background Waves */}
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Hackathons />
      <Contact />
      <Footer />
    </div>
  )
}

export default App