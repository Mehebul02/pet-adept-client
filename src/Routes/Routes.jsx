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
import MyAddedPets from "../pages/Dashboard/MyAddedPets/MyAddedPets";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdatePet from "../pages/Dashboard/Add_pets/UpdatePet";
import CreateDonationCampaign from "../pages/Dashboard/CreateDonationCampaign/CreateDonationCampaign";

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
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      // user route
      {
        path: "addPets",
        element: <PrivateRoute><AddPets /></PrivateRoute>,
      },
      {
        path:'my-added',
        element:<PrivateRoute><MyAddedPets/></PrivateRoute>
      },
      {
        path:'updatePets/:id',
        element:<PrivateRoute><UpdatePet/></PrivateRoute>
      },
      {
        path:'create-donation',
        element:<PrivateRoute><CreateDonationCampaign/></PrivateRoute>
      }
    ],
  },
]);
export default router;
