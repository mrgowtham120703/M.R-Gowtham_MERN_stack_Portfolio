import { useEffect, useRef } from 'react'

const responsibilities = [
  'Developed full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js)',
  'Built RESTful APIs using Node.js and Express.js for seamless client-server communication',
  'Implemented JWT authentication for secure login systems and protected routes',
  'Designed responsive UI components using React.js and Tailwind CSS',
  'Integrated MongoDB database schemas for efficient data persistence and querying',
]

const techUsed = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS', 'REST APIs', 'Git']

export default function Experience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              el.style.transitionDelay = `${i * 120}ms`
              el.classList.add('visible')
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
    <section id="experience" className="py-24 bg-dark-900/40 relative" ref={sectionRef}>
      {/* Subtle divider lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <p className="section-subtitle mb-3">where i've worked</p>
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent" />

          <div className="pl-12 md:pl-20 reveal">
            {/* Timeline dot */}
            <div className="absolute left-2 md:left-6 top-0 w-5 h-5 rounded-full bg-brand-500 border-4 border-dark-950 shadow-lg shadow-brand-500/30" />

            <div className="card group hover:glow-green">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-xl font-bold text-white">MERN Stack Developer Intern</h3>
                    <span className="hidden sm:flex items-center gap-1 tag text-brand-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
                      Completed
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-slate-400 font-medium">BTREE Systems</span>
                    <span className="text-dark-500">·</span>
                    <span className="text-slate-500 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Chennai
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="font-mono text-sm text-brand-400 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                    6 Months
                  </span>
                  <span className="font-mono text-xs text-slate-600">Internship</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 mb-6">
                {responsibilities.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-md bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-brand-500/20 transition-colors">
                      <svg className="w-3 h-3 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech used */}
              <div>
                <p className="font-mono text-xs text-slate-600 mb-3">Technologies used:</p>
                <div className="flex flex-wrap gap-2">
                  {techUsed.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-4 pl-4 border-l border-dark-600">
              <p className="text-xs text-slate-600 italic">
                This internship represents practical MERN stack development experience completed as part of professional training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
