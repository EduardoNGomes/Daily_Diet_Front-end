import { Button } from './Button'

interface TemplatePageCreatedProps {
  title: string
  onDiet: boolean
  imgSrc: string
  onClick: () => void
}

export const TemplatePageCreated = ({
  title,
  onDiet,
  imgSrc,
  onClick,
}: TemplatePageCreatedProps) => {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3 p-5">
      <h1
        className={`text-2xl font-bold ${
          onDiet ? 'text-green-dark' : 'text-red-dark'
        }`}
      >
        {title}
      </h1>
      {onDiet ? (
        <p className="text-center text-lg font-normal text-gray-1">
          Você continua{' '}
          <span className="text-base font-bold">dentro da dieta.</span> Muito
          bem!
        </p>
      ) : (
        <p className="text-center text-lg font-normal text-gray-1">
          Você <span className="text-base font-bold">saiu da dieta</span> dessa
          vez, mas continue se esforçando e não desista!
        </p>
      )}
      <img
        src={imgSrc}
        alt="Representacao de uma mulher saltando de felicidade"
      />
      <div className="w-48">
        <Button title="Ir para a página inicial" onClick={onClick} />
      </div>
    </main>
  )
}
