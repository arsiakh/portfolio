import { BarChart2,  Calculator,  Search, LineChart, DollarSign, Puzzle, Dices, Split, ArrowUpDown, ShieldCheck, PackageOpen} from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

type FeatureSet = {
  [key: string]: Feature[]
}

const projectFeatures: FeatureSet = {
  stockanalysis: [
    {
      title: "Performance Tracking",
      description: "Track and visualize stock performance trends over time with matplotlib & pandas API.",
      icon: LineChart
    },
    {
      title: "Financial Ratios",
      description: "Calculates and analyzes P/E, P/B, and other crucial financial ratios specific to each stock, with detailed explanation.",
      icon: Calculator
    },
    {
      title: "Market Data",
      description: "Real-time market data integration from Yahoo Finance API.",
      icon: DollarSign
    },
    {
      title: "Back-end",
      description: "Python for algorithm logic, Flask for routing, Yahoo Finance API for data fetching charts and graphs for better decision making.",
      icon: BarChart2
    },
    {
      title: "Front-end",
      description: "HTML, CSS for design; Flask for web application framework",
      icon: Search
    },
    {
    title: "Object Oriented Programming Design",
    description: "Leverages encapsulation, Divide & Conquer & other OOP principles for code modularity, ease of maintenance, and scalability.",
    icon: Puzzle
    }
  ],
  ibmqiskit: [
    {
      title: "True Randomness ",
      description: "Utilizing quantum circuitry in Qiskit we produced truly random numbers, offering superior randomness compared to classical pseudo-random number generators.",
      icon: Dices
    },
    {
      title: "Secure Hashing",
      description: " Implements secure cryptographic algorithms to hash the generated passwords (converting binary to decimal), protecting them from unauthorized access and ensuring secure storage.",
      icon: BarChart2
    },
    
    {
      title: "Backend",
      description: "Python for algorithm logic, Qiskit for quantum computing processes, Matplotlib for visual representation of quantum states.",
      icon: Calculator
    }
  ], 
  tictactoe: [
    {
      title: "Object Oriented Programming Design",
      description: "Modular classes for Players, Game, and Board with clearly defined responsibilities, with abstract extensions including Human & Computer players",
      icon: Puzzle
    },
    {
      title: "Encapsulation",
      description: "Protected the internal state of objects by bundling game related data and methods together and protecting game state and player details",
      icon: ShieldCheck
    },
    {
      title: "Open-Close",
      description: "Allows extending functionality like AI integration and advanced game modes (e.g., N x N boards, custom win conditions",
      icon: PackageOpen
    },
    {
      title: "Polymorphsm ",
      description: "Enables dynamic method behavior based on the object type, such as makeMove() being overridden in subclasses Human and Computer to handle player-specific actions.",
      icon: ArrowUpDown
    },
    {
      title: "Single Responsibility",
      description: "Ensures each class has one specific purpose, making the code easier to maintain and extend, demonstrated by separating the responsibilities of managing the board, players, and overall game flow into distinct classes",
      icon: Split
    }
  ],
  backup: [
    {
      title: "Cron Job Scheduling",
      description: "Sets up recurring backups using cron jobs, enabling backups to run at daily, weekly, monthly, or custom minute intervals.",
      icon: Dices
    },
    {
      title: "Error Handling",
      description: "Built-in error handling ensures smooth operation, and usage and help functions guide users throughout the process.",
      icon: BarChart2
    },
    
    {
      title: "Modular User-Interaction",
      description: "Ensures user's can backup at anytime, cancel backup, backup to specific location or to one designated for them.",
      icon: Calculator
    }
  ]
}

type ProjectFeaturesProps = {
  projectId: string
}

export function ProjectFeatures({ projectId }: ProjectFeaturesProps) {
  const features = projectFeatures[projectId]

  if (!features) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      {features.map((feature) => (
        <div 
          key={feature.title} 
          className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
          <feature.icon className="w-10 h-10 mb-4 text-white" />
          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}

