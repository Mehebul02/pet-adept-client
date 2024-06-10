import { Link } from 'react-router-dom';
import img from '../../../assets/images/banner/pet3.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const CallSection = () => {
    return (
       <div className=''>
         <SectionTitle subHeading='Call to Action' heading='Call to Action'/>
         <section className="relative bg-gray-800 text-white py-20 px-4 rounded-lg my-14">
        <div className="absolute inset-0 opacity-50">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="Pets"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Adopt a Friend, Save a Life</h2>
          <p className="text-xl mb-8">
            Millions of pets are waiting for a loving home. Your adoption can make
            a world of difference. Give a pet a better life and find a loyal
            companion today.
          </p>
         <Link to='/petListing'>
         <button
            href="#adoption"
            className="inline-block bg-[#F69B03] hover:bg-[#005A55] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
          >
            Adopt Now
          </button>
         </Link>
        </div>
      </section>
       </div>
    );
};

export default CallSection;