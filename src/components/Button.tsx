import { Icon } from '@phosphor-icons/react'
interface ButtonProps {
  title: string
  Icon?: Icon
}

export const Button = ({ title, Icon }: ButtonProps) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h3 className="self-start text-base leading-5 text-gray-1">Refeições</h3>

      <button className="flex items-center gap-2 bg-gray-2 text-white py-4 px-6 w-full justify-center rounded hover:bg-gray-1 text-sm font-bold">
        {Icon && <Icon />}
        <p>{title}</p>
      </button>
    </div>
  )
}
