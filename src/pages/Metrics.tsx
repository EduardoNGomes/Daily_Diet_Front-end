import { Header } from '../components/Header'
import { LayoutPag } from '../components/LayoutPage'
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
    <LayoutPag
      color={
        Number(statistic.percentageOnDiet) >= 50 ? 'bg-green-mid' : 'bg-red-mid'
      }
    >
      <Header
        title={`${statistic.percentageOnDiet}%`}
        subtitle="das refeições dentro da dieta"
        iconColor={
          Number(statistic.percentageOnDiet) >= 50
            ? 'text-green-dark'
            : 'text-red-dark'
        }
      />
      <MainMetrics statistic={statistic} />
    </LayoutPag>
  )
}
