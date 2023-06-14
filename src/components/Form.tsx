import { useState } from 'react'
import { Button } from './Button'
import { ButtonForm } from './ButtonForm'

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
  const [name, setName] = useState(data ? data.name : '')
  const [description, setDescription] = useState(data ? data.description : '')
  const [date, setDate] = useState(data ? data.updated_at.split(' ')[0] : '')
  const [time, setTime] = useState('')
  const [isOnDietActive, setIsOnDietActive] = useState(
    data?.isOnDiet === 1 || false,
  )
  const [isOffDietActive, setIsOffDietActive] = useState(
    data?.isOnDiet === 0 || false,
  )

  const handleONActive = () => {
    setIsOnDietActive((prevState) => !prevState)
    setIsOffDietActive(false)
  }
  const handleOFFActive = () => {
    setIsOffDietActive((prevState) => !prevState)
    setIsOnDietActive(false)
  }

  const handleSubmit = () => {
    if (!name || !description) {
      return console.log('aler')
    }
    if (isOnDietActive === false && isOffDietActive === false) {
      return console.log('onDietActive')
    }
    console.log(
      `Nome: ${name}
       Description: ${description}
       IsOnDiet: ${isOnDietActive ? 1 : isOffDietActive ? 0 : ''}`,
    )
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
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="time"
            id="time"
            className="w-full rounded-md border border-gray-5 p-3 text-base font-normal text-gray-1"
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
      />
    </form>
  )
}
