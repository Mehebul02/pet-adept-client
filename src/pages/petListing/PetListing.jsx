// import { FaDonate, FaTimes } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import Container from "../shared/Container";
import PetCard from "./PetCard";
import SkeletonPetsCart from "../../components/skeletonPetsCart/SkeletonPetsCart";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// import { Dropdown } from 'flowbite-react';
// import { useState } from 'react';

const PetListing = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [decs,SetDecs]=useState(true)
  const { data: pets = [], isLoading } = useQuery({
    queryKey: ["pets", search,],
    queryFn: async () => {
      const { data } = await axiosCommon(`/allPets?search=${search}`);
      return data;
    },
  });


  const scrollParentRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log(searchText);
  };
  const handleSort =(e)=>{
    e.preventDefault()
    const date=e.target.date.value
    SetDecs(date)
    console.log('sdfsdfsdf');
  }
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
            {/* handle search  */}
            <form onSubmit={handleSearch}>
              <div className="flex">
                <input
                  type="text"
                  name="search"
                  placeholder="Search pets"
                  className="input input-bordered w-full "
                />
                <button className="text-xl font-poppins px-4 py-2 ml-6 border btn-outline rounded-lg text-[#F69B03] font-semibold ">
                  Search
                </button>
                <div className="mb-4"></div>
              </div>
            </form>
          </div>
          {/* sorted input  */}
          <div className="mx-auto">
            <form onSubmit={handleSort}>
              <select
                value=""
                name="date"
                id="date"
                className="border-2 p-4 rounded-lg border-green-800"
              >
                <option value="">Sorted By </option>
                <option value="descending">descending</option>
              </select>
            </form>
            {/* <button onClick={()=>SetDec(dec)}>descending</button> */}
          </div>
        </div>

     

        <div >
        <div  ref={scrollParentRef}>
            <InfiniteScroll
                pageStart={0}
                dataLength={pets.length} // Fixed dataLength to use pets.length
                // loadMore={loadFunc} // Uncomment to use loadFunc
                hasMore={true} // Adjust this as needed based on your condition
                loader={<div className="loader" key={0}>Loading ...</div>}
                useWindow={false}
                getScrollParent={() => scrollParentRef.current}
            >
               <div className="grid grid-cols-1 md:grid-cols-3">
               {pets.map((pet) => (
                    <PetCard key={pet._id} pet={pet} isLoading={isLoading} />
                ))}
               </div>
            </InfiniteScroll>
        </div>
</div>
        {/* </InfiniteScroll> */}
      </div>
    </Container>
  );
};

export default PetListing;
