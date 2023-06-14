import { Section } from './Section'

interface MainMetricsProps {
  statistic: {
    allMeals: number
    mealsOnDiet: number
    mealsOffDiet: number
    dietSequence: number
    percentageOnDiet: string
    percentageOffDiet: string
  }
}

export const MainMetrics = ({ statistic }: MainMetricsProps) => {
  return (
    <Section>
      <h1 className="text-sm font-bold">Estatísticas gerais</h1>
      <div className="w-full rounded-lg p-4 bg-gray-6 flex flex-col gap-1 items-center">
        <h4 className="text-2xl text-gray-1 font-bold ">
          {statistic.dietSequence}
        </h4>
        <p className="text-sm text-gray-2">
          melhor sequência de pratos dentro da dieta
        </p>
      </div>

      <div className="w-full rounded-lg p-4 bg-gray-6 flex flex-col gap-1 items-center">
        <h4 className="text-2xl text-gray-1 font-bold ">
          {statistic.allMeals}
        </h4>
        <p className="text-sm text-gray-2">refeições registradas</p>
      </div>

      <div className="flex gap-2">
        <div className="w-full rounded-lg p-4 bg-green-light  flex flex-col gap-2 items-center">
          <h4 className="text-2xl text-gray-1 font-bold ">
            {statistic.mealsOnDiet}
          </h4>
          <p className="text-sm text-gray-2 text-center">
            refeições dentro da dieta
          </p>
        </div>
        <div className="w-full rounded-lg p-4 bg-red-light flex flex-col gap-2 items-center">
          <h4 className="text-2xl text-gray-1 font-bold ">
            {statistic.mealsOffDiet}
          </h4>
          <p className="text-sm text-gray-2 text-center">
            refeições fora da dieta
          </p>
        </div>
      </div>
    </Section>
  )
}
