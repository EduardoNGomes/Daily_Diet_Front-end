import { Profile } from '../components/Profile'
import { Statistic } from '../components/Statistic'
// Simulate image User
import perfil from '../assets/perfil.jpg'
import { ButtonNewMeal } from '../components/ButtonNewMeal'
import { AllMeals } from '../components/AllMeals'

// simulate statisticUser
const statistic = {
  allMeals: 4,
  mealsOnDiet: 2,
  mealsOffDiet: 2,
  dietSequence: 1,
  percentageOnDiet: '50.00',
  percentageOffDiet: '50.00',
}
const response = [
  {
    data: '2023-06-09',
    items: [
      {
        id: '870170af-7572-402c-8837-9d7aaf3bee49',
        user_id: '17e815c6-79d2-4c6c-b8ae-e6357a2874d2',
        name: 'Frango grelhado',
        description: '200g de peito de frango grelhado',
        isOnDiet: 1,
        created_at: '2023-06-09 21:35:13',
        updated_at: '2023-06-09 21:35:13',
      },
      {
        id: '4dad6166-3f8c-4341-b117-82f706da55b4',
        user_id: '17e815c6-79d2-4c6c-b8ae-e6357a2874d2',
        name: 'Cuzcuz',
        description: 'Coco coberto de leite e leite condensado',
        isOnDiet: 0,
        created_at: '2023-06-09 21:37:30',
        updated_at: '2023-06-09 21:37:30',
      },
    ],
  },
  {
    data: '2023-06-10',
    items: [
      {
        id: 'abb68100-93b6-4fa3-850f-f4114cd9e9be',
        user_id: '17e815c6-79d2-4c6c-b8ae-e6357a2874d2',
        name: 'Cuzcuz',
        description: 'Coco coberto de leite e leite condensado',
        isOnDiet: 0,
        created_at: '2023-06-10 17:47:34',
        updated_at: '2023-06-10 17:47:34',
      },
      {
        id: 'afa290d5-98d8-48b6-90b3-20e42a0a6365',
        user_id: '17e815c6-79d2-4c6c-b8ae-e6357a2874d2',
        name: 'Carne de Digimon',
        description: 'Agomom e Patagom desfiado',
        isOnDiet: 1,
        created_at: '2023-06-10 18:24:54',
        updated_at: '2023-06-10 18:24:54',
      },
    ],
  },
]

export const Home = () => {
  return (
    <main className="flex flex-col gap-10">
      <Profile avatarUrl={perfil} />
      <Statistic
        percentage={
          Number(statistic.percentageOnDiet) >= 50
            ? statistic.percentageOnDiet
            : statistic.percentageOffDiet
        }
      />
      <ButtonNewMeal />
      {response.map((element) => (
        <AllMeals key={element.data} AllMeals={element} />
      ))}
    </main>
  )
}
