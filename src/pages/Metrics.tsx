import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { LayoutPag } from '../components/LayoutPage'
import { MainMetrics } from '../components/MainMetrics'
import { ApiResponse, StatisticsProps } from '../types/App-types'
import { api } from '../lib/axios'
import { useCookies } from 'react-cookie'
import { AxiosError } from 'axios'
import { SkeletonLoading } from '../components/SkeletonLoading'
import { toast, ToastContainer } from 'react-toastify'

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
        if (error instanceof Error) {
          if (error instanceof AxiosError) {
            const axiosError = error as AxiosError
            if (axiosError.response?.data) {
              console.log(axiosError.response)
              const errorMessage = axiosError.response.data as ApiResponse
              toast.error(errorMessage.message ?? 'undefined', {
                autoClose: 3000,
                theme: 'colored',
              })
            }
          } else {
            console.log(error)
          }
        }
      }
    }
    getData()
  }, [cookie])
  if (statistic.percentageOnDiet === undefined) {
    return <SkeletonLoading />
  }
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
      <ToastContainer />
    </LayoutPag>
  )
}
