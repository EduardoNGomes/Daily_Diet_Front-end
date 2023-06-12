import { ArrowLeft } from '@phosphor-icons/react'

interface HeaderMetricsProps {
  percentage: string
}

export const HeaderMetrics = ({ percentage }: HeaderMetricsProps) => {
  return (
    <header className="p-6 flex flex-col items-center">
      <button className="self-start">
        <ArrowLeft
          size={24}
          className={
            Number(percentage) >= 50 ? 'text-green-dark' : 'text-red-dark'
          }
        />
      </button>
      <div className="flex flex-col items-center">
        <h1 className="text-gray-1 text-3xl font-bold">{percentage}%</h1>
        <p className="text-gray-2 font-normal text-sm">
          das refeições dentro da dieta
        </p>
      </div>
    </header>
  )
}
