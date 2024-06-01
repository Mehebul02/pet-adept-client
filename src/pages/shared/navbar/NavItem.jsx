
import { NavLink } from "react-router-dom";

const NavItem = ({label,address}) => {
 
    return (
        <div>
            <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform rounded-md   ${
          isActive ? 'bg-gray-300  text-black' : 'text-white'
        }`
      }
    >
   

      <span className='mx-4 text-md font-poppins  hover:text-[#F69B03]  font-medium'>{label}</span>
    </NavLink>
 
        </div>
    );
};


export default NavItem;