import { useEffect, useState } from 'react'
import { Button } from './Button'
import { ButtonForm } from './ButtonForm'
import { api } from '../lib/axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import InputMask from 'react-input-mask'
import { separateDate } from '../utils/separateDate'
import { ToastContainer, toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { ApiResponse } from '../types/App-types'

interface FormProps {
  state: 'create' | 'update'
  data?: {
    id: string
    user_id: string
    name: string
    description: string
    isOnDiet: boolean | number
    created_at: string
    updated_at: string
  }
}

export const Form = ({ state, data }: FormProps) => {
  const [cookie] = useCookies(['token'])

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const [isOnDietActive, setIsOnDietActive] = useState(false)
  const [isOffDietActive, setIsOffDietActive] = useState(false)

  const navigate = useNavigate()

  const handleONActive = () => {
    setIsOnDietActive((prevState) => !prevState)
    setIsOffDietActive(false)
  }
  const handleOFFActive = () => {
    setIsOffDietActive((prevState) => !prevState)
    setIsOnDietActive(false)
  }

  const handleSubmit = async () => {
    setButtonDisabled(true)
    if (!name || !description || !date || !time) {
      setButtonDisabled(false)

      return toast.warn('Preencha todos os campos', {
        autoClose: 3000,
        theme: 'dark',
      })
    }
    if (!isOnDietActive && !isOffDietActive) {
      setButtonDisabled(false)
      return toast('Informe se está dentro ou fora da dieta')
    }
    switch (state) {
      case 'create': {
        try {
          const response = await api.post(
            '/meals',
            {
              name,
              description,
              isOnDiet: isOnDietActive ? true : isOffDietActive ? false : '',
              created_at: date + ' ' + time,
              updated_at: date + ' ' + time,
            },
            {
              headers: {
                Authorization: `Bearer ${cookie.token}`,
              },
            },
          )
          toast.success(response.data, { autoClose: 3000, theme: 'colored' })
          navigate(
            `/created?type=${
              isOnDietActive ? true : isOffDietActive ? false : ''
            } `,
          )
        } catch (error) {
          setButtonDisabled(false)
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
        break
      }
      case 'update': {
        try {
          const response = await api.put(
            `/meals/${data?.id}`,
            {
              name,
              description,
              isOnDiet: isOnDietActive ? true : isOffDietActive ? false : '',
              created_at: date + ' ' + time,
              updated_at: date + ' ' + time,
            },
            {
              headers: {
                Authorization: `Bearer ${cookie.token}`,
              },
            },
          )
          toast.success(response.data, { autoClose: 3000, theme: 'colored' })
          navigate(`/`)
        } catch (error) {
          setButtonDisabled(false)
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

        break
      }
      default: {
        console.log('invalid state')
      }
    }
  }

  useEffect(() => {
    if (data) {
      if (data.name) {
        const date = separateDate(data.updated_at)

        setDate(date[0])
        setTime(date[1])

        setName(data.name)
        setDescription(data.description)
        setIsOnDietActive(data.isOnDiet === 1 || false)
        setIsOffDietActive(data.isOnDiet === 0 || false)
      }
    }
  }, [data])

  return (
    <form className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-bold text-gray-2">
          Nome
        </label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full rounded-md border border-gray-5 p-3 text-base font-normal text-gray-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Descrição</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          name="description"
          id="description"
          className="h-14 w-full resize-none rounded-md border border-gray-5 p-3 text-base font-normal text-gray-1 "
        />
      </div>

      <div className="flex  gap-2 md:w-full">
        <div className="md:w-full">
          <label htmlFor="data" className="text-sm font-bold text-gray-2">
            Data
          </label>
          <InputMask
            mask="99/99/9999"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            id="data"
            name="data"
            className="w-full rounded-md border border-gray-5 p-3 text-center text-base font-normal text-gray-1"
            placeholder="dd/mm/yyyy"
          />
        </div>

        <div className="md:w-full">
          <label htmlFor="time" className="text-sm font-bold text-gray-2">
            Hora
          </label>
          <InputMask
            type="text"
            mask="99:99"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            id="hour"
            name="hour"
            className="w-full rounded-md border border-gray-5 p-3 text-center text-base font-normal text-gray-1"
            placeholder="hh:mm"
          />
        </div>
      </div>

      <p>Está dentro da dieta?</p>
      <div className="flex gap-2">
        <ButtonForm
          title="Sim"
          active={isOnDietActive}
          onDiet={true}
          onClick={handleONActive}
        />
        <ButtonForm
          title="Não"
          active={isOffDietActive}
          onDiet={false}
          onClick={handleOFFActive}
        />
      </div>

      <Button
        title={state === 'create' ? 'Cadastrar refeição' : 'Salvar alterações'}
        onClick={handleSubmit}
        disabled={buttonDisabled}
      />
      <ToastContainer />
    </form>
  )
}
