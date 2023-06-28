import { ArrowLeft } from '@phosphor-icons/react'

import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  title: string
  subtitle?: string
  iconColor: string
}

export const Header = ({ title, subtitle, iconColor }: HeaderProps) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <header className="flex flex-col items-center p-6 md:mx-auto md:w-1/2">
      <button className={`self-start hover:brightness-50`} onClick={handleBack}>
        <ArrowLeft size={24} className={iconColor} />
      </button>
      <div className="flex flex-col items-center">
        <h1
          className={`font-bold text-gray-1 ${
            subtitle ? 'text-3xl' : 'text-lg'
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm font-normal text-gray-2">{subtitle}</p>
        )}
      </div>
    </header>
  )
}
