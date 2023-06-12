import { ArrowUpRight } from '@phosphor-icons/react'

interface StatisticProps {
  percentage: string
}

export const Statistic = ({ percentage }: StatisticProps) => {
  return (
    <div className="flex flex-col w-full gap-2 items-center pt-2 px-2 pb-6   rounded bg-green-light">
      <span className="self-end">
        <ArrowUpRight size={32} className="text-green-dark" />
      </span>
      <h2 className="text-gray-1 font-bold leading-10 text-5xl">
        <span>{percentage}</span>%
      </h2>
      <p className="text-gray-2 text-sm">das refeições dentro da dieta</p>
    </div>
  )
}
