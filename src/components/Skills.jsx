import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-brand-500/20 to-emerald-500/20 border-brand-500/30',
    iconBg: 'bg-brand-500/10 border-brand-500/20 text-brand-400',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: 'from-orange-500/20 to-yellow-500/20 border-orange-500/30',
    iconBg: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    iconBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Vercel'],
  },
]

const coreStack = [
  { name: 'MongoDB', level: 80, color: '#22c55e' },
  { name: 'Express.js', level: 82, color: '#22c55e' },
  { name: 'React.js', level: 85, color: '#60a5fa' },
  { name: 'Node.js', level: 80, color: '#a3e635' },
  { name: 'JavaScript', level: 83, color: '#fbbf24' },
  { name: 'Tailwind CSS', level: 88, color: '#38bdf8' },
]

function SkillBar({ name, level, color }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out skill-bar"
          style={{ width: '0%', '--target-width': `${level}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.transitionDelay = `${i * 100}ms`
              el.classList.add('visible')
            })
            // Animate skill bars
            entry.target.querySelectorAll('.skill-bar').forEach((bar, i) => {
              setTimeout(() => {
                bar.style.width = bar.style.getPropertyValue('--target-width') ||
                  bar.getAttribute('style').match(/--target-width: ([^;]+)/)?.[1] || '0%'
              }, i * 100 + 300)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <p className="section-subtitle mb-3">what i work with</p>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Skill groups */}
          <div className="space-y-5 reveal">
            {skillGroups.map(({ category, icon, color, iconBg, skills }) => (
              <div
                key={category}
                className={`bg-gradient-to-br ${color} border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center text-lg ${iconBg}`}>
                    {icon}
                  </div>
                  <h3 className="font-display font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-xs bg-dark-950/50 border border-dark-500/50 text-slate-300 px-2.5 py-1.5 rounded-lg hover:text-white hover:border-dark-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right - MERN Proficiency bars + Stack visualization */}
          <div className="space-y-8 reveal">
            {/* Proficiency bars */}
            <div className="card">
              <h3 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Core Proficiency
              </h3>
              <div className="space-y-5">
                {coreStack.map(({ name, level, color }) => (
                  <SkillBar key={name} name={name} level={level} color={color} />
                ))}
              </div>
            </div>

            {/* MERN visual badge */}
            <div className="card bg-gradient-to-br from-brand-500/5 to-emerald-500/5 border-brand-500/20">
              <p className="font-mono text-xs text-slate-600 mb-4 text-center">// MERN Stack</p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { letter: 'M', name: 'MongoDB', color: 'text-brand-400', bg: 'bg-brand-500/10 border-brand-500/30' },
                  { letter: 'E', name: 'Express', color: 'text-slate-300', bg: 'bg-dark-700 border-dark-500' },
                  { letter: 'R', name: 'React', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/30' },
                  { letter: 'N', name: 'Node', color: 'text-lime-400', bg: 'bg-lime-500/10 border-lime-500/30' },
                ].map(({ letter, name, color, bg }) => (
                  <div key={letter} className={`${bg} border rounded-xl p-3 text-center`}>
                    <div className={`font-display text-2xl font-bold ${color} mb-1`}>{letter}</div>
                    <div className="font-mono text-xs text-slate-500">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
