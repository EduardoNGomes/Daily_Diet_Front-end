import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'
import { Header } from '../components/Header'
import { formateDate } from '../utils/formateDate'
import { Circle, PencilSimpleLine, Trash } from '@phosphor-icons/react'
import { Button } from '../components/Button'
import * as Dialog from '@radix-ui/react-dialog'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify'

import { api } from '../lib/axios'
import { ApiResponse, MealsProps } from '../types/App-types'
import { AxiosError } from 'axios'

export const Details = () => {
  const [meal, setMeal] = useState({} as MealsProps)
  const [cookie] = useCookies(['token'])

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  let date
  if (meal.updated_at) {
    date = formateDate(meal.updated_at)
  }

  const handlerChangePageToHome = (id: string) => {
    navigate(`/edit/${id}`)
  }

  const handleFakeClick = async () => {
    console.log('fake click')
  }

  const handleDeleteFood = async () => {
    setButtonDisabled(true)
    try {
      const response = await api.delete(`/meals/${params.id}`, {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      toast.success(response.data, { autoClose: 3000, theme: 'colored' })

      navigate('/')
    } catch (error) {
      setButtonDisabled(false)
      if (error instanceof Error) {
        if (error instanceof AxiosError) {
          const axiosError = error as AxiosError
          if (axiosError.response?.data) {
            console.log(axiosError.response)
            const errorMessage = axiosError.response.data as ApiResponse
            alert(errorMessage.message ?? 'undefined')
          }
        } else {
          console.log(error)
        }
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get(`/meals/${params.id}`, {
          headers: {
            Authorization: `Bearer ${cookie.token}`,
          },
        })
        setMeal(response.data)
      } catch (error) {
        if (error instanceof Error) {
          if (error instanceof AxiosError) {
            const axiosError = error as AxiosError
            if (axiosError.response?.data) {
              console.log(axiosError.response)
              const errorMessage = axiosError.response.data as ApiResponse
              alert(errorMessage.message ?? 'undefined')
            }
          } else {
            console.log(error)
          }
        }
      }
    }
    getData()
  }, [cookie, params])
  return (
    <LayoutPag color={meal.isOnDiet === 1 ? 'bg-green-light' : 'bg-red-light'}>
      <Header title="Refeição" iconColor="text-gray-2" />
      <Section>
        <div className="flex flex-1 flex-col items-start gap-6 self-start">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-gray-1">{meal.name}</p>
            <p className="text-base font-normal text-gray-2">
              {meal.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-gray-1">Data e hora</p>
            <p className="text-base font-normal text-gray-2">{date}</p>
          </div>
          <p className="flex w-fit items-center justify-center gap-2 rounded-full bg-gray-6 px-4 py-2">
            <Circle
              weight="fill"
              size={10}
              className={`${
                meal.isOnDiet === 1 ? 'text-green-dark' : 'text-red-dark'
              }`}
            />
            {meal.isOnDiet === 1 ? 'dentro da dieta' : 'fora da dieta'}
          </p>
        </div>
        <Button
          title="Editar refeição"
          onClick={() => handlerChangePageToHome(meal.id)}
          Icon={PencilSimpleLine}
        />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button
              title="Excluir refeição"
              onClick={handleFakeClick}
              Icon={Trash}
              color="white"
            />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-overlay" />
            <Dialog.Content className="fixed left-2/4 top-2/4 flex w-10/12 -translate-x-2/4 -translate-y-2/4 flex-col gap-8 rounded-lg bg-gray-7 px-6 py-10">
              <Dialog.Title className="text-center text-lg font-bold text-gray-2">
                Deseja realmente excluir o registro da refeição?
              </Dialog.Title>
              <div className="flex gap-2">
                <Dialog.Close asChild>
                  <Button
                    onClick={handleFakeClick}
                    title="Cancelar"
                    color="white"
                  />
                </Dialog.Close>
                <Button
                  onClick={handleDeleteFood}
                  title="Sim, exluir"
                  disabled={buttonDisabled}
                />
                <ToastContainer />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Section>
    </LayoutPag>
  )
}
