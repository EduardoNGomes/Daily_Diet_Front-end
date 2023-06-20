import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
}

export const Section = ({ children }: SectionProps) => {
  return (
    <div className="mt-5 flex flex-1 flex-col items-center gap-2 rounded-t-3xl bg-gray-7 px-6 py-10 md:mx-auto md:w-1/2">
      {children}
    </div>
  )
}
