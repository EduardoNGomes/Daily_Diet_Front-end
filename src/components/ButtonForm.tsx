interface ButtonFormProps {
  title: string
  active: boolean
  onDiet: boolean
  onClick: () => void
}

export const ButtonForm = ({
  title,
  active = false,
  onDiet = false,
  onClick,
}: ButtonFormProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-center gap-2 rounded-md border p-4 text-sm font-bold text-gray-1  ${
        active && onDiet === true
          ? ' border-green-dark bg-green-mid'
          : active && onDiet === false
          ? ' border-red-dark bg-red-mid'
          : 'border-transparent bg-gray-6'
      }`}
      type="button"
    >
      <span
        className={`block h-2 w-2 rounded-full ${
          onDiet ? 'bg-green-dark' : 'bg-red-dark'
        }`}
      ></span>
      {title}
    </button>
  )
}
