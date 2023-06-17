import { StatisticsProps } from '../types/App-types'
import { Section } from './Section'

interface MainMetricsProps {
  statistic: StatisticsProps
}

export const MainMetrics = ({ statistic }: MainMetricsProps) => {
  return (
    <Section>
      <h1 className="text-sm font-bold">Estatísticas gerais</h1>
      <div className="flex w-full flex-col items-center gap-1 rounded-lg bg-gray-6 p-4">
        <h4 className="text-2xl font-bold text-gray-1 ">
          {statistic.dietSequence}
        </h4>
        <p className="text-sm text-gray-2">
          melhor sequência de pratos dentro da dieta
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-1 rounded-lg bg-gray-6 p-4">
        <h4 className="text-2xl font-bold text-gray-1 ">
          {statistic.allMeals}
        </h4>
        <p className="text-sm text-gray-2">refeições registradas</p>
      </div>

      <div className="flex gap-2">
        <div className="flex w-full flex-col items-center  gap-2 rounded-lg bg-green-light p-4">
          <h4 className="text-2xl font-bold text-gray-1 ">
            {statistic.mealsOnDiet}
          </h4>
          <p className="text-center text-sm text-gray-2">
            refeições dentro da dieta
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-2 rounded-lg bg-red-light p-4">
          <h4 className="text-2xl font-bold text-gray-1 ">
            {statistic.mealsOffDiet}
          </h4>
          <p className="text-center text-sm text-gray-2">
            refeições fora da dieta
          </p>
        </div>
      </div>
    </Section>
  )
}
