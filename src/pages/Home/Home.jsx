import { Helmet } from "react-helmet-async";
import Categories from "../../components/category/Categories";
import useAuth from "../../hooks/useAuth";
import Pets from "./Petscategory/Pets";
import PetsCategory from "./Petscategory/PetsCategory";
import Banners from "./banner/Banner";
import CallSection from "./Call_Section/CallSection";
import About from "./About/About";

const Home = () => {
 
 
    return (
        <div>
            <Helmet>
                <title>Paws Nest-Home</title>
            </Helmet>
          <Banners/>
         <PetsCategory/>
         {/* pet collection  */}
         <Pets/>
         <CallSection/>
         <About/>
        </div>
    );
};

export default Home;