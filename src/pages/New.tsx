import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

export const New = () => {
  return (
    <LayoutPag color="bg-gray-5">
      <Header title="Nova refeição" iconColor="text-gray-2" />
      <Section>
        <Form titleFunction="Cadastrar refeição" />
      </Section>
    </LayoutPag>
  )
}
