import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

import imgLogo from '../assets/Logo.svg'
import { FormLogin } from '../components/FormLogin'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const navigate = useNavigate()
  const handleSignUp = () => {
    navigate('/signup')
  }
  return (
    <LayoutPag color="bg-green-dark">
      <img src={imgLogo} alt="" className="mx-auto h-28 w-28" />

      <Section>
        <h1 className="text-xl font-bold text-gray-2">Acesse a aplicação</h1>
        <FormLogin type="entry" />
        <button className="w-5/6 text-sm" onClick={handleSignUp}>
          crie sua conta
        </button>
      </Section>
    </LayoutPag>
  )
}
