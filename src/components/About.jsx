import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Transparent Container */}
      <div className="max-w-6xl mx-auto relative z-10 p-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400">About Me</h2>
          <p className="mt-4 text-cyan-200/70 leading-relaxed max-w-4xl">
            Hi! I'm <span className="font-semibold text-cyan-300">Aniket Gosavi</span> — a
            front-end as well as backend developer. I craft stellar, accessible interfaces and cosmic micro-interactions. My
            toolkit includes <span className="text-cyan-400">Tailwind</span>, <span className="text-cyan-400">React</span>, <span
              className="text-cyan-400">mongoDB</span>, and modern tooling that's out of this world.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About