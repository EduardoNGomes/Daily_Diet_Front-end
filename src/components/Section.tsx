import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return (
    <main className="mt-5 bg-gray-7 rounded-t-3xl py-10 px-6 flex flex-col gap-2 items-center flex-1">
      {children}
    </main>
  )
}
