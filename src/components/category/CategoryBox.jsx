import PropTypes from 'prop-types'
import queryString from 'query-string';

import { useNavigate, useSearchParams} from 'react-router-dom';
const CategoryBox = ({ label, icon: Icon }) => {
  const navigate = useNavigate()
  const [params ,setParams] = useSearchParams()
  const category = params.get('category')
  console.log(category === label);
  console.log(params.get('category'))
  const handleClick =()=>{
    let currentQuery ={category:label}
    const url = queryString.stringifyUrl({  
      url:'/',
      query:currentQuery
    })
//  console.log(url);
    navigate(url)
  }

  return (
    <div
    onClick={handleClick}
      className={` 
  
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${category === label && ' border-b-neutral-800 text-neutral-900'}`}
    >
      <Icon size={40} />
      <div className='text-sm text-green-900 font-poppins font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
