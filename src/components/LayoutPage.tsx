import { ReactNode } from 'react'

interface LayoutPageProps {
  children: ReactNode
  color: string
}

export const LayoutPag = ({ children, color }: LayoutPageProps) => {
  return (
    <div
      className={`w-full h-screen flex flex-col 
        ${color}
      `}
    >
      {children}
    </div>
  )
}
