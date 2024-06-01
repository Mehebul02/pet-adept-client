import Categories from "../../components/category/Categories";
import useAuth from "../../hooks/useAuth";
import Pets from "./Petscategory/Pets";
import PetsCategory from "./Petscategory/PetsCategory";
import Banners from "./banner/Banner";

const Home = () => {
 
 
    return (
        <div>
          <Banners/>
         <PetsCategory/>
         {/* pet collection  */}
         <Pets/>
        </div>
    );
};

export default Home;