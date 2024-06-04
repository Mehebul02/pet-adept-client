import { useState } from "react";
import Container from "../../shared/Container";
import { useForm } from "react-hook-form";
import Select from 'react-select';
// pets category 
const options = [
    { value: 'cats', label: 'Cats' },
    { value: 'rabbits', label: 'Rabbits' },
    { value: 'dogs', label: 'Dogs' },
    { value: 'fish', label: 'Fish' },
    { value: 'birds', label: 'Birds' },
  ];

const AddPets = () => {
  const [imagePreview, setImagePreview] = useState();
  const [imageText, setImageText] = useState("Upload image");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const [selectedOption, setSelectedOption] = useState(null);
  //   handle img
  const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image));
    setImageText(image.name);
  };
  return (
    <Container>
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
                    <input
                      className="text-sm cursor-pointer w-80 hidden"
                      type="file"
                      name="image"
                      onChange={(e) => handleImage(e.target.files[0])}
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div
                      className="bg-[#005A55] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3
    "
                    >
                      {imageText.length > 20
                        ? imageText.split(".")[0].slice(0.15) +
                          "..." +
                          imageText.split(".")[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className="h-20 w-20 object-cover overflow-hidden flex items-center ">
                {imagePreview && (
                  <img
                    className="rounded-lg border-2 border-[#f43f5e]"
                    src={imagePreview}
                  ></img>
                )}
              </div>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/* pet name  */}
           <label className="form-control w-full ">
        <div className="label">
       <span className="label-text text-xl font-poppins font-medium ">Name</span>
    </div>
  <input type="text" placeholder="Pet name" className="input input-bordered valid:border-[#005A55] w-full " />
 
</label>
            {/* pet Age  */}
           <label className="form-control w-full ">
          <div className="label">
    <span className="label-text text-xl font-poppins font-medium ">Age</span>
  </div>
  <input type="text" placeholder="Pet name" className="input input-bordered valid:border-[#005A55] w-full " />
 
</label>
{/* pet category */}
<div className="">
<label className="form-control w-full ">
          <div className="label">
    <span className="label-text text-xl font-poppins font-medium ">Age</span>
  </div>
  <Select styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'green' : 'green',
    }),
  }}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      /> 
</label>
</div>
           </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddPets;
