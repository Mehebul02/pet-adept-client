import { useEffect, useState } from "react";
import Container from "../../shared/Container";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";
import { useSearchParams } from "react-router-dom";

const Pets = () => {
  const axiosCommon = useAxiosCommon();
  const[params,setParams] = useSearchParams()
  const category =params.get('category')
  console.log(category);
  const { data: pets = [],isLoading } = useQuery({
    queryKey: ["pets",category],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/pets?category=${category}`);
      return data;
    },
  });
// if(isLoading){
//     return <LoadingSpinner/>
// }
  return (
    <Container>
      {pets && pets.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
          {pets.map((pet) => (
            <Card key={pet._id} pet={pet} isLoading={isLoading} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <div>
            <h1 className="text-2xl font-poppins font-medium">No Pets Available In This Category!</h1>
            <h1 className="text-xl font-poppins">Please Select Other Categories.</h1>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Pets;
