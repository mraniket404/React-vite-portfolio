import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="lg:col-span-2">
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-white/70 leading-relaxed max-w-4xl">
            Hi! I'm <span className="font-semibold">Aniket Gosavi</span> — a
            front-end as well as backend developer. I craft delightful, accessible interfaces and micro-interactions. My
            toolkit includes <span className="text-accent">Tailwind</span>, <span className="text-accent">React</span>, <span
              className="text-accent">mongoDB</span>, and modern tooling.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About