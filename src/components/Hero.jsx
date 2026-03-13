import { useEffect, useState } from 'react'

const roles = ['MERN Stack Developer', 'Full-Stack Engineer', 'React Developer', 'Node.js Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-950/50 to-dark-950" />
      {/* Green glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 bg-dark-800 border border-brand-500/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
              <span className="font-mono text-brand-400 text-xs">Open to opportunities</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-3 animate-fade-up">
              M R<br />
              <span className="text-gradient">Gowtham</span>
            </h1>

            <div className="font-mono text-lg md:text-xl text-slate-400 mb-5 h-8 animate-fade-up animate-delay-100">
              <span className="text-brand-400">&gt;</span>{' '}
              <span>{displayed}</span>
              <span className="cursor" />
            </div>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-lg animate-fade-up animate-delay-200">
              Building <span className="text-white font-medium">responsive and scalable</span> full-stack web applications using{' '}
              <span className="text-brand-400 font-mono">MongoDB</span>,{' '}
              <span className="text-brand-400 font-mono">Express.js</span>,{' '}
              <span className="text-brand-400 font-mono">React.js</span>, and{' '}
              <span className="text-brand-400 font-mono">Node.js</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-up animate-delay-300">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-outline flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Me
              </a>
              <a href="/resume.pdf" download="MR_Gowtham_Resume.pdf" className="btn-ghost flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 animate-fade-up animate-delay-400">
              <span className="font-mono text-xs text-slate-600">find me on</span>
              <div className="h-px flex-1 max-w-12 bg-dark-600" />
              <a href="https://github.com/mrgowtham120703" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/gowthammr3" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-brand-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="mailto:gowthammr120703@gmail.com" className="text-slate-500 hover:text-brand-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative animate-float">
              {/* Outer spinning ring */}
              <div className="absolute inset-0 rounded-full border-2 border-brand-500/20 scale-110 animate-spin-slow" />
              {/* Dashed ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-brand-500/15 scale-125" />

              {/* Profile image container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500/20 to-emerald-400/10 blur-xl scale-110" />

                {/* ✅ YOUR PROFILE PHOTO — fully rounded, no square crop */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-dark-700 ring-4 ring-brand-500/30 ring-offset-4 ring-offset-dark-950 glow-green">
                  <img
                    src="/profile_img.jpg"
                    alt="M R Gowtham"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Badge - MERN */}
                <div className="absolute -bottom-3 -right-3 bg-dark-800 border border-brand-500/40 rounded-xl px-3 py-2 shadow-xl">
                  <span className="font-mono text-brand-400 text-xs font-medium">MERN Stack</span>
                </div>
                {/* Badge - Experience */}
                <div className="absolute -top-3 -left-3 bg-dark-800 border border-dark-500 rounded-xl px-3 py-2 shadow-xl">
                  <span className="font-mono text-slate-400 text-xs">6mo Intern</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-slate-600">scroll</span>
          <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}