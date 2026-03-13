import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'Contact Management System',
    subtitle: 'MERN Stack',
    description: 'Developed a full-stack contact management application with secure JWT authentication and complete CRUD functionality. Built RESTful APIs using Node.js and Express.js and integrated MongoDB for persistent data storage.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/mrgowtham120703',
    live: '#',
    color: 'from-brand-500/10 to-emerald-500/5',
    border: 'hover:border-brand-500/50',
    iconBg: 'bg-brand-500/10',
    icon: (
      <svg className="w-5 h-5 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    featured: true,
  },
  {
    title: 'Task Manager Application',
    subtitle: 'MERN Stack',
    description: 'Built a task management platform enabling users to create, update, and delete tasks with real-time UI updates. Implemented React Hooks and REST APIs for efficient state management and backend integration.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'React Hooks', 'REST APIs'],
    github: 'https://github.com/mrgowtham120703',
    live: '#',
    color: 'from-blue-500/10 to-cyan-500/5',
    border: 'hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10',
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Food Delivery Application',
    subtitle: 'React · Vite · Tailwind',
    description: 'Developed a dynamic food ordering web application with category-based filtering and real-time cart updates. Integrated user authentication and responsive UI for a seamless ordering experience.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Authentication'],
    github: 'https://github.com/mrgowtham120703',
    live: '#',
    color: 'from-orange-500/10 to-yellow-500/5',
    border: 'hover:border-orange-500/50',
    iconBg: 'bg-orange-500/10',
    icon: (
      <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Responsive Landing Page',
    subtitle: 'React · Vite · Tailwind',
    description: 'Designed a mobile-first responsive landing page optimized for performance and modern UI design. Implemented reusable React components styled with Tailwind CSS following best practices.',
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Responsive Design', 'Components'],
    github: 'https://github.com/mrgowtham120703',
    live: '#',
    color: 'from-purple-500/10 to-pink-500/5',
    border: 'hover:border-purple-500/50',
    iconBg: 'bg-purple-500/10',
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
]

function ProjectCard({ project, index }) {
  return (
    <div
      className={`relative bg-gradient-to-br ${project.color} bg-dark-800 border border-dark-600 ${project.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {project.featured && (
        <div className="absolute -top-2.5 left-6">
          <span className="font-mono text-xs bg-brand-500 text-dark-950 px-3 py-0.5 rounded-full font-semibold">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 ${project.iconBg} rounded-xl flex items-center justify-center border border-dark-500/50`}>
          {project.icon}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 bg-dark-700 hover:bg-dark-600 border border-dark-500 rounded-lg flex items-center justify-center transition-colors"
            title="View on GitHub"
          >
            <svg className="w-4 h-4 text-slate-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 bg-dark-700 hover:bg-dark-600 border border-dark-500 rounded-lg flex items-center justify-center transition-colors"
            title="Live Demo"
          >
            <svg className="w-4 h-4 text-slate-400 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-brand-100 transition-colors">
        {project.title}
      </h3>
      <p className="font-mono text-xs text-slate-500 mb-3">{project.subtitle}</p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <span key={t} className="tag text-xs">{t}</span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
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
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 bg-dark-900/40 relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-16 reveal">
          <p className="section-subtitle mb-3">what i've built</p>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-brand-500 to-transparent rounded-full" />
          <p className="text-slate-400 mt-4 max-w-lg">
            A selection of projects I've built during my internship and personal development journey.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={project.title} className="reveal">
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/mrgowtham120703"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-outline"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
