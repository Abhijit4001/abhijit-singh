import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function useTypingEffect(
  texts: string[],
  speed = 80,
  pause = 2200,
) {
  const [state, setState] = useState({
    displayText: '',
    textIndex: 0,
    charIndex: 0,
    isDeleting: false,
  })

  useEffect(() => {
    const { textIndex, charIndex, isDeleting } = state
    const current = texts[textIndex]

    const delay =
      isDeleting
        ? speed / 2
        : charIndex === current.length
        ? pause
        : speed

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setState((s) => ({
            ...s,
            displayText: current.slice(0, s.charIndex + 1),
            charIndex: s.charIndex + 1,
          }))
        } else {
          setState((s) => ({
            ...s,
            isDeleting: true,
          }))
        }
      } else {
        if (charIndex > 0) {
          setState((s) => ({
            ...s,
            displayText: current.slice(0, s.charIndex - 1),
            charIndex: s.charIndex - 1,
          }))
        } else {
          setState((s) => ({
            ...s,
            isDeleting: false,
            textIndex: (s.textIndex + 1) % texts.length,
          }))
        }
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [state, texts, speed, pause])

  return state.displayText
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          obs.unobserve(el)
        }
      },
      { threshold: 0.08 },
    )

    obs.observe(el)

    return () => obs.disconnect()
  }, [])

  return ref
}

const skills = [
  {
    label: 'Languages',
    items: ['Python', 'C', 'C++'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    label: 'Frameworks',
    items: ['FastAPI', 'Streamlit'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    label: 'ML / Data',
    items: [
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Scikit-learn',
      'NLP',
      'RAG',
    ],
    color: 'from-purple-500 to-indigo-500',
  },
  {
    label: 'Databases',
    items: ['MySQL', 'MongoDB'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Kaggle'],
    color: 'from-green-500 to-teal-500',
  },
  {
    label: 'Web',
    items: ['HTML', 'CSS'],
    color: 'from-pink-500 to-rose-500',
  },
]

const exploreCards = [
  {
    to: '/resume',
    title: 'Resume',
    desc: 'Work experience, education & skills in a structured view.',
    emoji: '📄',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    to: '/projects',
    title: 'Projects',
    desc: 'AI/ML projects: face recognition, price prediction & more.',
    emoji: '🚀',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    to: '/blog/',
    title: 'Blog',
    desc: 'Technical write-ups on AI engineering & internships.',
    emoji: '✍️',
    gradient: 'from-orange-500 to-red-500',
  },
]

function Home() {
  const role = useTypingEffect([
    'Aspiring AI Engineer',
    'ML Developer',
    'Python Developer',
    'Problem Solver',
  ])

  const skillsRef = useScrollReveal()
  const exploreRef = useScrollReveal()
  const statsRef = useScrollReveal()

  return (
    <div className="min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">

        {/* Background Blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-700/20 blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-blue-500/10 blur-2xl" />
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-16">

          {/* LEFT */}
          <div className="flex-1 space-y-7">

            <span className="text-indigo-300 text-sm font-semibold tracking-[0.2em] uppercase">
              Hello, I'm
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
              Abhijit Singh
            </h1>

            <div className="flex items-center gap-1 text-2xl md:text-3xl font-semibold text-indigo-200 h-10">
              <span>{role}</span>
              <span className="animate-pulse text-indigo-400">|</span>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-lg text-base md:text-lg">
              Final-year B.Tech Computer Science student passionate
              about building intelligent AI systems, machine learning
              applications, and scalable real-world solutions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/15 transition-all duration-200 hover:-translate-y-0.5"
              >
                Contact Me
              </Link>

            </div>

            {/* SOCIAL */}
            <div className="flex flex-wrap items-center gap-3">

              <a
                href="https://www.linkedin.com/in/abhijit-singh-9665b7210/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#0958A8] text-white rounded-lg text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>

              <a
                href="https://github.com/Abhijit4001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github size={15} />
                GitHub
              </a>

              <a
                href="mailto:abhijitdarpan2004@gmail.com"
                className="p-2.5 bg-white/10 hover:bg-red-500/25 text-slate-300 hover:text-white rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={17} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-semibold backdrop-blur-sm border border-white/15 transition-all duration-200 hover:-translate-y-0.5"
              >
                <ExternalLink size={14} />
                Resume PDF
              </a>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-40 scale-110" />

              <div className="relative w-56 h-64 md:w-72 md:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src="/headshot-on-white.jpg"
                  alt="Abhijit Singh"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                AI Engineer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div ref={statsRef} className="bg-indigo-600">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { value: '3+', label: 'Projects Built' },
            { value: '1', label: 'Internship' },
            { value: '3+', label: 'Blog Posts' },
            { value: '6+', label: 'Tech Stacks' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-extrabold">
                {value}
              </div>
              <div className="text-indigo-200 text-sm mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS */}
      <div ref={skillsRef} className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Technical Skills
            </h2>

            <p className="text-gray-500 max-w-md mx-auto text-sm">
              Technologies I use to build intelligent,
              data-driven applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {skills.map(({ label, items, color }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`}
                />

                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  {label}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full font-medium group-hover:bg-indigo-50 group-hover:text-indigo-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* EXPLORE */}
      <div ref={exploreRef} className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Explore
            </h2>

            <p className="text-gray-500 text-sm">
              Dive deeper into my work and experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {exploreCards.map(
              ({ to, title, desc, emoji, gradient }) => (
                <Link
                  key={to}
                  to={to as any}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-100 p-6 h-full hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">

                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                    />

                    <div className="text-4xl mb-4">
                      {emoji}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {desc}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-1.5 text-indigo-500 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                      Explore
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>

                  </div>
                </Link>
              ),
            )}

          </div>
        </div>
      </div>

      {/* FOOTER CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-center text-white">

        <h2 className="text-3xl font-bold mb-3">
          Let's Build Something Together
        </h2>

        <p className="text-indigo-100 mb-8 max-w-md mx-auto text-sm">
          Open to internships, entry-level AI/ML roles,
          and interesting projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <Link
            to="/contact"
            className="px-7 py-3 bg-white text-indigo-700 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            Get In Touch
          </Link>

          <a
            href="https://www.linkedin.com/in/abhijit-singh-9665b7210/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold border border-white/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>

        </div>
      </section>
    </div>
  )
}
