import { EnvelopeSimple, LockOpen, User } from '@phosphor-icons/react'
import { Button } from './Button'
import { ChangeEvent, useState } from 'react'

interface FormLoginProps {
  type: 'create' | 'entry'
}

export const FormLogin = ({ type }: FormLoginProps) => {
  const [imageSelected, setImageSelected] = useState<string | null>(null)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setImageSelected(previewURL)
  }
  const handleClickButton = () => {
    if (type === 'create') {
      console.log('create')
    } else {
      console.log('entry')
    }
  }
  return (
    <form className="flex w-5/6 flex-col gap-4">
      {type === 'create' ? (
        <div className="relative flex flex-col gap-1">
          <label
            htmlFor="image"
            className="rounded-full border border-gray-6 py-2 text-center text-sm font-bold text-gray-2 outline-green-mid focus:outline-green-mid"
          >
            Selecione uma foto
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="hidden"
            placeholder="digite seu nome"
            onChange={handleImageSelect}
          />
          {imageSelected && (
            <img
              src={imageSelected}
              alt=""
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />
          )}
        </div>
      ) : (
        ''
      )}

      {type === 'create' ? (
        <div className="relative flex flex-col gap-1">
          <label htmlFor="name" className="ml-1 text-sm font-bold text-gray-1">
            Nome:
          </label>
          <User size={18} className="absolute bottom-3 left-3 text-gray-3" />
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
            placeholder="digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
      ) : (
        ''
      )}

      <div className="relative flex flex-col gap-1">
        <label htmlFor="email" className="ml-1 text-sm font-bold text-gray-1">
          Email:
        </label>
        <EnvelopeSimple
          size={18}
          className="absolute bottom-3 left-3 text-gray-3"
        />
        <input
          type="text"
          name="email"
          id="email"
          className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
          placeholder="digite seu Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="relative flex flex-col gap-1">
        <label
          htmlFor="password"
          className="ml-1 text-sm font-bold text-gray-1"
        >
          Senha:
        </label>
        <LockOpen size={18} className="absolute bottom-3 left-3 text-gray-3" />
        <input
          type="password"
          name="password"
          id="password"
          className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
          placeholder="digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <Button onClick={handleClickButton} title="Entrar" />
    </form>
  )
}
