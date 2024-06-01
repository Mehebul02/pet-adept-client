import PropTypes from 'prop-types'
const Card = ({pet}) => {
    console.log(pet);
    const {name,image,location,age}=pet
    // console.log(image);
    return (
        <div className="max-w-sm border p-4 rounded-xl overflow-hidden shadow-lg m-4">
        {/* <img className="w-72 mx-auto rounded-lg" src={image} alt='' /> */}
        <img src={image} alt="" />
        <div className="flex justify-between px-6 mt-3">
          <div className="font-semibold font-poppins text-xl  mb-2">{name}</div>
          <p className="text-gray-700 font-poppins font-medium text-base"> Age: {age}</p>
        </div>
          <p className="px-6  text-gray-700 text-base font-poppins"><span className='text-orange-600'>Location</span>: {location}</p>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
    );
};
Card.propTypes = {
    room: PropTypes.object,
  }
  
export default Card;