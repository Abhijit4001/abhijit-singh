import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const skills = {
  'Languages': ['Python', 'C', 'C++'],
  'Frameworks': ['FastAPI', 'Streamlit'],
  'ML / Data': ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'NLP', 'RAG'],
  'Databases': ['MySQL', 'MongoDB'],
  'Tools': ['Git', 'GitHub', 'VS Code', 'Kaggle'],
  'Web': ['HTML', 'CSS'],
}

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-blue-600 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl font-bold text-gray-900 mb-3">Abhijit Singh</h1>
            <p className="text-2xl text-gray-600 font-medium">Aspiring AI Engineer</p>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-xl">
            Final-year B.Tech Computer Science student at IKG Punjab Technical University.
            Passionate about building intelligent systems — from facial recognition to
            predictive ML pipelines. Seeking an entry-level AI Engineer role to develop
            and deploy real-world AI solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-500 transition-colors font-medium"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              Resume PDF
            </a>
          </div>
          <div className="flex items-center gap-5 pt-2">
            <a
              href="https://www.linkedin.com/in/abhijit-singh-9665b7210/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/Abhijit4001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:abhijitdarpan2004@gmail.com"
              className="text-gray-500 hover:text-red-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="tel:+919485004900"
              className="text-gray-500 hover:text-green-600 transition-colors"
              aria-label="Phone"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-56 h-64 rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/headshot-on-white.jpg"
              alt="Abhijit Singh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <CardContent className="pt-5">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/resume" className="group block">
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Resume</h3>
                <p className="text-gray-500 text-sm">Work experience, education, and skills in a structured view.</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/projects" className="group block">
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Projects</h3>
                <p className="text-gray-500 text-sm">AI/ML projects including face recognition, price prediction, and more.</p>
              </CardContent>
            </Card>
          </Link>
          <Link to="/blog/" className="group block">
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Blog</h3>
                <p className="text-gray-500 text-sm">Technical write-ups on projects, internships, and AI engineering.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}
