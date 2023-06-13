import { ArrowLeft } from '@phosphor-icons/react'

interface HeaderProps {
  title: string
  subtitle?: string
  iconColor: string
}

export const Header = ({ title, subtitle, iconColor }: HeaderProps) => {
  return (
    <header className="p-6 flex flex-col items-center">
      <button className="self-start">
        <ArrowLeft size={24} className={iconColor} />
      </button>
      <div className="flex flex-col items-center">
        <h1 className="text-gray-1 text-3xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-gray-2 font-normal text-sm">{subtitle}</p>
        )}
      </div>
    </header>
  )
}
