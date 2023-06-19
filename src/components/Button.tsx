import { Icon } from '@phosphor-icons/react'
interface ButtonProps {
  title: string
  Icon?: Icon
  onClick: () => void
  color?: 'black' | 'white'
}

export const Button = ({
  title,
  Icon,
  onClick,
  color = 'black',
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`flex w-full items-center justify-center gap-2 rounded  border border-gray-1  px-6 py-4 text-sm font-bold ${
        color === 'black'
          ? 'bg-gray-2  text-white hover:bg-gray-1'
          : 'bg-white text-gray-1 hover:bg-gray-5'
      }`}
    >
      {Icon && <Icon />}
      <p>{title}</p>
    </button>
  )
}
