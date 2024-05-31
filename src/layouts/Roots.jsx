import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Roots = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Roots;
