import { EnvelopeSimple, User } from '@phosphor-icons/react'
import { Button } from '../components/Button'
import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

import imgLogo from '../assets/Logo.svg'
import { ChangeEvent, useState } from 'react'

export const SignUp = () => {
  const [imageSelected, setImageSelected] = useState<string | null>(null)

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])
    setImageSelected(previewURL)
  }

  const handleClick = () => {
    console.log('hi')
  }
  return (
    <LayoutPag color="bg-green-dark">
      <img src={imgLogo} alt="" className="mx-auto h-28 w-28" />

      <Section>
        <h1 className="text-xl font-bold text-gray-2">Crie sua conta</h1>
        <form className="flex w-5/6 flex-col gap-4">
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

          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="name"
              className="ml-1 text-sm font-bold text-gray-1"
            >
              Nome:
            </label>
            <User size={18} className="absolute bottom-3 left-3 text-gray-3" />
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
              placeholder="digite seu nome"
            />
          </div>

          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="email"
              className="ml-1 text-sm font-bold text-gray-1"
            >
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
            />
          </div>

          <div className="relative flex flex-col gap-1">
            <label
              htmlFor="password"
              className="ml-1 text-sm font-bold text-gray-1"
            >
              Senha:
            </label>
            <EnvelopeSimple
              size={18}
              className="absolute bottom-3 left-3 text-gray-3"
            />
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-full border border-gray-6 py-2 pl-8 pr-2 text-gray-2 outline-green-mid focus:outline-green-mid"
              placeholder="digite sua senha"
            />
          </div>

          <Button onClick={handleClick} title="Entrar" />
        </form>
        <button className="w-5/6 text-sm">voltar</button>
      </Section>
    </LayoutPag>
  )
}
