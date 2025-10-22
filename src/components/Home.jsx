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

  const handleButtonAnimation = (e) => {
    const button = e.target
    button.classList.remove('animate')
    void button.offsetWidth
    button.classList.add('animate')
  }

  return (
    <section id="home" className="pt-36 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            <div className="name-container">
              <div className="name">
                <h1>{displayText}</h1>
                <span className="reflection">{displayText}</span>
              </div>
            </div>
          </h1>
          
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent2 text-lg sm:text-xl">
            FRONT END DEVELOPER | FULL STACK DEVELOPER | BACKEND DEVELOPER
          </span>

          <p className="mt-5 text-lg sm:text-xl font-medium leading-relaxed text-white/80 max-w-xl">
            I'm a pre-final year B.Tech in Computer Science and Engineering student with expertise in full-stack web and
            mobile development. Proficient in the MERN stack, Java, Python, and Android development. Strong
            problem-solving skills with experience in building scalable applications.
          </p>

          <button 
            onClick={downloadCV}
            onMouseEnter={handleButtonAnimation}
            onMouseLeave={(e) => e.target.classList.remove('animate')}
            className="bubbly-button border border-white/10 rounded-2xl px-8 py-6 mt-8"
          >
            Download CV
          </button>
        </div>

        <div className="nav-animation relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="absolute -bottom-14 -right-10 w-72 h-64 rounded-full bg-accent2/20 blur-3xl"></div>
          <div className="relative glass bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="aspect-[10/10] rounded-2xl bg-gradient-to-br from-[#fbc2eb] via-[#a6c1ee] to-[#6495ed] relative overflow-hidden">
              <img 
                src="/assets/self.png" 
                alt="Aniket Santosh Gosavi Profile Picture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home