import Container from '../../pages/shared/Container.jsx'
import CategoryBox from './CategoryBox'
import { categories } from './CategoriesData.js'
const Categories = () => {
  return (
    <Container>
      <div className='pt-4 flex items-center justify-center space-x-20  overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </Container>
  )
}

export default Categories
