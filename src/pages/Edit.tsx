import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

const dataTest = {
  id: '870170af-7572-402c-8837-9d7aaf3bee49',
  user_id: '17e815c6-79d2-4c6c-b8ae-e6357a2874d2',
  name: 'Frango grelhado',
  description: '200g de peito de frango grelhado',
  isOnDiet: 1,
  created_at: '2023-06-09 21:35:13',
  updated_at: '2023-06-09 21:35:13',
}

export const Edit = () => {
  return (
    <LayoutPag color="bg-gray-5">
      <Header title="Nova refeição" iconColor="text-gray-2" />
      <Section>
        <Form state="update" data={dataTest} />
      </Section>
    </LayoutPag>
  )
}
