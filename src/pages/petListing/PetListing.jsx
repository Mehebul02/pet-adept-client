// import { FaDonate, FaTimes } from 'react-icons/fa';
import img from '../../assets/images/banner/pet3.jpg'
// import { Dropdown } from 'flowbite-react';
// import { useState } from 'react';

const PetListing = () => {
    // const [selectedCategory, setSelectedCategory] = useState('All');
    // const handleCategoryChange = (event) => {
    //     setSelectedCategory(event.target.value);
    //   };
    // const filteredPets = selectedCategory === 'All' 
    // ? pets 
    // : pets.filter(pet => pet.category === selectedCategory);

   
    return (
       <div className='my-4 '>
       <div className='flex items-center p-10 gap-10'>
      <div className='flex'>
      <input type="text" placeholder="Search pets" className="input input-bordered w-full max-w-xs" />
       <button className='text-xl font-poppins px-4 py-2 ml-6 border rounded-lg text-[#F69B03] font-semibold '>Search</button>
      </div>
       <div>
       
      <select
        id="category"
        value=''
        // onChange={onChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="All">Select category</option>
        <option value="Dogs">Dogs</option>
        <option value="Cats">Cats</option>
        <option value="Birds">Birds</option>
      </select>
       </div>
       </div>
      <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className="max-w-sm border p-4 rounded-xl overflow-hidden shadow-lg m-4">
        <img className="w-72 mx-auto rounded-lg" src={img} alt='' />
        <div className="flex justify-between px-6 mt-3">
          <div className="font-semibold font-poppins text-xl  mb-2">Pet Adoption</div>
          <p className="text-gray-700 font-poppins font-medium text-base"> Age: 12</p>
        </div>
          <p className="px-6  text-gray-700 text-base font-poppins"><span className='text-orange-600'>Location</span>: Kushtia</p>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
      {/* card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-72 mx-auto rounded-lg" src={img} alt='' />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Pet Adoption</div>
          <p className="text-gray-700 text-base">Age: 12</p>
          <p className="text-gray-700 text-base">Location: Kushtia</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
      {/* card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-72 mx-auto rounded-lg" src={img} alt='' />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Pet Adoption</div>
          <p className="text-gray-700 text-base">Age: 12</p>
          <p className="text-gray-700 text-base">Location: Kushtia</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
        </div>
      </div>
         </div> 
        
       </div>
    );
};

export default PetListing;