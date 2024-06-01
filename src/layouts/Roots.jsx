import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const Roots = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
    <div className="">
    <Footer />
    </div>
    </div>
  );
};

export default Roots;
