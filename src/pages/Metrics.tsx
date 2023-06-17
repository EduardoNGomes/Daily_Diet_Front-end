import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { LayoutPag } from '../components/LayoutPage'
import { MainMetrics } from '../components/MainMetrics'
import { StatisticsProps } from '../types/App-types'
import { api } from '../lib/axios'
import { useCookies } from 'react-cookie'

export const Metrics = () => {
  const [statistic, setStatistic] = useState({} as StatisticsProps)
  const [cookie] = useCookies(['token'])

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('statistic', {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
          },
        })

        setStatistic(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [cookie])
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
