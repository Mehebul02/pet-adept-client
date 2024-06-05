import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Container from "../../shared/Container";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdatePet = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user,loading}=useAuth()
    const axiosCommon = useAxiosCommon()
    const axiosSecure =useAxiosSecure()
    const navigate = useNavigate()
    const { id } = useParams();
    const { data: pet = {}, isLoading } = useQuery({
      queryKey: ["pet", id],
      enabled: !loading,
      queryFn: async () => {
        const { data } = await axiosCommon.get(`/pet/${id}`);
        return data;
      },
    });
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };

        const res = await axiosCommon.post(image_hosting_api, imageFile, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        if (res.data.success) {
          const petsItem = {
            image: res.data.data.display_url,
            name: data.petName,
            category: data.category,
            age: data.age,
            location: data.location,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            email: user?.email,
            date: Date.now(),
            adopted:false,
            status:'Not Adopted'
          
          };
          console.log(petsItem);
          const petsRes = await axiosSecure.patch(`/pets/${pet._id}`, petsItem);
          console.log(petsRes.data);
          if (petsRes.data.modifiedCount >0) {
           
            toast.success("Update pets successfully");
            navigate('/dashboard/my-added')
          }
        }
        console.log(imageFile);
        console.log(res.data);
    }
    return (
        <Container>
            <Helmet>
                <title>Paws Nest - Update</title>
            </Helmet>
        <div className="p-6 ">
          <h1 className="text-4xl text-[#005A55] text-center font-poppins font-semibold my-4">
            Add Pets
          </h1>
          {/* pet form  */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* img  */}
              <div className=" p-4 dark:bg-white w-full  mx-auto  rounded-lg flex gap-6 items-center">
                <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col  ">
                    <label>
                      <div className="form-control w-full my-6">
                        <input
                          {...register("image")}
                        //  defaultValue={pet.image}
                          required
                          type="file"
                          className="file-input file-input-bordered w-full max-w-xs"
                        />
                      </div>
                     
                    </label>
                  </div>
                </div>
               
              </div>
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {/* pet name  */}
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-xl font-poppins font-medium ">
                      Name
                    </span>
                  </div>
                  <input
                    {...register("petName")}
                    name="petName"
                    defaultValue={pet.name}
                    type="text"
                    placeholder="Pet name"
                    className="input input-bordered valid:border-[#005A55] w-full "
                  />
                </label>
                {/* pet Age  */}
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-xl font-poppins font-medium ">
                      Age
                    </span>
                  </div>
                  <input
                    {...register("age")}
                    name="age"
                    defaultValue={pet.age}
                    type="number"
                    placeholder="Pet Age"
                    className="input input-bordered valid:border-[#005A55] w-full "
                  />
                </label>
                {/* pet category */}
  
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-xl font-poppins font-medium ">
                      Category
                    </span>
                  </div>
                  {/* <Select
                    {...register("category")}
                 
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? "green" : "green",
                      }),
                    }}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  /> */}
                  <select {...register("category")} defaultValue={pet.category}>

          <option value="carts">Carts</option>
          <option value="rabbits">Rabbits</option>
          <option value="dogs">Dogs</option>
          <option value="fish">Fish</option>
          <option value="birds">Birds</option>
        </select>
                </label>
                {/* pet location  */}
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-xl font-poppins font-medium ">
                      Pet Pickup Location
                    </span>
                  </div>
                  <input
                    {...register("location")}
                    defaultValue={pet.location}
                    name="location"
                    type="text"
                    placeholder="Enter the location where the pet can be picked up"
                    className="input input-bordered valid:border-[#005A55] w-full "
                  />
                </label>
                {/* Short description,  */}
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-xl font-poppins font-medium ">
                      Short Description
                    </span>
                  </div>
                  <input
                    {...register("shortDescription")}
                    defaultValue={pet.shortDescription}
                    name="shortDescription"
                    type="text"
                    placeholder="Short description"
                    className="input input-bordered valid:border-[#005A55] w-full "
                  />
                </label>
                {/* long description,  */}
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text text-xl font-poppins font-medium ">
                      Long Description
                    </span>
                  </div>
                  <textarea
                    {...register("longDescription")}
                    defaultValue={pet.longDescription}
                    name="longDescription"
                    placeholder="Long description,"
                    rows="3"
                    className="valid:border-[#005A55] textarea textarea-bordered textarea-lg w-full c"
                  ></textarea>
                </label>
              </div>
              {/* button  */}
              <div>
                <button className="px-8 py-3 text-lg font-semibold rounded bg-[#F69B03] text-white font-poppins dark:bg-violet-600 dark:text-gray-50">
                  {loading ? (
                    <AiOutlineLoading3Quarters className=" font-semibold text-xl animate-spin " />
                  ) : (
                    "Update Pet"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    );
};

export default UpdatePet;