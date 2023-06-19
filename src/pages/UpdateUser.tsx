import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

import { FormLogin } from '../components/FormLogin'
import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'

export const UpdateUser = () => {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }
  return (
    <LayoutPag color="bg-gray-5">
      <Header title="Atualizar dados do usuario" iconColor="text-gray-1" />

      <Section>
        <h1 className="text-xl font-bold text-gray-2">Acesse a aplicação</h1>
        <FormLogin type="update" />
        <Button onClick={handleBack} title="cancelar" color="white" />
      </Section>
    </LayoutPag>
  )
}
