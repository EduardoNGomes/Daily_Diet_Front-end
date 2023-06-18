import { useState } from 'react'
import { Button } from './Button'
import { ButtonForm } from './ButtonForm'
import { api } from '../lib/axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

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

  const [name, setName] = useState(data ? data.name : '')
  const [description, setDescription] = useState(data ? data.description : '')
  const [date, setDate] = useState(data ? data.updated_at.split(' ')[0] : '')
  const [hour, setHour] = useState('')
  const [minutes, setMinutes] = useState('')

  const [isOnDietActive, setIsOnDietActive] = useState(
    data?.isOnDiet === 1 || false,
  )
  const [isOffDietActive, setIsOffDietActive] = useState(
    data?.isOnDiet === 0 || false,
  )

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
    switch (state) {
      case 'create': {
        if (!name || !description || !hour || !minutes) {
          return alert('Preencha todos os campos')
        }
        try {
          const response = await api.post(
            '/meals',
            {
              name,
              description,
              isOnDiet: isOnDietActive ? true : isOffDietActive ? false : '',
              created_at: date + ' ' + hour + ':' + minutes,
              updated_at: date + ' ' + hour + ':' + minutes,
            },
            {
              headers: {
                Authorization: `Bearer ${cookie.token}`,
              },
            },
          )
          alert(response.data)
          navigate(
            `/created?type=${
              isOnDietActive ? true : isOffDietActive ? false : ''
            } `,
          )
        } catch (error) {
          console.log(error)
        }
        break
      }
      case 'update': {
        break
      }
      default: {
        console.log('invalid state')
      }
    }
  }

  return (
    <form className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-bold text-gray-2">
          Nome
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="w-full rounded-md border border-gray-5 p-3 text-base font-normal text-gray-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name=""
          id="description"
          className="h-14 w-full resize-none rounded-md border border-gray-5 p-3 text-base font-normal text-gray-1 "
        />
      </div>

      <div className="flex  gap-2">
        <div>
          <label htmlFor="data" className="text-sm font-bold text-gray-2">
            Data
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            id="data"
            className="w-full rounded-md border border-gray-5 p-3 text-base font-normal text-gray-1"
            placeholder="dd/mm/yyyy"
          />
        </div>

        <div>
          <label htmlFor="time" className="text-sm font-bold text-gray-2">
            Hora
          </label>

          <div className="flex w-fit items-center justify-center rounded-md border border-gray-5 p-1">
            <input
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              type="text"
              id="hour"
              className="w-full bg-gray-7 p-2 text-right text-base font-normal text-gray-1 focus:outline-none"
              placeholder="hh:"
            />
            <span className="w-4 bg-gray-7 text-lg font-bold">:</span>
            <input
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
              type="text"
              id="minutes"
              className="w-full bg-gray-7 p-2 text-left text-base font-normal text-gray-1 focus:outline-none"
              placeholder="mm"
            />
          </div>
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
      />
    </form>
  )
}
