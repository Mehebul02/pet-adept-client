import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Container from "../../shared/Container";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
const image_hosting_key = import.meta.env.VITE_IMAGE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const CreateDonationCampaign = () => {
  const { register, handleSubmit, reset } = useForm();
  const {user, loading } = useAuth();
  const axiosSecure = useAxiosSecure()
  const axiosCommon = useAxiosCommon()
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const res = await axiosCommon.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const donationCampaignInfo = {
        image: res.data.data.display_url,
        name: data.petName,
        maximumDonate:data.maximumDonate,
        lastDate:data.lastDonate,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        email:user?.email
        
      };
      console.log(donationCampaignInfo);
      const donationRes = await axiosSecure.post(`/donation-campaign`, donationCampaignInfo);
      console.log(donationRes);
      if (donationRes.data.insertedId) {
        reset();
        toast.success(" Create Donation Campaign successfully");
        // navigate('/dashboard/my-added')
      }
    }
    console.log(imageFile);
    console.log(res.data);
  };
  return (
    <Container>
      <div className="p-6 ">
        <h1 className="text-4xl text-[#005A55] text-center font-poppins font-semibold my-4">
        Create Donation Campaign
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
                        {...register("image", { required: true })}
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
                 
                  type="text"
                  placeholder="Pet name"
                  className="input input-bordered valid:border-[#005A55] w-full "
                />
              </label>
              {/* pet Age  */}
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-xl font-poppins font-medium ">
                  Maximum donation amount
                  </span>
                </div>
                <input
                  {...register("maximumDonate")}
                 
                  type="number"
                  placeholder=" Maximum donation amount"
                  className="input input-bordered valid:border-[#005A55] w-full "
                />
              </label>
              {/* pet category */}

              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text text-xl font-poppins font-medium ">
                  Last date of donation
                  </span>
                </div>
                <input
                  {...register("lastDonate")}
                  
                  type="text"
                  placeholder="Last date of donation"
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
                 
                  placeholder="Long description,"
                  rows="3"
                  className="valid:border-[#005A55] textarea textarea-bordered textarea-lg w-full c"
                ></textarea>
              </label>
            </div>
            {/* button  */}
            <div>
              <button className="my-5 px-8 py-3 text-lg font-semibold rounded bg-[#F69B03] text-white font-poppins dark:bg-violet-600 dark:text-gray-50">
                {loading ? (
                  <AiOutlineLoading3Quarters className=" font-semibold text-xl animate-spin " />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CreateDonationCampaign;
