import { createBrowserRouter } from "react-router-dom";
import Roots from "../layouts/Roots";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import PetListing from "../pages/petListing/PetListing";
import PetDetails from "../pages/petListing/PetDetails";
import DonationCampaigns from "../pages/Donation_Campaigns/DonationCampaigns";
import DonationDetails from "../pages/Donation_Campaigns/DonationDetails";
import ErrorPage from "../pages/error_page/ErrorPage";
import Dashboard from "../layouts/Dashboard/Dashboard";
import AddPets from "../pages/Dashboard/Add_pets/AddPets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/petListing",
        element: <PetListing />,
      },
      {
        path: "/details/:id",
        element: <PetDetails />,
      },
      {
        path: "/donation",
        element: <DonationCampaigns />,
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      // user route 
      {
        path:'addPets',
        element:<AddPets/>

      },
    ]
  }
]);
export default router;
