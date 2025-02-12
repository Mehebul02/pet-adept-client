import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import useAuth from "../../../hooks/useAuth";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import logo from '../../../assets/images/logo/logo.png'
import ToggleButton from "../../ToggleButton/ToggleButton";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import useAdmin from "../../../hooks/useAdmin";

const Navbars = () => {
  const {user,logOut,loading}= useAuth()
  const [isAdmin]=useAdmin()
  // const isAdmin = false
  if(loading){
    return <LoadingSpinner/>
  }
  return (
    <Navbar className="bg-[#005A55] " fluid rounded>
      <Navbar.Brand href="">
      
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         <Link to='/'>
         <img className="w-52"  src={logo} alt="" />
         </Link>
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 space-x-3">
        <ToggleButton />
        {
          user?<>
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
             img={user?.photoURL}
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-medium font-poppins">{user?.displayName}</span>
          </Dropdown.Header>
          {user && isAdmin && <Link to='/dashboard/allUser'>
          <Dropdown.Item className=" font-poppins font-bold">Dashboard</Dropdown.Item>
          </Link>}
          {user && !isAdmin && <Link to='/dashboard/addPets'>
          <Dropdown.Item className=" font-poppins font-bold">Dashboard</Dropdown.Item>
          </Link>}
          <Dropdown.Item onClick={logOut} className="font-medium font-poppins">Sign out</Dropdown.Item>
        </Dropdown>
          </>:<>
          <button></button>
          <Button  className="text-xl font-poppins font-semibold bg-[#F69B03] text-white" color=""><Link to='/login'>Sign in</Link></Button>
          </>
        }
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavItem label="Home" address="/"></NavItem>
        <NavItem label=" Pet Listing" address="/petListing"></NavItem>
        <NavItem label=" Donation Campaigns" address="/donation"></NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
