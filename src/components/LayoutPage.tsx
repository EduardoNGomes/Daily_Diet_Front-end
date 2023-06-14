import { ReactNode } from 'react'

interface LayoutPageProps {
  children: ReactNode
  color: string
}

export const LayoutPag = ({ children, color }: LayoutPageProps) => {
  return (
    <div
      className={`flex h-screen w-full flex-col 
        ${color}
      `}
    >
      {children}
    </div>
  )
}
