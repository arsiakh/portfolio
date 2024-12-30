import { Hero } from '@/components/hero'
import { NavHeader } from '@/components/nav-header'
import { Projects } from '@/components/projects'


export default function Home() {
  return (
    <main>
      <NavHeader />
      <Hero />
      <Projects />
    </main>
  )
}

