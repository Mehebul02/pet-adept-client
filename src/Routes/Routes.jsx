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
import MyCampaigns from "../pages/Dashboard/MyCampaigns/MyCampaigns";
import MyDonations from "../pages/Dashboard/MyDonations/MyDonations";
import AdoptionRequest from "../pages/AdoptionRequest/AdoptionRequest";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AllPets from "../pages/Dashboard/AllPets/AllPets";
import AllDonation from "../pages/Dashboard/AllDonation/AllDonation";
import AdminRoutes from "./AdminRoutes";
// import AdminRoutes from "./AdminRoutes";

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
        element: <PrivateRoute><PetDetails /></PrivateRoute>,
      },
      {
        path: "/donation",
        element: <DonationCampaigns />,
      },
      {
        path: "/donationDetails/:id",
        element: <PrivateRoute><DonationDetails /></PrivateRoute>,
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
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      // user route
      {
        path: "addPets",
        element: <AddPets />
      },
      {
        path:'my-added',
        element:<MyAddedPets/>
      },
      {
        path:'updatePets/:id',
        element:<UpdatePet/>
      },
      {
        path:'create-donation',
        element:<CreateDonationCampaign/>
      },
      {
        path:'myDonation-campaigns',
        element:<MyCampaigns/>
      },
      {
        path:'my-donations',
        element:<MyDonations/>
      },
      {
        path:'adoption-Request',
        element:<AdoptionRequest/>
      },
      // admin section 
      {
        path:'allUser',
        element:<AdminRoutes><AllUsers/></AdminRoutes>
      },{
        path:'all-pets',
        element:<AdminRoutes><AllPets/></AdminRoutes>
      },
      {
        path:'all-donations',
        element:<AdminRoutes><AllDonation/></AdminRoutes>
      }
    ],
  },
]);
export default router;
