import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

import imgLogo from '../assets/Logo.svg'
import { FormLogin } from '../components/FormLogin'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <LayoutPag color="bg-green-dark">
      <img src={imgLogo} alt="" className="mx-auto h-28 w-28" />

      <Section>
        <h1 className="text-xl font-bold text-gray-2">Crie sua conta</h1>
        <FormLogin type="create" />
        <button
          className="w-fit  p-2 text-sm font-bold hover:text-gray-3"
          onClick={handleBack}
        >
          voltar
        </button>
      </Section>
    </LayoutPag>
  )
}
