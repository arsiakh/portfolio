import Link from 'next/link'

export default function ProjectNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-200 mb-4">Project Not Found</h1>
      <p className="text-gray-400 mb-8">Sorry, the project you're looking for doesn't exist.</p>
      <Link href="/" className="text-white hover:text-white/90 underline">
        Return to Home
      </Link>
    </div>
  )
}

