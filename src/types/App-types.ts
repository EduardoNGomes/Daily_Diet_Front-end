export interface StatisticsProps {
  allMeals: number
  mealsOnDiet: number
  mealsOffDiet: number
  dietSequence: number
  percentageOnDiet: string
  percentageOffDiet: string
}

export interface MealsProps {
  id: string
  user_id: string
  name: string
  description: string
  isOnDiet: boolean | number
  created_at: string
  updated_at: string
}
