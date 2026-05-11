import { marked } from 'marked'

import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: ResumePage,
})

function ResumePage() {
  return (
    <div className="min-h-screen p-8 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Abhijit Singh</h1>
          <p className="text-xl text-gray-600 font-medium">Aspiring AI Engineer</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <a href="mailto:abhijitdarpan2004@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Mail size={14} />
              abhijitdarpan2004@gmail.com
            </a>
            <a href="tel:+919485004900" className="flex items-center gap-1.5 hover:text-green-600 transition-colors">
              <Phone size={14} />
              +91 9485004900
            </a>
            <a
              href="https://www.linkedin.com/in/abhijit-singh-9665b7210/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
            <a
              href="https://github.com/abhijit-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
            >
              <Github size={14} />
              GitHub
            </a>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            <Download size={15} />
            Download PDF Resume
          </a>
          <Separator className="mt-8" />
        </div>

        {/* Professional Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <p className="flex-1 leading-relaxed text-gray-700">
                Final-year B.Tech Computer Science student with hands-on internship experience
                developing machine learning models in Python. Proficient in data preprocessing,
                feature engineering, and using libraries such as NumPy, Pandas, and scikit-learn.
                Familiar with FastAPI and software development principles, having written clean,
                maintainable code for data-driven applications. Seeking an entry-level AI Engineer
                role to support development and deployment of AI solutions.
              </p>
              <img
                src="/headshot-on-white.jpg"
                alt="Abhijit Singh"
                className="w-44 h-52 rounded-2xl object-cover flex-shrink-0"
              />
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-900">Technical Skills</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              {[
                { label: 'Languages', items: ['Python', 'C', 'C++'] },
                { label: 'Frameworks', items: ['FastAPI', 'Streamlit'] },
                { label: 'Libraries', items: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'] },
                { label: 'Databases', items: ['MySQL', 'MongoDB'] },
                { label: 'AI / ML', items: ['Data Preprocessing', 'Feature Engineering', 'EDA', 'Regression', 'Classification', 'NLP', 'Generative AI', 'RAG'] },
                { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Kaggle', 'APIs'] },
                { label: 'Web', items: ['HTML', 'CSS'] },
              ].map(({ label, items }) => (
                <div key={label} className="flex gap-4 items-start">
                  <span className="text-sm font-semibold text-gray-500 w-24 shrink-0 pt-1">{label}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <Badge key={item} variant="outline">{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Work Experience</h2>
          <div className="space-y-6">
            {allJobs.map((job) => (
              <Card key={job.jobTitle}>
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{job.jobTitle}</CardTitle>
                      <p className="font-medium text-gray-700">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm shrink-0">
                      {new Date(job.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {' – '}
                      {job.endDate
                        ? new Date(job.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                        : 'Present'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 leading-relaxed text-gray-700">{job.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <HoverCard key={tag}>
                        <HoverCardTrigger>
                          <Badge variant="outline" className="cursor-pointer">
                            {tag}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-64">
                          <p className="text-sm">Experience with {tag} in professional development</p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                  {job.content && (
                    <div
                      className="mt-6 prose prose-sm max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Education</h2>
          <div className="space-y-6">
            {allEducations.map((education) => (
              <Card key={education.school}>
                <CardHeader>
                  <CardTitle className="text-xl">{education.school}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-gray-700 font-medium">{education.summary}</p>
                  {education.content && (
                    <div
                      className="mt-4 prose prose-sm max-w-none text-gray-600"
                      dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                    />
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {education.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Leadership & Activities</h2>
          <div className="space-y-4">
            {[
              {
                role: 'President – Training & Placement Club',
                org: 'I.K.G.PTU Mohali Campus-1',
                period: 'Mar 2024 – Present',
                detail: 'Coordinated between students, faculty, and recruiting companies to facilitate campus placements.',
              },
              {
                role: 'Volunteer',
                org: 'NSS (National Service Scheme)',
                period: 'Mar 2024 – Present',
                detail: 'Participated in community awareness and social service programs.',
              },
              {
                role: 'Core Committee Member – Students Club Handling Committee',
                org: 'IKG Punjab Technical University',
                period: 'Jul 2023 – Nov 2023',
                detail: 'Managed discipline and coordination during campus events.',
              },
            ].map(({ role, org, period, detail }) => (
              <Card key={role}>
                <CardContent className="pt-5">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{role}</p>
                      <p className="text-sm text-gray-600">{org}</p>
                    </div>
                    <Badge variant="outline" className="text-xs shrink-0">{period}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
