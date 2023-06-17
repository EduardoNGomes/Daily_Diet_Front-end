import { ChangeEvent, useState } from 'react'
import { Button } from './Button'
import { api } from '../lib/axios'
import { EnvelopeSimple, LockOpen, User } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

interface FormLoginProps {
  type: 'create' | 'entry' | 'update'
}

export const FormLogin = ({ type }: FormLoginProps) => {
  const navigate = useNavigate()
  const [imageSelected, setImageSelected] = useState<string | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<FileList | null>(null)

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [oldPassword, setOldPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setAvatarUrl(files)
    setImageSelected(previewURL)
  }
  const handleClickButton = async () => {
    switch (type) {
      case 'create': {
        if (
          email.length === 0 ||
          password.length === 0 ||
          name.length === 0 ||
          imageSelected === null
        ) {
          return alert('Preencha todos os campos')
        }

        const form = new FormData()
        form.append('name', name)
        form.append('email', email)
        form.append('password', password)
        form.append('avatarImage', avatarUrl![0])
        try {
          const response = await api.post('/users', form)
          alert(response.data)
          navigate('/')
          break
        } catch (error) {
          return console.log(error)
        }
      }
      case 'entry': {
        if (!email || !password) {
          return alert('Preencha todos os campos')
        }
        try {
          await api.post('/auth', {
            email,
            password,
          })
          window.location.reload()
        } catch (error) {
          console.log(error)
        }
        break
      }

      default: {
        console.log('hello')
      }
    }
  }
  return (
    <form className="flex w-full flex-col gap-4">
      {type === 'entry' ? (
        ''
      ) : (
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
      )}

      {type === 'entry' ? (
        ''
      ) : (
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
            required={type === 'create'}
          />
        </div>
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
          required
        />
      </div>

      {type === 'update' ? (
        <>
          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="oldPassword"
              className="ml-1 text-sm font-bold text-gray-1"
            >
              Senha:
            </label>
            <LockOpen
              size={18}
              className="absolute bottom-3 left-3 text-gray-3"
            />
            <input
              type="oldPassword"
              name="oldPassword"
              id="oldPassword"
              className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
              placeholder="digite sua senha"
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              required
            />
          </div>

          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="newPassword"
              className="ml-1 text-sm font-bold text-gray-1"
            >
              Senha:
            </label>
            <LockOpen
              size={18}
              className="absolute bottom-3 left-3 text-gray-3"
            />
            <input
              type="newPassword"
              name="newPassword"
              id="newPassword"
              className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
              placeholder="digite sua senha"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              required
            />
          </div>
        </>
      ) : (
        <div className="relative flex flex-col gap-1">
          <label
            htmlFor="password"
            className="ml-1 text-sm font-bold text-gray-1"
          >
            Senha:
          </label>
          <LockOpen
            size={18}
            className="absolute bottom-3 left-3 text-gray-3"
          />
          <input
            type="password"
            name="password"
            id="password"
            className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
            placeholder="digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
      )}

      <Button onClick={handleClickButton} title="Entrar" />
    </form>
  )
}
