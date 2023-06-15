import imgOnDiet from '../assets/on-diet.png'
import imgOffDiet from '../assets/off-diet.png'
import { TemplatePageCreated } from '../components/TemplatePageCreated'

export const Created = () => {
  const params = {
    isOnDiet: false,
  }
  const handleChangePage = () => {
    console.log('hi')
  }

  return (
    <TemplatePageCreated
      onClick={handleChangePage}
      onDiet={params.isOnDiet === true}
      imgSrc={params.isOnDiet === true ? imgOnDiet : imgOffDiet}
      title={params.isOnDiet === true ? 'Continue assim!' : 'Que pena!'}
    />
  )
}
