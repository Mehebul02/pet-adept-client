
import pet3 from '../../../assets/images/banner/pet3.jpg'
import pet from "../../../assets/images/banner/pet.png";
import pet2 from "../../../assets/images/banner/pet2.jpg";
import pet4 from "../../../assets/images/banner/pet4.jpg";
import pet5 from "../../../assets/images/banner//pet5.jpg";
const Banners = () => {
  return (
    <section className="bg-[#F5EDE0] ">
      <div className=" flex flex-col  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm   lg:text-left">
          <h1 className=" text-2xl lg:text-7xl font-serif font-semibold leading-none sm:text-5xl p-2">
            Every Paw <br /> Deserves a <br />
            <span className="text-[#02A25F]">Loving</span> Home
          </h1>
          <p className="mt-6 mb-8 text-md font-poppins sm:mb-12 flex items-center gap-2">
          Adopting a pet from a shelter provides a loving home to an animal in
            need. <br />
            Choose a pet that fits your lifestyle, prepare your home, and follow
            the adoption.<br />Enjoy the companionship and fulfillment of
            saving a life.
           
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#F69B03] text-white font-poppins dark:bg-violet-600 dark:text-gray-50"
            >
              Let's Go
            </a>
           
          </div>
        </div>
        <div className="grid grid-cols-2 items-center lg:w-1/2  gap-10">
          {/* <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                <img src={banner1} alt="" className="object-contain w-1/2 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" /> */}
          <div className="">
            <img src={pet3} className=" rounded-t-full " alt="" />
          </div>
          <div>
            <img src={pet2} className="rounded-t-full" alt="" />
          </div>
          <div>
            <img src={pet} className="rounded-xl" alt="" />
          </div>
          <div>
            <img src={pet5} className="rounded-xl" alt="" />
            {/* <video src={video} autoPlay loop muted></video> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
