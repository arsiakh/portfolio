'use client'

import Link from 'next/link'
import { Hexagon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'


export function NavHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-white">
          <Hexagon size={32} />
        </Link>
       
        <nav className="hidden md:flex items-center gap-8">
          <Link href="https://github.com/arsiakh" className="text-gray-400 hover:text-white transition-colors">
          <Github size={20} />
          </Link>
          <Link href="mailto:a.khorramijam@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/arsia-khorramijam-988222233/" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href = "/pdf/resume.pdf">Resume </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

