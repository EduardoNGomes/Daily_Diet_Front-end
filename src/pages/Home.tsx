import { Plus } from '@phosphor-icons/react'

import { Profile } from '../components/Profile'
import { Statistic } from '../components/Statistic'
// Simulate image User
import { Button } from '../components/Button'
import { AllMeals } from '../components/AllMeals'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { useCookies } from 'react-cookie'
import { MealsProps, StatisticsProps, UserProps } from '../types/App-types'

interface HomeDataProps {
  data: string
  items: MealsProps[]
}

export const Home = () => {
  const navigate = useNavigate()
  const [cookie] = useCookies(['token'])
  const [meals, setMeals] = useState<HomeDataProps[] | []>([])
  const [statistic, setStatistic] = useState({} as StatisticsProps)
  const [user, setUser] = useState({} as UserProps)

  const handlerChangePageToNew = () => {
    navigate('/new')
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const [responseMeal, responseStatistic, responseUser] =
          await Promise.all([
            api.get('meals', {
              headers: {
                Authorization: `Bearer ${cookie.token}`,
              },
            }),
            api.get('statistic', {
              headers: {
                Authorization: `Bearer ${cookie.token}`,
              },
            }),
            api.get('users', {
              headers: {
                Authorization: `Bearer ${cookie.token}`,
              },
            }),
          ])
        setUser(responseUser.data)
        setMeals(responseMeal.data)
        setStatistic(responseStatistic.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [cookie])

  return (
    <main className="flex flex-col gap-10 p-6 ">
      <Profile avatarUrl={user.avatarUrl} />
      <Statistic
        percentage={
          Number(statistic.percentageOnDiet) >= 50
            ? statistic.percentageOnDiet
            : statistic.percentageOffDiet
        }
      />
      <div className="flex flex-col items-center gap-3">
        <h3 className="self-start text-base leading-5 text-gray-1">
          Refeições
        </h3>

        <Button
          title="Nova refeição"
          Icon={Plus}
          onClick={handlerChangePageToNew}
        />
      </div>

      {meals.map((element) => (
        <AllMeals key={element.data} AllMeals={element} />
      ))}
    </main>
  )
}
