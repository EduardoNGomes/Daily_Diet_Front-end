import { useState } from 'react'
import { Button } from './Button'
import { ButtonForm } from './ButtonForm'

interface FormProps {
  titleFunction: string
}

export const Form = ({ titleFunction }: FormProps) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isOnDietActive, setIsOnDietActive] = useState(false)
  const [isOffDietActive, setIsOffDietActive] = useState(false)

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
    <form className="w-full flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-gray-2 font-bold text-sm">
          Nome
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name=""
          id="description"
          className="resize-none p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal h-14 "
        />
      </div>

      <div className="flex  gap-2">
        <div>
          <label htmlFor="data" className="text-gray-2 font-bold text-sm">
            Data
          </label>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="text"
            id="data"
            className="p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal"
            placeholder="dd/mm/yyyy"
          />
        </div>

        <div>
          <label htmlFor="time" className="text-gray-2 font-bold text-sm">
            Hora
          </label>
          <input
            value={time}
            onChange={(e) => setTime(e.target.value)}
            type="text"
            id="time"
            className="p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal"
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

      <Button title={titleFunction} onClick={handleSubmit} />
    </form>
  )
}
