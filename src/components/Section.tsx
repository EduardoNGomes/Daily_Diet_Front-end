import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return (
    <main className="mt-5 flex flex-1 flex-col items-center gap-2 rounded-t-3xl bg-gray-7 px-6 py-10">
      {children}
    </main>
  )
}
