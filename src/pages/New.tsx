import { ButtonForm } from '../components/ButtonForm'
import { Header } from '../components/Header'
import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'

export const New = () => {
  return (
    <LayoutPag color="bg-gray-5">
      <Header title="Nova refeição" iconColor="text-gray-2" />
      <Section>
        <form className="w-full flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-gray-2 font-bold text-sm">
              Nome
            </label>
            <input
              type="text"
              id="name"
              className="p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Descrição</label>
            <textarea
              name=""
              id="description"
              className="resize-none p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal h-32"
            />
          </div>

          <div className="flex  gap-2">
            <div>
              <label htmlFor="data" className="text-gray-2 font-bold text-sm">
                Data
              </label>
              <input
                type="text"
                id="data"
                className="p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal"
                placeholder="dd/mm/yyyy"
              />
            </div>

            <div>
              <label htmlFor="time" className="text-gray-2 font-bold text-sm">
                Hora
              </label>
              <input
                type="text"
                id="time"
                className="p-3 rounded-md w-full border border-gray-5 text-gray-1 text-base font-normal"
                placeholder="hh:mm"
              />
            </div>
          </div>

          <p>Está dentro da dieta?</p>
          <div>
            <ButtonForm title="Sim" active={true} onDiet={true} />
          </div>
        </form>
      </Section>
    </LayoutPag>
  )
}
