import { Icon } from '@phosphor-icons/react'
interface ButtonProps {
  title: string
  Icon?: Icon
  onClick: () => void
}

export const Button = ({ title, Icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex items-center gap-2 bg-gray-2 text-white py-4 px-6 w-full justify-center rounded hover:bg-gray-1 text-sm font-bold"
    >
      {Icon && <Icon />}
      <p>{title}</p>
    </button>
  )
}
