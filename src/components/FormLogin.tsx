import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from './Button'
import { api } from '../lib/axios'
import { EnvelopeSimple, LockOpen, User } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { ApiResponse } from '../types/App-types'
import { SkeletonLoading } from './SkeletonLoading'

interface FormLoginProps {
  type: 'create' | 'entry' | 'update'
}

export const FormLogin = ({ type }: FormLoginProps) => {
  const [cookie, setCookie] = useCookies(['token'])
  const navigate = useNavigate()

  const [buttonDisabled, setButtonDisabled] = useState(false)

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
  const emailIsValid = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (regex.test(email)) {
      return true
    } else {
      return false
    }
  }
  const handleClickButton = async () => {
    setButtonDisabled(true)
    switch (type) {
      case 'create': {
        const validEmail = emailIsValid(email)
        if (!validEmail) {
          setButtonDisabled(false)
          return toast.warn('Email inválido', {
            autoClose: 3000,
            theme: 'dark',
          })
        }
        if (password.length < 8) {
          setButtonDisabled(false)
          return toast.warn('Senha deve conter no mínimo 8 caracteres', {
            autoClose: 3000,
            theme: 'dark',
          })
        }
        if (
          email.length === 0 ||
          password.length === 0 ||
          name.length === 0 ||
          imageSelected === null
        ) {
          setButtonDisabled(false)
          return toast.warn('Preencha todos os campos', {
            autoClose: 3000,
            theme: 'dark',
          })
        }

        const form = new FormData()
        form.append('name', name)
        form.append('email', email)
        form.append('password', password)
        form.append('avatarImage', avatarUrl![0])
        try {
          const response = await api.post('/users', form)
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
                toast.error(errorMessage.message ?? 'undefined', {
                  autoClose: 3,
                })
              }
            } else {
              console.log(error)
            }
          }
        }
        break
      }
      case 'entry': {
        const validEmail = emailIsValid(email)
        if (!validEmail) {
          setButtonDisabled(false)
          return toast.warn('Email inválido', {
            autoClose: 3000,
            theme: 'dark',
          })
        }
        if (!email || !password) {
          setButtonDisabled(false)

          return toast.warn('Preencha todos os campos', {
            autoClose: 3000,
            theme: 'dark',
          })
        }
        try {
          const response = await api.post('/auth', {
            email,
            password,
          })
          setCookie('token', response.data.token)
          window.location.reload()
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
        if (
          email.length === 0 ||
          oldPassword.length === 0 ||
          newPassword.length === 0 ||
          name.length === 0
        ) {
          setButtonDisabled(false)

          return toast.warn('Preencha todos os campos', {
            autoClose: 3000,
            theme: 'dark',
          })
        }

        const form = new FormData()
        form.append('name', name)
        form.append('email', email)
        form.append('newPassword', newPassword)
        form.append('oldPassword', oldPassword)

        if (avatarUrl) {
          form.append('avatarImage', avatarUrl![0])
        }
        try {
          const response = await api.put('/users', form, {
            headers: { Authorization: `Bearer ${cookie.token}` },
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
        console.log('invalid type')
      }
    }
  }

  useEffect(() => {
    const getDate = async () => {
      try {
        const response = await api.get('/users', {
          headers: { Authorization: `Bearer ${cookie.token}` },
        })

        setName(response.data.name)
        setEmail(response.data.email)
        setImageSelected(
          `${api.defaults.baseURL}/users/avatar/${response.data.avatarUrl}`,
        )
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
    if (type === 'update') {
      getDate()
    }
  }, [cookie, type])

  if (type === 'update' && !name) {
    return <SkeletonLoading />
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
          type="email"
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
              Senha antiga:
            </label>
            <LockOpen
              size={18}
              className="absolute bottom-3 left-3 text-gray-3"
            />
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
              placeholder="digite sua senha (min - 8 caracteres)"
              onChange={(e) => setOldPassword(e.target.value)}
              value={oldPassword}
              required
              min="8"
            />
          </div>

          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="newPassword"
              className="ml-1 text-sm font-bold text-gray-1"
            >
              Nova senha:
            </label>
            <LockOpen
              size={18}
              className="absolute bottom-3 left-3 text-gray-3"
            />
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
              placeholder="digite sua senha (min - 8 caracteres)"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              min="8"
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
            placeholder="digite sua senha (min - 8 caracateres)"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            min="8"
            required
          />
        </div>
      )}

      <Button
        onClick={handleClickButton}
        title="Entrar"
        disabled={buttonDisabled}
      />
      <ToastContainer />
    </form>
  )
}
