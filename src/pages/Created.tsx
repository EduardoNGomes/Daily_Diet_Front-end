import imgOnDiet from '../assets/on-diet.png'
import imgOffDiet from '../assets/off-diet.png'
import { TemplatePageCreated } from '../components/TemplatePageCreated'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

export const Created = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const handlerChangePageToHome = () => {
    navigate('/')
  }

  return (
    <TemplatePageCreated
      onClick={handlerChangePageToHome}
      onDiet={searchParams.get('type') === 'true'}
      imgSrc={searchParams.get('type') === 'true' ? imgOnDiet : imgOffDiet}
      title={
        searchParams.get('type') === 'true' ? 'Continue assim!' : 'Que pena!'
      }
    />
  )
}
