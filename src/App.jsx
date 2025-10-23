import React from 'react'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Hackathons from './components/Hackathons'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen text-white">
      <BackgroundVideo />
      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Hackathons />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App