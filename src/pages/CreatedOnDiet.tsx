import imgOnDiet from '../assets/on-diet.png'
import { TemplatePageCreated } from '../components/TemplatePageCreated'

export const CreatedOnDiet = () => {
  const handleChangePage = () => {
    console.log('hi')
  }

  return (
    <TemplatePageCreated
      onClick={handleChangePage}
      onDiet={true}
      imgSrc={imgOnDiet}
      title={'Continue assim!'}
    />
  )
}
