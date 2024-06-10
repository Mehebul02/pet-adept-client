import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const About = () => {
    return (
        <div>
             <SectionTitle subHeading='Learn more about how we work and why we created this platform.' heading='About Us'/>
           <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Learn more about how we work and why we created this platform.
          </p>
        </div> */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">How Our Website Works</h3>
            <p className="text-gray-600 mb-6">
              Our website connects potential pet adopters with animal shelters
              and rescue groups. We provide a comprehensive database of
              available pets, allowing you to search and filter based on your
              preferences. Our goal is to simplify the adoption process and
              help you find your perfect pet match.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Why We Created This Platform</h3>
            <p className="text-gray-600 mb-6">
              This platform was created out of a deep love for animals and a
              desire to help reduce the number of pets in shelters. By making it
              easier to find and adopt pets, we aim to give more animals a
              chance at a happy, loving home. We believe every pet deserves a
              family, and every family deserves a pet.
            </p>
          </div>
        </div>
      </div>
    </section>  
        </div>
    );
};

export default About;