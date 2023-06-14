import imgOffDiet from '../assets/off-diet.png'
import { TemplatePageCreated } from '../components/TemplatePageCreated'

export const CreatedOffDiet = () => {
  const handleChangePage = () => {
    console.log('hi')
  }

  return (
    <TemplatePageCreated
      onClick={handleChangePage}
      onDiet={false}
      imgSrc={imgOffDiet}
      title={'Que pena!'}
    />
  )
}
