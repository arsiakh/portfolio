import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'


export type Project = {
  id: string
  title: string
  year: string
  description: string
  image: string
  technologies: string[]
  link: string
  additionalImages?: string[]
  fullDescription?: string
  showFeatures?: boolean
}

const projects: Project[] = [
  {
    id: 'stockanalysis',
    title: 'StockAnalysis Program',
    year: '2023',
    description: 'Stock Analysis algorithm that utilizes accounting ratios to make informed reccomendation on stock.',
    image: '/images/stockAnalysisHome.png',
    technologies: ['Python', 'HTML', 'CSS', 'Flask', 'Matplotlib'],
    link: 'https://github.com/arsiakh/StockAnalysis',
    
  },
  {
    id: 'tictactoe',
    title: 'TicTacToe Program',
    year: '2024',
    description: 'TicTacToe Game played in console with multiple player type options including Computer',
    image: '/images/game1.png',
    technologies: ['Java', 'OOP Principles', ],
    link: 'https://github.com/arsiakh/TicTacToe',
    
  },
  {
    id: 'ibmqiskit',
    title: 'IBM Qiskit Hackathon',
    year: '2024',
    description: 'Quantum circuit that generates true random numbers to create an auto-updating secure password each time',
    image: '/images/QuantumCircuit.png',
    technologies: ['Python', 'Matplotlib', 'Quiskit'],
    link: 'https://github.com/arsiakh/Quantum-Password-Generator',
    additionalImages: ['/images/qiskitFlow.png'
    ]
  },
  {
    id: 'backup',
    title: 'Backup Utility',
    year: '2024',
    description: 'Backup utility that will asynchronously backup each file user selects.',
    image: '/images/cronjob1.png',
    technologies: ['Bash', 'Linux', 'Shell', 'Cron' ],
    link: 'https://github.com/arsiakh/BackupFiles',
    
  }
]

export function Projects() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-200 mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <Card className="bg-transparent border-0 group">
                <CardContent className="p-0 relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-xs text-white bg-white/10 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

