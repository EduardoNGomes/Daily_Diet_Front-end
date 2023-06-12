import { HeaderMetrics } from '../components/HeaderMetrics'
import { MainMetrics } from '../components/MainMetrics'

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
      className={`w-full h-screen flex flex-col 
        ${
          Number(statistic.percentageOnDiet) >= 50
            ? 'bg-green-mid'
            : 'bg-red-mid'
        }
      `}
    >
      <HeaderMetrics percentage={statistic.percentageOnDiet} />
      <MainMetrics statistic={statistic} />
    </div>
  )
}
