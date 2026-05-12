import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'

const navLinks = [
  { to: '/' as const, label: 'Home' },
  { to: '/resume' as const, label: 'Resume' },
  { to: '/projects' as const, label: 'Projects' },
  { to: '/blog/' as const, label: 'Blog' },
  { to: '/contact' as const, label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors"
        >
          Abhijit Singh
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors [&.active]:text-indigo-600 [&.active]:font-semibold"
            >
              {link.label}
            </Link>
          ))}

          {/* Social Icons */}
          <div className="flex items-center gap-2 ml-2 border-l border-gray-200 pl-4">
            <a
              href="https://www.linkedin.com/in/abhijit-singh-9665b7210/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-1.5 text-gray-500 hover:text-[#0A66C2] transition-colors rounded-md hover:bg-blue-50"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="https://github.com/Abhijit4001"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-1.5 text-gray-500 hover:text-gray-900 transition-colors rounded-md hover:bg-gray-100"
            >
              <Github size={17} />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors shadow-sm"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm px-4 py-4 space-y-2">

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600 py-2 px-2 rounded-lg hover:bg-indigo-50 transition-colors [&.active]:text-indigo-600 [&.active]:bg-indigo-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Social Links */}
          <div className="flex items-center gap-3 pt-3 border-t border-gray-100 mt-2">

            <a
              href="https://www.linkedin.com/in/abhijit-singh-9665b7210/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0A66C2] hover:underline"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>

            <a
              href="https://github.com/abhijit-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>

          {/* Mobile Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded-lg text-center mt-1 transition-colors"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  )
}
