import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Project } from '@/components/projects'
import { ProjectFeatures } from '@/components/project-features'

const projects: Project[] = [
  {
    id: 'stockanalysis',
    title: 'StockAnalysis Program',
    year: '2023',
    description: 'Stock Analysis algorithm that utilizes accounting ratios to make informed reccomendation on stock.',
    image: '/images/stockAnalysisResult.png',
    technologies: ['Python', 'HTML', 'CSS', 'Flask', 'Matplotlib'],
    link: 'https://github.com/arsiakh/StockAnalysis',
    showFeatures: true,
    fullDescription: `Stock Recommending Algorithm provides stock recommendations based on key financial metrics and accounting ratios. By integrating data from reliable sources like Yahoo Finance and using a combination of Python Object-Oriented Programming (OOP) methods, this project offers a robust solution for stock analysis.`
  }, 
  {id: 'tictactoe',
    title: 'TicTacToe Program',
    year: '2024',
    description: 'TicTacToe Game played in console with multiple player type options including Computer',
    image: '/images/UML2.png',
    technologies: ['Java', 'OOP Principles', ],
    link: 'https://github.com/arsiakh/TicTacToe',
    additionalImages: [
    ],
    showFeatures: true,
    fullDescription: `
    
The Tic-Tac-Toe Game is a modular and extensible project designed to implement the classic game using Java. It showcases Object-Oriented Programming (OOP) principles and design patterns to create a user-friendly, interactive, and customizable gaming experience. The project is structured to support future enhancements, such as AI opponents and dynamic board configurations.
    `
  },
  {
    id: 'ibmqiskit',
    title: 'IBM Qiskit Hackathon',
    year: '2024',
    description: 'Quantum circuit that generates true random numbers to create an auto-updating secure password each time',
    image: '/images/qiskitFlow.png',
    technologies: ['Python', 'Matplotlib', 'Quiskit'],
    link: 'https://github.com/arsiakh/Quantum-Password-Generator',
    additionalImages: [
    ],
    showFeatures: true,
    fullDescription: `The Quantum Password Generator is an advanced project designed to create highly secure, auto-updating passwords using quantum computing. By leveraging IBM's Qiskit platform, this software generates true random numbers with the help of a quantum circuit, ensuring greater randomness and security than traditional methods. The generated passwords are refreshed every time the system runs, making them more resilient to security breaches.`
  },
  {
    id: 'backup',
    title: 'Backup Utility',
    year: '2024',
    description: 'Backup utility that will asynchronously backup each file user selects.',
    image: '/images/cronjob1.png',
    technologies: ['Bash', 'Linux', 'Shell', 'Cron' ],
    link: 'https://github.com/arsiakh/BackupFiles',
    additionalImages: [
    ],
    showFeatures: true,
    fullDescription: `A Bash script that automates backup management using cron jobs. It validates user inputs, sets up recurring backups, allows immediate backups, and provides options to manage or terminate cron jobs. Includes error handling and user assistance features for ease of use.






`
  }
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={630}
        className=" w-full h-[300px] md:h-[400px]  p-2 rounded-[20px]"
      />
      <h1 className="text-4xl font-bold text-gray-200 mb-4">{project.title}</h1>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-white bg-white/10 px-3 py-1 rounded-full text-sm">{project.year}</span>
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs text-white bg-white/10 px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="prose prose-invert max-w-none">
        {project.fullDescription && project.fullDescription.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      {project.showFeatures && <ProjectFeatures projectId={project.id} />}
      {project.additionalImages && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          {project.additionalImages.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${project.title} screenshot ${index + 1}`}
              width={600}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
      )}
      <div className="mt-8 bg-black border-white rounded-sm h-8 w-32 items-center justify-around flex  hover:bg-white/10 border">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 underline">
          View Project
        </a>
      </div>
    </article>
  )
}
