import { useEffect, useRef } from 'react'

const stats = [
  { value: '6+', label: 'Months Experience' },
  { value: '4+', label: 'Projects Built' },
  { value: '7.71', label: 'CGPA' },
  { value: '5+', label: 'Tech Stack' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left').forEach((el, i) => {
              el.style.transitionDelay = `${i * 100}ms`
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
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <p className="section-subtitle mb-3">get to know me</p>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div className="reveal-left">
            <div className="relative">
              {/* Code-style decorative element */}
              <div className="font-mono text-xs text-dark-500 mb-4 select-none">
                <span className="text-brand-600">const</span>{' '}
                <span className="text-slate-400">developer</span>{' '}
                <span className="text-brand-600">=</span>{' '}
                <span className="text-slate-500">{'{'}</span>
              </div>

              <div className="pl-4 border-l-2 border-brand-500/30 space-y-4">
                <p className="text-slate-300 leading-relaxed text-base">
                  Motivated <span className="text-white font-medium">MERN Stack Developer</span> with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Skilled in developing RESTful APIs, implementing authentication systems, and designing responsive user interfaces.
                </p>
                <p className="text-slate-300 leading-relaxed text-base">
                  Passionate about creating <span className="text-brand-400">scalable and user-friendly</span> web applications. Recently completed intensive MERN full-stack development training with practical project development and internship experience.
                </p>
                <p className="text-slate-300 leading-relaxed text-base">
                  Currently seeking an <span className="text-white font-medium">entry-level software developer</span> opportunity to contribute to modern web applications and grow as a full-stack engineer.
                </p>
              </div>

              <div className="font-mono text-xs text-dark-500 mt-4 select-none">
                <span className="text-slate-500">{'}'}</span>
              </div>
            </div>

            {/* Education card */}
            <div className="mt-8 card group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                  <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold font-display text-sm">B.E. Computer Science & Engineering</h3>
                    <span className="tag">CGPA: 7.71</span>
                  </div>
                  <p className="text-slate-400 text-sm">Arunai Engineering College, Tiruvannamalai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats & Info */}
          <div className="reveal space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="card text-center group hover:bg-brand-500/5">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">{value}</div>
                  <div className="text-slate-500 text-xs font-mono">{label}</div>
                </div>
              ))}
            </div>

            {/* Quick facts */}
            <div className="card space-y-4">
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">Quick Facts</h3>
              {[
                { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu' },
                { icon: '🎓', label: 'Degree', value: 'B.E. Computer Science' },
                { icon: '💼', label: 'Status', value: 'Available for hire' },
                { icon: '📧', label: 'Email', value: 'gowthammr120703@gmail.com' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span className="text-base">{icon}</span>
                  <span className="text-slate-500 w-20">{label}</span>
                  <span className="text-slate-300 font-mono text-xs">{value}</span>
                </div>
              ))}
            </div>

            {/* Download Resume CTA */}
            <a
              href="/resume.pdf"
              download="MR_Gowtham_Resume.pdf"
              className="w-full btn-primary flex items-center justify-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
