// import { FaDonate, FaTimes } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";

import usePets from "../../hooks/usePets";
import Container from "../shared/Container";

import PetCard from "./PetCard";

import SkeletonPetsCart from "../../components/skeletonPetsCart/SkeletonPetsCart";
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
  const [pets, isLoading] = usePets();
  if (isLoading) {
    return <SkeletonPetsCart />;
  }

  return (
    <Container>
      <Helmet>
        <title>Paws Nest-Pet Listing</title>
      </Helmet>
      <div className="my-4 ">
        <div className="flex items-center p-10 gap-10">
          <div className="flex">
            <input
              type="text"
              placeholder="Search pets"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="text-xl font-poppins px-4 py-2 ml-6 border rounded-lg text-[#F69B03] font-semibold ">
              Search
            </button>
          </div>
          <div>
            <select
              id="category"
              value=""
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
        <div className="grid grid-cols-1 md:grid-cols-3">
          {pets.map((pet) => (
            <PetCard key={pet._id} pet={pet} isLoading={isLoading}></PetCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PetListing;
