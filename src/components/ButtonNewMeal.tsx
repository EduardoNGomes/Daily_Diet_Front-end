import { Plus } from '@phosphor-icons/react'

export const ButtonNewMeal = () => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h3 className="self-start text-base leading-5 text-gray-1">Refeições</h3>

      <button className="flex items-center gap-2 bg-gray-2 text-white py-4 px-6 w-full justify-center rounded hover:bg-gray-1 text-sm font-bold">
        <Plus />
        <p>Nova refeição</p>
      </button>
    </div>
  )
}
