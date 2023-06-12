import { ArrowLeft } from '@phosphor-icons/react'

const statistic = {
  allMeals: 4,
  mealsOnDiet: 2,
  mealsOffDiet: 2,
  dietSequence: 1,
  percentageOnDiet: '50.00',
  percentageOffDiet: '50.00',
}

export const Metrics = () => {
  return (
    <div
      className={`w-full h-screen
        ${
          Number(statistic.percentageOnDiet) >= 50
            ? 'bg-green-mid'
            : 'bg-red-mid'
        }
      `}
    >
      <header className="p-6 flex flex-col items-center">
        <button className="self-start">
          <ArrowLeft
            size={24}
            className={
              Number(statistic.percentageOnDiet) >= 50
                ? 'text-green-dark'
                : 'text-red-dark'
            }
          />
        </button>
        <div className="flex flex-col items-center">
          <h1 className="text-gray-1 text-3xl font-bold">
            {statistic.percentageOnDiet}%
          </h1>
          <p className="text-gray-2 font-normal text-sm">
            das refeições dentro da dieta
          </p>
        </div>
      </header>

      <div></div>
    </div>
  )
}
