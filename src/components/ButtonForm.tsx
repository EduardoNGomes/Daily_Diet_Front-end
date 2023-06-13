interface ButtonFormProps {
  title: string
  active: boolean
  onDiet: boolean
}

export const ButtonForm = ({
  title,
  active = false,
  onDiet = false,
}: ButtonFormProps) => {
  return (
    <button
      className={`p-4 w-full flex items-center justify-center gap-2 rounded-md text-sm text-gray-1 font-bold border  ${
        active && onDiet === true
          ? ' border-green-dark bg-green-mid'
          : active && onDiet === false
          ? ' border-red-dark bg-red-mid'
          : 'border-transparent bg-gray-6'
      }`}
    >
      <span className="block w-2 h-2 rounded-full"></span>
      {title}
    </button>
  )
}
