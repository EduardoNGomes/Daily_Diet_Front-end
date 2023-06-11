import { Profile } from '../components/Profile'
import { Statistic } from '../components/Statistic'

export const Home = () => {
  return (
    <main className="flex flex-col gap-10">
      <Profile />
      <Statistic />
    </main>
  )
}
