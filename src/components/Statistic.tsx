import { ArrowUpRight } from '@phosphor-icons/react'

interface StatisticProps {
  percentage: string
}

export const Statistic = ({ percentage }: StatisticProps) => {
  return (
    <div
      className={`flex w-full flex-col items-center gap-2 rounded px-2 pb-6   pt-2 ${
        Number(percentage) >= 50 ? 'bg-green-light' : 'bg-red-light'
      }`}
    >
      <span className="self-end">
        <ArrowUpRight
          size={32}
          className={
            Number(percentage) >= 50 ? 'text-green-dark' : 'text-red-dark'
          }
        />
      </span>
      <h2 className="text-5xl font-bold leading-10 text-gray-1">
        <span>{percentage}</span>%
      </h2>
      <p className="text-sm text-gray-2">das refeições dentro da dieta</p>
    </div>
  )
}
