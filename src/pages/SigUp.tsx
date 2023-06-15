import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

import imgLogo from '../assets/Logo.svg'
import { FormLogin } from '../components/FormLogin'

export const SignUp = () => {
  const handleBack = () => {
    console.log('hi')
  }
  return (
    <LayoutPag color="bg-green-dark">
      <img src={imgLogo} alt="" className="mx-auto h-28 w-28" />

      <Section>
        <h1 className="text-xl font-bold text-gray-2">Crie sua conta</h1>

        <FormLogin type="create" />

        <button className="w-5/6 text-sm" onClick={handleBack}>
          voltar
        </button>
      </Section>
    </LayoutPag>
  )
}
