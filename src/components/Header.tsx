import { ArrowLeft } from '@phosphor-icons/react'

interface HeaderProps {
  title: string
  subtitle?: string
  iconColor: string
}

export const Header = ({ title, subtitle, iconColor }: HeaderProps) => {
  return (
    <header className="flex flex-col items-center p-6">
      <button className="self-start">
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
