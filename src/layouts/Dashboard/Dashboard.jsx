import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sideber/Sideber";

const Dashboard = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* side ber  */}
            <Sidebar/>
            {/* outlet dynamic  */}
           <div className="flex-1 md:ml-64">
           <Outlet/>
           </div>
        </div>
    );
};

export default Dashboard;