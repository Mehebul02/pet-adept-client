import { Link } from "react-router-dom";
import NavItem from "./NavItem";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logo from '../../../assets/images/logo/logo.png'
const Navbars = () => {
  return (
    <Navbar className="bg-[#005A55]" fluid rounded>
      <Navbar.Brand href="">
        
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
         <img className="w-52"  src={logo} alt="" />
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm font-medium font-poppins">Mehebul Alif</span>
          </Dropdown.Header>
          <Dropdown.Item className=" font-poppins font-bold">Dashboard</Dropdown.Item>
          <Dropdown.Item className="font-medium font-poppins">Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavItem label="Home" address="/"></NavItem>
        <NavItem label=" Pet Listing" address="/petListing"></NavItem>
        <NavItem label=" Donation" address="/donation"></NavItem>
        <NavItem label="Campaigns" address="/campaigns"></NavItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
