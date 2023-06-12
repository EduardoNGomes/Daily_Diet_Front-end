interface DataResponseMealsProps {
  data: string
  items: {
    id: string
    user_id: string
    name: string
    description: string
    isOnDiet: boolean | number
    created_at: string
    updated_at: string
  }[]
}

interface AllMealsProps {
  AllMeals: DataResponseMealsProps
}

export const AllMeals = ({ AllMeals }: AllMealsProps) => {
  return (
    <section className="flex flex-col gap-2">
      <h4 className="text-gray-1 mb-1 text-lg font-bold">
        {AllMeals.data.split('-').reverse().join('/')}
      </h4>
      {AllMeals.items.map((meal) => (
        <div
          key={meal.id}
          className="flex items-center p-4 rounded w-full gap-3  border-gray-5 border"
        >
          <div className="border-r border-gray-4 pr-4 text-xs text-gray-1 font-bold">
            {meal.updated_at.split(' ')[1].split(':')[0]}:{' '}
            {meal.updated_at.split(' ')[1].split(':')[1]}
          </div>
          <p className="flex-1 text-base leading-5 text-gray-2 font-normal">
            {meal.name}
          </p>
          <div
            className={` rounded-full h-3 w-3 ${
              meal.isOnDiet === 1 ? 'bg-green-mid' : 'bg-red-mid'
            }`}
          >
            <span className="h-3 w-3 bg-red-mid"></span>
          </div>
        </div>
      ))}
    </section>
  )
}
