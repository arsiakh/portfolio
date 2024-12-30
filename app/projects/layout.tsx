import { NavHeader } from '@/components/nav-header'
import { SocialSidebar } from '@/components/social-sidebar'

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavHeader />
      <SocialSidebar />
      <main className="pt-20">
        {children}
      </main>
    </>
  )
}

