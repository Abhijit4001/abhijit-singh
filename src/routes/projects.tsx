import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'
import { allProjects } from 'content-collections'

import { Badge } from '@/components/ui/badge'

import {
  ExternalLink,
  Github,
} from 'lucide-react'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible')
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.05,
      },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof allProjects)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('reveal-visible')
          }, index * 80)

          observer.unobserve(el)
        }
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="reveal-element group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
    >
      {/* Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="flex-1 flex flex-col p-6">

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-3 border-t border-gray-100">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}

        </div>
      </div>
    </div>
  )
}

function Projects() {
  const headerRef = useScrollReveal()

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white py-20">

        <div className="max-w-5xl mx-auto px-4">

          <div
            ref={headerRef}
            className="reveal-element"
          >
            <p className="text-indigo-300 text-sm font-semibold tracking-widest uppercase mb-3">
              Portfolio
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-5">
              Projects
            </h1>

            <p className="text-slate-300 max-w-2xl text-base md:text-lg leading-relaxed">
              AI/ML and full-stack projects built during
              coursework, internships, and personal exploration.
            </p>
          </div>

        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {allProjects.map((project, index) => (
            <ProjectCard
              key={project._meta.path}
              project={project}
              index={index}
            />
          ))}

        </div>
      </section>
    </div>
  )
}
