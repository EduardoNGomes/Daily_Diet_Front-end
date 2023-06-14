import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'
import { Header } from '../components/Header'
import { formateDate } from '../utils/formateDate'
import { Circle, PencilSimpleLine, Trash } from '@phosphor-icons/react'
import { Button } from '../components/Button'
import * as Dialog from '@radix-ui/react-dialog'

const data = {
  id: '870170af-7572-402c-8837-9d7aaf3bee49',
  user_id: '17e815c6-79d2-4c6c-b8ae-e6357a2874d2',
  name: 'Frango grelhado',
  description: '200g de peito de frango grelhado',
  isOnDiet: 1,
  created_at: '2023-06-09 21:35:13',
  updated_at: '2023-06-09 21:35:13',
}

export const Details = () => {
  const handleClick = () => {
    console.log('Click')
  }
  const date = formateDate(data.updated_at)

  console.log(date)

  return (
    <LayoutPag color={data.isOnDiet === 1 ? 'bg-green-light' : 'bg-red-light'}>
      <Header title="Refeição" iconColor="text-gray-2" />
      <Section>
        <div className="flex flex-1 flex-col items-start gap-6 self-start">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold text-gray-1">{data.name}</p>
            <p className="text-base font-normal text-gray-2">
              {data.description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-gray-1">Data e hora</p>
            <p className="text-base font-normal text-gray-2">{date}</p>
          </div>
          <p className="flex w-fit items-center justify-center gap-2 rounded-full bg-gray-6 px-4 py-2">
            <Circle
              weight="fill"
              size={10}
              className={`${
                data.isOnDiet === 1 ? 'text-green-dark' : 'text-red-dark'
              }`}
            />
            {data.isOnDiet === 1 ? 'dentro da dieta' : 'fora da dieta'}
          </p>
        </div>
        <Button
          title="Editar refeição"
          onClick={handleClick}
          Icon={PencilSimpleLine}
        />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button
              title="Excluir refeição"
              onClick={handleClick}
              Icon={Trash}
              color="white"
            />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-overlay" />
            <Dialog.Content className="fixed left-2/4 top-2/4 flex w-10/12 -translate-x-2/4 -translate-y-2/4 flex-col gap-8 rounded-lg bg-gray-7 px-6 py-10">
              <Dialog.Title className="text-center text-lg font-bold text-gray-2">
                Deseja realmente excluir o registro da refeição?
              </Dialog.Title>
              <div className="flex gap-2">
                <Dialog.Close asChild>
                  <Button
                    onClick={handleClick}
                    title="Cancelar"
                    color="white"
                  />
                </Dialog.Close>
                <Button onClick={handleClick} title="Sim, exluir" />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Section>
    </LayoutPag>
  )
}
