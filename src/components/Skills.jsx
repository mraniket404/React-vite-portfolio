import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML5', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'C', category: 'Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Java', category: 'Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', category: 'Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Git', category: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', category: 'Version Control', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
  ]

  const getCategoryColor = (category) => {
    switch(category) {
      case 'Frontend': return 'text-sky-400'
      case 'Programming': return 'text-amber-400'
      case 'Version Control': return 'text-orange-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <section id="skills" className="py-24 px-6 text-white relative overflow-hidden">
      <h2 className="font-semibold text-center text-3xl sm:text-4xl mb-12 text-white/90">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 text-center transition transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/40"
          >
            <img 
              src={skill.icon} 
              alt={skill.name}
              className="w-14 h-14 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            <p className={`text-sm ${getCategoryColor(skill.category)}`}>
              {skill.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills