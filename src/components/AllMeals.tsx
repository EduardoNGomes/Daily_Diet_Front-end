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
      <h4 className="mb-1 text-lg font-bold text-gray-1">
        {AllMeals.data.split('-').reverse().join('/')}
      </h4>
      {AllMeals.items.map((meal) => (
        <div
          key={meal.id}
          className="flex w-full items-center gap-3 rounded border  border-gray-5 p-4"
        >
          <div className="border-r border-gray-4 pr-4 text-xs font-bold text-gray-1">
            {meal.updated_at.split(' ')[1].split(':')[0]}:{' '}
            {meal.updated_at.split(' ')[1].split(':')[1]}
          </div>
          <p className="flex-1 text-base font-normal leading-5 text-gray-2">
            {meal.name}
          </p>
          <div
            className={` h-3 w-3 rounded-full ${
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
