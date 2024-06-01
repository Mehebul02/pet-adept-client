
const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto  my-4">
            <h1 className="text-3xl text-black font-semibold border-y-4 py-4 border-[#F69B03] rounded-lg uppercase">{heading}</h1>
           
        </div>
    );
};

export default SectionTitle;