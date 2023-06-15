import imgOnDiet from '../assets/on-diet.png'
import imgOffDiet from '../assets/off-diet.png'
import { TemplatePageCreated } from '../components/TemplatePageCreated'
import { useNavigate } from 'react-router-dom'

export const Created = () => {
  const navigate = useNavigate()
  const params = {
    isOnDiet: false,
  }
  const handlerChangePageToHome = () => {
    navigate('/')
  }

  return (
    <TemplatePageCreated
      onClick={handlerChangePageToHome}
      onDiet={params.isOnDiet === true}
      imgSrc={params.isOnDiet === true ? imgOnDiet : imgOffDiet}
      title={params.isOnDiet === true ? 'Continue assim!' : 'Que pena!'}
    />
  )
}
