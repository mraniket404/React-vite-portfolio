import React, { useState, useEffect } from 'react'

const Home = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Aniket Gosavi'

  useEffect(() => {
    let i = 0
    const typeWriter = () => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1))
        i++
        setTimeout(typeWriter, 200)
      }
    }
    typeWriter()
  }, [])

  const downloadCV = () => {
    const driveLink = "https://drive.google.com/file/d/1GorDpLDKcodSWnEAaO64sxr24UJ1f4AZ/view?usp=sharing"
    window.open(driveLink, "_blank")
  }

  return (
    <section id="home" className="min-h-screen pt-36 pb-24 px-6 relative overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 "></div>
      
      {/* Content Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Side - Info with Glass Effect */}
        <div className="backdrop-blur-lg bg-white/10 p-8 rounded-3xl border border-white/20">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            <div className="name-container">
              <div className="name">
                <h1 className="text-cyan-400">
                  {displayText}
                </h1>
                <span className="reflection text-cyan-800/40">
                  {displayText}
                </span>
              </div>
            </div>
          </h1>
          
          <span className="block text-cyan-300 text-lg sm:text-xl mt-4 font-mono tracking-wider">
            FRONT END DEVELOPER | FULL STACK DEVELOPER | BACKEND DEVELOPER
          </span>

          <p className="mt-5 text-lg sm:text-xl font-medium leading-relaxed text-cyan-200/80 max-w-xl">
            I'm a pre-final year B.Tech in Computer Science and Engineering student with expertise in full-stack web and
            mobile development. Proficient in the MERN stack, Java, Python, and Android development. Strong
            problem-solving skills with experience in building scalable applications.
          </p>

          <button 
            onClick={downloadCV}
            className="mt-8 px-8 py-6 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl transition-all duration-300 hover:scale-105 font-semibold text-lg"
          >
            DOWNLOAD CV
          </button>
        </div>

        {/* Right Side - Profile Picture with Glass Effect */}
        <div className="relative">
          <div className="backdrop-blur-lg bg-white/10 p-6 md:p-8 rounded-3xl border border-white/20">
            <div className="aspect-[10/10] rounded-2xl relative overflow-hidden">
              <img 
                src="/assets/self.png" 
                alt="Aniket Santosh Gosavi Profile Picture"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home